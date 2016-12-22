Ext.define('Canteen.store.Canteen', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Canteen.model.Canteen',
        proxy: {
            type: 'jsonp',
            url: 'php/all.php',
                reader: {
                    type: 'json',
                    root: 'Canteen'
                },
	        writer: {
            	type: 'json',
            	writeAllFields: true
        	}	    
        },
        autoLoad: true,
        root: {
            text:'Canteen'
        },
        sorters: [{ property: 'canteen', direction: 'DESC'}],
       grouper: {
            sortProperty: 'canteen',
            direction: 'DESC',
            groupFn: function (record) {
		return record.get('canteen');
            }
        }
    }
});
