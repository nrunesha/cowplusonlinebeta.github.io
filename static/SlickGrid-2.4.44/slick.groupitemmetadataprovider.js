(function ($) {
  /***
   * Provides item metadata for group (Slick.Group) and totals (Slick.Totals) rows produced by the DataView.
   * This metadata overrides the default behavior and formatting of those rows so that they appear and function
   * correctly when processed by the grid.
   *
   * This class also acts as a grid plugin providing event handlers to expand & collapse groups.
   * If "grid.registerPlugin(...)" is not called, expand & collapse will not work.
   *
   * @class GroupItemMetadataProvider
   * @module Data
   * @namespace Slick.Data
   * @constructor
   * @param inputOptions
   */
  
  function GroupItemMetadataProvider(inputOptions) {
    var _grid;
    var _defaults = {
      checkboxSelect: false,
      checkboxSelectCssClass: "slick-group-select-checkbox",
      checkboxSelectPlugin: null,
      groupCssClass: "slick-group",
      groupTitleCssClass: "slick-group-title",
      totalsCssClass: "slick-group-totals",
      groupFocusable: true,
      totalsFocusable: false,
      toggleCssClass: "slick-group-toggle",
      toggleExpandedCssClass: "expanded",
      toggleCollapsedCssClass: "collapsed",
      enableExpandCollapse: true,
      groupFormatter: defaultGroupCellFormatter,
      totalsFormatter: defaultTotalsCellFormatter,
      includeHeaderTotals: false
    };

    var options = $.extend(true, {}, _defaults, inputOptions);

    function getOptions(){
      return options;
    }

    function setOptions(inputOptions) {
      $.extend(true, options, inputOptions);
    }

    function defaultGroupCellFormatter(row, cell, value, columnDef, item, grid) {
      if (!options.enableExpandCollapse) {
        return item.title;
      }

      var indentation = item.level * 15 + "px";

      return (options.checkboxSelect ? '<span class="' + options.checkboxSelectCssClass +
          ' ' + (item.selectChecked ? 'checked' : 'unchecked') + '"></span>' : '') +
          "<span class='" + options.toggleCssClass + " " +
          (item.collapsed ? options.toggleCollapsedCssClass : options.toggleExpandedCssClass) +
          "' style='margin-left:" + indentation +"'>" +
          "</span>" +
          "<span class='" + options.groupTitleCssClass + "' level='" + item.level + "'>" +
            item.title +
          "</span>";
    }

    function defaultTotalsCellFormatter(row, cell, value, columnDef, item, grid) {
      return (columnDef.groupTotalsFormatter && columnDef.groupTotalsFormatter(item, columnDef, grid)) || "";
    }


    function init(grid) {
      _grid = grid;
      _grid.onClick.subscribe(handleGridClick);
      _grid.onClick.subscribe(onExpandClick);
      _grid.onKeyDown.subscribe(handleGridKeyDown);

    }

    function destroy() {
      if (_grid) {
        _grid.onClick.unsubscribe(handleGridClick);
        //_grid.onKeyDown.unsubscribe(handleGridKeyDown);
      }
    }
    
    var expanded_groups = [];
	  var collapsed_groups = [];
    function onExpandClick(e, args) {
			var $target = $(e.target);
			var item = this.getDataItem(args.row);
			if (item && item instanceof Slick.Group && $target.hasClass(options.toggleCssClass)) {
        var range = _grid.getRenderedRange();
        this.getData().setRefreshHints({
          ignoreDiffsBefore: range.top,
          ignoreDiffsAfter: range.bottom + 1
        });

        if (item.collapsed) {
          this.getData().expandGroup(item.groupingKey);
        } else {
          this.getData().collapseGroup(item.groupingKey);
        }

        e.stopImmediatePropagation();
        e.preventDefault();
      }
			if (item && item instanceof Slick.Group && $target.hasClass(options.toggleCollapsedCssClass)) {
        console.log(item.groupingKey);
        if((item.groupingKey.includes("Country Year"))||item.groupingKey.includes("Dyad Year")){
          expanded_groups.push(item.groupingKey);
          index = collapsed_groups.indexOf(item.groupingKey);
          if (index > -1) { // only splice array when item is found
            collapsed_groups.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        if((item.groupingKey.includes("Country Year")) && ((expanded_groups.includes("Preloaded Datasets:|:Dyad Year")) || (expanded_groups.includes("Uploaded Datasets:|:Dyad Year")))){
          this.getData().collapseGroup("Preloaded Datasets:|:Dyad Year");
          this.getData().collapseGroup("Uploaded Datasets:|:Dyad Year");
          this.setSelectedRows([]);
          index = expanded_groups.indexOf("Preloaded Datasets:|:Dyad Year");
          if (index > -1) { // only splice array when item is found
            expanded_groups.splice(index, 1); // 2nd parameter means remove one item only
          }
          index = expanded_groups.indexOf("Uploaded Datasets:|:Dyad Year");
          if (index > -1) { // only splice array when item is found
            expanded_groups.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        if((item.groupingKey.includes("Dyad Year")) && ((expanded_groups.includes("Preloaded Datasets:|:Country Year")) || (expanded_groups.includes("Uploaded Datasets:|:Country Year")))){
          this.getData().collapseGroup("Preloaded Datasets:|:Country Year");
          this.getData().collapseGroup("Uploaded Datasets:|:Country Year");
          this.setSelectedRows([]);
          index = expanded_groups.indexOf("Preloaded Datasets:|:Country Year");
          if (index > -1) { // only splice array when item is found
            expanded_groups.splice(index, 1); // 2nd parameter means remove one item only
          }
          index = expanded_groups.indexOf("Uploaded Datasets:|:Country Year");
          if (index > -1) { // only splice array when item is found
            expanded_groups.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        console.log("expanded groups");
        console.log(expanded_groups);
        console.log(collapsed_groups);

			}
			if (item && item instanceof Slick.Group && $target.hasClass(options.toggleExpandedCssClass)) {
        if((item.groupingKey.includes("Country Year"))||item.groupingKey.includes("Dyad Year")){
          collapsed_groups.push(item.groupingKey);
          index = expanded_groups.indexOf(item.groupingKey);
          if (index > -1) { // only splice array when item is found
            expanded_groups.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        console.log("collapsed groups");
        console.log(expanded_groups);
        console.log(collapsed_groups);
			}
		}

    function handleGridClick(e, args) {
      var $target = $(e.target);
      var item = this.getDataItem(args.row);
      if (item && item instanceof Slick.Group && $target.hasClass(options.toggleCssClass)) {
        var range = _grid.getRenderedRange();
        this.getData().setRefreshHints({
          ignoreDiffsBefore: range.top,
          ignoreDiffsAfter: range.bottom + 1
        });

        if (item.collapsed) {
          this.getData().expandGroup(item.groupingKey);
        } else {
          this.getData().collapseGroup(item.groupingKey);
        }

        e.stopImmediatePropagation();
        e.preventDefault();
      }
      if (item && item instanceof Slick.Group && $target.hasClass(options.checkboxSelectCssClass)) {
        item.selectChecked = !item.selectChecked;
        $target.removeClass((item.selectChecked ? "unchecked" : "checked"));
        $target.addClass((item.selectChecked ? "checked" : "unchecked"));
        // get rowIndexes array
        var rowIndexes = _grid.getData().mapItemsToRows(item.rows);
        (item.selectChecked ? options.checkboxSelectPlugin.selectRows : options.checkboxSelectPlugin.deSelectRows)(rowIndexes);
      }
    }

    // TODO:  add -/+ handling
    function handleGridKeyDown(e, args) {
      if (options.enableExpandCollapse && (e.which == Slick.keyCode.SPACE)) {
        var activeCell = this.getActiveCell();
        if (activeCell) {
          var item = this.getDataItem(activeCell.row);
          if (item && item instanceof Slick.Group) {
            var range = _grid.getRenderedRange();
            this.getData().setRefreshHints({
              ignoreDiffsBefore: range.top,
              ignoreDiffsAfter: range.bottom + 1
            });

            if (item.collapsed) {
              this.getData().expandGroup(item.groupingKey);
            } else {
              this.getData().collapseGroup(item.groupingKey);
            }

            e.stopImmediatePropagation();
            e.preventDefault();
          }
        }
      }
    }

    function getGroupRowMetadata(item) {
      var groupLevel = item && item.level;
      return {
        selectable: false,
        focusable: options.groupFocusable,
        cssClasses: options.groupCssClass + ' slick-group-level-' + groupLevel,
        formatter: options.includeHeaderTotals && options.totalsFormatter,
        columns: {
          0: {
            colspan: options.includeHeaderTotals?"1":"*",
            formatter: options.groupFormatter,
            editor: null
          }
        }
      };
    }

    function getTotalsRowMetadata(item) {
      var groupLevel = item && item.group && item.group.level;      
      return {
        selectable: false,
        focusable: options.totalsFocusable,
        cssClasses: options.totalsCssClass + ' slick-group-level-' + groupLevel,
        formatter: options.totalsFormatter,
        editor: null
      };
    }


    return {
      "init": init,
      "destroy": destroy,
      "getGroupRowMetadata": getGroupRowMetadata,
      "getTotalsRowMetadata": getTotalsRowMetadata,
      "getOptions": getOptions,
      "setOptions": setOptions
    };
  }

  // exports
  $.extend(true, window, {
    Slick: {
      Data: {
        GroupItemMetadataProvider: GroupItemMetadataProvider
      }
    }
  });
})(jQuery);
