
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import Layer from 'ember-leaflet/layers/layer';
import TileLayer from 'ember-leaflet/layers/tile';

export default EmberLeafletComponent.extend({
  childLayers: [
    Layer.extend({
      _newLayer: function() {
        return new L.Google('ROADMAP');
    }})
  ]
});
