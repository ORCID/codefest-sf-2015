$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#338caf',
            'bulletsColor': '#338caf',
            'position': 'right',
            'tooltips': ['What', 'When', 'Where', 'Why', 'Who', 'Resources']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });

    $('.menu-trigger').click(function(e){
        e.preventDefault();
        var next = $(this).attr("data-section");
        $.fn.pagepiling.moveTo(next);
    });

    //MAP
    var latlng = new google.maps.LatLng(37.782259, -122.391243);
    var options = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      navigationControl: true,
      mapTypeControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };

    var map = new google.maps.Map(document.getElementById('where'), options);

    var marker1 = new google.maps.Marker({
      position: latlng, map: map
    });

    google.maps.event.addListener(marker1, 'click', function() {
      infowindow.open(map, marker1);
    });


    var infowindow = new google.maps.InfoWindow({
      content:  '<div class="info"><strong>GitHub, Inc.</strong><br />'
      + '<br/ >88 Colin P Kelly Jr St<br />San Francisco, CA 94107<br />United States of America</div>'
    });

    infowindow.open(map, marker1);







});
