$(".nav-highlight").mouseover(function() {
    if($(this).hasClass('img-highlight')&&isToggleHeaderImg){
        isToggleHeaderImg=false;
        //$('.header-img').hide();
        //$('.header-img.'+$(this).attr('img-highlight')).fadeIn(300);
        $('.header-img-container').css('backgroundImage','url('+$('.header-img.'+$(this).attr('img-highlight')).attr('src')+')');
    }
    $('.section').css('color','#cccccc');
    $('.section a').css('color','#cccccc');
    $('.section img').addClass('desaturate');
    $('.section.'+$(this).attr('section-highlight')).css('color','#333333');
    $('.section.'+$(this).attr('section-highlight')+' a').css('color','#32688B');
    $('.section.'+$(this).attr('section-highlight')+' img').removeClass('desaturate');
});
$('.nav-list').mouseout(function() {
    if(!isToggleHeaderImg){
        //$('.header-img').fadeIn(300);
        isToggleHeaderImg=true;
        toggleImages();
    }
    $('.section').css('color','#333333');
    $('.section a').css('color','#32688B');
    $('.section img').removeClass('desaturate');
});
var currentHeaderImg=0;
var isToggleHeaderImg=true;
var isFirst=true;
function toggleImages(){
    if($('.toggle-img').length==1){
        $('.header-img-container').css('backgroundImage','url('+$('.toggle-img:eq('+currentHeaderImg+')').attr('src')+')');
    }else if($('.toggle-img').length>1){
        if(isToggleHeaderImg){
            $('.header-img-container').css('backgroundImage','url('+$('.toggle-img:eq('+currentHeaderImg+')').attr('src')+')');
            //$('.toggle-img').hide();
            //$('.toggle-img:eq('+currentHeaderImg+')').fadeIn(1000);
            currentHeaderImg=currentHeaderImg+1;
            if(currentHeaderImg==$('.toggle-img').length){
                currentHeaderImg=0;
            }
            setTimeout("toggleImages()",2000);
        }
    }
}
$(document).ready(function(){
    toggleImages();
});