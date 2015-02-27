Ext.define('touchdemo.view.ContatosList', {
    extend: 'Ext.dataview.List',
    requires: [
	'Ext.Toolbar',
	'Ext.field.Text'
    ],
    alias: 'widget.contatoslist',

    config: {

	store: 'Contatos',
	itemTpl: '{id}- {nome} - {sobrenome}',
	onItemDisclosure: true,
	fullscreen : true,
	items: [
	    {
		xtype: 'toolbar',
		docked: 'top',
		//ui: 'light',
		title: 'lista de contatos',
	//	heigth: 22,
		items: [
		    {
			xtype: 'spacer'
		    },
		    {
			xtype: 'button',
			action: 'novoContato',
			text: 'Novo contato'
		    },
		    		    {
			xtype: 'button',
			action: 'teste',
			text: 'teste'
		    },
		    {
			xtype: 'button',
			action: 'carregarContato',
			ui:'action',
			text:'carregar'
		    }

		]
	    }
	]

    }
});