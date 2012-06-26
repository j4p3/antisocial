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

<<<<<<< HEAD
=======
        //  log function call
        console.log("myOptions set");
        //

>>>>>>> a7adc32d33d612cbf45c16cedf9ae0c194bbe201
        //  draw canvas
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);

<<<<<<< HEAD


        //  setup dummy array to test placement function
        var coordinate = 
=======
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
>>>>>>> a7adc32d33d612cbf45c16cedf9ae0c194bbe201
        [ [42.368691,-71.074677],
          [42.356641,-71.066952],
          [42.368691,-71.074677]];

<<<<<<< HEAD
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
=======
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
>>>>>>> a7adc32d33d612cbf45c16cedf9ae0c194bbe201

      }