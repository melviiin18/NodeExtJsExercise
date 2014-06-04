

Ext.Loader.setConfig({
        enabled: true,
        paths: {
            MyPath:'/App'				
			} 
		});		
		
Ext.require('MyPath.Panelko');


Ext.application({
	name:'Appkoto',		
	launch: function() {		
	
		
		
		//Ext.require('MyPath.Panelko');	

		Ext.create('Ext.container.Viewport',{
			id: 'viewport',
		    layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
		    },
			items:[
				{
				 xtype:'clskt',
				 title:'Info',
				 PostUrl:'/user/add'
				},
				{
				 xtype:'clskt',
				 title:'Info',
				 PostUrl:'/user/add',
				 listeners:{
						posted: function(param1){
						Ext.Msg.alert('posted','Pasok na');
							}
						}		
				}
				
				/* Ext.create('MyPath.Panelko',{
					renderTo:Ext.getBody(),	
					PostUrl:'/user/add'				
				}), */
		
				/* Ext.create('MyPath.Panelko',{
					renderTo:Ext.getBody(),	
					PostUrl:'/user/add',			
					listeners:{
						posted: function(param1){
						Ext.Msg.alert('posted','Pasok na');
						}
					}				
				}) */
			]	
			
		});
	}
	
});




/*Working


Ext.application({
	name:'Appkoto',		
	launch: function() {		
		Ext.Loader.setConfig({
        enabled: true,
        paths: {
            MyPath:'/App'				
         } 
		});
		
		Ext.require('MyPath.Panelko');		
		Ext.create('MyPath.Panelko',{
			renderTo:Ext.getBody(),	
			PostUrl:'/user/add'
					
		});
		
		Ext.create('MyPath.Panelko',{
			renderTo:Ext.getBody(),	
			PostUrl:'/user/add',					
			
			listeners:{
					posted: function(param1){
					Ext.Msg.alert('posted','Pasok na');
					}
				}
			
		});
	}
	
});


*/


