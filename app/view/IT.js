Ext.define('Canteen.view.IT', {
 extend: 'Ext.dataview.List',
 alias: "widget.IT",
 config: {
  loadingText: "Loading Items",
  variableHeights: true,
  store: 'IT_Canteen',
  grouped: true,
  cls: 'default-bg placelist',
  emptyText : '<div class="notes-list-empty-text">Currently there are no items in IT Canteen :(</div><pre>',
         plugins: [
              {
                  xclass: 'Canteen.ux.touch.PullRefreshFn',
                  pullRefreshText: 'Pull down to Refresh...',
                  refreshFn: function() { 
				Ext.getStore('IT_Canteen').load();
 		           }
              }
          ],
  onItemDisclosure: true,
  itemTpl: Ext.create('Ext.XTemplate',
 '</pre><div class="list-item-title">{item_name}</div><div class="list-item-narrative">Rs.{price}</div>{rating:this.getRating}<pre><span class="time">{date_time}</span>', {
      getRating: function (rating) {
        return Canteen.util.Util.getRating(rating);
      }
  })
}
});
