/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:25 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('VideoList.controller.Videos', {
    extend: 'Ext.app.Controller',
    stores: ['Video'],
    models: ['Video'],
    views: ['Video.List'],

    init: function() {
        this.control({
            'VideoList': {
                itemclick: function(self, record) {
                    record.store.remove(record);
                    Ext.getStore('Video').sync();
                }
            },
            'button#adder': {
                click: function() {
                    debugger;
                }
            }
        });
    }
});
