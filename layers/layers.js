var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test_1 = new ol.format.GeoJSON();
var features_test_1 = format_test_1.readFeatures(json_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_1.addFeatures(features_test_1);
var lyr_test_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_1, 
                style: style_test_1,
                popuplayertitle: "test",
                interactive: true,
                    title: '<img src="styles/legend/test_1.png" /> test'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_test_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_test_1];
lyr_test_1.set('fieldAliases', {'Id': 'Id', 'no': 'no', });
lyr_test_1.set('fieldImages', {'Id': 'Hidden', 'no': 'TextEdit', });
lyr_test_1.set('fieldLabels', {'no': 'inline label - always visible', });
lyr_test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});