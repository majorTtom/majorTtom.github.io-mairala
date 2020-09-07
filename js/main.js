window.onscroll = function showHeader() {
  if(window.pageYOffset > 2080){
    const circle = document.querySelector('.progress-ring__circle1');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray =  `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;


    function setProgress(percent){
      const offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
    }

    setProgress(90);





    const circleTwo = document.querySelector('.progress-ring__circle2');
    const radiusTwo = circleTwo.r.baseVal.value;
    const circumferenceTwo = 2 * Math.PI * radiusTwo;

    circleTwo.style.strokeDasharray =  `${circumferenceTwo} ${circumferenceTwo}`;
    circleTwo.style.strokeDashoffset = circumferenceTwo;


    function setProgressTwo(percent){
      const offset = circumferenceTwo - percent / 100 * circumferenceTwo;
      circleTwo.style.strokeDashoffset = offset;
    }

    setProgressTwo(85);



    const circleThree = document.querySelector('.progress-ring__circle3');
    const radiusThree = circleThree.r.baseVal.value;
    const circumferenceThree = 2 * Math.PI * radiusThree;

    circleThree.style.strokeDasharray =  `${circumferenceThree} ${circumferenceThree}`;
    circleThree.style.strokeDashoffset = circumferenceThree;


    function setProgressThree(percent){
      const offset = circumferenceThree - percent / 100 * circumferenceThree;
      circleThree.style.strokeDashoffset = offset;
    }

    setProgressThree(70);



    const circleFour = document.querySelector('.progress-ring__circle4');
    const radiusFour = circleFour.r.baseVal.value;
    const circumferenceFour = 2 * Math.PI * radiusFour;

    circleFour.style.strokeDasharray =  `${circumferenceFour} ${circumferenceFour}`;
    circleFour.style.strokeDashoffset = circumferenceFour;


    function setProgressFour(percent){
      const offset = circumferenceFour - percent / 100 * circumferenceFour;
      circleFour.style.strokeDashoffset = offset;
    }

    setProgressFour(65);



    const circleFive = document.querySelector('.progress-ring__circle5');
    const radiusFive = circleFive.r.baseVal.value;
    const circumferenceFive = 2 * Math.PI * radiusFive;

    circleFive.style.strokeDasharray =  `${circumferenceFive} ${circumferenceFive}`;
    circleFive.style.strokeDashoffset = circumferenceFive;


    function setProgressFive(percent){
      const offset = circumferenceFive - percent / 100 * circumferenceFive;
      circleFive.style.strokeDashoffset = offset;
    }

    setProgressFive(60);
  }
}






$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.btn-nav').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('btn-nav__active');
  $('.nav').toggleClass('nav__active')
});

$('.menu-nav a').on('click', function(e){
  e.preventDefault;
  $('.btn-nav').toggleClass('btn-nav__active');
  $('.nav').toggleClass('nav__active')
})




$(function(){
  $("a[href^='#']").on('click', function(e){
    var _href = $(this).attr("href");
    $('html,body').stop().animate({ scrollTop: $(_href).offset().top }, 1500);
    e.preventDefault;
  });

});


var m = js.mouseControl;
m.initMouseControl;



// $('body').on('mousemove', (e) => {
//     const x = e.pageX / $(window).width();
//     const y = e.pageY / $(window).height();

//     $('.cursor').css(
//         'transform',
//         'translate(' + x  + 'px, '+ y + 'px)'
//     );

//     // $('parallax-text').css(
//     //     'transform',
//     //     'translate(' + x * 60 + 'px, '+ y * 60 + 'px)'
//     // ); 
// });
