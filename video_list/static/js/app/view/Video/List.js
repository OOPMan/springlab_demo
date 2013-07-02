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
        '<tpl for=".">',
        '<div class="box">',
            '<span id="{id}" class="item">',
                '<span class="bold">ID:</span> {id}</span><br/>',
                '<span class="bold">Title:</span> <tpl if="title">{title}<tpl else><image src="/static/js/ext-4.1.1a/resources/themes/images/default/grid/loading.gif"/></tpl><br/>',
                '<span class="bold">Description:</span> <tpl if="description">{description}<tpl else><image src="/static/js/ext-4.1.1a/resources/themes/images/default/grid/loading.gif"/></tpl><br/>',
                '<span class="bold">URL:</span> <a href="{url}">{url}</a><br/><br/>',
                '<input class="delete" type="button" value="Delete this Video"/>',
            '</span><br/>',
        '</div>',
        '</tpl>'),
    itemSelector: 'input.delete',
    emptyText: '',
    data: []
});
