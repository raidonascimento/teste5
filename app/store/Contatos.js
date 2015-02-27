Ext.define('touchdemo.store.Contatos',{
    extend: 'Ext.data.Store',

    requires:[
	'Ext.Loader',
	'Ext.data.proxy.Sql',
	'Ext.util.Filter'
    ],
    config: {	
	model: 'touchdemo.model.Contato',
	
	proxy:{
	    type: 'ajax',
	    //url: 'php/listaContatos.php',

	    api:{
		create:'http://192.168.111.112/php/criaContato.php', 
		read:'http://192.168.111.112/php/listaContatos.php', 
		update:'http://192.168.111.112/php/atualizaContato.php', 
		destroy:'http://192.168.111.112/php/deletaContato.php'
	    },

	    reader: {
		    type: 'json', //json ou xml
		    rootProperty: 'contatos'

	    },
	    writer:{
		type: 'json',
		rootProperty:'contatos',
		writeAllFields: true,
		encode:true,
		allowSingle:true

	    }
	},
	autoLoad: true,
	autoSync: true 
    }
});


	

		
	