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
        { name: 'id', type: 'integer' },
        { name: 'url', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'resource_uri', type: 'string' }
    ]
});
