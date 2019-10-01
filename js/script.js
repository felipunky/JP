$( document ).ready( function()
{
                    
    $( ".Blur" ).on( "mouseenter touchstart", function()
    {
                    
        $( ".Title" ).css( "color", "#ffbf00" );
        $( ".TitleColour" ).css( "color", "#ffffff" );
        
    });
                    
    $( ".Blur" ).on( "mouseleave touchend", function()
    {
                    
        $( ".Title" ).css( "color", "#ffffff" );
        $( ".TitleColour" ).css( "color", "#ffbf00" );
        
    });
            
                    
    $( ".carousel-item" ).on( "mouseenter touchstart", function()
    {
         
         $( ".carousel-inner img" ).animate( { opacity: '+=0.1' }, { step: function( now, fx )
                                            { $( this ).css( { 'transform':'scale( '+now+' )' } ); }, duration : 1000 }, 'linear' );
        //$( ".carousel-inner img" ).animate( { 'transform':'scale( 1.5 )' }, 1000 );
    
    });
                
    /*$('#foo').animate({  borderSpacing: -90 }, {
                      step: function(now,fx) {
                      $(this).css('-webkit-transform','rotate('+now+'deg)');
                      $(this).css('-moz-transform','rotate('+now+'deg)');
                      $(this).css('transform','rotate('+now+'deg)');
                      },
                      duration:'slow'
                      },'linear');*/
    
    $( ".carousel-item" ).on( "mouseleave touchend", function()
    {
    
        //$( ".carousel-inner img" ).css( { 'transform':'scale( 1.0 )' } );
        $( ".carousel-inner img" ).animate( { opacity: '-=0.1' }, { step: function( now, fx )
                                            { $( this ).css( { 'transform':'scale( '+now+' )' } ); }, duration : 1000 }, 'linear' );
                             
    });
                    
});
