Ext.define('Canteen.store.MBA_Canteen', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Canteen.model.MBA',
        proxy: {
            type: 'jsonp',
            url: 'php/MBA.php',
                reader: {
                    type: 'json',
                    root: 'MBA_Canteen'
                },
	        writer: {
            	type: 'json',
            	writeAllFields: true
        	}	    
        },
        autoLoad: true,
        root: {
            text:'MBA_Canteen'
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
