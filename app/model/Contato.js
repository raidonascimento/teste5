Ext.define('touchdemo.model.Contato',{

extend: 'Ext.data.Model',
	

    requires: [
	'Ext.data.Field'
    ],
	
	
	config: {
	    
	  //  idProperty:'id',
	    fields: [ 
		
		{
		    name: 'id', type: 'int'
		},
	{
		    name: 'nome', type: 'string'
		},
		{	
		    name: 'sobrenome', type: 'string'
		},
		{    name: 'endereco', type: 'string'
		},
		{	
		    name: 'email', type: 'string'
		}
	    ]
	}
		
	
	
});

