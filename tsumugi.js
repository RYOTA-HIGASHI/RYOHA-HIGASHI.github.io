
$(function(){
  $('.menu-list, .top-img, .menu-logo h1').fadeIn(4000)
  .queue(function(){
    $('.top').fadeIn(1500)
    .animate({
      'paddingTop': '500px'
    },{
    duration: 2500,
    easing: 'easeOutElastic',
    queue: false,
    })
  });

$('.menu-list a').click(function() {
  $(this).css('transform','rotate3d(10,10,10,360deg)');
});
$('.menu-logo h1,span').click(function() {
  $(this).css('transform','none');
});









        $('a[href^="#"]').click(function() {
          var speed = 600;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });





        $('profile li, gallery img, .movie iframe, .access div').addClass('move');
        $(window).scroll(function(){
          $(".profile, .gallery, .movie, .access").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
              $(this).find("li, img, iframe, div").removeClass('move');
            } else {
            $(this).find("li, img, iframe, div").addClass('move');
        }
        });
        });
      });


      function initMap() {
             var latlng = new google.maps.LatLng( 34.808502, 135.639683 );
             var map = new google.maps.Map(document.getElementById('map'), {
                 zoom: 14,
                 center: latlng
             });

             //マーカーの設定
             var marker = new google.maps.Marker({
                 position: latlng,
                 map: map,
                 icon: new google.maps.MarkerImage(
                    'https://raw.githubusercontent.com/RYOTA-HIGASHI/ryota-higashi.github.io/master/IMG_0637%203.jpg',//マーカー画像URL
                     new google.maps.Size(60, 80),//マーカー画像のサイズ
                     new google.maps.Point(0, 0),//マーカー画像表示の起点（変更しない）
                     new google.maps.Point(30, 80)//マーカー位置の調整
                 ),

             });
           }
      $(function() {
        $('#photo-list img').draggable();
      });
