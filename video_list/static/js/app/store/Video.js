/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:20 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('SpringLabDemo.VideoList.store.Video', {
    extend: 'Ext.data.Store',
    model: 'SpringLabDemo.VideoList.model.Video',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: '/api/video',
        reader: {
            type: 'rest',
            root: 'objects',
            successProperty: '' //TODO: Get TastyPie to set a successProperty!

        }
    }
});
