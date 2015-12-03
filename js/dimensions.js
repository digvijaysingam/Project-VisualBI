// Ref:"http://api.jquery.com/jquery.getjson/"

(function(){
  var jqxhr = $.getJSON( "../json/dim.json", function() {
    console.log( "dimensions-success" );
  })
    .done(function() {
      console.log( "dimensions-second success" );
    })
    .fail(function() {
      console.log( "dimensions-error" );
    })
    .always(function() {
      console.log( "dimensions-complete" );
    });

  // Completion function for the request above
  jqxhr.complete(function() {
    $.getJSON( "../json/dim.json", function( json ) {
      // ref:"http://www.jqwidgets.com/building-menu-from-json/"
      var data = json.dim;
      var builddata = function () {
      var source = [];
      var items = [];
      // build hierarchical source.
      for (i = 0; i < data.length; i++) {
          var item = data[i];
          var label = item["text"];
          var parentid = item["parentid"];
          var id = item["id"];

          if (items[parentid]) {
              var item = { parentid: parentid, label: label, item: item };
              if (!items[parentid].items) {
                  items[parentid].items = [];
              }
              items[parentid].items[items[parentid].items.length] = item;
              items[id] = item;
          }
          else {
              items[id] = { parentid: parentid, label: label, item: item };
              source[id] = items[id];
          }
      }
      return source;
    }
    var source = builddata();


    var buildUL = function (parent, items) {
        $.each(items, function () {
            if (this.label) {
                // create LI element and append it to the parent element.
                if(this.items && this.items.length > 0){
                  var li = $("<li><label class='nav-toggle nav-header'><span class='nav-toggle-icon glyphicon glyphicon-chevron-right'></span><a href='#'>" + this.label + "</a></label></li>");
                }
                else
                var li = $("<li><a href='#'>" + this.label + "</a></li>");
                li.appendTo(parent).find('a').draggable({
                  appendTo: "body",
                  helper: "clone"
                });
                // if there are sub items, call the buildUL function.
                if (this.items && this.items.length > 0) {
                    li.addClass("")
                    var ul = $("<ul class='nav nav-list nav-left-ml'></ul>");
                    ul.appendTo(li).toggle();
                    buildUL(ul, this.items);
                }
            }
        });
    }
    var ul = $("<ul class='nav nav-list-main dimensions'></ul>");
    ul.appendTo("div#dim-div");
    buildUL(ul, source);
  });//---end getJSON
});//----end jqxhr.complete
})();
