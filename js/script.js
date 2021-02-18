$(document).ready(function(){
    // hide
    $('.hide').click(function(){
        $('h2').hide("slow");
    })
    // show
    $('.show').click(function(){
        $('h2').show("slow");
    })
    // toggle
    $('.toggle').click(function(){
        $('h2').toggle("slow");
    })
    // FadeOut
    $('.fadeout').click(function(){
        $('h2').fadeOut(2000);
    })
    // FadeIn
    $('.fadein').click(function(){
        $('h2').fadeIn(2000);
    })
    // fadetoggle
    $('.fadetoggle').click(function(){
        $('h2').fadeToggle(2000);
    })
    // fadeto
    $('.fadeto').click(function(){
        $('h2').fadeTo(2000, 0.1);
    })
    // slide toggle
    $('.panel').click(function(){
        $('.content').slideToggle(1000);
    })
    // draggable
        $('#draggable').draggable();
        $( "#accordion" ).accordion({
            collapsible:true
        });
        $( "#draggable" ).draggable();
    $("#droppable").droppable({
      drop: function(event,ui) {        
          $(this)
          .addClass("ui-state-highlight")
          .find("p")
            .html("Dropped!");
      }
    });
    $("#resizable").resizable();
    $( "#selectable" ).selectable();
})