mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyeXNhbnRob3U4NCIsImEiOiJjbGJrZmgzbWkwZWh1M3BtbmVldWZueGFzIn0.sAlbOGqiUpINdRuwW5WEMQ';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [-117.890106, 34.127190],
            zoom: 11
        })

        var marker = new mapboxgl.Marker()
        .setLngLat([-117.890106, 34.127190])
        .addTo(map);

        const busStops = [
            [-117.890106, 34.127190],
            [-117.906219, 34.136230],
            [-117.931820, 34.128530],
            [-117.965440, 34.134020],
            [-118.002750, 34.133900],
            [-118.028503, 34.142311],
            [-118.079690, 34.149330],
            [-118.113310, 34.151810],
            [-118.135940, 34.152710],
            [-118.146130, 34.147670],
            [-118.148560, 34.141610],
        ];

        var counter = 0;
        function move(){
            setTimeout(() => {
                if (counter >= busStops.length) return;
                marker.setLngLat(busStops[counter]);
                counter++;
                move();
            }, 1000);
        }
