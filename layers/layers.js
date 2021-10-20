var wms_layers = [];

var format_kenya_all_towns_0 = new ol.format.GeoJSON();
var features_kenya_all_towns_0 = format_kenya_all_towns_0.readFeatures(json_kenya_all_towns_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_all_towns_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_all_towns_0.addFeatures(features_kenya_all_towns_0);
var lyr_kenya_all_towns_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kenya_all_towns_0, 
                style: style_kenya_all_towns_0,
                interactive: true,
                title: '<img src="styles/legend/kenya_all_towns_0.png" /> kenya_all_towns'
            });
var format_ken_major_towns_1 = new ol.format.GeoJSON();
var features_ken_major_towns_1 = format_ken_major_towns_1.readFeatures(json_ken_major_towns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_major_towns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_major_towns_1.addFeatures(features_ken_major_towns_1);
var lyr_ken_major_towns_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ken_major_towns_1, 
                style: style_ken_major_towns_1,
                interactive: true,
                title: '<img src="styles/legend/ken_major_towns_1.png" /> ken_major_towns'
            });
var format_ken_admbndl_admALL_iebc_itos_20191031_2 = new ol.format.GeoJSON();
var features_ken_admbndl_admALL_iebc_itos_20191031_2 = format_ken_admbndl_admALL_iebc_itos_20191031_2.readFeatures(json_ken_admbndl_admALL_iebc_itos_20191031_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbndl_admALL_iebc_itos_20191031_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbndl_admALL_iebc_itos_20191031_2.addFeatures(features_ken_admbndl_admALL_iebc_itos_20191031_2);
var lyr_ken_admbndl_admALL_iebc_itos_20191031_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ken_admbndl_admALL_iebc_itos_20191031_2, 
                style: style_ken_admbndl_admALL_iebc_itos_20191031_2,
                interactive: true,
                title: '<img src="styles/legend/ken_admbndl_admALL_iebc_itos_20191031_2.png" /> ken_admbndl_admALL_iebc_itos_20191031'
            });
var format_KenyaAdministrationBoundary_3 = new ol.format.GeoJSON();
var features_KenyaAdministrationBoundary_3 = format_KenyaAdministrationBoundary_3.readFeatures(json_KenyaAdministrationBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KenyaAdministrationBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KenyaAdministrationBoundary_3.addFeatures(features_KenyaAdministrationBoundary_3);
var lyr_KenyaAdministrationBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KenyaAdministrationBoundary_3, 
                style: style_KenyaAdministrationBoundary_3,
                interactive: true,
                title: '<img src="styles/legend/KenyaAdministrationBoundary_3.png" /> Kenya Administration Boundary'
            });

lyr_kenya_all_towns_0.setVisible(true);lyr_ken_major_towns_1.setVisible(true);lyr_ken_admbndl_admALL_iebc_itos_20191031_2.setVisible(true);lyr_KenyaAdministrationBoundary_3.setVisible(true);
var layersList = [lyr_kenya_all_towns_0,lyr_ken_major_towns_1,lyr_ken_admbndl_admALL_iebc_itos_20191031_2,lyr_KenyaAdministrationBoundary_3];
lyr_kenya_all_towns_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TOWN_NAME': 'TOWN_NAME', 'TOWN_ID': 'TOWN_ID', 'TOWN_TYPE': 'TOWN_TYPE', });
lyr_ken_major_towns_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KTOWNS_': 'KTOWNS_', 'KTOWNS_ID': 'KTOWNS_ID', 'TOWN_NAME': 'TOWN_NAME', });
lyr_ken_admbndl_admALL_iebc_itos_20191031_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'admLevel': 'admLevel', 'date': 'date', 'validON': 'validON', 'validTo': 'validTo', });
lyr_KenyaAdministrationBoundary_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1EN': 'ADM0ALT1EN', 'ADM0ALT2EN': 'ADM0ALT2EN', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Area': 'Area', });
lyr_kenya_all_towns_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TOWN_NAME': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN_TYPE': 'TextEdit', });
lyr_ken_major_towns_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KTOWNS_': 'TextEdit', 'KTOWNS_ID': 'TextEdit', 'TOWN_NAME': 'TextEdit', });
lyr_ken_admbndl_admALL_iebc_itos_20191031_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'admLevel': 'Range', 'date': 'DateTime', 'validON': 'DateTime', 'validTo': 'DateTime', });
lyr_KenyaAdministrationBoundary_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1EN': 'TextEdit', 'ADM0ALT2EN': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Area': 'TextEdit', });
lyr_kenya_all_towns_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TOWN_NAME': 'no label', 'TOWN_ID': 'no label', 'TOWN_TYPE': 'no label', });
lyr_ken_major_towns_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KTOWNS_': 'no label', 'KTOWNS_ID': 'no label', 'TOWN_NAME': 'no label', });
lyr_ken_admbndl_admALL_iebc_itos_20191031_2.set('fieldLabels', {'Shape_Leng': 'no label', 'admLevel': 'no label', 'date': 'no label', 'validON': 'no label', 'validTo': 'no label', });
lyr_KenyaAdministrationBoundary_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1EN': 'no label', 'ADM0ALT2EN': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Area': 'no label', });
lyr_KenyaAdministrationBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});