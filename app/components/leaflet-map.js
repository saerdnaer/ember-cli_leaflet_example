
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
  center: L.latLng(48.2628, 11.6685),
  zoom: 18, 
  options: {maxZoom: 19, minZoom: 0},
  childLayers: [
    TileLayer.extend({
      tileUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      options: {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      },
      
    })
  ]
});
