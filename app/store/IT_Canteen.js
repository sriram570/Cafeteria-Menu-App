Ext.define('Canteen.store.IT_Canteen', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Canteen.model.IT',
        proxy: {
            type: 'jsonp',
            url: 'php/IT.php',
                reader: {
                    type: 'json',
                    root: 'IT_Canteen'
                },
	        writer: {
            	type: 'json',
            	writeAllFields: true
        	}	    
        },
        autoLoad: true,
        root: {
            text:'IT_Canteen'
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
