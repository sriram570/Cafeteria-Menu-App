Ext.define('Canteen.store.Main_Canteen', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Canteen.model.Main',
        proxy: {
            type: 'jsonp',
            url: 'php/connect.php',
                reader: {
                    type: 'json',
                    root: 'Main_Canteen'
                },
	        writer: {
            	type: 'json',
            	writeAllFields: true
        	}	    
        },
        autoLoad: true,
        root: {
            text:'Main_Canteen'
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
