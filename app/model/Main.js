Ext.define('Canteen.model.Main', {
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
            { type: 'presence', field: 'item_name' , message: 'Please enter name of the item.'},
            { type: 'presence', field: 'price' , message: 'Please enter cost of the item.'},
            { type: 'presence', field: 'canteen' }
        ]
    },

});
