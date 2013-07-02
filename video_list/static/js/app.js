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
                            html: 'Title Panel'
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
                                    xtype: 'VideoList',
                                    flex: 1
                                },
                                {
                                    xtype: 'panel',
                                    html: 'Adder Panel',
                                    flex: 4
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});