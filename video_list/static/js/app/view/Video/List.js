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
                '<span>Title:</span> <tpl if="title">{title}<tpl else><image src="/static/js/ext-4.1.1a/resources/themes/images/default/grid/loading.gif"/></tpl><br/>',
                '<span>Description:</span> <tpl if="description">{description}<tpl else><image src="/static/js/ext-4.1.1a/resources/themes/images/default/grid/loading.gif"/></tpl><br/>',
                '<span>URL:</span> <a href="{url}">{url}</a><br/>',
            '</span><br/>',
            '</tpl>',
        '</div>'),
    itemSelector: 'span.item',
    emptyText: '',
    data: []
});
