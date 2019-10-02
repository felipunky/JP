$( document ).ready( function()
{
               
    $( ".carousel-caption" ).on( "mouseenter touchstart", function()
    {
    
        $( ".Title" ).fadeOut( 500 );
                                
    
    });
                    
    $( ".carousel-caption" ).on( "mouseleave touchend", function()
    {
    
        $( ".Title" ).fadeIn( 500 );
                                
    });
                    
    $( ".Blur" ).on( "mouseenter touchstart", function()
    {
                    
        $( ".Title" ).css( "color", "#ffbf00" );
        $( ".TitleColour" ).css( "color", "#ffffff" );
                    
        $( ".carousel-inner img" ).css( "filter", "blur(4px)" );
        $( ".HTMLLink" ).fadeOut( 500 );
        /*$( ".carousel-inner img" ).animate( { st: '+=0.1' }, { step: function( st, fx )
                                            { $( this ).css( { 'transform':'scale( '+st+' )' } ); }, duration : '1000' }, 'linear' );*/
        
    });
                    
    $( ".Blur" ).on( "mouseleave touchend", function()
    {
                    
        $( ".Title" ).css( "color", "#ffffff" );
        $( ".TitleColour" ).css( "color", "#ffbf00" );
        $( ".carousel-inner img" ).css( "filter", "blur(0px)" );
        $( ".HTMLLink" ).fadeIn( 500 );
                    //$( ".carousel-inner img" ).css( "filter", "blur(0px)" );
        /*$( ".carousel-inner img" ).animate( { st: '1.0' }, { step: function( st, fx )
                                            { $( this ).css( { 'transform':'scale( '+st+' )' } ); }, duration : '1000' }, 'linear' );*/
        
    });
                    
    $( ".carousel-inner img" ).prop( "st", 1 );
                    
    var counter = 0.0;
                    
    $( ".carousel-inner img:not(.carousel-caption):not(.carousel-indicators):not(.carousel-control-next):not(.carousel-control-prev)" ).on( "mouseenter touchstart", function()
    {
           
                                                                                                                                    
        $( this ).animate( { st: '+=0.04' }, { step: function( ux, fx )
                           { $( this ).css( { 'transform':'scale( '+ux+' )' } ); }, duration : '500' }, 'linear' );

                                                                                                                                           
    });
                
    $( ".carousel-inner img:not(.carousel-caption):not(.carousel-indicators):not(.carousel-control-next):not(.carousel-control-prev)" ).on( "mouseleave touchend", function()
    {

        $( this ).animate( { st: '1.0' }, { step: function( ux, fx )
                           { $( this ).css( { 'transform':'scale( '+ux+' )' } ); }, duration : '500' }, 'linear' );
                             
    });
    
});
