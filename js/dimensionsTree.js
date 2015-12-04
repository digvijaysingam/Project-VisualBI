(function() {
  $.getJSON( "../json/DimensionsTree.json", function( data ) {
    // ref:"http://www.jqwidgets.com/building-menu-from-json/"
    console.log(data);
    var parentUL = $("<ul class='nav nav-list-main dimensions'></ul>");
    parentUL.appendTo("div#dim-div");
    $.each(data, function(){
      var hierarchy_unique_name = this.CHILDREN;
      var parentLI = $("<li><label class='nav-toggle nav-header'><span class='nav-toggle-icon glyphicon glyphicon-chevron-right'></span><a href='#'>" + hierarchy_unique_name[0].LABEL + "</a></label></li>");
      parentLI.appendTo(parentUL);
      var level_unique_name = hierarchy_unique_name[0].CHILDREN;
      $.each(level_unique_name, function(){
        var member_unique_name = this.CHILDREN;
        var childUL = $("<ul class='nav nav-list nav-left-ml'></ul>");
        childUL.appendTo(parentLI).toggle();
        $.each(member_unique_name, function(){
          var childLI = $("<li><a href='#'>" + this.LABEL + "</a></li>");
          childLI.appendTo(childUL).find('a').draggable({
            appendTo: "body",
            helper: "clone"
          });
        });
      });

    });


});//---end getJSON
}());
