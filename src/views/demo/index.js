import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import radiusMode from './assets/draw-mode-radius';
import _mapDrawOption from './assets/map-draw-opt.json';



mapboxgl.accessToken = 'pk.eyJ1IjoicGV0ZXJxbGl1IiwiYSI6ImpvZmV0UEEifQ._D4bRmVcGfJvo1wjuOpA1g';

const map = {
    instance: null,
    draw: null
};

export default {
    name: 'report-create',

    mounted() {
        this.initMap();
    },

    methods: {
        // 初始化地图
        initMap() {
            const option = {
                container: 'map', // container id
                center: [116.395645, 39.929986], // starting position
                style: 'mapbox://styles/mapbox/dark-v9',
                hash: false,
                zoom: 11,
                minZoom: 10,
                maxZoom: 20,
                pitchWithRotate: false
            };

            map.instance = new mapboxgl.Map(option);

            map.draw = new MapboxDraw({
                styles: _mapDrawOption,

                modes: {
                    ...MapboxDraw.modes,
                    draw_circle: radiusMode // eslint-disable-line camelcase
                },
                userProperties: true,
                displayControlsDefault: false
            });

            map.instance.addControl(map.draw);
        },

        // 切换手绘类型
        switchMapDrawType() {
            map.draw.changeMode('draw_circle');
        }
    }
};
