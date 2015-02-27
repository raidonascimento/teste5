Ext.define('touchdemo.model.ContatoWeb',{

extend: 'Ext.data.Model',

    requires: [
	'Ext.data.Field'
    ],
//	identifier: {
//        type: 'uuid'
//    },
	config: {
	    
	  
	    fields: [ 
		
		{
		    name: 'codigo', type: 'int'
		},
		{
		    name: 'nome', type: 'string'
		}//,
//		{	
//		    name: 'sobrenome', type: 'string'
//		},
//		{    name: 'endereco', type: 'string'
//		},
//		{	
//		    name: 'email', type: 'string'
//		}
	    ]
	}
		
	
	
});
