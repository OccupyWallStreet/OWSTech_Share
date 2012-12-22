Drupal.behaviors.owstech_share = {

	attach: function(context, settings){

    console.log( 'Drupal.behaviors.owstech_share', context, settings );
    jQuery( '.drawer ul li a' ).click( function( e ){
      console.log( arguments );
      var href = jQuery( this ).attr('href');
      window.open( href, 'owstech_share_popup', 'width=450,height=350,resizeable=1,');
      e.preventDefault();
    });

  }

};
