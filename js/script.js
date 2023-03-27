$(function(){
    
    // Movie Serial activation
    $('.serial_movie_center').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 5,
        prevArrow:$('.serial_movie_center_icon_btn.prev'),
        nextArrow:$('.serial_movie_center_icon_btn.next')
      });
});

new VenoBox({
  spinner: 'plane',
});