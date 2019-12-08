## Edit TD on click


ponits: 5

#### Make table cells editable on click.

-   On click – the cell should became “editable” (textarea appears inside), we can change HTML. There should be no resize, all geometry should remain the same.
-   Buttons OK and CANCEL appear below the cell to finish/cancel the editing.
-   Only one cell may be editable at a moment. While a `<td>` is in “edit mode”, clicks on other cells are ignored.
-   The table may have many cells. Use event delegation.

#### The demo


 <div class="code-result">  <div class="code-result__toolbar toolbar"></div>  <iframe class="code-result__iframe" data-trusted="1" width="550" height="370" style="height:2000px" src="https://en.js.cx/task/edit-td-click/solution/"></iframe>  </div>