function initialize() {
        //  log function call
        console.log("Initialize loaded");
        //

        //  set map properties
        var myOptions = {
          center: new google.maps.LatLng(42.356641,-71.066952),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //  draw canvas
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);

        //  setup dummy array to test placement function
        var coordinate = 
        [ [42.368691,-71.074677],
          [42.356641,-71.066952],
          [42.368691,-71.074677]];

        //  call placeMarker on each array element
        $.each(coordinate,

        //  Place coordinate element in array as a new marker
        function() {

          //  log function call
           console.log(this);          

          //  this shit works thanks to aman
          //  place new marker at coordinate
          marker=new google.maps.Marker({
          position: new google.maps.LatLng(this[0], this[1]),
          map: map
          });
        });

      }