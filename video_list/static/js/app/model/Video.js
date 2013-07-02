/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:14 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('SpringLabDemo.VideoList.model.Video', {
    extend: 'Ext.data.model',
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'url', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' }
    ]
});