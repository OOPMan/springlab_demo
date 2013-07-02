/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:20 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('VideoList.store.Video', {
    extend: 'Ext.data.Store',
    model: 'VideoList.model.Video',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: '/api/video/',
        extraParams: {
            format: 'json'
        },
        reader: {
            type: 'json',
            root: 'objects',
            idProperty: 'id',
            successProperty: 'success'
        }
    }
});
