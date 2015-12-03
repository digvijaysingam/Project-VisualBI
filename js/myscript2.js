(function(){
  //$('ul.nav-left-ml').toggle();

  $('#dim-div').on('click', 'label' , function () {

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

  $('.columns').droppable({
    drop: function(event, ui) {
      $this = $(this).children('ul');
      $this.find(".placeholder").remove();
      //$("<li></li>").text(ui.draggable.text()).appendTo($this);
      $("<li>" + ui.draggable.text() + "<button type='button' class='close'>&times;</button></li>").appendTo($this);
      var ht = parseInt($this.parent().outerHeight());
      console.log(ht);
      ht = (ht-39)/2;
      $this.parent().parent().children('.col-xs-2').animate({
         'padding-top' : ht+'px',
         'padding-bottom' : ht+'px'
      });

    }
  });

  $('.columns').on('click', 'button' , function () {
    var pt = $(this).parent().parent().parent();
    $(this).parent().remove();
    var len = pt.children('ul li').length;
    console.log(len);
    if(len == 0) {
      $("<li class='placeholder'>Drag measures/dimensions here</li>").appendTo(pt.children('ul'));
    }
    var ht = parseInt(pt.outerHeight());
    console.log(ht);
    ht = (ht-39)/2;
    pt.parent().children('.col-xs-2').animate({
       'padding-top' : ht+'px',
       'padding-bottom' : ht+'px'
    });
  });
}());
