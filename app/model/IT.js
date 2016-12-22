Ext.define('Canteen.model.IT', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
	{   name: 'item_name', type: 'string'    },
	{   name: 'price', type: 'int'    },
	{   name: 'canteen', type: 'string'    } ,
	{   name: 'rating' , type: 'float'},
	{   name: 'count', type: 'int'	},  
	{   name: 'date_time', type: 'string' }	
      ],

	 validations: [
            { type: 'presence', field: 'item_name' , message: 'Name'},
            { type: 'presence', field: 'price' , message: 'Price'},
            { type: 'presence', field: 'canteen' }
        ]
    },

});
