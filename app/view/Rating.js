Ext.define('Canteen.view.Rating', {
    extend: 'Ext.form.Panel',
    xtype: 'item_rating',
    alias: "widget.item_rating", 
    config: {
        left: 0,
        top: 0,
 
        modal: true,
        hideOnMaskTap: true,

        width: 175,
        height: 140,

	layout: {
  		pack: 'center',
  		type: 'hbox'
	},
	
    items: [{
            xtype:'toolbar',
            docked:'top',
            title:'Rating'
       },{
		xtype: 'rating',						
		itemsCount : 5,
		itemCls : 'x-rating-star',
		itemHoverCls : 'x-rating-star-hover',
		name : 'usefull'
        },
	{ 
		xtype: 'textfield',
           	hidden: true, 
		hideLabel: true, 
            	name  : 'item_name'
	},
	{
		xtype: 'textfield',
		hidden: true, 
		hideLabel: true,  
            	name  : 'canteen'
	},
	{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                { xtype: 'spacer' },
                {
                    text: 'Submit',
	            cls: 'but',
	            id:'alertCancelBtn',
		    disabled: false,
                    handler: function() {
                        var form = Ext.ComponentQuery.query('formpanel')[0],
                        values = form.getValues();
			if(typeof values.usefull !== "undefined")
			{		
				values.usefull = Number(values.usefull);
				values.usefull ++;
                        	Ext.Msg.alert('',"Thank you for rating!!");
				form.hide();
				form.submit({
   				url: 'php/insert_rating.php',
    				method: 'POST',
    				success: function() {
        				alert('form submitted successfully!');
    					}
				});
				Ext.getStore('Main_Canteen').load();	
				Ext.getStore('Canteen').load();
				Ext.getStore('IT_Canteen').load();
				Ext.getStore('MBA_Canteen').load();
				Ext.getCmp('alertCancelBtn').setDisabled(true);
                        setTimeout(function () {
                            Ext.getCmp('alertCancelBtn').setDisabled(false);
                        },3000 /* ms */); 			
			}
			else	
			{
				Ext.Msg.alert('',"Your rating will <br>be updated soon!!");
			}
                    }
                },
                { xtype: 'spacer' }
            ]
        }
    ]
}
});

