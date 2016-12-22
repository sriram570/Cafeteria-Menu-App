Ext.define('Canteen.view.Home', {
 alias: "widget.Home",
 extend: 'Ext.Container',
 config: {
  fullscreen: true,
  layout:'fit',
  cls: 'default-bg',
  items: [
   {
    xtype: 'toolbar',
    docked: 'top',
                    layout: {
                        pack: 'right',
                        align: 'center'
                    },
    title: 'Canteen Menu',
    items: [
		{

	              xtype: 'button',
		      iconCls: 'add',
		      iconMask: true,
	              itemId: 'addItem',
	              height : '40px',
	              width : '40px',
		},
		{
			xtype:'spacer'		
		},
		{
	              xtype: 'button',
		      iconCls: 'trash',
		      iconMask: true,
	              itemId: 'deleteItem',
	              height : '40px',
	              width : '40px',
		}

	    ]
   },
   {
		xtype: 'carousel',
		layout: {
		type: 'card',
		animation: {
		type: 'slide'
			   }
		       },
		items: [
                    {
			xtype: 'MainList',
			cls:'main'
                    },
                    {
			xtype: 'IT',
			cls:'it'
                    },
                    {
			xtype: 'MBA',
			cls:'mba'
                    }
                ]
   }
   ]
 }
});
