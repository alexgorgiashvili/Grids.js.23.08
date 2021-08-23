

$(".btn2").click(function (e) { 
    e.preventDefault();
    $(this).css ("background-color","white");
    $(".btn1").css ("background-color","inherit");
    $(".gridone").animate({
        "width":"100%",
        "height":"130px"
    },800 );
    $(".gridtwo").animate({
        "width":"100%",
        "height":"130px"
    },1000 );
    $(".gridthree").animate({
        "width":"100%",
        "height":"130px"
    },1500 );
    $(".gridfour").animate({
        "width":"100%",
        "height":"130px"
    },1700 );
    $(".maingrid").animate({
        "width":"100%",
        "height":"130px"
    },2000 );
    $(".imgdiv").animate({
        "width":"25%",
        "height":"130px"
    } );
    $(".card").css({
        "width":"100%",
        "flex-direction":"inherit"
    } );
    $(".card-body").css("width","75%");
    
    $(".hovgrid").animate({
        "margin":"5px",   
    },200 );

    $(".hidden").hide();
    $(".card-title").fadeIn(4000);
    
  
});


$(".btn1").click(function (e) { 
    e.preventDefault(); 
    $(this).css ("background-color","white");
    $(".btn2").css ("background-color","inherit");
    $(".card-title").hide();

    $(".hovgrid").css("margin","0" );

    $(".gridone").animate({
        "width":"25%",
        "height":"234px"
    },1000 );
    $(".gridtwo").animate({
        "width":"25%",
        "height":"234px"
    },500 );
    $(".gridthree").animate({
        "width":"25%",
        "height":"234px"
    },250 );
    $(".gridfour").animate({
        "width":"25%",
        "height":"234px"
    },150 );
    $(".maingrid").animate({
        "width":"25%",
        "height":"234px"
    } );
    $(".img").css({
        "width":"100%",
        "height":"auto"
    } );
    
    $(".card").animate({
        "width":"auto",
        "flex-direction":"column"
    } );
    $(".card-body").animate({
        "width":"inherit",
    } );
    

    setTimeout(function() { 
        $(".imgdiv").animate({
        "width":"100%",
        "height":"auto"
    } );
    }, 1200);


    let x = 0;
    let interval = setInterval(function(){ 
    $(".hide-title"+x+"").slideDown();
    x++;
    if(x > 12){
        clearInterval(interval);
    }
    }, 400);
});


$(".hovgrid").mouseenter(function () {
        $(this).addClass("hovclass")

        setTimeout(() => {
            $(".hovgrid").removeClass("hovclass").css("transition","all .5s")
        }, 600);
        
});

  
  