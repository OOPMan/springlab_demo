/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:29 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('SpringLabDemo.VideoList.view.Video.List', {
    extend: 'Ext.view.View',
    alias: 'widget.VideoList',
    store: 'Video',
    tpl: new Ext.XTemplate(
        '<tpl for=".">' +
            '<span id="{id}">' +
                '<span>Title:</span> {title}' +
                '<span></span>' +
            '</span><br/>' +
        '</tpl>'),
    itemSelector: 'span.newVideo',
    emptyText: '<span class="newVideo">Click to add new Video</span>',
    data: []
});
