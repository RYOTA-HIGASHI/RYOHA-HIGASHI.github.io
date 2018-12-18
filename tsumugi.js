
$(function(){
        $('a[href^="#"]').click(function() {
          var speed = 600;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
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
		
