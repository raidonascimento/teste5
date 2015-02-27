Ext.define('touchdemo.store.Contatos2',{
    extend: 'Ext.data.Store',
    requires:[
	//'Ext.Loader',
	'Ext.data.proxy.Sql',
	'Ext.util.Filter'
    ],
    config: {	
	autoLoad: true,
	model: 'touchdemo.model.ContatoWeb',
	storeId: 'Contatos2',

	

	proxy:{
	    type: 'sql',
	    database: 'raiTesteSQL',
	    table: 'contatos'  
	}	
    }

});

