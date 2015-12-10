import map from '../../src';
import '../../scss/dhis2-gis.scss';

map('map', {
    layers: [{
        type: 'mapQuest',
        name: 'OpenStreetMap',
        baseLayer: true,
        visible: false,
    }, {
        type: 'tileLayer',
        url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        name: 'Light',
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        baseLayer: true,
        visible: true,
    }, {
        type: 'google',
        name: 'Google Streets',
        baseLayer: true,
        visible: false,
    }, {
        type: 'google',
        name: 'Google Terrain',
        style: 'TERRAIN',
        baseLayer: true,
        visible: false,
    }, {
        type: 'google',
        name: 'Google Satellite',
        style: 'SATELLITE',
        baseLayer: true,
        visible: false,
    }, {
        type: 'google',
        name: 'Google Hybrid',
        style: 'HYBRID',
        baseLayer: true,
        visible: false,
    }, /* {
        type: 'earthEngine',
        name: 'Landcover',
        overlay: true,
        visible: false,
        mapId: 'dee79d266742c143cae42c376483acf8',
        token: '219946e0faa093860209f17a5cc1222f',
        opacity: 0.5,
    },*/ {
        type: 'earthEngine',
        name: 'Elevation',
        overlay: true,
        visible: false,
        mapId: '0f129e4e9edd5e503dc63bbef38fbcf7',
        token: '219946e0faa093860209f17a5cc1222f',
        opacity: 0.5,
    }, {
        type: 'choropleth',
        name: 'Choropleth',
        overlay: true,
        visible: false,
        features: '/data/districts-features.json',
        data: '/data/districts-data.json',
        popup(feature) {
            return 'Popup content for ' + feature.properties.na;
        },
    }, {
        type: 'features',
        name: 'Districts',
        overlay: true,
        visible: false,
        features: '/data/districts-features.json',
        popup(feature) {
            return 'Popup content for ' + feature.properties.na;
        },
    }, {
        type: 'features',
        name: 'Facilities',
        overlay: true,
        visible: false,
        features: '/data/facilities-features.json',
        popup(feature) {
            return 'Popup content for ' + feature.properties.na;
        },
    }, {
        type: 'heat',
        name: 'Heat',
        overlay: true,
        visible: false,
        data: '/data/facilities-features.json',
    }, {
        type: 'cluster',
        name: 'Cluster',
        overlay: true,
        visible: false,
        data: '/data/facilities-features.json',
    }, {
        type: 'grid',
        name: 'Grid',
        overlay: true,
        visible: false,
        data: '/data/facilities-features.json',
        bbox: [-13.3035, 6.9176, -10.2658, 10.0004],
        cellWidth: 25,
    }, {
        type: 'circleMarkers',
        name: 'Proportional symbols',
        overlay: true,
        visible: false,
        features: '/data/facilities-features.json',
        data: '/data/facilities-data.json',
        popup(feature) {
            return 'Popup content for ' + feature.properties.na;
        },
    }, {
        type: 'tileLayer',
        url: 'http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',
        name: 'Labels',
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        overlay: false,
        visible: false,
    },
    ],
    bounds: [[6.9679, -13.29096], [9.9432, -10.4887]],
});
