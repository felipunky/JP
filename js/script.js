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
                    
        $( this ).animate( { "font-size": "110%" }, 200 );
                    
        $( ".Title" ).css( "color", "#ffbf00" );
        $( ".TitleColour" ).css( "color", "#ffffff" );
                    
        $( ".carousel-inner img" ).css( "filter", "blur(4px)" );
        $( ".HTMLLink" ).fadeOut( 500 );
        
    });
                    
    $( ".Blur" ).on( "mouseleave touchend", function()
    {
                 
        $( this ).animate( { "font-size": "100%" }, 200 );
                    
        $( ".Title" ).css( "color", "#ffffff" );
        $( ".TitleColour" ).css( "color", "#ffbf00" );
        $( ".carousel-inner img" ).css( "filter", "blur(0px)" );
        $( ".HTMLLink" ).fadeIn( 500 );
        
    });
                    
    $( ".carousel-inner img" ).prop( "st", 1 );
                    
    var counter = 0.0;
                    
    $( ".HTMLLink" ).on( "mouseenter touchstart", function()
    {
           
                                                                                                                                    
        $( ".carousel-inner img" ).animate( { st: '+=0.04' }, { step: function( ux, fx )
                           { $( this ).css( { 'transform':'scale( '+ux+' )' } ); }, duration : '500' }, 'linear' );

                                                                                                                                           
    });
                
    $( ".HTMLLink" ).on( "mouseleave touchend", function()
    {

        $( ".carousel-inner img" ).animate( { st: '1.0' }, { step: function( ux, fx )
                           { $( this ).css( { 'transform':'scale( '+ux+' )' } ); }, duration : '500' }, 'linear' );
                             
    });
                    
    $( ".Link" ).on( "mouseenter touchstart", function()
    {
    
    
        $( this ).animate( { "font-size": "110%" }, 200 );
    
    
    });
    
    $( ".Link" ).on( "mouseleave touchend", function()
    {
    
        $( this ).animate( { "font-size": "100%" }, 200 );
    
    });
       
    $( ".Contact" ).on( "mouseenter touchstart", function()
    {

       $( this ).animate( { "font-size": "32px" }, 200 );

    });
    
    $( ".Contact" ).on( "mouseleave touchend", function()
    {

        $( this ).animate( { "font-size": "16px" }, 200 );

    });
                    
    $( ".Images" ).on( "mouseenter touchstart", function()
    {

        $( this ).animate( { "font-size": "50%" }, 200 );

    });
    
    $( ".Images" ).on( "mouseleave touchend", function()
    {

        $( this ).animate( { "font-size": "40%" }, 200 );

    });
                    
    $( ".About, .InnerAbout" ).on( "mouseenter touchstart", function()
    {

         $( ".About" ).animate( { "font-size": "65%" }, 200 );
         $( ".InnerAbout" ).fadeIn( 500 );

    });
    
    $( ".InnerAbout, .CarouImage, .carousel-indicators" ).on( "mouseleave touchend", function()
     {
     
         $( ".About" ).animate( { "font-size": "60%" }, 200 );
         $( ".InnerAbout" ).fadeOut( 500 );
     
     });
                    
    $( ".ContactMail, InnerContactMail, .Form" ).on( "mouseenter touchstart", function()
    {

        $( ".ContactMail" ).animate( { "font-size": "65%" }, 200 );
        $( ".InnerContactMail" ).fadeIn( 500 );

    });
                    
    $( ".Projects, .InnerProjects, .InnerContactMail, .InnerAbout, ConctactMail" ).on( "mouseleave touchend", function()
    {

        $( ".ContactMail" ).animate( { "font-size": "60%" }, 200 );
        $( ".InnerContactMail" ).fadeOut( 500 );

    });
    
    $( ".Projects" ).on( "mouseenter touchstart", function()
    {

        $( ".Projects" ).animate( { "font-size": "65%" }, 200 );
        $( ".InnerProjects" ).fadeIn( 500 );

    });
                    
    $( ".InnerProjects, .InnerAbout, ConctactMail" ).on( "mouseleave touchend", function()
    {

        $( ".Projects" ).animate( { "font-size": "60%" }, 200 );
        $( ".InnerProjects" ).fadeOut( 500 );

    });
    
    $( ".Home" ).on( "mouseenter touchstart", function()
    {

         $( this ).animate( { "font-size": "45%" }, 200 );

    });
    
    $( ".Home" ).on( "mouseleave touchend", function()
    {

         $( this ).animate( { "font-size": "40%" }, 200 );

    });
                    
});
