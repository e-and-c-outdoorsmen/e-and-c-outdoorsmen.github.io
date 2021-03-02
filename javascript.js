$(document).ready(function(){
    $grid = $('.list').isotope({
      // options
      itemSelector: '.list__item',
      filter: '.filter1',
      layoutMode: 'masonry',
      masonry: {
        isFitWidth: true 
      }
    });
    // filter items on button click
    $('.js-filter').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $( '.js-filter button' ).removeClass( 'is-active' );
      $( this ).addClass( 'is-active' );
    });

    //navigation
    $('nav a[href*="#"]').on('click', function (){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-100},
            2000);
        });
        
  });