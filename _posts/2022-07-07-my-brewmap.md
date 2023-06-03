---
layout: post
title:  "My BrewMap"
date:   2022-08-07 17:30:00 +0100
background: '/img/posts/post_1_brewmap.png'
---

# How to get distracted from writing a blog post

I started this blog with the intention of summing up my thoughts about various
parts of being a software engineer, interesting problems and patterns I've run into,
and occasionally talk about a beer I found on my travels. As with any great aspiration, 
it hit a couple of speed-bumps, but we're finally here! 

As a huge distraction from actually publishing a first post, I hope you enjoy
this Brew-Map as much as I enjoyed building it. In the near future I'll explain how it's done,
and add some snippets to GitHub!


<html>
  <div id="googleMap" style="width: 500px; height: 400px;"></div>

  <script>
    function myMap() {
      var mydata = {{site.data.untappd | jsonify}}
      // console.log(mydata); 

      var mapProp= {
            zoom: 3,
            center: new google.maps.LatLng(51.47, 0.00),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
  
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
      var infowindow = new google.maps.InfoWindow();
  
      var marker, i;
  
      for (i = 0; i < mydata.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(mydata[i]["venue_lat"], mydata[i]["venue_lng"]),
          map: map
        });
  
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          beerName = mydata[i]["beer_name"]
          beerUrl = mydata[i]["beer_url"]
          venueName = mydata[i]["venue_name"]
          brewery = mydata[i]["brewery_name"]
          breweryUrl = mydata[i]["brewery_url"]
          checkinUrl = mydata[i]["checkin_url"]
          checkinImg = mydata[i]["photo_url"]
          createdAt = mydata[i]["created_at"]
          content = 
                 '<div id="content">' +
                 '<a href="'+beerUrl+'">'+beerName+'</a> by <a href="'+breweryUrl+'">'+brewery+'</a>' + 
                 '<br>Venue - '+venueName + 
                 '<br><a href="'+checkinUrl+'">Check-In - ' + createdAt + '</a>' +
                 '<br><img src="'+checkinImg+'" width="100" height="auto">' + 
                 '</div>';
          infowindow.setContent(content);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
  </script>

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWEYdTqtEEZSQQygAtWpTEUqchtkHpLNo&callback=myMap"></script>
</html>
