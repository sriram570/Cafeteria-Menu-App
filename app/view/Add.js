Ext.define('Canteen.view.Add', {
    extend: 'Ext.form.Panel',
    xtype: 'add',
    alias: "widget.add",    
    config: {
        left: 0,
        top: 0,
	pinHeaders: true,
	autoRender : true, 

        modal: true,
        hideOnMaskTap: true,
 

        width: 280,
        height: 238.5,

items: [{
      xtype: 'fieldset',
        defaults: {
            labelWidth: '42%'
        },
      items: [
        	{
            xtype: 'textfield',
            name: 'item_name',
	    maxLength: 24,
            label: 'Name',
	    placeHolder: 'Food Name',
	    required: true,
	    vtype: 'alpha'

       	},
        	{
            xtype: 'numberfield',
            name: 'price',
            label: 'Price',
	    placeHolder: 'Enter Price',
	    required: true,
	    vtype: 'alphnum'
        	},
        	{
	    xtype: 'selectfield',
	    usePicker: 'true',
            name: 'canteen',
	    required: true,
            label: 'Canteen',
	                options: [{
	                    text: 'IT',
	                    value: 'IT'
	                }, {
	                    text: 'MBA',
	                    value: 'MBA'
	                }, {
	                    text: 'Main',
	                    value: 'Main'
	                }]	
        	}]
		},
		{
		xtype: 'fieldset',
            	items: [{
      		xtype: 'button',
      		align: 'right',
      		ui: 'action',
      		text: 'Add',
		itemId: 'save'
		}]
		}		
      ]

}

});
