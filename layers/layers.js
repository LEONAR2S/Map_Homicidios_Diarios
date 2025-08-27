var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1 = new ol.format.GeoJSON();
var features_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1 = format_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.readFeatures(json_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.addFeatures(features_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1);
var lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1, 
                style: style_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1,
                popuplayertitle: 'VÍCTIMAS REPORTADAS POR DELITO DE HOMICIDIO - 2025 -',
                interactive: true,
    title: 'VÍCTIMAS REPORTADAS POR DELITO DE HOMICIDIO - 2025 -<br />\
    <img src="styles/legend/VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1_0.png" /> 3 - 72<br />\
    <img src="styles/legend/VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1_1.png" /> 72 - 210<br />\
    <img src="styles/legend/VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1_2.png" /> 210 - 532<br />\
    <img src="styles/legend/VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1_3.png" /> 532 - 826<br />\
    <img src="styles/legend/VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1_4.png" /> 826 - 14262<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1];
lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.set('fieldAliases', {'adm1_code': 'adm1_code', 'ID': 'ID', 'Entidad Federativa': 'Entidad Federativa', 'Homicidios Totales': 'Homicidios Totales', });
lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.set('fieldImages', {'adm1_code': 'TextEdit', 'ID': 'Range', 'Entidad Federativa': 'TextEdit', 'Homicidios Totales': 'Range', });
lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.set('fieldLabels', {'adm1_code': 'no label', 'ID': 'inline label - always visible', 'Entidad Federativa': 'inline label - always visible', 'Homicidios Totales': 'inline label - always visible', });
lyr_VCTIMASREPORTADASPORDELITODEHOMICIDIO2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});