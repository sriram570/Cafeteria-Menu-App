Ext.define('Canteen.util.AutocompleteField', {
	extend: 'Ext.field.Text',
	xtype: 'autocompletefield',
	config: {
		component: {
			xtype: 'input',
			type: 'text'
		}
	},

	currentSelectedValue: null,
	currentShownValue: '',
	isSelectedItem: false,

	setValue: function(newShownValue, newSelectedValue) {
		this.currentShownValue = newShownValue;
		this.getComponent().setValue(newShownValue);
		this.currentSelectedValue = newSelectedValue;
	},

	getValue: function(getShownValue) {
		return (getShownValue /*|| !isSelectedItem*/ ? this.getComponent().getValue() : this.currentSelectedValue);
	},

	initialize: function() {
		var that = this;

		if (!that.config.config.proxy || !that.config.config.proxy.url || !that.config.config.needleKey) throw new Error('Proxy and needleKey must be set with autocomplete config.');
		if (!that.config.config.labelKey) throw new Error('LabelKey must be defined with autocomplete config.');

		if (!that.config.config.resultsHeight) that.config.config.resultsHeight = 200;

		if (!Ext.ModelManager.getModel('AutocompleteResult')) {
			Ext.define('AutocompleteResult', {
				extend: 'Ext.data.Model',
				config: {
					fields: ['id',that.config.config.labelKey]
				}
			});
		}

		this.resultsStore = Ext.create('Ext.data.Store', {
			model: 'AutocompleteResult',
			config: {
				autoLoad: false
			}
		});

		this.resultsStore.setProxy(that.config.config.proxy);

		this.resultsList = Ext.create('Ext.List', {
			renderTo: this.getComponent().element.dom,
			store: that.resultsStore,
			margin: 2,
			itemTpl: '{name}'
		});

		var blurTimeout = false;
		var searchTimeout = false;

		var doSearchWithTimeout = function() {
			if (blurTimeout) clearTimeout(blurTimeout);
			if (searchTimeout) clearTimeout(searchTimeout);

			if (that.isSelectedItem || that.getComponent().getValue() == '') return;

			searchTimeout = setTimeout(function() {
				var uriString = that.config.config.proxy.url + (that.config.config.proxy.url.indexOf('?') ? '&' : '?') + encodeURIComponent(that.config.config.needleKey) + '=' + encodeURIComponent(that.getValue(true));
				that.resultsStore.getProxy().setUrl(uriString);
				that.isSelectedItem = false;
				that.resultsStore.load();
				that.resultsList.setHeight(that.config.config.resultsHeight);
			}, 300);
		};

		this.resultsList.on('itemtouchend', function() {
			if (blurTimeout) clearTimeout(blurTimeout);
		});

		this.resultsList.onScroll = function() {};

		this.resultsList.on('itemtap', function(self, index, target, record) {
			that.setValue(record.get('name'), record.get('id'));
			that.isSelectedItem = true;

			blurTimeout = setTimeout(function() {
				that.resultsList.setHeight(0);
			}, 500);
		});

		this.getComponent().on('focus', doSearchWithTimeout);
		this.getComponent().on('keyup', function() {
			that.isSelectedItem = false;
			doSearchWithTimeout();
		});

		this.getComponent().on('blur', function(event) {
			if (searchTimeout) clearTimeout(searchTimeout);

			blurTimeout = setTimeout(function() {
				that.resultsList.setHeight(0);
			}, 500);
		});

	}

});
