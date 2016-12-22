Ext.define('Canteen.view.Delete', {
    extend: 'Ext.form.Panel',
    xtype: 'delete',
    alias: "widget.delete",    
    config: {
        left: 0,
        top: 0,
	pinHeaders: true,
	autoRender : true,
 
        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,
 
        // Set the width and height of the panel
        width: 280,
        height: 191,

items: [{
      xtype: 'fieldset',
        defaults: {
            labelWidth: '42%'
        },
      items: [
        	{
            xtype: 'textfield',
            name: 'item_name',
            label: 'Name',
	    placeHolder: 'Food Name',
	    required: true
        	},
        	{
	    xtype: 'selectfield',
	    usePicker: 'true',
            placeHolder: 'Canteen',
	    required: true,
            name: 'canteen',
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
      			text: 'Delete',
			itemId: 'delete'
		}]
		}		
      
]

}

});
