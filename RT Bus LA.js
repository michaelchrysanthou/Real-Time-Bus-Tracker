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
            [-118.148390, 34.132350],
            [-118.157470, 34.116410],
            [-118.193560, 34.110650],
            [-118.206550, 34.098470],
            [-118.213160, 34.087180],
            [-118.220200, 34.081760],
            [-118.236150, 34.063820],
            [-118.232150, 34.056030],
            [-118.238020, 34.049910],
            [-118.226420, 34.047780],
            [-118.218630, 34.047130],
            [-118.210390, 34.043930],
            [-118.191360, 34.034770],
            [-118.168360, 34.033190],
            [-118.160960, 34.033210],
            [-118.152740, 34.033840],
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
