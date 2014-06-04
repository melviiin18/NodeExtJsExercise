
Ext.define('MyPath.Panelko',{
	extend: 'Ext.panel.Panel',
	width:300,
	alias: 'widget.clskt',	
	title: 'Info',
	PostUrl:'',
	
		
	initComponent: function() {			
			this.items = [{
			xtype: 'textfield',
            itemId: 'fname',
            fieldLabel: 'Firstname',  
            },{
			xtype: 'textfield',
            itemId: 'lname',			
            fieldLabel: 'Lastname', 
			},{
			xtype:'button',
			itemId:'button1',
			text:'Submit',
			//
			
			handler: function(){
			
				/*
				var First =  Ext.ComponentQuery.query('#fname')[0].getValue();   	
				var Last = Ext.ComponentQuery.query('#lname')[0].getValue();        
				//alert(First + ' ' +  Last);
				*/
				var me = this.up('clskt');
				var First = me.getComponent('fname').getValue();
				var Last = me.getComponent('lname').getValue();
				
				Ext.Ajax.request({
				method: 'POST',
				url:me.PostUrl, //'/user/add',
				params: {Fname: First,Lname: Last},
			
				success: function(response, opts) {
					Ext.Msg.alert('Welcome:',response.responseText);
					console.log(response.responseText);
					},
				failure: function(response, opts) {
					console.log('Error: ' + response.status);
					},
				//add callback function
				callback: function(param1){				   
				   //var param1 = 'posted'
				   me.fireEvent('posted',param1);			   
				}				
				
				
				//
				})
			}
			//
					
			}];
        this.callParent();
		
	}
});