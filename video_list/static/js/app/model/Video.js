/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:14 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('VideoList.model.Video', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'integer', persist: false },
        { name: 'url', type: 'string' },
        { name: 'title', type: 'string', persist: false },
        { name: 'description', type: 'string', persist: false },
        { name: 'resource_uri', type: 'string', persist: false }
    ],

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
