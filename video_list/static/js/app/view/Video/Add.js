Ext.define('VideoList.view.Video.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.VideoAdder',

    title: 'Add Video',
    layout: 'fit',
    autoShow: true,
    modal: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'url',
                        fieldLabel: 'YouTube Video URL'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Add Video',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }

});