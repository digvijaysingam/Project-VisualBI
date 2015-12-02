// Ref:"http://api.jquery.com/jquery.getjson/"

(function(){
  var jqxhr = $.getJSON( "measures.json", function() {
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
    $.getJSON( "measures.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li><a href='#'>" + val + "</a></li>" );
    });

    $( "<ul/>", {
      "class": "nav nav-list-main measures",
      html: items.join( "" )
    }).appendTo( "div.measures-div" );
  });
  });
})();
