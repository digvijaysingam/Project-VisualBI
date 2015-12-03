// Ref:"http://api.jquery.com/jquery.getjson/"

(function(){
  var jqxhr = $.getJSON( "../json/measures.json", function() {
    console.log( "measures-success" );
  })
    .done(function() {
      console.log( "measures-second success" );
    })
    .fail(function() {
      console.log( "measures-error" );
    })
    .always(function() {
      console.log( "measures-complete" );
    });

  //Completion function for the request above
  jqxhr.complete(function() {
    $.getJSON( "../json/measures.json", function( data ) {
      $.each( data, function( key, val ) {
        //items.push( "<li><a href='#'>" + val + "</a></li>" );
        var li = $("<li><a href='#'>" + val + "</a></li>");
        li.appendTo('#measures-div ul').find('a').draggable({
          appendTo: "body",
          helper: "clone"
        });
      });
    });
  });
})();
