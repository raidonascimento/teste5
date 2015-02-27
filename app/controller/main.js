Ext.define('touchdemo.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
	'Ext.MessageBox'

    ],
    config: {
	routes: {
	    '': 'showContatosList',
	    'index.html': 'showContatosList'
	},
	refs: {
	    contatosList: {
		xtype: 'contatoslist',
		selector: 'contatoslist',
		autoCreate: true
	    },
	    contatosForm: {
		xtype: 'contatosform',
		selector: 'contatosform',
		autoCreate: true

	    },
	    servicoList: {
		xtype: 'servicoList',
		selector: 'servicoList',
		autoCreate: true
	    },
	    salvarContatoBtn: 'button[action = salvarContato]',
	    deletarContatoBtn: 'button[action = deletarContato]',
	    carregarServerToLocal: 'button[action = carregarContato]',
	    toolbarFormContato: '#toolbarFormContato'
	},
	control: {
	    'button[action = mudarPainel1]': {
		tap: 'showContatosList'
	    },
	    'button[action = novoContato]': {
		tap: 'showContatosForm'
	    },
	    'button[action = teste]': {
		tap: 'showServicoList'
	    }
	    ,
	    'button[action = voltarContatosList]': {
		tap: 'showContatosList'
	    },
	    contatosList: {
		itemtap: 'showContatosForm'
	    },
	    servicoList: {
		itemtap: 'showServicoList'
	    },
	    salvarContatoBtn: {
		tap: 'salvarContato'
	    },
	    deletarContatoBtn: {
		tap: 'deletarContato'
	    },
	    carregarServerToLocal: {
		tap: 'carregarContato'
	    }
	}


    },
    showContatosList: function () {
	Ext.Viewport.setActiveItem(this.getContatosList());
    },
    showServicoList: function () {
	Ext.Viewport.setActiveItem(this.getServicoList());
    },
    showContatosForm: function (view, index, target, record, evt, opts) {


	if (record && record.data) {
	    this.getContatosForm().setRecord(record);
	    //this.getToolbarFormContato().setTitle(record.get('nome'));
	    this.getDeletarContatoBtn().show();
	} else {
	    this.getContatosForm().reset();
	    this.getContatosForm().setRecord(null);
	    //this.getToolbarFormContato().setTitle('criando novo contato');	   
	    this.getDeletarContatoBtn().hide();

	}

	Ext.Viewport.setActiveItem(this.getContatosForm());   },
    carregarContato: function () {
	var store = Ext.getStore('Contatos2');
	console.log(store);
	this.apagarClientesSincronizar();
	this.sincronizarClientes();
    },
    apagarClientesSincronizar: function () {
	//console.log('apagar contatos');
	var db = openDatabase("raiTesteSQL", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM contatos');
	}
	console.log('apagar contatos');
    },
    sincronizarClientes: function () {
	console.log('sincronizar contatos');

	var j = 0;

	var store2 = Ext.create('touchdemo.store.Contatos2');
	var store = Ext.getStore('Contatos');


	store.each(function () {
	    var record = store.data.get(j);
	    var codigo = record.data.id;
	    var nome = record.data.nome;



	    var model = Ext.create('touchdemo.model.ContatoWeb', {
		codigo: codigo, nome: nome
	    });
	    console.log(codigo);
	    store2.add(model);
	    j++;

	});
	store2.sync();   },
    salvarContato: function () {

	var form = this.getContatosForm(),
		contato = Ext.create('touchdemo.model.Contato', form.getValues()),
		store = Ext.getStore('Contatos');
	store.add(contato);

	this.showContatosList();
    },
    deletarContato: function () {

	Ext.Msg.confirm(
		'deletar contato',
		'tem certeza?',
		function (btn) {
		    if (btn === 'yes') {
			Ext.getStore('Contatos').remove(this.getContatosForm().getRecord());
			this.showContatosList();
		    }
		}, this);
    }
});