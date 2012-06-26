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

        //  log function call
        console.log("myOptions set");
        //

        //  draw canvas
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);

        //  log function call
        console.log("map loaded");
        //


        //  call Klout handler, expect location array return
        markers = function Klout() {
          //  log function call
          console.log("Klout handler initialized");
          //

        }

        //  setup dummy array to test placement function
        var markers = 
        [ [42.368691,-71.074677],
          [42.356641,-71.066952],
          [42.368691,-71.074677]];

        //  counter to track array index as placeMarker is called forEach element in markers
        i= -1;

        //  call placeMarker on each array element
        markers.forEach(placeMarker);

        //  place array element
        function placeMarker(coordinate) {
          i++;
          //  verify array passing valid data, log function call
          var type = typeof coordinate[i];
          var indexString = i
          console.log("placeMarker called with coordinate "+type+" and index "+indexString);


          //  place new marker at coordinate
          marker=new google.maps.Marker({
          position: new google.maps.LatLng(coordinate[i][0],coordinate[i][1]),
          map: map
          });
        }

      }