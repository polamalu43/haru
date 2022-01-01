document.addEventListener('DOMContentLoaded', function () {
    new panelContorol('navi_btn');
    new heroSlider('.top_swiper').initSwiper();
    new heroSlider('.banner_swiper').initSwiper2();
    new heroSlider('.guarantee_swiper').initSwiper3();
          
    var test = document.getElementById('test');
    test.addEventListener('click', function(){
        new TextAnimation('.animate', '就職したい、という希望に絶対答える');
    });
    
});

