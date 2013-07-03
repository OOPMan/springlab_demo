Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'VideoList',

    appFolder: 'static/js/app',
    controllers: ['Videos'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    layout: 'border',
                    items: [
                        {
                            xtype: 'panel',
                            region: 'north',
                            layout: {
                                type: 'vbox',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    html: '<span class="title">SpringLab Video List Demo</span> '
                                }]
                        },
                        {
                            xtype: 'panel',
                            region: 'center',
                            layout: {
                                type: 'vbox',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: 'fit',
                                    overflowY: 'auto',
                                    flex: 4,
                                    items: [
                                    {
                                        xtype: 'VideoList'
                                    }]
                                },
                                {
                                    xtype: 'panel',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    height: 150,
                                    width: 500,
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'previous',
                                            text: 'View Previous Page',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'adder',
                                            text: 'Click here to add a new Video',
                                            flex: 2
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'next',
                                            text: 'View Next Page',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});