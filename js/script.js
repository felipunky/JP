$( document ).ready( function()
{
       
    //$( ".spinner-grow" ).fadeOut( 500 );
       
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
                    
        $( this ).animate( { "font-size": "34px" }, 200 );
        $( ".TitleColour" ).text( "Portfolio" );
                    
        $( ".Title" ).css( "color", "#ffbf00" );
        $( ".TitleColour" ).css( "color", "#ffffff" );
                    
        $( ".carousel-inner img" ).css( "filter", "blur(4px)" );
        $( ".HTMLLink" ).fadeOut( 500 );
        
    });
                    
    $( ".Blur" ).on( "mouseleave touchend", function()
    {
                 
        $( this ).animate( { "font-size": "30px" }, 200 );
                    
        $( ".Title" ).css( "color", "#ffffff" );
        $( ".TitleColour" ).css( "color", "#ffbf00" );
        $( ".TitleColour" ).text( "Architect" );
        $( ".carousel-inner img" ).css( "filter", "blur(0px)" );
        $( ".HTMLLink" ).fadeIn( 500 );
        
    });
                    
    $( ".carousel-inner img" ).prop( "st", 1 );
                    
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

    $( ".ProjectLink_1" ).on( "mouseenter touchstart", function()
    {
           
                                                                                                                                    
        $( ".ImageCenter" ).animate( { st: '+=0.04' }, { step: function( ux, fx )
                           { $( this ).css( { 'transform':'scale( '+ux+' )' } ); }, duration : '500' }, 'linear' );

                                                                                                                                           
    });
                
    $( ".ProjectLink_1" ).on( "mouseleave touchend", function()
    {

        $( ".ImageCenter" ).animate( { st: '1.0' }, { step: function( ux, fx )
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

        $( this ).animate( { "font-size": "20px" }, 200 );

    });
    
    $( ".Images" ).on( "mouseleave touchend", function()
    {

        $( this ).animate( { "font-size": "16px" }, 200 );

    });
    
    $( ".About" ).fadeIn( 3500 );
    $( ".InnerAbout" ).fadeIn( 4000 );
    
    $( ".About" ).on( "mouseenter touchstart", function()
    {

         $( this ).animate( { "font-size": "30px" }, 200 );
         //$( ".InnerAbout" ).fadeIn( 500 );

    });
    
    $( ".About" ).on( "mouseleave touchend", function()
     {
     
         $( this ).animate( { "font-size": "24px" }, 200 );
         //$( ".InnerAbout" ).fadeOut( 500 );
     
     });
    
    $( ".ContactMail" ).fadeIn( 4000 );
    $( ".InnerContactMail" ).fadeIn( 4500 );
    
    $( ".ContactMail" ).on( "mouseenter touchstart", function()
    {

        $( this ).animate( { "font-size": "30px" }, 200 );
        //$( ".InnerContactMail" ).fadeIn( 500 );

    });
    
    $( ".ContactMail" ).on( "mouseleave touchend", function()
    {

        $( this ).animate( { "font-size": "24px" }, 200 );
        //$( ".InnerContactMail" ).fadeOut( 500 );

    });
    
    $( ".Projects" ).fadeIn( 5000 );
    $( ".InnerProjects" ).fadeIn( 5500 );
    
    $( ".Projects" ).on( "mouseenter touchstart", function()
    {

        $( this ).animate( { "font-size": "30px" }, 200 );
        //$( ".InnerProjects" ).fadeIn( 500 );

    });
                    
    $( ".Projects" ).on( "mouseleave touchend", function()
    {

        $( this ).animate( { "font-size": "24px" }, 200 );
        //$( ".InnerProjects" ).fadeOut( 500 );

    });
    
    $( ".Home" ).on( "mouseenter touchstart", function()
    {

         $( this ).animate( { "font-size": "34px" }, 200 );

    });
    
    $( ".Home" ).on( "mouseleave touchend", function()
    {

         $( this ).animate( { "font-size": "30px" }, 200 );

    });

});
