import L from 'leaflet';
import {Map} from '../src/Map';

describe('DHIS2 map', () => {
    let mapDiv;
    let map;

    beforeEach(() => {
        mapDiv = document.createElement('div');
        mapDiv.id = 'map';
        document.body.appendChild(mapDiv);
    });

    afterEach(function () {
        document.body.removeChild(mapDiv);
    });

    /*
    it('should export the Leaflet instance', () => {
        map = new Map('map');
        expect(map).to.be.instanceOf(L.Map);
    });
    */

    /*
    it('should have a setBaseLayer method', () => {
        map = new Map('map');
        expect(map.setBaseLayer).to.be.a('function');
    });
    */

    /*
    it('should have set the basemap layer', () => {
        map = new Map('map', {basemap: 'mapquest'});

        expect(map.hasLayer('mapquest')).to.be.true;
    });
    */

});

