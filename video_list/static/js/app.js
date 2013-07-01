Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Video List',

    appFolder: '/static/js/app',

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
                            html: 'Video List will go here'
                        }
                    ]
                }
            ]
        });
    }
});