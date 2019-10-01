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
                    
});
