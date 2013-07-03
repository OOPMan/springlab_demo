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
    views: ['Video.List', 'Video.Add'],

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
                    var adder = Ext.widget('VideoAdder');
                }
            },
             'button#previous': {
                click: function() {
                    Ext.getStore('Video').previousPage();
                }
            },
            'button#next': {
                click: function() {
                    Ext.getStore('Video').nextPage();
                }
            },
            'VideoAdder button[action=save]': {
                click: function(button) {
                    var videoStore = Ext.getStore('Video'),
                        win = button.up('window'),
                        form = win.down('form'),
                        values = form.getValues();
                    win.close();
                    videoStore.add(values);
                    videoStore.sync();
                    videoStore.load();
                }
            }
        });
    }
});
