
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
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
