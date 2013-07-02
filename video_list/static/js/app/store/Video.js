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
    youtubeIdPattern: /v=[a-zA-Z0-9_-]{11}/i,

    listeners: {
        load: function(self, records, successful, eOpts) {
            if(!successful || records.length == 0) return;
            var idMap = {};
            Ext.Array.forEach(records, function(record, index) {
                var idPart = self.youtubeIdPattern.exec(record.data.url);
                if(idPart !== null && idPart.length == 1) idMap[idPart[0].substring(2)] = index;
            });
            if(idMap) {
                gapi.client.load('youtube', 'v3', function() {
                    var request = gapi.client.youtube.videos.list({
                        part: 'snippet',
                        id: Ext.Object.getKeys(idMap).join()
                    });
                    request.execute(function(response) {
                        Ext.Array.forEach(response.items, function(item) {
                            var recordIndex = idMap[item.id];
                            if(recordIndex !== undefined) {
                                records[recordIndex].data.title = item.snippet.title;
                                records[recordIndex].data.description = item.snippet.description;
                            }
                        });
                        Ext.ComponentQuery.query('VideoList').forEach(function(videoList) { videoList.refresh(); })
                    });
                });
            }
        }
    },

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
