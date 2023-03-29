$(function(){
    
    // Movie Serial activation
    $('.serial_movie_center').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 5,
        prevArrow:$('.serial_movie_center_icon_btn.prev'),
        nextArrow:$('.serial_movie_center_icon_btn.next')
      });
    // serial filter activation
    $('.serial_filter').filterizr();

    $('.serial_filter_content li').on('click', function(){
        $(this).addClass('f_active')
        $(this).siblings().removeClass('f_active')
    })
});

new VenoBox({
  spinner: 'plane',
});