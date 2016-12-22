Ext.define("Canteen.controller.Add", {
    extend: "Ext.app.Controller",
    config: {
  	stores : ['Canteen'],
  	models : ['Main'],
        refs: {
	    myListItem: 'MainList'
        },
        control: {
	   'MainList': {
    		itemtap: 'onSelectItem'
   		},
	   'IT': {
    		itemtap: 'onSelectItem'
   		},
	   'MBA': {
    		itemtap: 'onSelectItem'
   		},

	   'container button[itemId=save]' : {
    		tap : 'onSaveItem'
  		 },
	   'container button[itemId=delete]' : {
    		tap : 'onDelete'
  		 },
	   'container button[itemId=deleteItem]' : {
    		tap : 'onDeleteItem'
  		 },
	   'container button[itemId=addItem]' : {
            tap : 'onAddItem'
                },
        }
    },

  onAddItem: function(button) {
  var employeeForm = Ext.Viewport.down('add');
  //create the employee edit window if it doesn't exists
  if(!employeeForm){
   employeeForm = Ext.widget('add');
  } 
  employeeForm.reset();
  employeeForm.showBy(button);
 },

  onDeleteItem: function(button) {
  var employeeForm = Ext.Viewport.down('delete');
  //create the item edit window if it doesn't exists
  if(!employeeForm){
   employeeForm = Ext.widget('delete');
  } 
  employeeForm.reset();
  employeeForm.showBy(button);
 },

 onSaveItem: function(button) {
  var model = Ext.create('Canteen.model.IT'), errors, errorMessage = 'Enter ';
  var form = button.up('panel');
  var cnt = 1;
  form.updateRecord(model);
  errors = model.validate();
                        if (!errors.isValid()) {
	                            errors.each(function (err) {
						cnt ++;
						if (cnt == 3){
			                                errorMessage += ' & ' + err.getMessage();
							}
						else if (cnt == 2){
			                                errorMessage += err.getMessage() ;
							}
		                            }); // each()
	                            Ext.Msg.alert('', errorMessage);
		                    form.hide();
                        } 
			else 
			{
				var record = form.getRecord();
				//get the form values
				var values = form.getValues();
				//if a new item
				var newRecord = null;
				Ext.getStore('Canteen').load();
				Ext.getStore('Canteen').each(function(rec) {
				    if ( (rec.get('item_name')).toLowerCase() == (values['item_name']).toLowerCase() && rec.get('canteen') == values['canteen'] ) {
        newRecord = rec;
    }
				})
				if(!newRecord)
				{
   					var newRecord = new Canteen.model.Main(values);
   					Ext.getStore('Canteen').add(newRecord);
					Ext.Msg.alert('','Menu will be <br>updated soon!!');
  				}
				  //existing item
 				else
				{
					Ext.Msg.alert('','Menu will be <br>updated soon!!');
  				}
  				form.hide();

				  form.submit({
				    url: 'php/main_insert.php',
				    method: 'POST',
				    success: function() {
					alert('form submitted successfully!');
				    }
				});
				Ext.getStore('Canteen').load();
				Ext.getStore('Main_Canteen').load();
				Ext.getStore('IT_Canteen').load();
				Ext.getStore('MBA_Canteen').load();
			}
 },

 onDelete: function(button) {
  var form = button.up('panel');
  //get the record 
  var record = form.getRecord();
  //get the form values
  var values = form.getValues();
  Ext.getStore('Canteen').load();
  var newRecord = null;

  Ext.getStore('Canteen').each(function(rec) {
    if ( (rec.get('item_name')).toLowerCase() == (values['item_name']).toLowerCase() && rec.get('canteen') == values['canteen'] ) {
        newRecord = rec;
    }
  })

  if(!newRecord)
  {
  	Ext.Msg.alert('',values['item_name'] + ' not found in<br>'+ values['canteen'] + ' canteen!!<br>');
  }
  else
  {
	Ext.Msg.confirm('',' Wanna delete ' + values['item_name'] + ' from<br> ' +  values['canteen'] + ' canteen?', function(btn){
		if (btn == 'yes')
		{	
			Ext.getStore('Canteen').remove(newRecord);
			form.submit({
			url: 'php/delete.php',
			method: 'POST',
			success: function()
			 {
        			alert('form submitted successfully!');
	                 }
			});
			if (values['canteen']=='Main')
			{
				Ext.getStore('Main_Canteen').remove(newRecord);
				Ext.getStore('Main_Canteen').load();
			}
			else if (values['canteen']=='IT')
			{
				Ext.getStore('IT_Canteen').remove(newRecord);
				Ext.getStore('IT_Canteen').load();
			}
			else if (values['canteen']=='MBA')
			{
				Ext.getStore('MBA_Canteen').remove(newRecord);
				Ext.getStore('MBA_Canteen').load();
			}
		}
	});
  }
  form.hide();
 },

 onSelectItem: function(view, index, target, record, event) {
  var ratingForm = Ext.Viewport.down('item_rating');
  if(!ratingForm){
   ratingForm = Ext.widget('item_rating');
  } 
  ratingForm.reset();
  ratingForm.setRecord(record);
  ratingForm.showBy(target);
  setTimeout(function(){view.deselect(index);},2000);
 },

    launch: function () {
        this.callParent();
    },
    init: function () {
        this.callParent();
    }
});

