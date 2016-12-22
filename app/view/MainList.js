Ext.define('Canteen.view.MainList', {
 extend: 'Ext.dataview.List',
 alias: "widget.MainList",
 config: {
  variableHeights: true,
  store: 'Main_Canteen',
  grouped: true,
  cls: 'default-bg placelist',
  emptyText : '<div class="notes-list-empty-text">Currently there are no items in Main Canteen :(</div><pre>',
         plugins: [
              {
                  xclass: 'Canteen.ux.touch.PullRefreshFn',
                  pullRefreshText: '<div class="refr2">Pull down to Refresh...</div><pre>',
		  loadingText: '<div class="refr2">Loading Items</div>',
		  releaseRefreshText: '<div class="refr2">Release to refresh...</div><pre>',

                  refreshFn: function() { 
				Ext.getStore('Main_Canteen').load();
 		           }
              }
          ],
  onItemDisclosure: false,
  itemTpl: Ext.create('Ext.XTemplate',
 '</pre><div class="list-item-title">{item_name}</div><div class="list-item-narrative">Rs.{price}</div>{rating:this.getRating}<pre><span class="time">{date_time}</span>', {
      getRating: function (rating) {
        return Canteen.util.Util.getRating(rating);
      }
  })
}
});
