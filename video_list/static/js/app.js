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
                                    xtype: 'VideoList',
                                    flex: 4
                                },
                                {
                                    xtype: 'button',
                                    id: 'adder',
                                    text: 'Click here to add a new Video',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});