(function(){
  // $('ul.nav-left-ml').toggle();

  $('.dim-div').on('click', 'label' , function () {

    $this = $(this).children('span');
    $this.parent().parent().children('ul.nav-left-ml').toggle(300);
    var cs = $this.attr("class");
    if(cs == 'nav-toggle-icon glyphicon glyphicon-chevron-right') {
      $this.removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
    }
    if(cs == 'nav-toggle-icon glyphicon glyphicon-chevron-down') {
      $this.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
    }
  });

  // $('.steel-wheels h4').draggable();
  $('.columns ul').droppable({
    drop: function(event, ui) {
      $(this).find(".placeholder").remove();
      $("<li></li>").text(ui.draggable.text()).appendTo(this);
    }
  });
}());
