Ext.Loader.setConfig({
	enabled: true
    
});
Ext.application({
    
    name : 'touchdemo',

    requires: [
	'Ext.field.Search'
    ],
    controllers: [
	'Main'
    ],
    views: [
	'ContatosList',
	'ContatosForm',
	'servicoList'
    ],
    
    models:[
	'Contato',
	'ContatoWeb'
    ],

    stores:[
	'Contatos',
	'Contatos2'
    ],
    viewport:{
	layout:{
	    type:'card',
	    animation:  {
		type:'slide'
	    }
	}
    },
    
    launch: function(){

	
    }
    
    
});