var size = 0;
var placement = 'point';

var style_kenya_all_towns_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Yu Gothic UI Semibold\', sans-serif";
    var labelFill = "#33a02c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("TOWN_NAME") !== null) {
        labelText = String(feature.get("TOWN_NAME"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.800000000000001 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
