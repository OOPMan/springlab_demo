/**
 * Created with IntelliJ IDEA.
 * User: adamj
 * Date: 7/2/13
 * Time: 1:29 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('VideoList.view.Video.List', {
    extend: 'Ext.view.View',
    alias: 'widget.VideoList',
    store: 'Video',
    tpl: new Ext.XTemplate(
        '<div>',
            '<tpl for=".">',
            '<span id="{id}" class="item">',
                '<span>Title:</span> {title}<br/>',
                '<span>Description:</span> {description}<br/>',
                '<span>URL:</span> <a href="{url}">{url}</a><br/>',
            '</span><br/>',
            '</tpl>',
        '</div>'),
    itemSelector: 'span.item',
    emptyText: '',
    data: []
});
