$( document ).ready( function()
{
                    
    $( ".carousel-inner img" ).prop( "st", 1 );
                    
    $( ".Blur" ).on( "mouseenter touchstart", function()
    {
                    
        $( ".Title" ).css( "color", "#ffbf00" );
        $( ".TitleColour" ).css( "color", "#ffffff" );
                    
        $( ".carousel-inner img" ).css( "filter", "blur(4px)" );
        /*$( ".carousel-inner img" ).animate( { st: '+=0.1' }, { step: function( st, fx )
                                            { $( this ).css( { 'transform':'scale( '+st+' )' } ); }, duration : '1000' }, 'linear' );*/
        
    });
                    
    $( ".Blur" ).on( "mouseleave touchend", function()
    {
                    
        $( ".Title" ).css( "color", "#ffffff" );
        $( ".TitleColour" ).css( "color", "#ffbf00" );
        $( ".carousel-inner img" ).css( "filter", "blur(0px)" );
                    //$( ".carousel-inner img" ).css( "filter", "blur(0px)" );
        /*$( ".carousel-inner img" ).animate( { st: '1.0' }, { step: function( st, fx )
                                            { $( this ).css( { 'transform':'scale( '+st+' )' } ); }, duration : '1000' }, 'linear' );*/
        
    });
                    
    $( ".carousel-inner img" ).on( "mouseenter touchstart", function()
    {
                                  
        $( this ).animate( { st: '+=0.1' }, { step: function( st, fx )
                           { $( this ).css( { 'transform':'scale( '+st+' )' } ); }, duration : '800' }, 'linear' );
    
    });
                
    $( ".carousel-inner img" ).on( "mouseleave touchend", function()
    {
    
        $( this ).animate( { st: '1.0' }, { step: function( st, fx )
                           { $( this ).css( { 'transform':'scale( '+st+' )' } ); }, duration : '800' }, 'linear' );
                             
    });
                    
});
