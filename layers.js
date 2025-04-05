var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CNL02_1_TIR_ortho_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CNL02_1_TIR_ortho<br />\
    <img src="styles/legend/CNL02_1_TIR_ortho_1_0.png" /> 0<br />\
    <img src="styles/legend/CNL02_1_TIR_ortho_1_1.png" /> 6178<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CNL02_1_TIR_ortho_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1262776.363188, 5629304.334768, 1263046.364360, 5629589.502386]
        })
    });
var format_HotspotB1R1S6_2 = new ol.format.GeoJSON();
var features_HotspotB1R1S6_2 = format_HotspotB1R1S6_2.readFeatures(json_HotspotB1R1S6_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R1S6_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R1S6_2.addFeatures(features_HotspotB1R1S6_2);
var lyr_HotspotB1R1S6_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R1S6_2, 
                style: style_HotspotB1R1S6_2,
                popuplayertitle: 'Hotspot-B1-R1-S6',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R1S6_2.png" /> Hotspot-B1-R1-S6'
            });
var format_HotspotB1R1S10_3 = new ol.format.GeoJSON();
var features_HotspotB1R1S10_3 = format_HotspotB1R1S10_3.readFeatures(json_HotspotB1R1S10_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R1S10_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R1S10_3.addFeatures(features_HotspotB1R1S10_3);
var lyr_HotspotB1R1S10_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R1S10_3, 
                style: style_HotspotB1R1S10_3,
                popuplayertitle: 'Hotspot-B1-R1-S10',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R1S10_3.png" /> Hotspot-B1-R1-S10'
            });
var format_HotspotB1R1S14_4 = new ol.format.GeoJSON();
var features_HotspotB1R1S14_4 = format_HotspotB1R1S14_4.readFeatures(json_HotspotB1R1S14_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R1S14_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R1S14_4.addFeatures(features_HotspotB1R1S14_4);
var lyr_HotspotB1R1S14_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R1S14_4, 
                style: style_HotspotB1R1S14_4,
                popuplayertitle: 'Hotspot-B1-R1-S14',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R1S14_4.png" /> Hotspot-B1-R1-S14'
            });
var format_HotspotB1R2S9_5 = new ol.format.GeoJSON();
var features_HotspotB1R2S9_5 = format_HotspotB1R2S9_5.readFeatures(json_HotspotB1R2S9_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R2S9_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R2S9_5.addFeatures(features_HotspotB1R2S9_5);
var lyr_HotspotB1R2S9_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R2S9_5, 
                style: style_HotspotB1R2S9_5,
                popuplayertitle: 'Hotspot-B1-R2-S9',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R2S9_5.png" /> Hotspot-B1-R2-S9'
            });
var format_HotspotB1R2S13_6 = new ol.format.GeoJSON();
var features_HotspotB1R2S13_6 = format_HotspotB1R2S13_6.readFeatures(json_HotspotB1R2S13_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R2S13_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R2S13_6.addFeatures(features_HotspotB1R2S13_6);
var lyr_HotspotB1R2S13_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R2S13_6, 
                style: style_HotspotB1R2S13_6,
                popuplayertitle: 'Hotspot-B1-R2-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R2S13_6.png" /> Hotspot-B1-R2-S13'
            });
var format_HotspotB1R3S10_7 = new ol.format.GeoJSON();
var features_HotspotB1R3S10_7 = format_HotspotB1R3S10_7.readFeatures(json_HotspotB1R3S10_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R3S10_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R3S10_7.addFeatures(features_HotspotB1R3S10_7);
var lyr_HotspotB1R3S10_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R3S10_7, 
                style: style_HotspotB1R3S10_7,
                popuplayertitle: 'Hotspot-B1-R3-S10',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R3S10_7.png" /> Hotspot-B1-R3-S10'
            });
var format_HotspotB1R3S12_8 = new ol.format.GeoJSON();
var features_HotspotB1R3S12_8 = format_HotspotB1R3S12_8.readFeatures(json_HotspotB1R3S12_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R3S12_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R3S12_8.addFeatures(features_HotspotB1R3S12_8);
var lyr_HotspotB1R3S12_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R3S12_8, 
                style: style_HotspotB1R3S12_8,
                popuplayertitle: 'Hotspot-B1-R3-S12',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R3S12_8.png" /> Hotspot-B1-R3-S12'
            });
var format_HotspotB1R3S29_9 = new ol.format.GeoJSON();
var features_HotspotB1R3S29_9 = format_HotspotB1R3S29_9.readFeatures(json_HotspotB1R3S29_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R3S29_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R3S29_9.addFeatures(features_HotspotB1R3S29_9);
var lyr_HotspotB1R3S29_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R3S29_9, 
                style: style_HotspotB1R3S29_9,
                popuplayertitle: 'Hotspot-B1-R3-S29',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R3S29_9.png" /> Hotspot-B1-R3-S29'
            });
var format_HotspotB1R4S6_10 = new ol.format.GeoJSON();
var features_HotspotB1R4S6_10 = format_HotspotB1R4S6_10.readFeatures(json_HotspotB1R4S6_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R4S6_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R4S6_10.addFeatures(features_HotspotB1R4S6_10);
var lyr_HotspotB1R4S6_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R4S6_10, 
                style: style_HotspotB1R4S6_10,
                popuplayertitle: 'Hotspot-B1-R4-S6',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R4S6_10.png" /> Hotspot-B1-R4-S6'
            });
var format_HotspotB1R4S16_11 = new ol.format.GeoJSON();
var features_HotspotB1R4S16_11 = format_HotspotB1R4S16_11.readFeatures(json_HotspotB1R4S16_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R4S16_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R4S16_11.addFeatures(features_HotspotB1R4S16_11);
var lyr_HotspotB1R4S16_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R4S16_11, 
                style: style_HotspotB1R4S16_11,
                popuplayertitle: 'Hotspot-B1-R4-S16',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R4S16_11.png" /> Hotspot-B1-R4-S16'
            });
var format_HotspotB1R4S24_12 = new ol.format.GeoJSON();
var features_HotspotB1R4S24_12 = format_HotspotB1R4S24_12.readFeatures(json_HotspotB1R4S24_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R4S24_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R4S24_12.addFeatures(features_HotspotB1R4S24_12);
var lyr_HotspotB1R4S24_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R4S24_12, 
                style: style_HotspotB1R4S24_12,
                popuplayertitle: 'Hotspot-B1-R4-S24',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R4S24_12.png" /> Hotspot-B1-R4-S24'
            });
var format_HotspotB1R4S31_13 = new ol.format.GeoJSON();
var features_HotspotB1R4S31_13 = format_HotspotB1R4S31_13.readFeatures(json_HotspotB1R4S31_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R4S31_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R4S31_13.addFeatures(features_HotspotB1R4S31_13);
var lyr_HotspotB1R4S31_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R4S31_13, 
                style: style_HotspotB1R4S31_13,
                popuplayertitle: 'Hotspot-B1-R4-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R4S31_13.png" /> Hotspot-B1-R4-S31'
            });
var format_HotspotB1R4S40_14 = new ol.format.GeoJSON();
var features_HotspotB1R4S40_14 = format_HotspotB1R4S40_14.readFeatures(json_HotspotB1R4S40_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R4S40_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R4S40_14.addFeatures(features_HotspotB1R4S40_14);
var lyr_HotspotB1R4S40_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R4S40_14, 
                style: style_HotspotB1R4S40_14,
                popuplayertitle: 'Hotspot-B1-R4-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R4S40_14.png" /> Hotspot-B1-R4-S40'
            });
var format_HotspotB1R5S7_15 = new ol.format.GeoJSON();
var features_HotspotB1R5S7_15 = format_HotspotB1R5S7_15.readFeatures(json_HotspotB1R5S7_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S7_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S7_15.addFeatures(features_HotspotB1R5S7_15);
var lyr_HotspotB1R5S7_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S7_15, 
                style: style_HotspotB1R5S7_15,
                popuplayertitle: 'Hotspot-B1-R5-S7',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S7_15.png" /> Hotspot-B1-R5-S7'
            });
var format_HotspotB1R5S13_16 = new ol.format.GeoJSON();
var features_HotspotB1R5S13_16 = format_HotspotB1R5S13_16.readFeatures(json_HotspotB1R5S13_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S13_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S13_16.addFeatures(features_HotspotB1R5S13_16);
var lyr_HotspotB1R5S13_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S13_16, 
                style: style_HotspotB1R5S13_16,
                popuplayertitle: 'Hotspot-B1-R5-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S13_16.png" /> Hotspot-B1-R5-S13'
            });
var format_HotspotB1R5S18_17 = new ol.format.GeoJSON();
var features_HotspotB1R5S18_17 = format_HotspotB1R5S18_17.readFeatures(json_HotspotB1R5S18_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S18_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S18_17.addFeatures(features_HotspotB1R5S18_17);
var lyr_HotspotB1R5S18_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S18_17, 
                style: style_HotspotB1R5S18_17,
                popuplayertitle: 'Hotspot-B1-R5-S18',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S18_17.png" /> Hotspot-B1-R5-S18'
            });
var format_HotspotB1R5S26_18 = new ol.format.GeoJSON();
var features_HotspotB1R5S26_18 = format_HotspotB1R5S26_18.readFeatures(json_HotspotB1R5S26_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S26_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S26_18.addFeatures(features_HotspotB1R5S26_18);
var lyr_HotspotB1R5S26_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S26_18, 
                style: style_HotspotB1R5S26_18,
                popuplayertitle: 'Hotspot-B1-R5-S26',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S26_18.png" /> Hotspot-B1-R5-S26'
            });
var format_HotspotB1R5S27_19 = new ol.format.GeoJSON();
var features_HotspotB1R5S27_19 = format_HotspotB1R5S27_19.readFeatures(json_HotspotB1R5S27_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S27_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S27_19.addFeatures(features_HotspotB1R5S27_19);
var lyr_HotspotB1R5S27_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S27_19, 
                style: style_HotspotB1R5S27_19,
                popuplayertitle: 'Hotspot-B1-R5-S27',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S27_19.png" /> Hotspot-B1-R5-S27'
            });
var format_HotspotB1R5S28_20 = new ol.format.GeoJSON();
var features_HotspotB1R5S28_20 = format_HotspotB1R5S28_20.readFeatures(json_HotspotB1R5S28_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S28_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S28_20.addFeatures(features_HotspotB1R5S28_20);
var lyr_HotspotB1R5S28_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S28_20, 
                style: style_HotspotB1R5S28_20,
                popuplayertitle: 'Hotspot-B1-R5-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S28_20.png" /> Hotspot-B1-R5-S28'
            });
var format_HotspotB1R5S31_21 = new ol.format.GeoJSON();
var features_HotspotB1R5S31_21 = format_HotspotB1R5S31_21.readFeatures(json_HotspotB1R5S31_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S31_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S31_21.addFeatures(features_HotspotB1R5S31_21);
var lyr_HotspotB1R5S31_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S31_21, 
                style: style_HotspotB1R5S31_21,
                popuplayertitle: 'Hotspot-B1-R5-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S31_21.png" /> Hotspot-B1-R5-S31'
            });
var format_HotspotB1R5S43_22 = new ol.format.GeoJSON();
var features_HotspotB1R5S43_22 = format_HotspotB1R5S43_22.readFeatures(json_HotspotB1R5S43_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S43_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S43_22.addFeatures(features_HotspotB1R5S43_22);
var lyr_HotspotB1R5S43_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S43_22, 
                style: style_HotspotB1R5S43_22,
                popuplayertitle: 'Hotspot-B1-R5-S43',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S43_22.png" /> Hotspot-B1-R5-S43'
            });
var format_HotspotB1R5S44_23 = new ol.format.GeoJSON();
var features_HotspotB1R5S44_23 = format_HotspotB1R5S44_23.readFeatures(json_HotspotB1R5S44_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R5S44_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R5S44_23.addFeatures(features_HotspotB1R5S44_23);
var lyr_HotspotB1R5S44_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R5S44_23, 
                style: style_HotspotB1R5S44_23,
                popuplayertitle: 'Hotspot-B1-R5-S44',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R5S44_23.png" /> Hotspot-B1-R5-S44'
            });
var format_HotspotB1R6S3_24 = new ol.format.GeoJSON();
var features_HotspotB1R6S3_24 = format_HotspotB1R6S3_24.readFeatures(json_HotspotB1R6S3_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S3_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S3_24.addFeatures(features_HotspotB1R6S3_24);
var lyr_HotspotB1R6S3_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S3_24, 
                style: style_HotspotB1R6S3_24,
                popuplayertitle: 'Hotspot-B1-R6-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S3_24.png" /> Hotspot-B1-R6-S3'
            });
var format_HotspotB1R6S4_25 = new ol.format.GeoJSON();
var features_HotspotB1R6S4_25 = format_HotspotB1R6S4_25.readFeatures(json_HotspotB1R6S4_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S4_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S4_25.addFeatures(features_HotspotB1R6S4_25);
var lyr_HotspotB1R6S4_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S4_25, 
                style: style_HotspotB1R6S4_25,
                popuplayertitle: 'Hotspot-B1-R6-S4',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S4_25.png" /> Hotspot-B1-R6-S4'
            });
var format_HotspotB1R6S11_26 = new ol.format.GeoJSON();
var features_HotspotB1R6S11_26 = format_HotspotB1R6S11_26.readFeatures(json_HotspotB1R6S11_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S11_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S11_26.addFeatures(features_HotspotB1R6S11_26);
var lyr_HotspotB1R6S11_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S11_26, 
                style: style_HotspotB1R6S11_26,
                popuplayertitle: 'Hotspot-B1-R6-S11',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S11_26.png" /> Hotspot-B1-R6-S11'
            });
var format_HotspotB1R6S13_27 = new ol.format.GeoJSON();
var features_HotspotB1R6S13_27 = format_HotspotB1R6S13_27.readFeatures(json_HotspotB1R6S13_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S13_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S13_27.addFeatures(features_HotspotB1R6S13_27);
var lyr_HotspotB1R6S13_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S13_27, 
                style: style_HotspotB1R6S13_27,
                popuplayertitle: 'Hotspot-B1-R6-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S13_27.png" /> Hotspot-B1-R6-S13'
            });
var format_HotspotB1R6S16_28 = new ol.format.GeoJSON();
var features_HotspotB1R6S16_28 = format_HotspotB1R6S16_28.readFeatures(json_HotspotB1R6S16_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S16_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S16_28.addFeatures(features_HotspotB1R6S16_28);
var lyr_HotspotB1R6S16_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S16_28, 
                style: style_HotspotB1R6S16_28,
                popuplayertitle: 'Hotspot-B1-R6-S16',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S16_28.png" /> Hotspot-B1-R6-S16'
            });
var format_HotspotB1R6S24_29 = new ol.format.GeoJSON();
var features_HotspotB1R6S24_29 = format_HotspotB1R6S24_29.readFeatures(json_HotspotB1R6S24_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S24_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S24_29.addFeatures(features_HotspotB1R6S24_29);
var lyr_HotspotB1R6S24_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S24_29, 
                style: style_HotspotB1R6S24_29,
                popuplayertitle: 'Hotspot-B1-R6-S24',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S24_29.png" /> Hotspot-B1-R6-S24'
            });
var format_HotspotB1R6S27_30 = new ol.format.GeoJSON();
var features_HotspotB1R6S27_30 = format_HotspotB1R6S27_30.readFeatures(json_HotspotB1R6S27_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S27_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S27_30.addFeatures(features_HotspotB1R6S27_30);
var lyr_HotspotB1R6S27_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S27_30, 
                style: style_HotspotB1R6S27_30,
                popuplayertitle: 'Hotspot-B1-R6-S27',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S27_30.png" /> Hotspot-B1-R6-S27'
            });
var format_HotspotB1R6S33_31 = new ol.format.GeoJSON();
var features_HotspotB1R6S33_31 = format_HotspotB1R6S33_31.readFeatures(json_HotspotB1R6S33_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S33_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S33_31.addFeatures(features_HotspotB1R6S33_31);
var lyr_HotspotB1R6S33_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S33_31, 
                style: style_HotspotB1R6S33_31,
                popuplayertitle: 'Hotspot-B1-R6-S33',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S33_31.png" /> Hotspot-B1-R6-S33'
            });
var format_HotspotB1R6S50_32 = new ol.format.GeoJSON();
var features_HotspotB1R6S50_32 = format_HotspotB1R6S50_32.readFeatures(json_HotspotB1R6S50_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R6S50_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R6S50_32.addFeatures(features_HotspotB1R6S50_32);
var lyr_HotspotB1R6S50_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R6S50_32, 
                style: style_HotspotB1R6S50_32,
                popuplayertitle: 'Hotspot-B1-R6-S50',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R6S50_32.png" /> Hotspot-B1-R6-S50'
            });
var format_HotspotB1R7S5_33 = new ol.format.GeoJSON();
var features_HotspotB1R7S5_33 = format_HotspotB1R7S5_33.readFeatures(json_HotspotB1R7S5_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S5_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S5_33.addFeatures(features_HotspotB1R7S5_33);
var lyr_HotspotB1R7S5_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S5_33, 
                style: style_HotspotB1R7S5_33,
                popuplayertitle: 'Hotspot-B1-R7-S5',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S5_33.png" /> Hotspot-B1-R7-S5'
            });
var format_HotspotB1R7S61_34 = new ol.format.GeoJSON();
var features_HotspotB1R7S61_34 = format_HotspotB1R7S61_34.readFeatures(json_HotspotB1R7S61_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S61_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S61_34.addFeatures(features_HotspotB1R7S61_34);
var lyr_HotspotB1R7S61_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S61_34, 
                style: style_HotspotB1R7S61_34,
                popuplayertitle: 'Hotspot-B1-R7-S6-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S61_34.png" /> Hotspot-B1-R7-S6-1'
            });
var format_HotspotB1R7S62_35 = new ol.format.GeoJSON();
var features_HotspotB1R7S62_35 = format_HotspotB1R7S62_35.readFeatures(json_HotspotB1R7S62_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S62_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S62_35.addFeatures(features_HotspotB1R7S62_35);
var lyr_HotspotB1R7S62_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S62_35, 
                style: style_HotspotB1R7S62_35,
                popuplayertitle: 'Hotspot-B1-R7-S6-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S62_35.png" /> Hotspot-B1-R7-S6-2'
            });
var format_HotspotB1R7S16_36 = new ol.format.GeoJSON();
var features_HotspotB1R7S16_36 = format_HotspotB1R7S16_36.readFeatures(json_HotspotB1R7S16_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S16_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S16_36.addFeatures(features_HotspotB1R7S16_36);
var lyr_HotspotB1R7S16_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S16_36, 
                style: style_HotspotB1R7S16_36,
                popuplayertitle: 'Hotspot-B1-R7-S16',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S16_36.png" /> Hotspot-B1-R7-S16'
            });
var format_HotspotB1R7S22_37 = new ol.format.GeoJSON();
var features_HotspotB1R7S22_37 = format_HotspotB1R7S22_37.readFeatures(json_HotspotB1R7S22_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S22_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S22_37.addFeatures(features_HotspotB1R7S22_37);
var lyr_HotspotB1R7S22_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S22_37, 
                style: style_HotspotB1R7S22_37,
                popuplayertitle: 'Hotspot-B1-R7-S22',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S22_37.png" /> Hotspot-B1-R7-S22'
            });
var format_HotspotB1R7S24_38 = new ol.format.GeoJSON();
var features_HotspotB1R7S24_38 = format_HotspotB1R7S24_38.readFeatures(json_HotspotB1R7S24_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S24_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S24_38.addFeatures(features_HotspotB1R7S24_38);
var lyr_HotspotB1R7S24_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S24_38, 
                style: style_HotspotB1R7S24_38,
                popuplayertitle: 'Hotspot-B1-R7-S24',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S24_38.png" /> Hotspot-B1-R7-S24'
            });
var format_HotspotB1R7S321_39 = new ol.format.GeoJSON();
var features_HotspotB1R7S321_39 = format_HotspotB1R7S321_39.readFeatures(json_HotspotB1R7S321_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S321_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S321_39.addFeatures(features_HotspotB1R7S321_39);
var lyr_HotspotB1R7S321_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S321_39, 
                style: style_HotspotB1R7S321_39,
                popuplayertitle: 'Hotspot-B1-R7-S32-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S321_39.png" /> Hotspot-B1-R7-S32-1'
            });
var format_HotspotB1R7S322_40 = new ol.format.GeoJSON();
var features_HotspotB1R7S322_40 = format_HotspotB1R7S322_40.readFeatures(json_HotspotB1R7S322_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S322_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S322_40.addFeatures(features_HotspotB1R7S322_40);
var lyr_HotspotB1R7S322_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S322_40, 
                style: style_HotspotB1R7S322_40,
                popuplayertitle: 'Hotspot-B1-R7-S32-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S322_40.png" /> Hotspot-B1-R7-S32-2'
            });
var format_HotspotB1R7S323_41 = new ol.format.GeoJSON();
var features_HotspotB1R7S323_41 = format_HotspotB1R7S323_41.readFeatures(json_HotspotB1R7S323_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S323_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S323_41.addFeatures(features_HotspotB1R7S323_41);
var lyr_HotspotB1R7S323_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S323_41, 
                style: style_HotspotB1R7S323_41,
                popuplayertitle: 'Hotspot-B1-R7-S32-3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S323_41.png" /> Hotspot-B1-R7-S32-3'
            });
var format_HotspotB1R7S324_42 = new ol.format.GeoJSON();
var features_HotspotB1R7S324_42 = format_HotspotB1R7S324_42.readFeatures(json_HotspotB1R7S324_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S324_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S324_42.addFeatures(features_HotspotB1R7S324_42);
var lyr_HotspotB1R7S324_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S324_42, 
                style: style_HotspotB1R7S324_42,
                popuplayertitle: 'Hotspot-B1-R7-S32-4',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S324_42.png" /> Hotspot-B1-R7-S32-4'
            });
var format_HotspotB1R7S37_43 = new ol.format.GeoJSON();
var features_HotspotB1R7S37_43 = format_HotspotB1R7S37_43.readFeatures(json_HotspotB1R7S37_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S37_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S37_43.addFeatures(features_HotspotB1R7S37_43);
var lyr_HotspotB1R7S37_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S37_43, 
                style: style_HotspotB1R7S37_43,
                popuplayertitle: 'Hotspot-B1-R7-S37',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S37_43.png" /> Hotspot-B1-R7-S37'
            });
var format_HotspotB1R7S621_44 = new ol.format.GeoJSON();
var features_HotspotB1R7S621_44 = format_HotspotB1R7S621_44.readFeatures(json_HotspotB1R7S621_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S621_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S621_44.addFeatures(features_HotspotB1R7S621_44);
var lyr_HotspotB1R7S621_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S621_44, 
                style: style_HotspotB1R7S621_44,
                popuplayertitle: 'Hotspot-B1-R7-S62-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S621_44.png" /> Hotspot-B1-R7-S62-1'
            });
var format_HotspotB1R7S622_45 = new ol.format.GeoJSON();
var features_HotspotB1R7S622_45 = format_HotspotB1R7S622_45.readFeatures(json_HotspotB1R7S622_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R7S622_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R7S622_45.addFeatures(features_HotspotB1R7S622_45);
var lyr_HotspotB1R7S622_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R7S622_45, 
                style: style_HotspotB1R7S622_45,
                popuplayertitle: 'Hotspot-B1-R7-S62-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R7S622_45.png" /> Hotspot-B1-R7-S62-2'
            });
var format_HotspotB1R8S71_46 = new ol.format.GeoJSON();
var features_HotspotB1R8S71_46 = format_HotspotB1R8S71_46.readFeatures(json_HotspotB1R8S71_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S71_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S71_46.addFeatures(features_HotspotB1R8S71_46);
var lyr_HotspotB1R8S71_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S71_46, 
                style: style_HotspotB1R8S71_46,
                popuplayertitle: 'Hotspot-B1-R8-S7-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S71_46.png" /> Hotspot-B1-R8-S7-1'
            });
var format_HotspotB1R8S72_47 = new ol.format.GeoJSON();
var features_HotspotB1R8S72_47 = format_HotspotB1R8S72_47.readFeatures(json_HotspotB1R8S72_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S72_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S72_47.addFeatures(features_HotspotB1R8S72_47);
var lyr_HotspotB1R8S72_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S72_47, 
                style: style_HotspotB1R8S72_47,
                popuplayertitle: 'Hotspot-B1-R8-S7-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S72_47.png" /> Hotspot-B1-R8-S7-2'
            });
var format_HotspotB1R8S14_48 = new ol.format.GeoJSON();
var features_HotspotB1R8S14_48 = format_HotspotB1R8S14_48.readFeatures(json_HotspotB1R8S14_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S14_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S14_48.addFeatures(features_HotspotB1R8S14_48);
var lyr_HotspotB1R8S14_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S14_48, 
                style: style_HotspotB1R8S14_48,
                popuplayertitle: 'Hotspot-B1-R8-S14',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S14_48.png" /> Hotspot-B1-R8-S14'
            });
var format_HotspotB1R8S19_49 = new ol.format.GeoJSON();
var features_HotspotB1R8S19_49 = format_HotspotB1R8S19_49.readFeatures(json_HotspotB1R8S19_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S19_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S19_49.addFeatures(features_HotspotB1R8S19_49);
var lyr_HotspotB1R8S19_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S19_49, 
                style: style_HotspotB1R8S19_49,
                popuplayertitle: 'Hotspot-B1-R8-S19',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S19_49.png" /> Hotspot-B1-R8-S19'
            });
var format_HotspotB1R8S23_50 = new ol.format.GeoJSON();
var features_HotspotB1R8S23_50 = format_HotspotB1R8S23_50.readFeatures(json_HotspotB1R8S23_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S23_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S23_50.addFeatures(features_HotspotB1R8S23_50);
var lyr_HotspotB1R8S23_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S23_50, 
                style: style_HotspotB1R8S23_50,
                popuplayertitle: 'Hotspot-B1-R8-S23',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S23_50.png" /> Hotspot-B1-R8-S23'
            });
var format_HotspotB1R8S30_51 = new ol.format.GeoJSON();
var features_HotspotB1R8S30_51 = format_HotspotB1R8S30_51.readFeatures(json_HotspotB1R8S30_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S30_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S30_51.addFeatures(features_HotspotB1R8S30_51);
var lyr_HotspotB1R8S30_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S30_51, 
                style: style_HotspotB1R8S30_51,
                popuplayertitle: 'Hotspot-B1-R8-S30',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S30_51.png" /> Hotspot-B1-R8-S30'
            });
var format_HotspotB1R8S35_52 = new ol.format.GeoJSON();
var features_HotspotB1R8S35_52 = format_HotspotB1R8S35_52.readFeatures(json_HotspotB1R8S35_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S35_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S35_52.addFeatures(features_HotspotB1R8S35_52);
var lyr_HotspotB1R8S35_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S35_52, 
                style: style_HotspotB1R8S35_52,
                popuplayertitle: 'Hotspot-B1-R8-S35',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S35_52.png" /> Hotspot-B1-R8-S35'
            });
var format_HotspotB1R8S41_53 = new ol.format.GeoJSON();
var features_HotspotB1R8S41_53 = format_HotspotB1R8S41_53.readFeatures(json_HotspotB1R8S41_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S41_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S41_53.addFeatures(features_HotspotB1R8S41_53);
var lyr_HotspotB1R8S41_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S41_53, 
                style: style_HotspotB1R8S41_53,
                popuplayertitle: 'Hotspot-B1-R8-S41',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S41_53.png" /> Hotspot-B1-R8-S41'
            });
var format_HotspotB1R8S51_54 = new ol.format.GeoJSON();
var features_HotspotB1R8S51_54 = format_HotspotB1R8S51_54.readFeatures(json_HotspotB1R8S51_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S51_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S51_54.addFeatures(features_HotspotB1R8S51_54);
var lyr_HotspotB1R8S51_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S51_54, 
                style: style_HotspotB1R8S51_54,
                popuplayertitle: 'Hotspot-B1-R8-S51',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S51_54.png" /> Hotspot-B1-R8-S51'
            });
var format_HotspotB1R8S55_55 = new ol.format.GeoJSON();
var features_HotspotB1R8S55_55 = format_HotspotB1R8S55_55.readFeatures(json_HotspotB1R8S55_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S55_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S55_55.addFeatures(features_HotspotB1R8S55_55);
var lyr_HotspotB1R8S55_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S55_55, 
                style: style_HotspotB1R8S55_55,
                popuplayertitle: 'Hotspot-B1-R8-S55',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S55_55.png" /> Hotspot-B1-R8-S55'
            });
var format_HotspotB1R8S59_56 = new ol.format.GeoJSON();
var features_HotspotB1R8S59_56 = format_HotspotB1R8S59_56.readFeatures(json_HotspotB1R8S59_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S59_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S59_56.addFeatures(features_HotspotB1R8S59_56);
var lyr_HotspotB1R8S59_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S59_56, 
                style: style_HotspotB1R8S59_56,
                popuplayertitle: 'Hotspot-B1-R8-S59',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S59_56.png" /> Hotspot-B1-R8-S59'
            });
var format_HotspotB1R8S61_57 = new ol.format.GeoJSON();
var features_HotspotB1R8S61_57 = format_HotspotB1R8S61_57.readFeatures(json_HotspotB1R8S61_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S61_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S61_57.addFeatures(features_HotspotB1R8S61_57);
var lyr_HotspotB1R8S61_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S61_57, 
                style: style_HotspotB1R8S61_57,
                popuplayertitle: 'Hotspot-B1-R8-S61',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S61_57.png" /> Hotspot-B1-R8-S61'
            });
var format_HotspotB1R8S62_58 = new ol.format.GeoJSON();
var features_HotspotB1R8S62_58 = format_HotspotB1R8S62_58.readFeatures(json_HotspotB1R8S62_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S62_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S62_58.addFeatures(features_HotspotB1R8S62_58);
var lyr_HotspotB1R8S62_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S62_58, 
                style: style_HotspotB1R8S62_58,
                popuplayertitle: 'Hotspot-B1-R8-S62',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S62_58.png" /> Hotspot-B1-R8-S62'
            });
var format_HotspotB1R8S64_59 = new ol.format.GeoJSON();
var features_HotspotB1R8S64_59 = format_HotspotB1R8S64_59.readFeatures(json_HotspotB1R8S64_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S64_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S64_59.addFeatures(features_HotspotB1R8S64_59);
var lyr_HotspotB1R8S64_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S64_59, 
                style: style_HotspotB1R8S64_59,
                popuplayertitle: 'Hotspot-B1-R8-S64',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S64_59.png" /> Hotspot-B1-R8-S64'
            });
var format_HotspotB1R8S71_60 = new ol.format.GeoJSON();
var features_HotspotB1R8S71_60 = format_HotspotB1R8S71_60.readFeatures(json_HotspotB1R8S71_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R8S71_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R8S71_60.addFeatures(features_HotspotB1R8S71_60);
var lyr_HotspotB1R8S71_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R8S71_60, 
                style: style_HotspotB1R8S71_60,
                popuplayertitle: 'Hotspot-B1-R8-S71',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R8S71_60.png" /> Hotspot-B1-R8-S71'
            });
var format_HotspotB1R9S6_61 = new ol.format.GeoJSON();
var features_HotspotB1R9S6_61 = format_HotspotB1R9S6_61.readFeatures(json_HotspotB1R9S6_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S6_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S6_61.addFeatures(features_HotspotB1R9S6_61);
var lyr_HotspotB1R9S6_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S6_61, 
                style: style_HotspotB1R9S6_61,
                popuplayertitle: 'Hotspot-B1-R9-S6',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S6_61.png" /> Hotspot-B1-R9-S6'
            });
var format_HotspotB1R9S9_62 = new ol.format.GeoJSON();
var features_HotspotB1R9S9_62 = format_HotspotB1R9S9_62.readFeatures(json_HotspotB1R9S9_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S9_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S9_62.addFeatures(features_HotspotB1R9S9_62);
var lyr_HotspotB1R9S9_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S9_62, 
                style: style_HotspotB1R9S9_62,
                popuplayertitle: 'Hotspot-B1-R9-S9',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S9_62.png" /> Hotspot-B1-R9-S9'
            });
var format_HotspotB1R9S15_63 = new ol.format.GeoJSON();
var features_HotspotB1R9S15_63 = format_HotspotB1R9S15_63.readFeatures(json_HotspotB1R9S15_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S15_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S15_63.addFeatures(features_HotspotB1R9S15_63);
var lyr_HotspotB1R9S15_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S15_63, 
                style: style_HotspotB1R9S15_63,
                popuplayertitle: 'Hotspot-B1-R9-S15',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S15_63.png" /> Hotspot-B1-R9-S15'
            });
var format_HotspotB1R9S18_64 = new ol.format.GeoJSON();
var features_HotspotB1R9S18_64 = format_HotspotB1R9S18_64.readFeatures(json_HotspotB1R9S18_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S18_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S18_64.addFeatures(features_HotspotB1R9S18_64);
var lyr_HotspotB1R9S18_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S18_64, 
                style: style_HotspotB1R9S18_64,
                popuplayertitle: 'Hotspot-B1-R9-S18',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S18_64.png" /> Hotspot-B1-R9-S18'
            });
var format_HotspotB1R9S28_65 = new ol.format.GeoJSON();
var features_HotspotB1R9S28_65 = format_HotspotB1R9S28_65.readFeatures(json_HotspotB1R9S28_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S28_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S28_65.addFeatures(features_HotspotB1R9S28_65);
var lyr_HotspotB1R9S28_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S28_65, 
                style: style_HotspotB1R9S28_65,
                popuplayertitle: 'Hotspot-B1-R9-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S28_65.png" /> Hotspot-B1-R9-S28'
            });
var format_HotspotB1R9S31_66 = new ol.format.GeoJSON();
var features_HotspotB1R9S31_66 = format_HotspotB1R9S31_66.readFeatures(json_HotspotB1R9S31_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S31_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S31_66.addFeatures(features_HotspotB1R9S31_66);
var lyr_HotspotB1R9S31_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S31_66, 
                style: style_HotspotB1R9S31_66,
                popuplayertitle: 'Hotspot-B1-R9-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S31_66.png" /> Hotspot-B1-R9-S31'
            });
var format_HotspotB1R9S40_67 = new ol.format.GeoJSON();
var features_HotspotB1R9S40_67 = format_HotspotB1R9S40_67.readFeatures(json_HotspotB1R9S40_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S40_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S40_67.addFeatures(features_HotspotB1R9S40_67);
var lyr_HotspotB1R9S40_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S40_67, 
                style: style_HotspotB1R9S40_67,
                popuplayertitle: 'Hotspot-B1-R9-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S40_67.png" /> Hotspot-B1-R9-S40'
            });
var format_HotspotB1R9S48_68 = new ol.format.GeoJSON();
var features_HotspotB1R9S48_68 = format_HotspotB1R9S48_68.readFeatures(json_HotspotB1R9S48_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S48_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S48_68.addFeatures(features_HotspotB1R9S48_68);
var lyr_HotspotB1R9S48_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S48_68, 
                style: style_HotspotB1R9S48_68,
                popuplayertitle: 'Hotspot-B1-R9-S48',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S48_68.png" /> Hotspot-B1-R9-S48'
            });
var format_HotspotB1R9S49_69 = new ol.format.GeoJSON();
var features_HotspotB1R9S49_69 = format_HotspotB1R9S49_69.readFeatures(json_HotspotB1R9S49_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S49_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S49_69.addFeatures(features_HotspotB1R9S49_69);
var lyr_HotspotB1R9S49_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S49_69, 
                style: style_HotspotB1R9S49_69,
                popuplayertitle: 'Hotspot-B1-R9-S49',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S49_69.png" /> Hotspot-B1-R9-S49'
            });
var format_HotspotB1R9S55_70 = new ol.format.GeoJSON();
var features_HotspotB1R9S55_70 = format_HotspotB1R9S55_70.readFeatures(json_HotspotB1R9S55_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S55_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S55_70.addFeatures(features_HotspotB1R9S55_70);
var lyr_HotspotB1R9S55_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S55_70, 
                style: style_HotspotB1R9S55_70,
                popuplayertitle: 'Hotspot-B1-R9-S55',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S55_70.png" /> Hotspot-B1-R9-S55'
            });
var format_HotspotB1R9S66_71 = new ol.format.GeoJSON();
var features_HotspotB1R9S66_71 = format_HotspotB1R9S66_71.readFeatures(json_HotspotB1R9S66_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S66_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S66_71.addFeatures(features_HotspotB1R9S66_71);
var lyr_HotspotB1R9S66_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S66_71, 
                style: style_HotspotB1R9S66_71,
                popuplayertitle: 'Hotspot-B1-R9-S66',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S66_71.png" /> Hotspot-B1-R9-S66'
            });
var format_HotspotB1R9S69_72 = new ol.format.GeoJSON();
var features_HotspotB1R9S69_72 = format_HotspotB1R9S69_72.readFeatures(json_HotspotB1R9S69_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S69_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S69_72.addFeatures(features_HotspotB1R9S69_72);
var lyr_HotspotB1R9S69_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S69_72, 
                style: style_HotspotB1R9S69_72,
                popuplayertitle: 'Hotspot-B1-R9-S69',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S69_72.png" /> Hotspot-B1-R9-S69'
            });
var format_HotspotB1R9S72_73 = new ol.format.GeoJSON();
var features_HotspotB1R9S72_73 = format_HotspotB1R9S72_73.readFeatures(json_HotspotB1R9S72_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S72_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S72_73.addFeatures(features_HotspotB1R9S72_73);
var lyr_HotspotB1R9S72_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S72_73, 
                style: style_HotspotB1R9S72_73,
                popuplayertitle: 'Hotspot-B1-R9-S72',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S72_73.png" /> Hotspot-B1-R9-S72'
            });
var format_HotspotB1R9S74_74 = new ol.format.GeoJSON();
var features_HotspotB1R9S74_74 = format_HotspotB1R9S74_74.readFeatures(json_HotspotB1R9S74_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S74_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S74_74.addFeatures(features_HotspotB1R9S74_74);
var lyr_HotspotB1R9S74_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S74_74, 
                style: style_HotspotB1R9S74_74,
                popuplayertitle: 'Hotspot-B1-R9-S74',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S74_74.png" /> Hotspot-B1-R9-S74'
            });
var format_HotspotB1R9S75_75 = new ol.format.GeoJSON();
var features_HotspotB1R9S75_75 = format_HotspotB1R9S75_75.readFeatures(json_HotspotB1R9S75_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S75_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S75_75.addFeatures(features_HotspotB1R9S75_75);
var lyr_HotspotB1R9S75_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S75_75, 
                style: style_HotspotB1R9S75_75,
                popuplayertitle: 'Hotspot-B1-R9-S75',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S75_75.png" /> Hotspot-B1-R9-S75'
            });
var format_HotspotB1R9S79_76 = new ol.format.GeoJSON();
var features_HotspotB1R9S79_76 = format_HotspotB1R9S79_76.readFeatures(json_HotspotB1R9S79_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R9S79_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R9S79_76.addFeatures(features_HotspotB1R9S79_76);
var lyr_HotspotB1R9S79_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R9S79_76, 
                style: style_HotspotB1R9S79_76,
                popuplayertitle: 'Hotspot-B1-R9-S79',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R9S79_76.png" /> Hotspot-B1-R9-S79'
            });
var format_HotspotB1R10S3_77 = new ol.format.GeoJSON();
var features_HotspotB1R10S3_77 = format_HotspotB1R10S3_77.readFeatures(json_HotspotB1R10S3_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S3_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S3_77.addFeatures(features_HotspotB1R10S3_77);
var lyr_HotspotB1R10S3_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S3_77, 
                style: style_HotspotB1R10S3_77,
                popuplayertitle: 'Hotspot-B1-R10-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S3_77.png" /> Hotspot-B1-R10-S3'
            });
var format_HotspotB1R10S5_78 = new ol.format.GeoJSON();
var features_HotspotB1R10S5_78 = format_HotspotB1R10S5_78.readFeatures(json_HotspotB1R10S5_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S5_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S5_78.addFeatures(features_HotspotB1R10S5_78);
var lyr_HotspotB1R10S5_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S5_78, 
                style: style_HotspotB1R10S5_78,
                popuplayertitle: 'Hotspot-B1-R10-S5',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S5_78.png" /> Hotspot-B1-R10-S5'
            });
var format_HotspotB1R10S10_79 = new ol.format.GeoJSON();
var features_HotspotB1R10S10_79 = format_HotspotB1R10S10_79.readFeatures(json_HotspotB1R10S10_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S10_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S10_79.addFeatures(features_HotspotB1R10S10_79);
var lyr_HotspotB1R10S10_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S10_79, 
                style: style_HotspotB1R10S10_79,
                popuplayertitle: 'Hotspot-B1-R10-S10',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S10_79.png" /> Hotspot-B1-R10-S10'
            });
var format_HotspotB1R10S11_80 = new ol.format.GeoJSON();
var features_HotspotB1R10S11_80 = format_HotspotB1R10S11_80.readFeatures(json_HotspotB1R10S11_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S11_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S11_80.addFeatures(features_HotspotB1R10S11_80);
var lyr_HotspotB1R10S11_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S11_80, 
                style: style_HotspotB1R10S11_80,
                popuplayertitle: 'Hotspot-B1-R10-S11',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S11_80.png" /> Hotspot-B1-R10-S11'
            });
var format_HotspotB1R10S13_81 = new ol.format.GeoJSON();
var features_HotspotB1R10S13_81 = format_HotspotB1R10S13_81.readFeatures(json_HotspotB1R10S13_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S13_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S13_81.addFeatures(features_HotspotB1R10S13_81);
var lyr_HotspotB1R10S13_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S13_81, 
                style: style_HotspotB1R10S13_81,
                popuplayertitle: 'Hotspot-B1-R10-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S13_81.png" /> Hotspot-B1-R10-S13'
            });
var format_HotspotB1R10S21_82 = new ol.format.GeoJSON();
var features_HotspotB1R10S21_82 = format_HotspotB1R10S21_82.readFeatures(json_HotspotB1R10S21_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S21_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S21_82.addFeatures(features_HotspotB1R10S21_82);
var lyr_HotspotB1R10S21_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S21_82, 
                style: style_HotspotB1R10S21_82,
                popuplayertitle: 'Hotspot-B1-R10-S21',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S21_82.png" /> Hotspot-B1-R10-S21'
            });
var format_HotspotB1R10S41_83 = new ol.format.GeoJSON();
var features_HotspotB1R10S41_83 = format_HotspotB1R10S41_83.readFeatures(json_HotspotB1R10S41_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S41_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S41_83.addFeatures(features_HotspotB1R10S41_83);
var lyr_HotspotB1R10S41_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S41_83, 
                style: style_HotspotB1R10S41_83,
                popuplayertitle: 'Hotspot-B1-R10-S41',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S41_83.png" /> Hotspot-B1-R10-S41'
            });
var format_HotspotB1R10S42_84 = new ol.format.GeoJSON();
var features_HotspotB1R10S42_84 = format_HotspotB1R10S42_84.readFeatures(json_HotspotB1R10S42_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S42_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S42_84.addFeatures(features_HotspotB1R10S42_84);
var lyr_HotspotB1R10S42_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S42_84, 
                style: style_HotspotB1R10S42_84,
                popuplayertitle: 'Hotspot-B1-R10-S42',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S42_84.png" /> Hotspot-B1-R10-S42'
            });
var format_HotspotB1R10S44_85 = new ol.format.GeoJSON();
var features_HotspotB1R10S44_85 = format_HotspotB1R10S44_85.readFeatures(json_HotspotB1R10S44_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S44_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S44_85.addFeatures(features_HotspotB1R10S44_85);
var lyr_HotspotB1R10S44_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S44_85, 
                style: style_HotspotB1R10S44_85,
                popuplayertitle: 'Hotspot-B1-R10-S44',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S44_85.png" /> Hotspot-B1-R10-S44'
            });
var format_HotspotB1R10S50_86 = new ol.format.GeoJSON();
var features_HotspotB1R10S50_86 = format_HotspotB1R10S50_86.readFeatures(json_HotspotB1R10S50_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S50_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S50_86.addFeatures(features_HotspotB1R10S50_86);
var lyr_HotspotB1R10S50_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S50_86, 
                style: style_HotspotB1R10S50_86,
                popuplayertitle: 'Hotspot-B1-R10-S50',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S50_86.png" /> Hotspot-B1-R10-S50'
            });
var format_HotspotB1R10S55_87 = new ol.format.GeoJSON();
var features_HotspotB1R10S55_87 = format_HotspotB1R10S55_87.readFeatures(json_HotspotB1R10S55_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S55_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S55_87.addFeatures(features_HotspotB1R10S55_87);
var lyr_HotspotB1R10S55_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S55_87, 
                style: style_HotspotB1R10S55_87,
                popuplayertitle: 'Hotspot-B1-R10-S55',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S55_87.png" /> Hotspot-B1-R10-S55'
            });
var format_HotspotB1R10S57_88 = new ol.format.GeoJSON();
var features_HotspotB1R10S57_88 = format_HotspotB1R10S57_88.readFeatures(json_HotspotB1R10S57_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S57_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S57_88.addFeatures(features_HotspotB1R10S57_88);
var lyr_HotspotB1R10S57_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S57_88, 
                style: style_HotspotB1R10S57_88,
                popuplayertitle: 'Hotspot-B1-R10-S57',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S57_88.png" /> Hotspot-B1-R10-S57'
            });
var format_HotspotB1R10S63_89 = new ol.format.GeoJSON();
var features_HotspotB1R10S63_89 = format_HotspotB1R10S63_89.readFeatures(json_HotspotB1R10S63_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S63_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S63_89.addFeatures(features_HotspotB1R10S63_89);
var lyr_HotspotB1R10S63_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S63_89, 
                style: style_HotspotB1R10S63_89,
                popuplayertitle: 'Hotspot-B1-R10-S63',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S63_89.png" /> Hotspot-B1-R10-S63'
            });
var format_HotspotB1R10S64_90 = new ol.format.GeoJSON();
var features_HotspotB1R10S64_90 = format_HotspotB1R10S64_90.readFeatures(json_HotspotB1R10S64_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S64_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S64_90.addFeatures(features_HotspotB1R10S64_90);
var lyr_HotspotB1R10S64_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S64_90, 
                style: style_HotspotB1R10S64_90,
                popuplayertitle: 'Hotspot-B1-R10-S64',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S64_90.png" /> Hotspot-B1-R10-S64'
            });
var format_HotspotB1R10S65_91 = new ol.format.GeoJSON();
var features_HotspotB1R10S65_91 = format_HotspotB1R10S65_91.readFeatures(json_HotspotB1R10S65_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S65_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S65_91.addFeatures(features_HotspotB1R10S65_91);
var lyr_HotspotB1R10S65_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S65_91, 
                style: style_HotspotB1R10S65_91,
                popuplayertitle: 'Hotspot-B1-R10-S65',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S65_91.png" /> Hotspot-B1-R10-S65'
            });
var format_HotspotB1R10S68_92 = new ol.format.GeoJSON();
var features_HotspotB1R10S68_92 = format_HotspotB1R10S68_92.readFeatures(json_HotspotB1R10S68_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S68_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S68_92.addFeatures(features_HotspotB1R10S68_92);
var lyr_HotspotB1R10S68_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S68_92, 
                style: style_HotspotB1R10S68_92,
                popuplayertitle: 'Hotspot-B1-R10-S68',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S68_92.png" /> Hotspot-B1-R10-S68'
            });
var format_HotspotB1R10S72_93 = new ol.format.GeoJSON();
var features_HotspotB1R10S72_93 = format_HotspotB1R10S72_93.readFeatures(json_HotspotB1R10S72_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S72_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S72_93.addFeatures(features_HotspotB1R10S72_93);
var lyr_HotspotB1R10S72_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S72_93, 
                style: style_HotspotB1R10S72_93,
                popuplayertitle: 'Hotspot-B1-R10-S72',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S72_93.png" /> Hotspot-B1-R10-S72'
            });
var format_HotspotB1R10S74_94 = new ol.format.GeoJSON();
var features_HotspotB1R10S74_94 = format_HotspotB1R10S74_94.readFeatures(json_HotspotB1R10S74_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S74_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S74_94.addFeatures(features_HotspotB1R10S74_94);
var lyr_HotspotB1R10S74_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S74_94, 
                style: style_HotspotB1R10S74_94,
                popuplayertitle: 'Hotspot-B1-R10-S74',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S74_94.png" /> Hotspot-B1-R10-S74'
            });
var format_HotspotB1R10S83_95 = new ol.format.GeoJSON();
var features_HotspotB1R10S83_95 = format_HotspotB1R10S83_95.readFeatures(json_HotspotB1R10S83_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S83_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S83_95.addFeatures(features_HotspotB1R10S83_95);
var lyr_HotspotB1R10S83_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S83_95, 
                style: style_HotspotB1R10S83_95,
                popuplayertitle: 'Hotspot-B1-R10-S83',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S83_95.png" /> Hotspot-B1-R10-S83'
            });
var format_HotspotB1R10S84_96 = new ol.format.GeoJSON();
var features_HotspotB1R10S84_96 = format_HotspotB1R10S84_96.readFeatures(json_HotspotB1R10S84_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R10S84_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R10S84_96.addFeatures(features_HotspotB1R10S84_96);
var lyr_HotspotB1R10S84_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R10S84_96, 
                style: style_HotspotB1R10S84_96,
                popuplayertitle: 'Hotspot-B1-R10-S84',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R10S84_96.png" /> Hotspot-B1-R10-S84'
            });
var format_HotspotB1R11S2_97 = new ol.format.GeoJSON();
var features_HotspotB1R11S2_97 = format_HotspotB1R11S2_97.readFeatures(json_HotspotB1R11S2_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S2_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S2_97.addFeatures(features_HotspotB1R11S2_97);
var lyr_HotspotB1R11S2_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S2_97, 
                style: style_HotspotB1R11S2_97,
                popuplayertitle: 'Hotspot-B1-R11-S2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S2_97.png" /> Hotspot-B1-R11-S2'
            });
var format_HotspotB1R11S3_98 = new ol.format.GeoJSON();
var features_HotspotB1R11S3_98 = format_HotspotB1R11S3_98.readFeatures(json_HotspotB1R11S3_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S3_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S3_98.addFeatures(features_HotspotB1R11S3_98);
var lyr_HotspotB1R11S3_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S3_98, 
                style: style_HotspotB1R11S3_98,
                popuplayertitle: 'Hotspot-B1-R11-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S3_98.png" /> Hotspot-B1-R11-S3'
            });
var format_HotspotB1R11S4_99 = new ol.format.GeoJSON();
var features_HotspotB1R11S4_99 = format_HotspotB1R11S4_99.readFeatures(json_HotspotB1R11S4_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S4_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S4_99.addFeatures(features_HotspotB1R11S4_99);
var lyr_HotspotB1R11S4_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S4_99, 
                style: style_HotspotB1R11S4_99,
                popuplayertitle: 'Hotspot-B1-R11-S4',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S4_99.png" /> Hotspot-B1-R11-S4'
            });
var format_HotspotB1R11S13_100 = new ol.format.GeoJSON();
var features_HotspotB1R11S13_100 = format_HotspotB1R11S13_100.readFeatures(json_HotspotB1R11S13_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S13_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S13_100.addFeatures(features_HotspotB1R11S13_100);
var lyr_HotspotB1R11S13_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S13_100, 
                style: style_HotspotB1R11S13_100,
                popuplayertitle: 'Hotspot-B1-R11-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S13_100.png" /> Hotspot-B1-R11-S13'
            });
var format_HotspotB1R11S25_101 = new ol.format.GeoJSON();
var features_HotspotB1R11S25_101 = format_HotspotB1R11S25_101.readFeatures(json_HotspotB1R11S25_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S25_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S25_101.addFeatures(features_HotspotB1R11S25_101);
var lyr_HotspotB1R11S25_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S25_101, 
                style: style_HotspotB1R11S25_101,
                popuplayertitle: 'Hotspot-B1-R11-S25',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S25_101.png" /> Hotspot-B1-R11-S25'
            });
var format_HotspotB1R11S26_102 = new ol.format.GeoJSON();
var features_HotspotB1R11S26_102 = format_HotspotB1R11S26_102.readFeatures(json_HotspotB1R11S26_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S26_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S26_102.addFeatures(features_HotspotB1R11S26_102);
var lyr_HotspotB1R11S26_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S26_102, 
                style: style_HotspotB1R11S26_102,
                popuplayertitle: 'Hotspot-B1-R11-S26',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S26_102.png" /> Hotspot-B1-R11-S26'
            });
var format_HotspotB1R11S27_103 = new ol.format.GeoJSON();
var features_HotspotB1R11S27_103 = format_HotspotB1R11S27_103.readFeatures(json_HotspotB1R11S27_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S27_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S27_103.addFeatures(features_HotspotB1R11S27_103);
var lyr_HotspotB1R11S27_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S27_103, 
                style: style_HotspotB1R11S27_103,
                popuplayertitle: 'Hotspot-B1-R11-S27',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S27_103.png" /> Hotspot-B1-R11-S27'
            });
var format_HotspotB1R11S28_104 = new ol.format.GeoJSON();
var features_HotspotB1R11S28_104 = format_HotspotB1R11S28_104.readFeatures(json_HotspotB1R11S28_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S28_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S28_104.addFeatures(features_HotspotB1R11S28_104);
var lyr_HotspotB1R11S28_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S28_104, 
                style: style_HotspotB1R11S28_104,
                popuplayertitle: 'Hotspot-B1-R11-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S28_104.png" /> Hotspot-B1-R11-S28'
            });
var format_HotspotB1R11S29_105 = new ol.format.GeoJSON();
var features_HotspotB1R11S29_105 = format_HotspotB1R11S29_105.readFeatures(json_HotspotB1R11S29_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S29_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S29_105.addFeatures(features_HotspotB1R11S29_105);
var lyr_HotspotB1R11S29_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S29_105, 
                style: style_HotspotB1R11S29_105,
                popuplayertitle: 'Hotspot-B1-R11-S29',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S29_105.png" /> Hotspot-B1-R11-S29'
            });
var format_HotspotB1R11S38_106 = new ol.format.GeoJSON();
var features_HotspotB1R11S38_106 = format_HotspotB1R11S38_106.readFeatures(json_HotspotB1R11S38_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S38_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S38_106.addFeatures(features_HotspotB1R11S38_106);
var lyr_HotspotB1R11S38_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S38_106, 
                style: style_HotspotB1R11S38_106,
                popuplayertitle: 'Hotspot-B1-R11-S38',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S38_106.png" /> Hotspot-B1-R11-S38'
            });
var format_HotspotB1R11S39_107 = new ol.format.GeoJSON();
var features_HotspotB1R11S39_107 = format_HotspotB1R11S39_107.readFeatures(json_HotspotB1R11S39_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S39_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S39_107.addFeatures(features_HotspotB1R11S39_107);
var lyr_HotspotB1R11S39_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S39_107, 
                style: style_HotspotB1R11S39_107,
                popuplayertitle: 'Hotspot-B1-R11-S39',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S39_107.png" /> Hotspot-B1-R11-S39'
            });
var format_HotspotB1R11S40_108 = new ol.format.GeoJSON();
var features_HotspotB1R11S40_108 = format_HotspotB1R11S40_108.readFeatures(json_HotspotB1R11S40_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S40_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S40_108.addFeatures(features_HotspotB1R11S40_108);
var lyr_HotspotB1R11S40_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S40_108, 
                style: style_HotspotB1R11S40_108,
                popuplayertitle: 'Hotspot-B1-R11-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S40_108.png" /> Hotspot-B1-R11-S40'
            });
var format_HotspotB1R11S51_109 = new ol.format.GeoJSON();
var features_HotspotB1R11S51_109 = format_HotspotB1R11S51_109.readFeatures(json_HotspotB1R11S51_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S51_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S51_109.addFeatures(features_HotspotB1R11S51_109);
var lyr_HotspotB1R11S51_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S51_109, 
                style: style_HotspotB1R11S51_109,
                popuplayertitle: 'Hotspot-B1-R11-S51',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S51_109.png" /> Hotspot-B1-R11-S51'
            });
var format_HotspotB1R11S56_110 = new ol.format.GeoJSON();
var features_HotspotB1R11S56_110 = format_HotspotB1R11S56_110.readFeatures(json_HotspotB1R11S56_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S56_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S56_110.addFeatures(features_HotspotB1R11S56_110);
var lyr_HotspotB1R11S56_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S56_110, 
                style: style_HotspotB1R11S56_110,
                popuplayertitle: 'Hotspot-B1-R11-S56',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S56_110.png" /> Hotspot-B1-R11-S56'
            });
var format_HotspotB1R11S58_111 = new ol.format.GeoJSON();
var features_HotspotB1R11S58_111 = format_HotspotB1R11S58_111.readFeatures(json_HotspotB1R11S58_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S58_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S58_111.addFeatures(features_HotspotB1R11S58_111);
var lyr_HotspotB1R11S58_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S58_111, 
                style: style_HotspotB1R11S58_111,
                popuplayertitle: 'Hotspot-B1-R11-S58',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S58_111.png" /> Hotspot-B1-R11-S58'
            });
var format_HotspotB1R11S59_112 = new ol.format.GeoJSON();
var features_HotspotB1R11S59_112 = format_HotspotB1R11S59_112.readFeatures(json_HotspotB1R11S59_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S59_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S59_112.addFeatures(features_HotspotB1R11S59_112);
var lyr_HotspotB1R11S59_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S59_112, 
                style: style_HotspotB1R11S59_112,
                popuplayertitle: 'Hotspot-B1-R11-S59',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S59_112.png" /> Hotspot-B1-R11-S59'
            });
var format_HotspotB1R11S61_113 = new ol.format.GeoJSON();
var features_HotspotB1R11S61_113 = format_HotspotB1R11S61_113.readFeatures(json_HotspotB1R11S61_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S61_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S61_113.addFeatures(features_HotspotB1R11S61_113);
var lyr_HotspotB1R11S61_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S61_113, 
                style: style_HotspotB1R11S61_113,
                popuplayertitle: 'Hotspot-B1-R11-S61',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S61_113.png" /> Hotspot-B1-R11-S61'
            });
var format_HotspotB1R11S63_114 = new ol.format.GeoJSON();
var features_HotspotB1R11S63_114 = format_HotspotB1R11S63_114.readFeatures(json_HotspotB1R11S63_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S63_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S63_114.addFeatures(features_HotspotB1R11S63_114);
var lyr_HotspotB1R11S63_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S63_114, 
                style: style_HotspotB1R11S63_114,
                popuplayertitle: 'Hotspot-B1-R11-S63',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S63_114.png" /> Hotspot-B1-R11-S63'
            });
var format_HotspotB1R11S64_115 = new ol.format.GeoJSON();
var features_HotspotB1R11S64_115 = format_HotspotB1R11S64_115.readFeatures(json_HotspotB1R11S64_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S64_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S64_115.addFeatures(features_HotspotB1R11S64_115);
var lyr_HotspotB1R11S64_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S64_115, 
                style: style_HotspotB1R11S64_115,
                popuplayertitle: 'Hotspot-B1-R11-S64',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S64_115.png" /> Hotspot-B1-R11-S64'
            });
var format_HotspotB1R11S66_116 = new ol.format.GeoJSON();
var features_HotspotB1R11S66_116 = format_HotspotB1R11S66_116.readFeatures(json_HotspotB1R11S66_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S66_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S66_116.addFeatures(features_HotspotB1R11S66_116);
var lyr_HotspotB1R11S66_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S66_116, 
                style: style_HotspotB1R11S66_116,
                popuplayertitle: 'Hotspot-B1-R11-S66',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S66_116.png" /> Hotspot-B1-R11-S66'
            });
var format_HotspotB1R11S711_117 = new ol.format.GeoJSON();
var features_HotspotB1R11S711_117 = format_HotspotB1R11S711_117.readFeatures(json_HotspotB1R11S711_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S711_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S711_117.addFeatures(features_HotspotB1R11S711_117);
var lyr_HotspotB1R11S711_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S711_117, 
                style: style_HotspotB1R11S711_117,
                popuplayertitle: 'Hotspot-B1-R11-S71-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S711_117.png" /> Hotspot-B1-R11-S71-1'
            });
var format_HotspotB1R11S712_118 = new ol.format.GeoJSON();
var features_HotspotB1R11S712_118 = format_HotspotB1R11S712_118.readFeatures(json_HotspotB1R11S712_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S712_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S712_118.addFeatures(features_HotspotB1R11S712_118);
var lyr_HotspotB1R11S712_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S712_118, 
                style: style_HotspotB1R11S712_118,
                popuplayertitle: 'Hotspot-B1-R11-S71-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S712_118.png" /> Hotspot-B1-R11-S71-2'
            });
var format_HotspotB1R11S72_119 = new ol.format.GeoJSON();
var features_HotspotB1R11S72_119 = format_HotspotB1R11S72_119.readFeatures(json_HotspotB1R11S72_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S72_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S72_119.addFeatures(features_HotspotB1R11S72_119);
var lyr_HotspotB1R11S72_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S72_119, 
                style: style_HotspotB1R11S72_119,
                popuplayertitle: 'Hotspot-B1-R11-S72',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S72_119.png" /> Hotspot-B1-R11-S72'
            });
var format_HotspotB1R11S731_120 = new ol.format.GeoJSON();
var features_HotspotB1R11S731_120 = format_HotspotB1R11S731_120.readFeatures(json_HotspotB1R11S731_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S731_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S731_120.addFeatures(features_HotspotB1R11S731_120);
var lyr_HotspotB1R11S731_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S731_120, 
                style: style_HotspotB1R11S731_120,
                popuplayertitle: 'Hotspot-B1-R11-S73-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S731_120.png" /> Hotspot-B1-R11-S73-1'
            });
var format_HotspotB1R11S732_121 = new ol.format.GeoJSON();
var features_HotspotB1R11S732_121 = format_HotspotB1R11S732_121.readFeatures(json_HotspotB1R11S732_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S732_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S732_121.addFeatures(features_HotspotB1R11S732_121);
var lyr_HotspotB1R11S732_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S732_121, 
                style: style_HotspotB1R11S732_121,
                popuplayertitle: 'Hotspot-B1-R11-S73-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S732_121.png" /> Hotspot-B1-R11-S73-2'
            });
var format_HotspotB1R11S75_122 = new ol.format.GeoJSON();
var features_HotspotB1R11S75_122 = format_HotspotB1R11S75_122.readFeatures(json_HotspotB1R11S75_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S75_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S75_122.addFeatures(features_HotspotB1R11S75_122);
var lyr_HotspotB1R11S75_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S75_122, 
                style: style_HotspotB1R11S75_122,
                popuplayertitle: 'Hotspot-B1-R11-S75',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S75_122.png" /> Hotspot-B1-R11-S75'
            });
var format_HotspotB1R11S76_123 = new ol.format.GeoJSON();
var features_HotspotB1R11S76_123 = format_HotspotB1R11S76_123.readFeatures(json_HotspotB1R11S76_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S76_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S76_123.addFeatures(features_HotspotB1R11S76_123);
var lyr_HotspotB1R11S76_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S76_123, 
                style: style_HotspotB1R11S76_123,
                popuplayertitle: 'Hotspot-B1-R11-S76',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S76_123.png" /> Hotspot-B1-R11-S76'
            });
var format_HotspotB1R11S78_124 = new ol.format.GeoJSON();
var features_HotspotB1R11S78_124 = format_HotspotB1R11S78_124.readFeatures(json_HotspotB1R11S78_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S78_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S78_124.addFeatures(features_HotspotB1R11S78_124);
var lyr_HotspotB1R11S78_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S78_124, 
                style: style_HotspotB1R11S78_124,
                popuplayertitle: 'Hotspot-B1-R11-S78',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S78_124.png" /> Hotspot-B1-R11-S78'
            });
var format_HotspotB1R11S841_125 = new ol.format.GeoJSON();
var features_HotspotB1R11S841_125 = format_HotspotB1R11S841_125.readFeatures(json_HotspotB1R11S841_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S841_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S841_125.addFeatures(features_HotspotB1R11S841_125);
var lyr_HotspotB1R11S841_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S841_125, 
                style: style_HotspotB1R11S841_125,
                popuplayertitle: 'Hotspot-B1-R11-S84-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S841_125.png" /> Hotspot-B1-R11-S84-1'
            });
var format_HotspotB1R11S842_126 = new ol.format.GeoJSON();
var features_HotspotB1R11S842_126 = format_HotspotB1R11S842_126.readFeatures(json_HotspotB1R11S842_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S842_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S842_126.addFeatures(features_HotspotB1R11S842_126);
var lyr_HotspotB1R11S842_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S842_126, 
                style: style_HotspotB1R11S842_126,
                popuplayertitle: 'Hotspot-B1-R11-S84-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S842_126.png" /> Hotspot-B1-R11-S84-2'
            });
var format_HotspotB1R11S843_127 = new ol.format.GeoJSON();
var features_HotspotB1R11S843_127 = format_HotspotB1R11S843_127.readFeatures(json_HotspotB1R11S843_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R11S843_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R11S843_127.addFeatures(features_HotspotB1R11S843_127);
var lyr_HotspotB1R11S843_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R11S843_127, 
                style: style_HotspotB1R11S843_127,
                popuplayertitle: 'Hotspot-B1-R11-S84-3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R11S843_127.png" /> Hotspot-B1-R11-S84-3'
            });
var format_HotspotB1R12S2_128 = new ol.format.GeoJSON();
var features_HotspotB1R12S2_128 = format_HotspotB1R12S2_128.readFeatures(json_HotspotB1R12S2_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S2_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S2_128.addFeatures(features_HotspotB1R12S2_128);
var lyr_HotspotB1R12S2_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S2_128, 
                style: style_HotspotB1R12S2_128,
                popuplayertitle: 'Hotspot-B1-R12-S2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S2_128.png" /> Hotspot-B1-R12-S2'
            });
var format_HotspotB1R12S3_129 = new ol.format.GeoJSON();
var features_HotspotB1R12S3_129 = format_HotspotB1R12S3_129.readFeatures(json_HotspotB1R12S3_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S3_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S3_129.addFeatures(features_HotspotB1R12S3_129);
var lyr_HotspotB1R12S3_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S3_129, 
                style: style_HotspotB1R12S3_129,
                popuplayertitle: 'Hotspot-B1-R12-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S3_129.png" /> Hotspot-B1-R12-S3'
            });
var format_HotspotB1R12S41_130 = new ol.format.GeoJSON();
var features_HotspotB1R12S41_130 = format_HotspotB1R12S41_130.readFeatures(json_HotspotB1R12S41_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S41_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S41_130.addFeatures(features_HotspotB1R12S41_130);
var lyr_HotspotB1R12S41_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S41_130, 
                style: style_HotspotB1R12S41_130,
                popuplayertitle: 'Hotspot-B1-R12-S4-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S41_130.png" /> Hotspot-B1-R12-S4-1'
            });
var format_HotspotB1R12S42_131 = new ol.format.GeoJSON();
var features_HotspotB1R12S42_131 = format_HotspotB1R12S42_131.readFeatures(json_HotspotB1R12S42_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S42_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S42_131.addFeatures(features_HotspotB1R12S42_131);
var lyr_HotspotB1R12S42_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S42_131, 
                style: style_HotspotB1R12S42_131,
                popuplayertitle: 'Hotspot-B1-R12-S4-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S42_131.png" /> Hotspot-B1-R12-S4-2'
            });
var format_HotspotB1R12S9_132 = new ol.format.GeoJSON();
var features_HotspotB1R12S9_132 = format_HotspotB1R12S9_132.readFeatures(json_HotspotB1R12S9_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S9_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S9_132.addFeatures(features_HotspotB1R12S9_132);
var lyr_HotspotB1R12S9_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S9_132, 
                style: style_HotspotB1R12S9_132,
                popuplayertitle: 'Hotspot-B1-R12-S9',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S9_132.png" /> Hotspot-B1-R12-S9'
            });
var format_HotspotB1R12S14_133 = new ol.format.GeoJSON();
var features_HotspotB1R12S14_133 = format_HotspotB1R12S14_133.readFeatures(json_HotspotB1R12S14_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S14_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S14_133.addFeatures(features_HotspotB1R12S14_133);
var lyr_HotspotB1R12S14_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S14_133, 
                style: style_HotspotB1R12S14_133,
                popuplayertitle: 'Hotspot-B1-R12-S14',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S14_133.png" /> Hotspot-B1-R12-S14'
            });
var format_HotspotB1R12S17_134 = new ol.format.GeoJSON();
var features_HotspotB1R12S17_134 = format_HotspotB1R12S17_134.readFeatures(json_HotspotB1R12S17_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S17_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S17_134.addFeatures(features_HotspotB1R12S17_134);
var lyr_HotspotB1R12S17_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S17_134, 
                style: style_HotspotB1R12S17_134,
                popuplayertitle: 'Hotspot-B1-R12-S17',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S17_134.png" /> Hotspot-B1-R12-S17'
            });
var format_HotspotB1R12S18_135 = new ol.format.GeoJSON();
var features_HotspotB1R12S18_135 = format_HotspotB1R12S18_135.readFeatures(json_HotspotB1R12S18_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S18_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S18_135.addFeatures(features_HotspotB1R12S18_135);
var lyr_HotspotB1R12S18_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S18_135, 
                style: style_HotspotB1R12S18_135,
                popuplayertitle: 'Hotspot-B1-R12-S18',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S18_135.png" /> Hotspot-B1-R12-S18'
            });
var format_HotspotB1R12S19_136 = new ol.format.GeoJSON();
var features_HotspotB1R12S19_136 = format_HotspotB1R12S19_136.readFeatures(json_HotspotB1R12S19_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S19_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S19_136.addFeatures(features_HotspotB1R12S19_136);
var lyr_HotspotB1R12S19_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S19_136, 
                style: style_HotspotB1R12S19_136,
                popuplayertitle: 'Hotspot-B1-R12-S19',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S19_136.png" /> Hotspot-B1-R12-S19'
            });
var format_HotspotB1R12S21_137 = new ol.format.GeoJSON();
var features_HotspotB1R12S21_137 = format_HotspotB1R12S21_137.readFeatures(json_HotspotB1R12S21_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S21_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S21_137.addFeatures(features_HotspotB1R12S21_137);
var lyr_HotspotB1R12S21_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S21_137, 
                style: style_HotspotB1R12S21_137,
                popuplayertitle: 'Hotspot-B1-R12-S21',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S21_137.png" /> Hotspot-B1-R12-S21'
            });
var format_HotspotB1R12S26_138 = new ol.format.GeoJSON();
var features_HotspotB1R12S26_138 = format_HotspotB1R12S26_138.readFeatures(json_HotspotB1R12S26_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S26_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S26_138.addFeatures(features_HotspotB1R12S26_138);
var lyr_HotspotB1R12S26_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S26_138, 
                style: style_HotspotB1R12S26_138,
                popuplayertitle: 'Hotspot-B1-R12-S26',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S26_138.png" /> Hotspot-B1-R12-S26'
            });
var format_HotspotB1R12S29_139 = new ol.format.GeoJSON();
var features_HotspotB1R12S29_139 = format_HotspotB1R12S29_139.readFeatures(json_HotspotB1R12S29_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S29_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S29_139.addFeatures(features_HotspotB1R12S29_139);
var lyr_HotspotB1R12S29_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S29_139, 
                style: style_HotspotB1R12S29_139,
                popuplayertitle: 'Hotspot-B1-R12-S29',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S29_139.png" /> Hotspot-B1-R12-S29'
            });
var format_HotspotB1R12S32_140 = new ol.format.GeoJSON();
var features_HotspotB1R12S32_140 = format_HotspotB1R12S32_140.readFeatures(json_HotspotB1R12S32_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S32_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S32_140.addFeatures(features_HotspotB1R12S32_140);
var lyr_HotspotB1R12S32_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S32_140, 
                style: style_HotspotB1R12S32_140,
                popuplayertitle: 'Hotspot-B1-R12-S32',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S32_140.png" /> Hotspot-B1-R12-S32'
            });
var format_HotspotB1R12S38_141 = new ol.format.GeoJSON();
var features_HotspotB1R12S38_141 = format_HotspotB1R12S38_141.readFeatures(json_HotspotB1R12S38_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S38_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S38_141.addFeatures(features_HotspotB1R12S38_141);
var lyr_HotspotB1R12S38_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S38_141, 
                style: style_HotspotB1R12S38_141,
                popuplayertitle: 'Hotspot-B1-R12-S38',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S38_141.png" /> Hotspot-B1-R12-S38'
            });
var format_HotspotB1R12S40_142 = new ol.format.GeoJSON();
var features_HotspotB1R12S40_142 = format_HotspotB1R12S40_142.readFeatures(json_HotspotB1R12S40_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S40_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S40_142.addFeatures(features_HotspotB1R12S40_142);
var lyr_HotspotB1R12S40_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S40_142, 
                style: style_HotspotB1R12S40_142,
                popuplayertitle: 'Hotspot-B1-R12-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S40_142.png" /> Hotspot-B1-R12-S40'
            });
var format_HotspotB1R12S44_143 = new ol.format.GeoJSON();
var features_HotspotB1R12S44_143 = format_HotspotB1R12S44_143.readFeatures(json_HotspotB1R12S44_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S44_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S44_143.addFeatures(features_HotspotB1R12S44_143);
var lyr_HotspotB1R12S44_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S44_143, 
                style: style_HotspotB1R12S44_143,
                popuplayertitle: 'Hotspot-B1-R12-S44',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S44_143.png" /> Hotspot-B1-R12-S44'
            });
var format_HotspotB1R12S45_144 = new ol.format.GeoJSON();
var features_HotspotB1R12S45_144 = format_HotspotB1R12S45_144.readFeatures(json_HotspotB1R12S45_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S45_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S45_144.addFeatures(features_HotspotB1R12S45_144);
var lyr_HotspotB1R12S45_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S45_144, 
                style: style_HotspotB1R12S45_144,
                popuplayertitle: 'Hotspot-B1-R12-S45',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S45_144.png" /> Hotspot-B1-R12-S45'
            });
var format_HotspotB1R12S48_145 = new ol.format.GeoJSON();
var features_HotspotB1R12S48_145 = format_HotspotB1R12S48_145.readFeatures(json_HotspotB1R12S48_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S48_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S48_145.addFeatures(features_HotspotB1R12S48_145);
var lyr_HotspotB1R12S48_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S48_145, 
                style: style_HotspotB1R12S48_145,
                popuplayertitle: 'Hotspot-B1-R12-S48',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S48_145.png" /> Hotspot-B1-R12-S48'
            });
var format_HotspotB1R12S49_146 = new ol.format.GeoJSON();
var features_HotspotB1R12S49_146 = format_HotspotB1R12S49_146.readFeatures(json_HotspotB1R12S49_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S49_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S49_146.addFeatures(features_HotspotB1R12S49_146);
var lyr_HotspotB1R12S49_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S49_146, 
                style: style_HotspotB1R12S49_146,
                popuplayertitle: 'Hotspot-B1-R12-S49',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S49_146.png" /> Hotspot-B1-R12-S49'
            });
var format_HotspotB1R12S52_147 = new ol.format.GeoJSON();
var features_HotspotB1R12S52_147 = format_HotspotB1R12S52_147.readFeatures(json_HotspotB1R12S52_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S52_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S52_147.addFeatures(features_HotspotB1R12S52_147);
var lyr_HotspotB1R12S52_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S52_147, 
                style: style_HotspotB1R12S52_147,
                popuplayertitle: 'Hotspot-B1-R12-S52',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S52_147.png" /> Hotspot-B1-R12-S52'
            });
var format_HotspotB1R12S54_148 = new ol.format.GeoJSON();
var features_HotspotB1R12S54_148 = format_HotspotB1R12S54_148.readFeatures(json_HotspotB1R12S54_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S54_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S54_148.addFeatures(features_HotspotB1R12S54_148);
var lyr_HotspotB1R12S54_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S54_148, 
                style: style_HotspotB1R12S54_148,
                popuplayertitle: 'Hotspot-B1-R12-S54',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S54_148.png" /> Hotspot-B1-R12-S54'
            });
var format_HotspotB1R12S55_149 = new ol.format.GeoJSON();
var features_HotspotB1R12S55_149 = format_HotspotB1R12S55_149.readFeatures(json_HotspotB1R12S55_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S55_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S55_149.addFeatures(features_HotspotB1R12S55_149);
var lyr_HotspotB1R12S55_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S55_149, 
                style: style_HotspotB1R12S55_149,
                popuplayertitle: 'Hotspot-B1-R12-S55',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S55_149.png" /> Hotspot-B1-R12-S55'
            });
var format_HotspotB1R12S57_150 = new ol.format.GeoJSON();
var features_HotspotB1R12S57_150 = format_HotspotB1R12S57_150.readFeatures(json_HotspotB1R12S57_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S57_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S57_150.addFeatures(features_HotspotB1R12S57_150);
var lyr_HotspotB1R12S57_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S57_150, 
                style: style_HotspotB1R12S57_150,
                popuplayertitle: 'Hotspot-B1-R12-S57',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S57_150.png" /> Hotspot-B1-R12-S57'
            });
var format_HotspotB1R12S65_151 = new ol.format.GeoJSON();
var features_HotspotB1R12S65_151 = format_HotspotB1R12S65_151.readFeatures(json_HotspotB1R12S65_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S65_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S65_151.addFeatures(features_HotspotB1R12S65_151);
var lyr_HotspotB1R12S65_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S65_151, 
                style: style_HotspotB1R12S65_151,
                popuplayertitle: 'Hotspot-B1-R12-S65',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S65_151.png" /> Hotspot-B1-R12-S65'
            });
var format_HotspotB1R12S68_152 = new ol.format.GeoJSON();
var features_HotspotB1R12S68_152 = format_HotspotB1R12S68_152.readFeatures(json_HotspotB1R12S68_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S68_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S68_152.addFeatures(features_HotspotB1R12S68_152);
var lyr_HotspotB1R12S68_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S68_152, 
                style: style_HotspotB1R12S68_152,
                popuplayertitle: 'Hotspot-B1-R12-S68',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S68_152.png" /> Hotspot-B1-R12-S68'
            });
var format_HotspotB1R12S70_153 = new ol.format.GeoJSON();
var features_HotspotB1R12S70_153 = format_HotspotB1R12S70_153.readFeatures(json_HotspotB1R12S70_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S70_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S70_153.addFeatures(features_HotspotB1R12S70_153);
var lyr_HotspotB1R12S70_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S70_153, 
                style: style_HotspotB1R12S70_153,
                popuplayertitle: 'Hotspot-B1-R12-S70',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S70_153.png" /> Hotspot-B1-R12-S70'
            });
var format_HotspotB1R12S74_154 = new ol.format.GeoJSON();
var features_HotspotB1R12S74_154 = format_HotspotB1R12S74_154.readFeatures(json_HotspotB1R12S74_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S74_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S74_154.addFeatures(features_HotspotB1R12S74_154);
var lyr_HotspotB1R12S74_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S74_154, 
                style: style_HotspotB1R12S74_154,
                popuplayertitle: 'Hotspot-B1-R12-S74',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S74_154.png" /> Hotspot-B1-R12-S74'
            });
var format_HotspotB1R12S76_155 = new ol.format.GeoJSON();
var features_HotspotB1R12S76_155 = format_HotspotB1R12S76_155.readFeatures(json_HotspotB1R12S76_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S76_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S76_155.addFeatures(features_HotspotB1R12S76_155);
var lyr_HotspotB1R12S76_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S76_155, 
                style: style_HotspotB1R12S76_155,
                popuplayertitle: 'Hotspot-B1-R12-S76',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S76_155.png" /> Hotspot-B1-R12-S76'
            });
var format_HotspotB1R12S77_156 = new ol.format.GeoJSON();
var features_HotspotB1R12S77_156 = format_HotspotB1R12S77_156.readFeatures(json_HotspotB1R12S77_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S77_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S77_156.addFeatures(features_HotspotB1R12S77_156);
var lyr_HotspotB1R12S77_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S77_156, 
                style: style_HotspotB1R12S77_156,
                popuplayertitle: 'Hotspot-B1-R12-S77',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S77_156.png" /> Hotspot-B1-R12-S77'
            });
var format_HotspotB1R12S80_157 = new ol.format.GeoJSON();
var features_HotspotB1R12S80_157 = format_HotspotB1R12S80_157.readFeatures(json_HotspotB1R12S80_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S80_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S80_157.addFeatures(features_HotspotB1R12S80_157);
var lyr_HotspotB1R12S80_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S80_157, 
                style: style_HotspotB1R12S80_157,
                popuplayertitle: 'Hotspot-B1-R12-S80',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S80_157.png" /> Hotspot-B1-R12-S80'
            });
var format_HotspotB1R12S81_158 = new ol.format.GeoJSON();
var features_HotspotB1R12S81_158 = format_HotspotB1R12S81_158.readFeatures(json_HotspotB1R12S81_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S81_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S81_158.addFeatures(features_HotspotB1R12S81_158);
var lyr_HotspotB1R12S81_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S81_158, 
                style: style_HotspotB1R12S81_158,
                popuplayertitle: 'Hotspot-B1-R12-S81',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S81_158.png" /> Hotspot-B1-R12-S81'
            });
var format_HotspotB1R12S82_159 = new ol.format.GeoJSON();
var features_HotspotB1R12S82_159 = format_HotspotB1R12S82_159.readFeatures(json_HotspotB1R12S82_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S82_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S82_159.addFeatures(features_HotspotB1R12S82_159);
var lyr_HotspotB1R12S82_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S82_159, 
                style: style_HotspotB1R12S82_159,
                popuplayertitle: 'Hotspot-B1-R12-S82',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S82_159.png" /> Hotspot-B1-R12-S82'
            });
var format_HotspotB1R12S83_160 = new ol.format.GeoJSON();
var features_HotspotB1R12S83_160 = format_HotspotB1R12S83_160.readFeatures(json_HotspotB1R12S83_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S83_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S83_160.addFeatures(features_HotspotB1R12S83_160);
var lyr_HotspotB1R12S83_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S83_160, 
                style: style_HotspotB1R12S83_160,
                popuplayertitle: 'Hotspot-B1-R12-S83',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S83_160.png" /> Hotspot-B1-R12-S83'
            });
var format_HotspotB1R12S84_161 = new ol.format.GeoJSON();
var features_HotspotB1R12S84_161 = format_HotspotB1R12S84_161.readFeatures(json_HotspotB1R12S84_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R12S84_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R12S84_161.addFeatures(features_HotspotB1R12S84_161);
var lyr_HotspotB1R12S84_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R12S84_161, 
                style: style_HotspotB1R12S84_161,
                popuplayertitle: 'Hotspot-B1-R12-S84',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R12S84_161.png" /> Hotspot-B1-R12-S84'
            });
var format_HotspotB1R13S51_162 = new ol.format.GeoJSON();
var features_HotspotB1R13S51_162 = format_HotspotB1R13S51_162.readFeatures(json_HotspotB1R13S51_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S51_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S51_162.addFeatures(features_HotspotB1R13S51_162);
var lyr_HotspotB1R13S51_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S51_162, 
                style: style_HotspotB1R13S51_162,
                popuplayertitle: 'Hotspot-B1-R13-S5-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S51_162.png" /> Hotspot-B1-R13-S5-1'
            });
var format_HotspotB1R13S52_163 = new ol.format.GeoJSON();
var features_HotspotB1R13S52_163 = format_HotspotB1R13S52_163.readFeatures(json_HotspotB1R13S52_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S52_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S52_163.addFeatures(features_HotspotB1R13S52_163);
var lyr_HotspotB1R13S52_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S52_163, 
                style: style_HotspotB1R13S52_163,
                popuplayertitle: 'Hotspot-B1-R13-S5-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S52_163.png" /> Hotspot-B1-R13-S5-2'
            });
var format_HotspotB1R13S6_164 = new ol.format.GeoJSON();
var features_HotspotB1R13S6_164 = format_HotspotB1R13S6_164.readFeatures(json_HotspotB1R13S6_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S6_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S6_164.addFeatures(features_HotspotB1R13S6_164);
var lyr_HotspotB1R13S6_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S6_164, 
                style: style_HotspotB1R13S6_164,
                popuplayertitle: 'Hotspot-B1-R13-S6',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S6_164.png" /> Hotspot-B1-R13-S6'
            });
var format_HotspotB1R13S9_165 = new ol.format.GeoJSON();
var features_HotspotB1R13S9_165 = format_HotspotB1R13S9_165.readFeatures(json_HotspotB1R13S9_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S9_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S9_165.addFeatures(features_HotspotB1R13S9_165);
var lyr_HotspotB1R13S9_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S9_165, 
                style: style_HotspotB1R13S9_165,
                popuplayertitle: 'Hotspot-B1-R13-S9',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S9_165.png" /> Hotspot-B1-R13-S9'
            });
var format_HotspotB1R13S10_166 = new ol.format.GeoJSON();
var features_HotspotB1R13S10_166 = format_HotspotB1R13S10_166.readFeatures(json_HotspotB1R13S10_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S10_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S10_166.addFeatures(features_HotspotB1R13S10_166);
var lyr_HotspotB1R13S10_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S10_166, 
                style: style_HotspotB1R13S10_166,
                popuplayertitle: 'Hotspot-B1-R13-S10',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S10_166.png" /> Hotspot-B1-R13-S10'
            });
var format_HotspotB1R13S15_167 = new ol.format.GeoJSON();
var features_HotspotB1R13S15_167 = format_HotspotB1R13S15_167.readFeatures(json_HotspotB1R13S15_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S15_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S15_167.addFeatures(features_HotspotB1R13S15_167);
var lyr_HotspotB1R13S15_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S15_167, 
                style: style_HotspotB1R13S15_167,
                popuplayertitle: 'Hotspot-B1-R13-S15',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S15_167.png" /> Hotspot-B1-R13-S15'
            });
var format_HotspotB1R13S17_168 = new ol.format.GeoJSON();
var features_HotspotB1R13S17_168 = format_HotspotB1R13S17_168.readFeatures(json_HotspotB1R13S17_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S17_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S17_168.addFeatures(features_HotspotB1R13S17_168);
var lyr_HotspotB1R13S17_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S17_168, 
                style: style_HotspotB1R13S17_168,
                popuplayertitle: 'Hotspot-B1-R13-S17',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S17_168.png" /> Hotspot-B1-R13-S17'
            });
var format_HotspotB1R13S20_169 = new ol.format.GeoJSON();
var features_HotspotB1R13S20_169 = format_HotspotB1R13S20_169.readFeatures(json_HotspotB1R13S20_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S20_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S20_169.addFeatures(features_HotspotB1R13S20_169);
var lyr_HotspotB1R13S20_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S20_169, 
                style: style_HotspotB1R13S20_169,
                popuplayertitle: 'Hotspot-B1-R13-S20',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S20_169.png" /> Hotspot-B1-R13-S20'
            });
var format_HotspotB1R13S23_170 = new ol.format.GeoJSON();
var features_HotspotB1R13S23_170 = format_HotspotB1R13S23_170.readFeatures(json_HotspotB1R13S23_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S23_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S23_170.addFeatures(features_HotspotB1R13S23_170);
var lyr_HotspotB1R13S23_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S23_170, 
                style: style_HotspotB1R13S23_170,
                popuplayertitle: 'Hotspot-B1-R13-S23',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S23_170.png" /> Hotspot-B1-R13-S23'
            });
var format_HotspotB1R13S31_171 = new ol.format.GeoJSON();
var features_HotspotB1R13S31_171 = format_HotspotB1R13S31_171.readFeatures(json_HotspotB1R13S31_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S31_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S31_171.addFeatures(features_HotspotB1R13S31_171);
var lyr_HotspotB1R13S31_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S31_171, 
                style: style_HotspotB1R13S31_171,
                popuplayertitle: 'Hotspot-B1-R13-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S31_171.png" /> Hotspot-B1-R13-S31'
            });
var format_HotspotB1R13S34_172 = new ol.format.GeoJSON();
var features_HotspotB1R13S34_172 = format_HotspotB1R13S34_172.readFeatures(json_HotspotB1R13S34_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S34_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S34_172.addFeatures(features_HotspotB1R13S34_172);
var lyr_HotspotB1R13S34_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S34_172, 
                style: style_HotspotB1R13S34_172,
                popuplayertitle: 'Hotspot-B1-R13-S34',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S34_172.png" /> Hotspot-B1-R13-S34'
            });
var format_HotspotB1R13S42_173 = new ol.format.GeoJSON();
var features_HotspotB1R13S42_173 = format_HotspotB1R13S42_173.readFeatures(json_HotspotB1R13S42_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S42_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S42_173.addFeatures(features_HotspotB1R13S42_173);
var lyr_HotspotB1R13S42_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S42_173, 
                style: style_HotspotB1R13S42_173,
                popuplayertitle: 'Hotspot-B1-R13-S42',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S42_173.png" /> Hotspot-B1-R13-S42'
            });
var format_HotspotB1R13S45_174 = new ol.format.GeoJSON();
var features_HotspotB1R13S45_174 = format_HotspotB1R13S45_174.readFeatures(json_HotspotB1R13S45_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S45_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S45_174.addFeatures(features_HotspotB1R13S45_174);
var lyr_HotspotB1R13S45_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S45_174, 
                style: style_HotspotB1R13S45_174,
                popuplayertitle: 'Hotspot-B1-R13-S45',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S45_174.png" /> Hotspot-B1-R13-S45'
            });
var format_HotspotB1R13S50_175 = new ol.format.GeoJSON();
var features_HotspotB1R13S50_175 = format_HotspotB1R13S50_175.readFeatures(json_HotspotB1R13S50_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S50_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S50_175.addFeatures(features_HotspotB1R13S50_175);
var lyr_HotspotB1R13S50_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S50_175, 
                style: style_HotspotB1R13S50_175,
                popuplayertitle: 'Hotspot-B1-R13-S50',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S50_175.png" /> Hotspot-B1-R13-S50'
            });
var format_HotspotB1R13S56_176 = new ol.format.GeoJSON();
var features_HotspotB1R13S56_176 = format_HotspotB1R13S56_176.readFeatures(json_HotspotB1R13S56_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S56_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S56_176.addFeatures(features_HotspotB1R13S56_176);
var lyr_HotspotB1R13S56_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S56_176, 
                style: style_HotspotB1R13S56_176,
                popuplayertitle: 'Hotspot-B1-R13-S56',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S56_176.png" /> Hotspot-B1-R13-S56'
            });
var format_HotspotB1R13S57_177 = new ol.format.GeoJSON();
var features_HotspotB1R13S57_177 = format_HotspotB1R13S57_177.readFeatures(json_HotspotB1R13S57_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S57_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S57_177.addFeatures(features_HotspotB1R13S57_177);
var lyr_HotspotB1R13S57_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S57_177, 
                style: style_HotspotB1R13S57_177,
                popuplayertitle: 'Hotspot-B1-R13-S57',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S57_177.png" /> Hotspot-B1-R13-S57'
            });
var format_HotspotB1R13S58_178 = new ol.format.GeoJSON();
var features_HotspotB1R13S58_178 = format_HotspotB1R13S58_178.readFeatures(json_HotspotB1R13S58_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S58_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S58_178.addFeatures(features_HotspotB1R13S58_178);
var lyr_HotspotB1R13S58_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S58_178, 
                style: style_HotspotB1R13S58_178,
                popuplayertitle: 'Hotspot-B1-R13-S58',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S58_178.png" /> Hotspot-B1-R13-S58'
            });
var format_HotspotB1R13S59_179 = new ol.format.GeoJSON();
var features_HotspotB1R13S59_179 = format_HotspotB1R13S59_179.readFeatures(json_HotspotB1R13S59_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S59_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S59_179.addFeatures(features_HotspotB1R13S59_179);
var lyr_HotspotB1R13S59_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S59_179, 
                style: style_HotspotB1R13S59_179,
                popuplayertitle: 'Hotspot-B1-R13-S59',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S59_179.png" /> Hotspot-B1-R13-S59'
            });
var format_HotspotB1R13S79_180 = new ol.format.GeoJSON();
var features_HotspotB1R13S79_180 = format_HotspotB1R13S79_180.readFeatures(json_HotspotB1R13S79_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S79_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S79_180.addFeatures(features_HotspotB1R13S79_180);
var lyr_HotspotB1R13S79_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S79_180, 
                style: style_HotspotB1R13S79_180,
                popuplayertitle: 'Hotspot-B1-R13-S79',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S79_180.png" /> Hotspot-B1-R13-S79'
            });
var format_HotspotB1R13S80_181 = new ol.format.GeoJSON();
var features_HotspotB1R13S80_181 = format_HotspotB1R13S80_181.readFeatures(json_HotspotB1R13S80_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S80_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S80_181.addFeatures(features_HotspotB1R13S80_181);
var lyr_HotspotB1R13S80_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S80_181, 
                style: style_HotspotB1R13S80_181,
                popuplayertitle: 'Hotspot-B1-R13-S80',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S80_181.png" /> Hotspot-B1-R13-S80'
            });
var format_HotspotB1R13S81_182 = new ol.format.GeoJSON();
var features_HotspotB1R13S81_182 = format_HotspotB1R13S81_182.readFeatures(json_HotspotB1R13S81_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S81_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S81_182.addFeatures(features_HotspotB1R13S81_182);
var lyr_HotspotB1R13S81_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S81_182, 
                style: style_HotspotB1R13S81_182,
                popuplayertitle: 'Hotspot-B1-R13-S81',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S81_182.png" /> Hotspot-B1-R13-S81'
            });
var format_HotspotB1R13S84_183 = new ol.format.GeoJSON();
var features_HotspotB1R13S84_183 = format_HotspotB1R13S84_183.readFeatures(json_HotspotB1R13S84_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R13S84_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R13S84_183.addFeatures(features_HotspotB1R13S84_183);
var lyr_HotspotB1R13S84_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R13S84_183, 
                style: style_HotspotB1R13S84_183,
                popuplayertitle: 'Hotspot-B1-R13-S84',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R13S84_183.png" /> Hotspot-B1-R13-S84'
            });
var format_HotspotB1R14S5_184 = new ol.format.GeoJSON();
var features_HotspotB1R14S5_184 = format_HotspotB1R14S5_184.readFeatures(json_HotspotB1R14S5_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S5_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S5_184.addFeatures(features_HotspotB1R14S5_184);
var lyr_HotspotB1R14S5_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S5_184, 
                style: style_HotspotB1R14S5_184,
                popuplayertitle: 'Hotspot-B1-R14-S5',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S5_184.png" /> Hotspot-B1-R14-S5'
            });
var format_HotspotB1R14S8_185 = new ol.format.GeoJSON();
var features_HotspotB1R14S8_185 = format_HotspotB1R14S8_185.readFeatures(json_HotspotB1R14S8_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S8_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S8_185.addFeatures(features_HotspotB1R14S8_185);
var lyr_HotspotB1R14S8_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S8_185, 
                style: style_HotspotB1R14S8_185,
                popuplayertitle: 'Hotspot-B1-R14-S8',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S8_185.png" /> Hotspot-B1-R14-S8'
            });
var format_HotspotB1R14S14_186 = new ol.format.GeoJSON();
var features_HotspotB1R14S14_186 = format_HotspotB1R14S14_186.readFeatures(json_HotspotB1R14S14_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S14_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S14_186.addFeatures(features_HotspotB1R14S14_186);
var lyr_HotspotB1R14S14_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S14_186, 
                style: style_HotspotB1R14S14_186,
                popuplayertitle: 'Hotspot-B1-R14-S14',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S14_186.png" /> Hotspot-B1-R14-S14'
            });
var format_HotspotB1R14S15_187 = new ol.format.GeoJSON();
var features_HotspotB1R14S15_187 = format_HotspotB1R14S15_187.readFeatures(json_HotspotB1R14S15_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S15_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S15_187.addFeatures(features_HotspotB1R14S15_187);
var lyr_HotspotB1R14S15_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S15_187, 
                style: style_HotspotB1R14S15_187,
                popuplayertitle: 'Hotspot-B1-R14-S15',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S15_187.png" /> Hotspot-B1-R14-S15'
            });
var format_HotspotB1R14S17_188 = new ol.format.GeoJSON();
var features_HotspotB1R14S17_188 = format_HotspotB1R14S17_188.readFeatures(json_HotspotB1R14S17_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S17_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S17_188.addFeatures(features_HotspotB1R14S17_188);
var lyr_HotspotB1R14S17_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S17_188, 
                style: style_HotspotB1R14S17_188,
                popuplayertitle: 'Hotspot-B1-R14-S17',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S17_188.png" /> Hotspot-B1-R14-S17'
            });
var format_HotspotB1R14S19_189 = new ol.format.GeoJSON();
var features_HotspotB1R14S19_189 = format_HotspotB1R14S19_189.readFeatures(json_HotspotB1R14S19_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S19_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S19_189.addFeatures(features_HotspotB1R14S19_189);
var lyr_HotspotB1R14S19_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S19_189, 
                style: style_HotspotB1R14S19_189,
                popuplayertitle: 'Hotspot-B1-R14-S19',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S19_189.png" /> Hotspot-B1-R14-S19'
            });
var format_HotspotB1R14S20_190 = new ol.format.GeoJSON();
var features_HotspotB1R14S20_190 = format_HotspotB1R14S20_190.readFeatures(json_HotspotB1R14S20_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S20_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S20_190.addFeatures(features_HotspotB1R14S20_190);
var lyr_HotspotB1R14S20_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S20_190, 
                style: style_HotspotB1R14S20_190,
                popuplayertitle: 'Hotspot-B1-R14-S20',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S20_190.png" /> Hotspot-B1-R14-S20'
            });
var format_HotspotB1R14S23_191 = new ol.format.GeoJSON();
var features_HotspotB1R14S23_191 = format_HotspotB1R14S23_191.readFeatures(json_HotspotB1R14S23_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S23_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S23_191.addFeatures(features_HotspotB1R14S23_191);
var lyr_HotspotB1R14S23_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S23_191, 
                style: style_HotspotB1R14S23_191,
                popuplayertitle: 'Hotspot-B1-R14-S23',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S23_191.png" /> Hotspot-B1-R14-S23'
            });
var format_HotspotB1R14S24_192 = new ol.format.GeoJSON();
var features_HotspotB1R14S24_192 = format_HotspotB1R14S24_192.readFeatures(json_HotspotB1R14S24_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S24_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S24_192.addFeatures(features_HotspotB1R14S24_192);
var lyr_HotspotB1R14S24_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S24_192, 
                style: style_HotspotB1R14S24_192,
                popuplayertitle: 'Hotspot-B1-R14-S24',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S24_192.png" /> Hotspot-B1-R14-S24'
            });
var format_HotspotB1R14S28_193 = new ol.format.GeoJSON();
var features_HotspotB1R14S28_193 = format_HotspotB1R14S28_193.readFeatures(json_HotspotB1R14S28_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S28_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S28_193.addFeatures(features_HotspotB1R14S28_193);
var lyr_HotspotB1R14S28_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S28_193, 
                style: style_HotspotB1R14S28_193,
                popuplayertitle: 'Hotspot-B1-R14-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S28_193.png" /> Hotspot-B1-R14-S28'
            });
var format_HotspotB1R14S29_194 = new ol.format.GeoJSON();
var features_HotspotB1R14S29_194 = format_HotspotB1R14S29_194.readFeatures(json_HotspotB1R14S29_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S29_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S29_194.addFeatures(features_HotspotB1R14S29_194);
var lyr_HotspotB1R14S29_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S29_194, 
                style: style_HotspotB1R14S29_194,
                popuplayertitle: 'Hotspot-B1-R14-S29',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S29_194.png" /> Hotspot-B1-R14-S29'
            });
var format_HotspotB1R14S31_195 = new ol.format.GeoJSON();
var features_HotspotB1R14S31_195 = format_HotspotB1R14S31_195.readFeatures(json_HotspotB1R14S31_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S31_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S31_195.addFeatures(features_HotspotB1R14S31_195);
var lyr_HotspotB1R14S31_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S31_195, 
                style: style_HotspotB1R14S31_195,
                popuplayertitle: 'Hotspot-B1-R14-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S31_195.png" /> Hotspot-B1-R14-S31'
            });
var format_HotspotB1R14S331_196 = new ol.format.GeoJSON();
var features_HotspotB1R14S331_196 = format_HotspotB1R14S331_196.readFeatures(json_HotspotB1R14S331_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S331_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S331_196.addFeatures(features_HotspotB1R14S331_196);
var lyr_HotspotB1R14S331_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S331_196, 
                style: style_HotspotB1R14S331_196,
                popuplayertitle: 'Hotspot-B1-R14-S33-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S331_196.png" /> Hotspot-B1-R14-S33-1'
            });
var format_HotspotB1R14S332_197 = new ol.format.GeoJSON();
var features_HotspotB1R14S332_197 = format_HotspotB1R14S332_197.readFeatures(json_HotspotB1R14S332_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S332_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S332_197.addFeatures(features_HotspotB1R14S332_197);
var lyr_HotspotB1R14S332_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S332_197, 
                style: style_HotspotB1R14S332_197,
                popuplayertitle: 'Hotspot-B1-R14-S33-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S332_197.png" /> Hotspot-B1-R14-S33-2'
            });
var format_HotspotB1R14S41_198 = new ol.format.GeoJSON();
var features_HotspotB1R14S41_198 = format_HotspotB1R14S41_198.readFeatures(json_HotspotB1R14S41_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S41_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S41_198.addFeatures(features_HotspotB1R14S41_198);
var lyr_HotspotB1R14S41_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S41_198, 
                style: style_HotspotB1R14S41_198,
                popuplayertitle: 'Hotspot-B1-R14-S41',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S41_198.png" /> Hotspot-B1-R14-S41'
            });
var format_HotspotB1R14S44_199 = new ol.format.GeoJSON();
var features_HotspotB1R14S44_199 = format_HotspotB1R14S44_199.readFeatures(json_HotspotB1R14S44_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S44_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S44_199.addFeatures(features_HotspotB1R14S44_199);
var lyr_HotspotB1R14S44_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S44_199, 
                style: style_HotspotB1R14S44_199,
                popuplayertitle: 'Hotspot-B1-R14-S44',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S44_199.png" /> Hotspot-B1-R14-S44'
            });
var format_HotspotB1R14S47_200 = new ol.format.GeoJSON();
var features_HotspotB1R14S47_200 = format_HotspotB1R14S47_200.readFeatures(json_HotspotB1R14S47_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S47_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S47_200.addFeatures(features_HotspotB1R14S47_200);
var lyr_HotspotB1R14S47_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S47_200, 
                style: style_HotspotB1R14S47_200,
                popuplayertitle: 'Hotspot-B1-R14-S47',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S47_200.png" /> Hotspot-B1-R14-S47'
            });
var format_HotspotB1R14S51_201 = new ol.format.GeoJSON();
var features_HotspotB1R14S51_201 = format_HotspotB1R14S51_201.readFeatures(json_HotspotB1R14S51_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S51_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S51_201.addFeatures(features_HotspotB1R14S51_201);
var lyr_HotspotB1R14S51_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S51_201, 
                style: style_HotspotB1R14S51_201,
                popuplayertitle: 'Hotspot-B1-R14-S51',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S51_201.png" /> Hotspot-B1-R14-S51'
            });
var format_HotspotB1R14S54_202 = new ol.format.GeoJSON();
var features_HotspotB1R14S54_202 = format_HotspotB1R14S54_202.readFeatures(json_HotspotB1R14S54_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S54_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S54_202.addFeatures(features_HotspotB1R14S54_202);
var lyr_HotspotB1R14S54_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S54_202, 
                style: style_HotspotB1R14S54_202,
                popuplayertitle: 'Hotspot-B1-R14-S54',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S54_202.png" /> Hotspot-B1-R14-S54'
            });
var format_HotspotB1R14S58_203 = new ol.format.GeoJSON();
var features_HotspotB1R14S58_203 = format_HotspotB1R14S58_203.readFeatures(json_HotspotB1R14S58_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S58_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S58_203.addFeatures(features_HotspotB1R14S58_203);
var lyr_HotspotB1R14S58_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S58_203, 
                style: style_HotspotB1R14S58_203,
                popuplayertitle: 'Hotspot-B1-R14-S58',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S58_203.png" /> Hotspot-B1-R14-S58'
            });
var format_HotspotB1R14S60_204 = new ol.format.GeoJSON();
var features_HotspotB1R14S60_204 = format_HotspotB1R14S60_204.readFeatures(json_HotspotB1R14S60_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S60_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S60_204.addFeatures(features_HotspotB1R14S60_204);
var lyr_HotspotB1R14S60_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S60_204, 
                style: style_HotspotB1R14S60_204,
                popuplayertitle: 'Hotspot-B1-R14-S60',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S60_204.png" /> Hotspot-B1-R14-S60'
            });
var format_HotspotB1R14S63_205 = new ol.format.GeoJSON();
var features_HotspotB1R14S63_205 = format_HotspotB1R14S63_205.readFeatures(json_HotspotB1R14S63_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S63_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S63_205.addFeatures(features_HotspotB1R14S63_205);
var lyr_HotspotB1R14S63_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S63_205, 
                style: style_HotspotB1R14S63_205,
                popuplayertitle: 'Hotspot-B1-R14-S63',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S63_205.png" /> Hotspot-B1-R14-S63'
            });
var format_HotspotB1R14S80_206 = new ol.format.GeoJSON();
var features_HotspotB1R14S80_206 = format_HotspotB1R14S80_206.readFeatures(json_HotspotB1R14S80_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S80_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S80_206.addFeatures(features_HotspotB1R14S80_206);
var lyr_HotspotB1R14S80_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S80_206, 
                style: style_HotspotB1R14S80_206,
                popuplayertitle: 'Hotspot-B1-R14-S80',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S80_206.png" /> Hotspot-B1-R14-S80'
            });
var format_HotspotB1R14S881_207 = new ol.format.GeoJSON();
var features_HotspotB1R14S881_207 = format_HotspotB1R14S881_207.readFeatures(json_HotspotB1R14S881_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S881_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S881_207.addFeatures(features_HotspotB1R14S881_207);
var lyr_HotspotB1R14S881_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S881_207, 
                style: style_HotspotB1R14S881_207,
                popuplayertitle: 'Hotspot-B1-R14-S88-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S881_207.png" /> Hotspot-B1-R14-S88-1'
            });
var format_HotspotB1R14S882_208 = new ol.format.GeoJSON();
var features_HotspotB1R14S882_208 = format_HotspotB1R14S882_208.readFeatures(json_HotspotB1R14S882_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R14S882_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R14S882_208.addFeatures(features_HotspotB1R14S882_208);
var lyr_HotspotB1R14S882_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R14S882_208, 
                style: style_HotspotB1R14S882_208,
                popuplayertitle: 'Hotspot-B1-R14-S88-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R14S882_208.png" /> Hotspot-B1-R14-S88-2'
            });
var format_HotspotB1R15S6_209 = new ol.format.GeoJSON();
var features_HotspotB1R15S6_209 = format_HotspotB1R15S6_209.readFeatures(json_HotspotB1R15S6_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S6_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S6_209.addFeatures(features_HotspotB1R15S6_209);
var lyr_HotspotB1R15S6_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S6_209, 
                style: style_HotspotB1R15S6_209,
                popuplayertitle: 'Hotspot-B1-R15-S6',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S6_209.png" /> Hotspot-B1-R15-S6'
            });
var format_HotspotB1R15S71_210 = new ol.format.GeoJSON();
var features_HotspotB1R15S71_210 = format_HotspotB1R15S71_210.readFeatures(json_HotspotB1R15S71_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S71_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S71_210.addFeatures(features_HotspotB1R15S71_210);
var lyr_HotspotB1R15S71_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S71_210, 
                style: style_HotspotB1R15S71_210,
                popuplayertitle: 'Hotspot-B1-R15-S7-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S71_210.png" /> Hotspot-B1-R15-S7-1'
            });
var format_HotspotB1R15S72_211 = new ol.format.GeoJSON();
var features_HotspotB1R15S72_211 = format_HotspotB1R15S72_211.readFeatures(json_HotspotB1R15S72_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S72_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S72_211.addFeatures(features_HotspotB1R15S72_211);
var lyr_HotspotB1R15S72_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S72_211, 
                style: style_HotspotB1R15S72_211,
                popuplayertitle: 'Hotspot-B1-R15-S7-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S72_211.png" /> Hotspot-B1-R15-S7-2'
            });
var format_HotspotB1R15S73_212 = new ol.format.GeoJSON();
var features_HotspotB1R15S73_212 = format_HotspotB1R15S73_212.readFeatures(json_HotspotB1R15S73_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S73_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S73_212.addFeatures(features_HotspotB1R15S73_212);
var lyr_HotspotB1R15S73_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S73_212, 
                style: style_HotspotB1R15S73_212,
                popuplayertitle: 'Hotspot-B1-R15-S7-3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S73_212.png" /> Hotspot-B1-R15-S7-3'
            });
var format_HotspotB1R15S9_213 = new ol.format.GeoJSON();
var features_HotspotB1R15S9_213 = format_HotspotB1R15S9_213.readFeatures(json_HotspotB1R15S9_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S9_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S9_213.addFeatures(features_HotspotB1R15S9_213);
var lyr_HotspotB1R15S9_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S9_213, 
                style: style_HotspotB1R15S9_213,
                popuplayertitle: 'Hotspot-B1-R15-S9',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S9_213.png" /> Hotspot-B1-R15-S9'
            });
var format_HotspotB1R15S12_214 = new ol.format.GeoJSON();
var features_HotspotB1R15S12_214 = format_HotspotB1R15S12_214.readFeatures(json_HotspotB1R15S12_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S12_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S12_214.addFeatures(features_HotspotB1R15S12_214);
var lyr_HotspotB1R15S12_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S12_214, 
                style: style_HotspotB1R15S12_214,
                popuplayertitle: 'Hotspot-B1-R15-S12',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S12_214.png" /> Hotspot-B1-R15-S12'
            });
var format_HotspotB1R15S18_215 = new ol.format.GeoJSON();
var features_HotspotB1R15S18_215 = format_HotspotB1R15S18_215.readFeatures(json_HotspotB1R15S18_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S18_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S18_215.addFeatures(features_HotspotB1R15S18_215);
var lyr_HotspotB1R15S18_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S18_215, 
                style: style_HotspotB1R15S18_215,
                popuplayertitle: 'Hotspot-B1-R15-S18',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S18_215.png" /> Hotspot-B1-R15-S18'
            });
var format_HotspotB1R15S20_216 = new ol.format.GeoJSON();
var features_HotspotB1R15S20_216 = format_HotspotB1R15S20_216.readFeatures(json_HotspotB1R15S20_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S20_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S20_216.addFeatures(features_HotspotB1R15S20_216);
var lyr_HotspotB1R15S20_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S20_216, 
                style: style_HotspotB1R15S20_216,
                popuplayertitle: 'Hotspot-B1-R15-S20',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S20_216.png" /> Hotspot-B1-R15-S20'
            });
var format_HotspotB1R15S281_217 = new ol.format.GeoJSON();
var features_HotspotB1R15S281_217 = format_HotspotB1R15S281_217.readFeatures(json_HotspotB1R15S281_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S281_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S281_217.addFeatures(features_HotspotB1R15S281_217);
var lyr_HotspotB1R15S281_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S281_217, 
                style: style_HotspotB1R15S281_217,
                popuplayertitle: 'Hotspot-B1-R15-S28-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S281_217.png" /> Hotspot-B1-R15-S28-1'
            });
var format_HotspotB1R15S282_218 = new ol.format.GeoJSON();
var features_HotspotB1R15S282_218 = format_HotspotB1R15S282_218.readFeatures(json_HotspotB1R15S282_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S282_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S282_218.addFeatures(features_HotspotB1R15S282_218);
var lyr_HotspotB1R15S282_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S282_218, 
                style: style_HotspotB1R15S282_218,
                popuplayertitle: 'Hotspot-B1-R15-S28-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S282_218.png" /> Hotspot-B1-R15-S28-2'
            });
var format_HotspotB1R15S31_219 = new ol.format.GeoJSON();
var features_HotspotB1R15S31_219 = format_HotspotB1R15S31_219.readFeatures(json_HotspotB1R15S31_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S31_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S31_219.addFeatures(features_HotspotB1R15S31_219);
var lyr_HotspotB1R15S31_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S31_219, 
                style: style_HotspotB1R15S31_219,
                popuplayertitle: 'Hotspot-B1-R15-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S31_219.png" /> Hotspot-B1-R15-S31'
            });
var format_HotspotB1R15S32_220 = new ol.format.GeoJSON();
var features_HotspotB1R15S32_220 = format_HotspotB1R15S32_220.readFeatures(json_HotspotB1R15S32_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S32_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S32_220.addFeatures(features_HotspotB1R15S32_220);
var lyr_HotspotB1R15S32_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S32_220, 
                style: style_HotspotB1R15S32_220,
                popuplayertitle: 'Hotspot-B1-R15-S32',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S32_220.png" /> Hotspot-B1-R15-S32'
            });
var format_HotspotB1R15S47_221 = new ol.format.GeoJSON();
var features_HotspotB1R15S47_221 = format_HotspotB1R15S47_221.readFeatures(json_HotspotB1R15S47_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S47_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S47_221.addFeatures(features_HotspotB1R15S47_221);
var lyr_HotspotB1R15S47_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S47_221, 
                style: style_HotspotB1R15S47_221,
                popuplayertitle: 'Hotspot-B1-R15-S47',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S47_221.png" /> Hotspot-B1-R15-S47'
            });
var format_HotspotB1R15S55_222 = new ol.format.GeoJSON();
var features_HotspotB1R15S55_222 = format_HotspotB1R15S55_222.readFeatures(json_HotspotB1R15S55_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S55_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S55_222.addFeatures(features_HotspotB1R15S55_222);
var lyr_HotspotB1R15S55_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S55_222, 
                style: style_HotspotB1R15S55_222,
                popuplayertitle: 'Hotspot-B1-R15-S55',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S55_222.png" /> Hotspot-B1-R15-S55'
            });
var format_HotspotB1R15S63_223 = new ol.format.GeoJSON();
var features_HotspotB1R15S63_223 = format_HotspotB1R15S63_223.readFeatures(json_HotspotB1R15S63_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S63_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S63_223.addFeatures(features_HotspotB1R15S63_223);
var lyr_HotspotB1R15S63_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S63_223, 
                style: style_HotspotB1R15S63_223,
                popuplayertitle: 'Hotspot-B1-R15-S63',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S63_223.png" /> Hotspot-B1-R15-S63'
            });
var format_HotspotB1R15S721_224 = new ol.format.GeoJSON();
var features_HotspotB1R15S721_224 = format_HotspotB1R15S721_224.readFeatures(json_HotspotB1R15S721_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S721_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S721_224.addFeatures(features_HotspotB1R15S721_224);
var lyr_HotspotB1R15S721_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S721_224, 
                style: style_HotspotB1R15S721_224,
                popuplayertitle: 'Hotspot-B1-R15-S72-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S721_224.png" /> Hotspot-B1-R15-S72-1'
            });
var format_HotspotB1R15S722_225 = new ol.format.GeoJSON();
var features_HotspotB1R15S722_225 = format_HotspotB1R15S722_225.readFeatures(json_HotspotB1R15S722_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S722_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S722_225.addFeatures(features_HotspotB1R15S722_225);
var lyr_HotspotB1R15S722_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S722_225, 
                style: style_HotspotB1R15S722_225,
                popuplayertitle: 'Hotspot-B1-R15-S72-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S722_225.png" /> Hotspot-B1-R15-S72-2'
            });
var format_HotspotB1R15S77_226 = new ol.format.GeoJSON();
var features_HotspotB1R15S77_226 = format_HotspotB1R15S77_226.readFeatures(json_HotspotB1R15S77_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S77_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S77_226.addFeatures(features_HotspotB1R15S77_226);
var lyr_HotspotB1R15S77_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S77_226, 
                style: style_HotspotB1R15S77_226,
                popuplayertitle: 'Hotspot-B1-R15-S77',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S77_226.png" /> Hotspot-B1-R15-S77'
            });
var format_HotspotB1R15S81_227 = new ol.format.GeoJSON();
var features_HotspotB1R15S81_227 = format_HotspotB1R15S81_227.readFeatures(json_HotspotB1R15S81_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S81_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S81_227.addFeatures(features_HotspotB1R15S81_227);
var lyr_HotspotB1R15S81_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S81_227, 
                style: style_HotspotB1R15S81_227,
                popuplayertitle: 'Hotspot-B1-R15-S81',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S81_227.png" /> Hotspot-B1-R15-S81'
            });
var format_HotspotB1R15S83_228 = new ol.format.GeoJSON();
var features_HotspotB1R15S83_228 = format_HotspotB1R15S83_228.readFeatures(json_HotspotB1R15S83_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R15S83_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R15S83_228.addFeatures(features_HotspotB1R15S83_228);
var lyr_HotspotB1R15S83_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R15S83_228, 
                style: style_HotspotB1R15S83_228,
                popuplayertitle: 'Hotspot-B1-R15-S83',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R15S83_228.png" /> Hotspot-B1-R15-S83'
            });
var format_HotspotB1R16S1_229 = new ol.format.GeoJSON();
var features_HotspotB1R16S1_229 = format_HotspotB1R16S1_229.readFeatures(json_HotspotB1R16S1_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S1_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S1_229.addFeatures(features_HotspotB1R16S1_229);
var lyr_HotspotB1R16S1_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S1_229, 
                style: style_HotspotB1R16S1_229,
                popuplayertitle: 'Hotspot-B1-R16-S1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S1_229.png" /> Hotspot-B1-R16-S1'
            });
var format_HotspotB1R16S41_230 = new ol.format.GeoJSON();
var features_HotspotB1R16S41_230 = format_HotspotB1R16S41_230.readFeatures(json_HotspotB1R16S41_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S41_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S41_230.addFeatures(features_HotspotB1R16S41_230);
var lyr_HotspotB1R16S41_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S41_230, 
                style: style_HotspotB1R16S41_230,
                popuplayertitle: 'Hotspot-B1-R16-S4-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S41_230.png" /> Hotspot-B1-R16-S4-1'
            });
var format_HotspotB1R16S42_231 = new ol.format.GeoJSON();
var features_HotspotB1R16S42_231 = format_HotspotB1R16S42_231.readFeatures(json_HotspotB1R16S42_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S42_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S42_231.addFeatures(features_HotspotB1R16S42_231);
var lyr_HotspotB1R16S42_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S42_231, 
                style: style_HotspotB1R16S42_231,
                popuplayertitle: 'Hotspot-B1-R16-S4-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S42_231.png" /> Hotspot-B1-R16-S4-2'
            });
var format_HotspotB1R16S8_232 = new ol.format.GeoJSON();
var features_HotspotB1R16S8_232 = format_HotspotB1R16S8_232.readFeatures(json_HotspotB1R16S8_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S8_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S8_232.addFeatures(features_HotspotB1R16S8_232);
var lyr_HotspotB1R16S8_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S8_232, 
                style: style_HotspotB1R16S8_232,
                popuplayertitle: 'Hotspot-B1-R16-S8',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S8_232.png" /> Hotspot-B1-R16-S8'
            });
var format_HotspotB1R16S13_233 = new ol.format.GeoJSON();
var features_HotspotB1R16S13_233 = format_HotspotB1R16S13_233.readFeatures(json_HotspotB1R16S13_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S13_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S13_233.addFeatures(features_HotspotB1R16S13_233);
var lyr_HotspotB1R16S13_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S13_233, 
                style: style_HotspotB1R16S13_233,
                popuplayertitle: 'Hotspot-B1-R16-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S13_233.png" /> Hotspot-B1-R16-S13'
            });
var format_HotspotB1R16S15_234 = new ol.format.GeoJSON();
var features_HotspotB1R16S15_234 = format_HotspotB1R16S15_234.readFeatures(json_HotspotB1R16S15_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S15_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S15_234.addFeatures(features_HotspotB1R16S15_234);
var lyr_HotspotB1R16S15_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S15_234, 
                style: style_HotspotB1R16S15_234,
                popuplayertitle: 'Hotspot-B1-R16-S15',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S15_234.png" /> Hotspot-B1-R16-S15'
            });
var format_HotspotB1R16S18_235 = new ol.format.GeoJSON();
var features_HotspotB1R16S18_235 = format_HotspotB1R16S18_235.readFeatures(json_HotspotB1R16S18_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S18_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S18_235.addFeatures(features_HotspotB1R16S18_235);
var lyr_HotspotB1R16S18_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S18_235, 
                style: style_HotspotB1R16S18_235,
                popuplayertitle: 'Hotspot-B1-R16-S18',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S18_235.png" /> Hotspot-B1-R16-S18'
            });
var format_HotspotB1R16S19_236 = new ol.format.GeoJSON();
var features_HotspotB1R16S19_236 = format_HotspotB1R16S19_236.readFeatures(json_HotspotB1R16S19_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S19_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S19_236.addFeatures(features_HotspotB1R16S19_236);
var lyr_HotspotB1R16S19_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S19_236, 
                style: style_HotspotB1R16S19_236,
                popuplayertitle: 'Hotspot-B1-R16-S19',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S19_236.png" /> Hotspot-B1-R16-S19'
            });
var format_HotspotB1R16S21_237 = new ol.format.GeoJSON();
var features_HotspotB1R16S21_237 = format_HotspotB1R16S21_237.readFeatures(json_HotspotB1R16S21_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S21_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S21_237.addFeatures(features_HotspotB1R16S21_237);
var lyr_HotspotB1R16S21_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S21_237, 
                style: style_HotspotB1R16S21_237,
                popuplayertitle: 'Hotspot-B1-R16-S21',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S21_237.png" /> Hotspot-B1-R16-S21'
            });
var format_HotspotB1R16S24_238 = new ol.format.GeoJSON();
var features_HotspotB1R16S24_238 = format_HotspotB1R16S24_238.readFeatures(json_HotspotB1R16S24_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S24_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S24_238.addFeatures(features_HotspotB1R16S24_238);
var lyr_HotspotB1R16S24_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S24_238, 
                style: style_HotspotB1R16S24_238,
                popuplayertitle: 'Hotspot-B1-R16-S24',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S24_238.png" /> Hotspot-B1-R16-S24'
            });
var format_HotspotB1R16S25_239 = new ol.format.GeoJSON();
var features_HotspotB1R16S25_239 = format_HotspotB1R16S25_239.readFeatures(json_HotspotB1R16S25_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S25_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S25_239.addFeatures(features_HotspotB1R16S25_239);
var lyr_HotspotB1R16S25_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S25_239, 
                style: style_HotspotB1R16S25_239,
                popuplayertitle: 'Hotspot-B1-R16-S25',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S25_239.png" /> Hotspot-B1-R16-S25'
            });
var format_HotspotB1R16S28_240 = new ol.format.GeoJSON();
var features_HotspotB1R16S28_240 = format_HotspotB1R16S28_240.readFeatures(json_HotspotB1R16S28_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S28_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S28_240.addFeatures(features_HotspotB1R16S28_240);
var lyr_HotspotB1R16S28_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S28_240, 
                style: style_HotspotB1R16S28_240,
                popuplayertitle: 'Hotspot-B1-R16-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S28_240.png" /> Hotspot-B1-R16-S28'
            });
var format_HotspotB1R16S32_241 = new ol.format.GeoJSON();
var features_HotspotB1R16S32_241 = format_HotspotB1R16S32_241.readFeatures(json_HotspotB1R16S32_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S32_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S32_241.addFeatures(features_HotspotB1R16S32_241);
var lyr_HotspotB1R16S32_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S32_241, 
                style: style_HotspotB1R16S32_241,
                popuplayertitle: 'Hotspot-B1-R16-S32',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S32_241.png" /> Hotspot-B1-R16-S32'
            });
var format_HotspotB1R16S34_242 = new ol.format.GeoJSON();
var features_HotspotB1R16S34_242 = format_HotspotB1R16S34_242.readFeatures(json_HotspotB1R16S34_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S34_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S34_242.addFeatures(features_HotspotB1R16S34_242);
var lyr_HotspotB1R16S34_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S34_242, 
                style: style_HotspotB1R16S34_242,
                popuplayertitle: 'Hotspot-B1-R16-S34',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S34_242.png" /> Hotspot-B1-R16-S34'
            });
var format_HotspotB1R16S35_243 = new ol.format.GeoJSON();
var features_HotspotB1R16S35_243 = format_HotspotB1R16S35_243.readFeatures(json_HotspotB1R16S35_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S35_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S35_243.addFeatures(features_HotspotB1R16S35_243);
var lyr_HotspotB1R16S35_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S35_243, 
                style: style_HotspotB1R16S35_243,
                popuplayertitle: 'Hotspot-B1-R16-S35',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S35_243.png" /> Hotspot-B1-R16-S35'
            });
var format_HotspotB1R16S37_244 = new ol.format.GeoJSON();
var features_HotspotB1R16S37_244 = format_HotspotB1R16S37_244.readFeatures(json_HotspotB1R16S37_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S37_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S37_244.addFeatures(features_HotspotB1R16S37_244);
var lyr_HotspotB1R16S37_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S37_244, 
                style: style_HotspotB1R16S37_244,
                popuplayertitle: 'Hotspot-B1-R16-S37',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S37_244.png" /> Hotspot-B1-R16-S37'
            });
var format_HotspotB1R16S38_245 = new ol.format.GeoJSON();
var features_HotspotB1R16S38_245 = format_HotspotB1R16S38_245.readFeatures(json_HotspotB1R16S38_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S38_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S38_245.addFeatures(features_HotspotB1R16S38_245);
var lyr_HotspotB1R16S38_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S38_245, 
                style: style_HotspotB1R16S38_245,
                popuplayertitle: 'Hotspot-B1-R16-S38',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S38_245.png" /> Hotspot-B1-R16-S38'
            });
var format_HotspotB1R16S45_246 = new ol.format.GeoJSON();
var features_HotspotB1R16S45_246 = format_HotspotB1R16S45_246.readFeatures(json_HotspotB1R16S45_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S45_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S45_246.addFeatures(features_HotspotB1R16S45_246);
var lyr_HotspotB1R16S45_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S45_246, 
                style: style_HotspotB1R16S45_246,
                popuplayertitle: 'Hotspot-B1-R16-S45',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S45_246.png" /> Hotspot-B1-R16-S45'
            });
var format_HotspotB1R16S51_247 = new ol.format.GeoJSON();
var features_HotspotB1R16S51_247 = format_HotspotB1R16S51_247.readFeatures(json_HotspotB1R16S51_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S51_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S51_247.addFeatures(features_HotspotB1R16S51_247);
var lyr_HotspotB1R16S51_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S51_247, 
                style: style_HotspotB1R16S51_247,
                popuplayertitle: 'Hotspot-B1-R16-S51',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S51_247.png" /> Hotspot-B1-R16-S51'
            });
var format_HotspotB1R16S59_248 = new ol.format.GeoJSON();
var features_HotspotB1R16S59_248 = format_HotspotB1R16S59_248.readFeatures(json_HotspotB1R16S59_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S59_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S59_248.addFeatures(features_HotspotB1R16S59_248);
var lyr_HotspotB1R16S59_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S59_248, 
                style: style_HotspotB1R16S59_248,
                popuplayertitle: 'Hotspot-B1-R16-S59',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S59_248.png" /> Hotspot-B1-R16-S59'
            });
var format_HotspotB1R16S60_249 = new ol.format.GeoJSON();
var features_HotspotB1R16S60_249 = format_HotspotB1R16S60_249.readFeatures(json_HotspotB1R16S60_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S60_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S60_249.addFeatures(features_HotspotB1R16S60_249);
var lyr_HotspotB1R16S60_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S60_249, 
                style: style_HotspotB1R16S60_249,
                popuplayertitle: 'Hotspot-B1-R16-S60',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S60_249.png" /> Hotspot-B1-R16-S60'
            });
var format_HotspotB1R16S62_250 = new ol.format.GeoJSON();
var features_HotspotB1R16S62_250 = format_HotspotB1R16S62_250.readFeatures(json_HotspotB1R16S62_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S62_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S62_250.addFeatures(features_HotspotB1R16S62_250);
var lyr_HotspotB1R16S62_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S62_250, 
                style: style_HotspotB1R16S62_250,
                popuplayertitle: 'Hotspot-B1-R16-S62',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S62_250.png" /> Hotspot-B1-R16-S62'
            });
var format_HotspotB1R16S68_251 = new ol.format.GeoJSON();
var features_HotspotB1R16S68_251 = format_HotspotB1R16S68_251.readFeatures(json_HotspotB1R16S68_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S68_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S68_251.addFeatures(features_HotspotB1R16S68_251);
var lyr_HotspotB1R16S68_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S68_251, 
                style: style_HotspotB1R16S68_251,
                popuplayertitle: 'Hotspot-B1-R16-S68',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S68_251.png" /> Hotspot-B1-R16-S68'
            });
var format_HotspotB1R16S75_252 = new ol.format.GeoJSON();
var features_HotspotB1R16S75_252 = format_HotspotB1R16S75_252.readFeatures(json_HotspotB1R16S75_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R16S75_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R16S75_252.addFeatures(features_HotspotB1R16S75_252);
var lyr_HotspotB1R16S75_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R16S75_252, 
                style: style_HotspotB1R16S75_252,
                popuplayertitle: 'Hotspot-B1-R16-S75',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R16S75_252.png" /> Hotspot-B1-R16-S75'
            });
var format_HotspotB1R17S11_253 = new ol.format.GeoJSON();
var features_HotspotB1R17S11_253 = format_HotspotB1R17S11_253.readFeatures(json_HotspotB1R17S11_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S11_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S11_253.addFeatures(features_HotspotB1R17S11_253);
var lyr_HotspotB1R17S11_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S11_253, 
                style: style_HotspotB1R17S11_253,
                popuplayertitle: 'Hotspot-B1-R17-S1-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S11_253.png" /> Hotspot-B1-R17-S1-1'
            });
var format_HotspotB1R17S12_254 = new ol.format.GeoJSON();
var features_HotspotB1R17S12_254 = format_HotspotB1R17S12_254.readFeatures(json_HotspotB1R17S12_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S12_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S12_254.addFeatures(features_HotspotB1R17S12_254);
var lyr_HotspotB1R17S12_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S12_254, 
                style: style_HotspotB1R17S12_254,
                popuplayertitle: 'Hotspot-B1-R17-S1-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S12_254.png" /> Hotspot-B1-R17-S1-2'
            });
var format_HotspotB1R17S3_255 = new ol.format.GeoJSON();
var features_HotspotB1R17S3_255 = format_HotspotB1R17S3_255.readFeatures(json_HotspotB1R17S3_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S3_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S3_255.addFeatures(features_HotspotB1R17S3_255);
var lyr_HotspotB1R17S3_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S3_255, 
                style: style_HotspotB1R17S3_255,
                popuplayertitle: 'Hotspot-B1-R17-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S3_255.png" /> Hotspot-B1-R17-S3'
            });
var format_HotspotB1R17S10_256 = new ol.format.GeoJSON();
var features_HotspotB1R17S10_256 = format_HotspotB1R17S10_256.readFeatures(json_HotspotB1R17S10_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S10_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S10_256.addFeatures(features_HotspotB1R17S10_256);
var lyr_HotspotB1R17S10_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S10_256, 
                style: style_HotspotB1R17S10_256,
                popuplayertitle: 'Hotspot-B1-R17-S10',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S10_256.png" /> Hotspot-B1-R17-S10'
            });
var format_HotspotB1R17S16_257 = new ol.format.GeoJSON();
var features_HotspotB1R17S16_257 = format_HotspotB1R17S16_257.readFeatures(json_HotspotB1R17S16_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S16_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S16_257.addFeatures(features_HotspotB1R17S16_257);
var lyr_HotspotB1R17S16_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S16_257, 
                style: style_HotspotB1R17S16_257,
                popuplayertitle: 'Hotspot-B1-R17-S16',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S16_257.png" /> Hotspot-B1-R17-S16'
            });
var format_HotspotB1R17S22_258 = new ol.format.GeoJSON();
var features_HotspotB1R17S22_258 = format_HotspotB1R17S22_258.readFeatures(json_HotspotB1R17S22_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S22_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S22_258.addFeatures(features_HotspotB1R17S22_258);
var lyr_HotspotB1R17S22_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S22_258, 
                style: style_HotspotB1R17S22_258,
                popuplayertitle: 'Hotspot-B1-R17-S22',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S22_258.png" /> Hotspot-B1-R17-S22'
            });
var format_HotspotB1R17S26_259 = new ol.format.GeoJSON();
var features_HotspotB1R17S26_259 = format_HotspotB1R17S26_259.readFeatures(json_HotspotB1R17S26_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S26_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S26_259.addFeatures(features_HotspotB1R17S26_259);
var lyr_HotspotB1R17S26_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S26_259, 
                style: style_HotspotB1R17S26_259,
                popuplayertitle: 'Hotspot-B1-R17-S26',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S26_259.png" /> Hotspot-B1-R17-S26'
            });
var format_HotspotB1R17S35_260 = new ol.format.GeoJSON();
var features_HotspotB1R17S35_260 = format_HotspotB1R17S35_260.readFeatures(json_HotspotB1R17S35_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S35_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S35_260.addFeatures(features_HotspotB1R17S35_260);
var lyr_HotspotB1R17S35_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S35_260, 
                style: style_HotspotB1R17S35_260,
                popuplayertitle: 'Hotspot-B1-R17-S35',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S35_260.png" /> Hotspot-B1-R17-S35'
            });
var format_HotspotB1R17S40_261 = new ol.format.GeoJSON();
var features_HotspotB1R17S40_261 = format_HotspotB1R17S40_261.readFeatures(json_HotspotB1R17S40_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S40_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S40_261.addFeatures(features_HotspotB1R17S40_261);
var lyr_HotspotB1R17S40_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S40_261, 
                style: style_HotspotB1R17S40_261,
                popuplayertitle: 'Hotspot-B1-R17-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S40_261.png" /> Hotspot-B1-R17-S40'
            });
var format_HotspotB1R17S44_262 = new ol.format.GeoJSON();
var features_HotspotB1R17S44_262 = format_HotspotB1R17S44_262.readFeatures(json_HotspotB1R17S44_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S44_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S44_262.addFeatures(features_HotspotB1R17S44_262);
var lyr_HotspotB1R17S44_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S44_262, 
                style: style_HotspotB1R17S44_262,
                popuplayertitle: 'Hotspot-B1-R17-S44',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S44_262.png" /> Hotspot-B1-R17-S44'
            });
var format_HotspotB1R17S45_263 = new ol.format.GeoJSON();
var features_HotspotB1R17S45_263 = format_HotspotB1R17S45_263.readFeatures(json_HotspotB1R17S45_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S45_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S45_263.addFeatures(features_HotspotB1R17S45_263);
var lyr_HotspotB1R17S45_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S45_263, 
                style: style_HotspotB1R17S45_263,
                popuplayertitle: 'Hotspot-B1-R17-S45',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S45_263.png" /> Hotspot-B1-R17-S45'
            });
var format_HotspotB1R17S51_264 = new ol.format.GeoJSON();
var features_HotspotB1R17S51_264 = format_HotspotB1R17S51_264.readFeatures(json_HotspotB1R17S51_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S51_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S51_264.addFeatures(features_HotspotB1R17S51_264);
var lyr_HotspotB1R17S51_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S51_264, 
                style: style_HotspotB1R17S51_264,
                popuplayertitle: 'Hotspot-B1-R17-S51',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S51_264.png" /> Hotspot-B1-R17-S51'
            });
var format_HotspotB1R17S53_265 = new ol.format.GeoJSON();
var features_HotspotB1R17S53_265 = format_HotspotB1R17S53_265.readFeatures(json_HotspotB1R17S53_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S53_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S53_265.addFeatures(features_HotspotB1R17S53_265);
var lyr_HotspotB1R17S53_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S53_265, 
                style: style_HotspotB1R17S53_265,
                popuplayertitle: 'Hotspot-B1-R17-S53',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S53_265.png" /> Hotspot-B1-R17-S53'
            });
var format_HotspotB1R17S54_266 = new ol.format.GeoJSON();
var features_HotspotB1R17S54_266 = format_HotspotB1R17S54_266.readFeatures(json_HotspotB1R17S54_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S54_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S54_266.addFeatures(features_HotspotB1R17S54_266);
var lyr_HotspotB1R17S54_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S54_266, 
                style: style_HotspotB1R17S54_266,
                popuplayertitle: 'Hotspot-B1-R17-S54',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S54_266.png" /> Hotspot-B1-R17-S54'
            });
var format_HotspotB1R17S67_267 = new ol.format.GeoJSON();
var features_HotspotB1R17S67_267 = format_HotspotB1R17S67_267.readFeatures(json_HotspotB1R17S67_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S67_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S67_267.addFeatures(features_HotspotB1R17S67_267);
var lyr_HotspotB1R17S67_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S67_267, 
                style: style_HotspotB1R17S67_267,
                popuplayertitle: 'Hotspot-B1-R17-S67',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S67_267.png" /> Hotspot-B1-R17-S67'
            });
var format_HotspotB1R17S68_268 = new ol.format.GeoJSON();
var features_HotspotB1R17S68_268 = format_HotspotB1R17S68_268.readFeatures(json_HotspotB1R17S68_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R17S68_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R17S68_268.addFeatures(features_HotspotB1R17S68_268);
var lyr_HotspotB1R17S68_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R17S68_268, 
                style: style_HotspotB1R17S68_268,
                popuplayertitle: 'Hotspot-B1-R17-S68',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R17S68_268.png" /> Hotspot-B1-R17-S68'
            });
var format_HotspotB1R18S10_269 = new ol.format.GeoJSON();
var features_HotspotB1R18S10_269 = format_HotspotB1R18S10_269.readFeatures(json_HotspotB1R18S10_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S10_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S10_269.addFeatures(features_HotspotB1R18S10_269);
var lyr_HotspotB1R18S10_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S10_269, 
                style: style_HotspotB1R18S10_269,
                popuplayertitle: 'Hotspot-B1-R18-S10',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S10_269.png" /> Hotspot-B1-R18-S10'
            });
var format_HotspotB1R18S15_270 = new ol.format.GeoJSON();
var features_HotspotB1R18S15_270 = format_HotspotB1R18S15_270.readFeatures(json_HotspotB1R18S15_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S15_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S15_270.addFeatures(features_HotspotB1R18S15_270);
var lyr_HotspotB1R18S15_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S15_270, 
                style: style_HotspotB1R18S15_270,
                popuplayertitle: 'Hotspot-B1-R18-S15',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S15_270.png" /> Hotspot-B1-R18-S15'
            });
var format_HotspotB1R18S22_271 = new ol.format.GeoJSON();
var features_HotspotB1R18S22_271 = format_HotspotB1R18S22_271.readFeatures(json_HotspotB1R18S22_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S22_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S22_271.addFeatures(features_HotspotB1R18S22_271);
var lyr_HotspotB1R18S22_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S22_271, 
                style: style_HotspotB1R18S22_271,
                popuplayertitle: 'Hotspot-B1-R18-S22',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S22_271.png" /> Hotspot-B1-R18-S22'
            });
var format_HotspotB1R18S23_272 = new ol.format.GeoJSON();
var features_HotspotB1R18S23_272 = format_HotspotB1R18S23_272.readFeatures(json_HotspotB1R18S23_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S23_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S23_272.addFeatures(features_HotspotB1R18S23_272);
var lyr_HotspotB1R18S23_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S23_272, 
                style: style_HotspotB1R18S23_272,
                popuplayertitle: 'Hotspot-B1-R18-S23',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S23_272.png" /> Hotspot-B1-R18-S23'
            });
var format_HotspotB1R18S24_273 = new ol.format.GeoJSON();
var features_HotspotB1R18S24_273 = format_HotspotB1R18S24_273.readFeatures(json_HotspotB1R18S24_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S24_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S24_273.addFeatures(features_HotspotB1R18S24_273);
var lyr_HotspotB1R18S24_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S24_273, 
                style: style_HotspotB1R18S24_273,
                popuplayertitle: 'Hotspot-B1-R18-S24',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S24_273.png" /> Hotspot-B1-R18-S24'
            });
var format_HotspotB1R18S25_274 = new ol.format.GeoJSON();
var features_HotspotB1R18S25_274 = format_HotspotB1R18S25_274.readFeatures(json_HotspotB1R18S25_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S25_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S25_274.addFeatures(features_HotspotB1R18S25_274);
var lyr_HotspotB1R18S25_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S25_274, 
                style: style_HotspotB1R18S25_274,
                popuplayertitle: 'Hotspot-B1-R18-S25',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S25_274.png" /> Hotspot-B1-R18-S25'
            });
var format_HotspotB1R18S37_275 = new ol.format.GeoJSON();
var features_HotspotB1R18S37_275 = format_HotspotB1R18S37_275.readFeatures(json_HotspotB1R18S37_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S37_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S37_275.addFeatures(features_HotspotB1R18S37_275);
var lyr_HotspotB1R18S37_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S37_275, 
                style: style_HotspotB1R18S37_275,
                popuplayertitle: 'Hotspot-B1-R18-S37',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S37_275.png" /> Hotspot-B1-R18-S37'
            });
var format_HotspotB1R18S40_276 = new ol.format.GeoJSON();
var features_HotspotB1R18S40_276 = format_HotspotB1R18S40_276.readFeatures(json_HotspotB1R18S40_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S40_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S40_276.addFeatures(features_HotspotB1R18S40_276);
var lyr_HotspotB1R18S40_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S40_276, 
                style: style_HotspotB1R18S40_276,
                popuplayertitle: 'Hotspot-B1-R18-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S40_276.png" /> Hotspot-B1-R18-S40'
            });
var format_HotspotB1R18S48_277 = new ol.format.GeoJSON();
var features_HotspotB1R18S48_277 = format_HotspotB1R18S48_277.readFeatures(json_HotspotB1R18S48_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S48_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S48_277.addFeatures(features_HotspotB1R18S48_277);
var lyr_HotspotB1R18S48_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S48_277, 
                style: style_HotspotB1R18S48_277,
                popuplayertitle: 'Hotspot-B1-R18-S48',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S48_277.png" /> Hotspot-B1-R18-S48'
            });
var format_HotspotB1R18S49_278 = new ol.format.GeoJSON();
var features_HotspotB1R18S49_278 = format_HotspotB1R18S49_278.readFeatures(json_HotspotB1R18S49_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S49_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S49_278.addFeatures(features_HotspotB1R18S49_278);
var lyr_HotspotB1R18S49_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S49_278, 
                style: style_HotspotB1R18S49_278,
                popuplayertitle: 'Hotspot-B1-R18-S49',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S49_278.png" /> Hotspot-B1-R18-S49'
            });
var format_HotspotB1R18S50_279 = new ol.format.GeoJSON();
var features_HotspotB1R18S50_279 = format_HotspotB1R18S50_279.readFeatures(json_HotspotB1R18S50_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S50_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S50_279.addFeatures(features_HotspotB1R18S50_279);
var lyr_HotspotB1R18S50_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S50_279, 
                style: style_HotspotB1R18S50_279,
                popuplayertitle: 'Hotspot-B1-R18-S50',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S50_279.png" /> Hotspot-B1-R18-S50'
            });
var format_HotspotB1R18S52_280 = new ol.format.GeoJSON();
var features_HotspotB1R18S52_280 = format_HotspotB1R18S52_280.readFeatures(json_HotspotB1R18S52_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S52_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S52_280.addFeatures(features_HotspotB1R18S52_280);
var lyr_HotspotB1R18S52_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S52_280, 
                style: style_HotspotB1R18S52_280,
                popuplayertitle: 'Hotspot-B1-R18-S52',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S52_280.png" /> Hotspot-B1-R18-S52'
            });
var format_HotspotB1R18S59_281 = new ol.format.GeoJSON();
var features_HotspotB1R18S59_281 = format_HotspotB1R18S59_281.readFeatures(json_HotspotB1R18S59_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S59_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S59_281.addFeatures(features_HotspotB1R18S59_281);
var lyr_HotspotB1R18S59_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S59_281, 
                style: style_HotspotB1R18S59_281,
                popuplayertitle: 'Hotspot-B1-R18-S59',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S59_281.png" /> Hotspot-B1-R18-S59'
            });
var format_HotspotB1R18S64_282 = new ol.format.GeoJSON();
var features_HotspotB1R18S64_282 = format_HotspotB1R18S64_282.readFeatures(json_HotspotB1R18S64_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R18S64_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R18S64_282.addFeatures(features_HotspotB1R18S64_282);
var lyr_HotspotB1R18S64_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R18S64_282, 
                style: style_HotspotB1R18S64_282,
                popuplayertitle: 'Hotspot-B1-R18-S64',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R18S64_282.png" /> Hotspot-B1-R18-S64'
            });
var format_HotspotB1R19S21_283 = new ol.format.GeoJSON();
var features_HotspotB1R19S21_283 = format_HotspotB1R19S21_283.readFeatures(json_HotspotB1R19S21_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S21_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S21_283.addFeatures(features_HotspotB1R19S21_283);
var lyr_HotspotB1R19S21_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S21_283, 
                style: style_HotspotB1R19S21_283,
                popuplayertitle: 'Hotspot-B1-R19-S2-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S21_283.png" /> Hotspot-B1-R19-S2-1'
            });
var format_HotspotB1R19S22_284 = new ol.format.GeoJSON();
var features_HotspotB1R19S22_284 = format_HotspotB1R19S22_284.readFeatures(json_HotspotB1R19S22_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S22_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S22_284.addFeatures(features_HotspotB1R19S22_284);
var lyr_HotspotB1R19S22_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S22_284, 
                style: style_HotspotB1R19S22_284,
                popuplayertitle: 'Hotspot-B1-R19-S2-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S22_284.png" /> Hotspot-B1-R19-S2-2'
            });
var format_HotspotB1R19S8_285 = new ol.format.GeoJSON();
var features_HotspotB1R19S8_285 = format_HotspotB1R19S8_285.readFeatures(json_HotspotB1R19S8_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S8_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S8_285.addFeatures(features_HotspotB1R19S8_285);
var lyr_HotspotB1R19S8_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S8_285, 
                style: style_HotspotB1R19S8_285,
                popuplayertitle: 'Hotspot-B1-R19-S8',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S8_285.png" /> Hotspot-B1-R19-S8'
            });
var format_HotspotB1R19S13_286 = new ol.format.GeoJSON();
var features_HotspotB1R19S13_286 = format_HotspotB1R19S13_286.readFeatures(json_HotspotB1R19S13_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S13_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S13_286.addFeatures(features_HotspotB1R19S13_286);
var lyr_HotspotB1R19S13_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S13_286, 
                style: style_HotspotB1R19S13_286,
                popuplayertitle: 'Hotspot-B1-R19-S13',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S13_286.png" /> Hotspot-B1-R19-S13'
            });
var format_HotspotB1R19S16_287 = new ol.format.GeoJSON();
var features_HotspotB1R19S16_287 = format_HotspotB1R19S16_287.readFeatures(json_HotspotB1R19S16_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S16_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S16_287.addFeatures(features_HotspotB1R19S16_287);
var lyr_HotspotB1R19S16_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S16_287, 
                style: style_HotspotB1R19S16_287,
                popuplayertitle: 'Hotspot-B1-R19-S16',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S16_287.png" /> Hotspot-B1-R19-S16'
            });
var format_HotspotB1R19S17_288 = new ol.format.GeoJSON();
var features_HotspotB1R19S17_288 = format_HotspotB1R19S17_288.readFeatures(json_HotspotB1R19S17_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S17_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S17_288.addFeatures(features_HotspotB1R19S17_288);
var lyr_HotspotB1R19S17_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S17_288, 
                style: style_HotspotB1R19S17_288,
                popuplayertitle: 'Hotspot-B1-R19-S17',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S17_288.png" /> Hotspot-B1-R19-S17'
            });
var format_HotspotB1R19S21_289 = new ol.format.GeoJSON();
var features_HotspotB1R19S21_289 = format_HotspotB1R19S21_289.readFeatures(json_HotspotB1R19S21_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S21_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S21_289.addFeatures(features_HotspotB1R19S21_289);
var lyr_HotspotB1R19S21_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S21_289, 
                style: style_HotspotB1R19S21_289,
                popuplayertitle: 'Hotspot-B1-R19-S21',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S21_289.png" /> Hotspot-B1-R19-S21'
            });
var format_HotspotB1R19S221_290 = new ol.format.GeoJSON();
var features_HotspotB1R19S221_290 = format_HotspotB1R19S221_290.readFeatures(json_HotspotB1R19S221_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S221_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S221_290.addFeatures(features_HotspotB1R19S221_290);
var lyr_HotspotB1R19S221_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S221_290, 
                style: style_HotspotB1R19S221_290,
                popuplayertitle: 'Hotspot-B1-R19-S22-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S221_290.png" /> Hotspot-B1-R19-S22-1'
            });
var format_HotspotB1R19S222_291 = new ol.format.GeoJSON();
var features_HotspotB1R19S222_291 = format_HotspotB1R19S222_291.readFeatures(json_HotspotB1R19S222_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S222_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S222_291.addFeatures(features_HotspotB1R19S222_291);
var lyr_HotspotB1R19S222_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S222_291, 
                style: style_HotspotB1R19S222_291,
                popuplayertitle: 'Hotspot-B1-R19-S22-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S222_291.png" /> Hotspot-B1-R19-S22-2'
            });
var format_HotspotB1R19S28_292 = new ol.format.GeoJSON();
var features_HotspotB1R19S28_292 = format_HotspotB1R19S28_292.readFeatures(json_HotspotB1R19S28_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S28_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S28_292.addFeatures(features_HotspotB1R19S28_292);
var lyr_HotspotB1R19S28_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S28_292, 
                style: style_HotspotB1R19S28_292,
                popuplayertitle: 'Hotspot-B1-R19-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S28_292.png" /> Hotspot-B1-R19-S28'
            });
var format_HotspotB1R19S34_293 = new ol.format.GeoJSON();
var features_HotspotB1R19S34_293 = format_HotspotB1R19S34_293.readFeatures(json_HotspotB1R19S34_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S34_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S34_293.addFeatures(features_HotspotB1R19S34_293);
var lyr_HotspotB1R19S34_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S34_293, 
                style: style_HotspotB1R19S34_293,
                popuplayertitle: 'Hotspot-B1-R19-S34',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S34_293.png" /> Hotspot-B1-R19-S34'
            });
var format_HotspotB1R19S371_294 = new ol.format.GeoJSON();
var features_HotspotB1R19S371_294 = format_HotspotB1R19S371_294.readFeatures(json_HotspotB1R19S371_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S371_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S371_294.addFeatures(features_HotspotB1R19S371_294);
var lyr_HotspotB1R19S371_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S371_294, 
                style: style_HotspotB1R19S371_294,
                popuplayertitle: 'Hotspot-B1-R19-S37-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S371_294.png" /> Hotspot-B1-R19-S37-1'
            });
var format_HotspotB1R19S372_295 = new ol.format.GeoJSON();
var features_HotspotB1R19S372_295 = format_HotspotB1R19S372_295.readFeatures(json_HotspotB1R19S372_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S372_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S372_295.addFeatures(features_HotspotB1R19S372_295);
var lyr_HotspotB1R19S372_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S372_295, 
                style: style_HotspotB1R19S372_295,
                popuplayertitle: 'Hotspot-B1-R19-S37-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S372_295.png" /> Hotspot-B1-R19-S37-2'
            });
var format_HotspotB1R19S40_296 = new ol.format.GeoJSON();
var features_HotspotB1R19S40_296 = format_HotspotB1R19S40_296.readFeatures(json_HotspotB1R19S40_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S40_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S40_296.addFeatures(features_HotspotB1R19S40_296);
var lyr_HotspotB1R19S40_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S40_296, 
                style: style_HotspotB1R19S40_296,
                popuplayertitle: 'Hotspot-B1-R19-S40',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S40_296.png" /> Hotspot-B1-R19-S40'
            });
var format_HotspotB1R19S41_297 = new ol.format.GeoJSON();
var features_HotspotB1R19S41_297 = format_HotspotB1R19S41_297.readFeatures(json_HotspotB1R19S41_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S41_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S41_297.addFeatures(features_HotspotB1R19S41_297);
var lyr_HotspotB1R19S41_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S41_297, 
                style: style_HotspotB1R19S41_297,
                popuplayertitle: 'Hotspot-B1-R19-S41',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S41_297.png" /> Hotspot-B1-R19-S41'
            });
var format_HotspotB1R19S43_298 = new ol.format.GeoJSON();
var features_HotspotB1R19S43_298 = format_HotspotB1R19S43_298.readFeatures(json_HotspotB1R19S43_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S43_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S43_298.addFeatures(features_HotspotB1R19S43_298);
var lyr_HotspotB1R19S43_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S43_298, 
                style: style_HotspotB1R19S43_298,
                popuplayertitle: 'Hotspot-B1-R19-S43',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S43_298.png" /> Hotspot-B1-R19-S43'
            });
var format_HotspotB1R19S51_299 = new ol.format.GeoJSON();
var features_HotspotB1R19S51_299 = format_HotspotB1R19S51_299.readFeatures(json_HotspotB1R19S51_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S51_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S51_299.addFeatures(features_HotspotB1R19S51_299);
var lyr_HotspotB1R19S51_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S51_299, 
                style: style_HotspotB1R19S51_299,
                popuplayertitle: 'Hotspot-B1-R19-S51',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S51_299.png" /> Hotspot-B1-R19-S51'
            });
var format_HotspotB1R19S56_300 = new ol.format.GeoJSON();
var features_HotspotB1R19S56_300 = format_HotspotB1R19S56_300.readFeatures(json_HotspotB1R19S56_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R19S56_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R19S56_300.addFeatures(features_HotspotB1R19S56_300);
var lyr_HotspotB1R19S56_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R19S56_300, 
                style: style_HotspotB1R19S56_300,
                popuplayertitle: 'Hotspot-B1-R19-S56',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R19S56_300.png" /> Hotspot-B1-R19-S56'
            });
var format_HotspotB1R20S9_301 = new ol.format.GeoJSON();
var features_HotspotB1R20S9_301 = format_HotspotB1R20S9_301.readFeatures(json_HotspotB1R20S9_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S9_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S9_301.addFeatures(features_HotspotB1R20S9_301);
var lyr_HotspotB1R20S9_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S9_301, 
                style: style_HotspotB1R20S9_301,
                popuplayertitle: 'Hotspot-B1-R20-S9',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S9_301.png" /> Hotspot-B1-R20-S9'
            });
var format_HotspotB1R20S25_302 = new ol.format.GeoJSON();
var features_HotspotB1R20S25_302 = format_HotspotB1R20S25_302.readFeatures(json_HotspotB1R20S25_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S25_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S25_302.addFeatures(features_HotspotB1R20S25_302);
var lyr_HotspotB1R20S25_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S25_302, 
                style: style_HotspotB1R20S25_302,
                popuplayertitle: 'Hotspot-B1-R20-S25',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S25_302.png" /> Hotspot-B1-R20-S25'
            });
var format_HotspotB1R20S28_303 = new ol.format.GeoJSON();
var features_HotspotB1R20S28_303 = format_HotspotB1R20S28_303.readFeatures(json_HotspotB1R20S28_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S28_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S28_303.addFeatures(features_HotspotB1R20S28_303);
var lyr_HotspotB1R20S28_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S28_303, 
                style: style_HotspotB1R20S28_303,
                popuplayertitle: 'Hotspot-B1-R20-S28',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S28_303.png" /> Hotspot-B1-R20-S28'
            });
var format_HotspotB1R20S31_304 = new ol.format.GeoJSON();
var features_HotspotB1R20S31_304 = format_HotspotB1R20S31_304.readFeatures(json_HotspotB1R20S31_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S31_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S31_304.addFeatures(features_HotspotB1R20S31_304);
var lyr_HotspotB1R20S31_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S31_304, 
                style: style_HotspotB1R20S31_304,
                popuplayertitle: 'Hotspot-B1-R20-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S31_304.png" /> Hotspot-B1-R20-S31'
            });
var format_HotspotB1R20S36_305 = new ol.format.GeoJSON();
var features_HotspotB1R20S36_305 = format_HotspotB1R20S36_305.readFeatures(json_HotspotB1R20S36_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S36_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S36_305.addFeatures(features_HotspotB1R20S36_305);
var lyr_HotspotB1R20S36_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S36_305, 
                style: style_HotspotB1R20S36_305,
                popuplayertitle: 'Hotspot-B1-R20-S36',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S36_305.png" /> Hotspot-B1-R20-S36'
            });
var format_HotspotB1R20S39_306 = new ol.format.GeoJSON();
var features_HotspotB1R20S39_306 = format_HotspotB1R20S39_306.readFeatures(json_HotspotB1R20S39_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S39_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S39_306.addFeatures(features_HotspotB1R20S39_306);
var lyr_HotspotB1R20S39_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S39_306, 
                style: style_HotspotB1R20S39_306,
                popuplayertitle: 'Hotspot-B1-R20-S39',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S39_306.png" /> Hotspot-B1-R20-S39'
            });
var format_HotspotB1R20S46_307 = new ol.format.GeoJSON();
var features_HotspotB1R20S46_307 = format_HotspotB1R20S46_307.readFeatures(json_HotspotB1R20S46_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S46_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S46_307.addFeatures(features_HotspotB1R20S46_307);
var lyr_HotspotB1R20S46_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S46_307, 
                style: style_HotspotB1R20S46_307,
                popuplayertitle: 'Hotspot-B1-R20-S46',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S46_307.png" /> Hotspot-B1-R20-S46'
            });
var format_HotspotB1R20S47_308 = new ol.format.GeoJSON();
var features_HotspotB1R20S47_308 = format_HotspotB1R20S47_308.readFeatures(json_HotspotB1R20S47_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R20S47_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R20S47_308.addFeatures(features_HotspotB1R20S47_308);
var lyr_HotspotB1R20S47_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R20S47_308, 
                style: style_HotspotB1R20S47_308,
                popuplayertitle: 'Hotspot-B1-R20-S47',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R20S47_308.png" /> Hotspot-B1-R20-S47'
            });
var format_HotspotB1R21S3_309 = new ol.format.GeoJSON();
var features_HotspotB1R21S3_309 = format_HotspotB1R21S3_309.readFeatures(json_HotspotB1R21S3_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S3_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S3_309.addFeatures(features_HotspotB1R21S3_309);
var lyr_HotspotB1R21S3_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S3_309, 
                style: style_HotspotB1R21S3_309,
                popuplayertitle: 'Hotspot-B1-R21-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S3_309.png" /> Hotspot-B1-R21-S3'
            });
var format_HotspotB1R21S15_310 = new ol.format.GeoJSON();
var features_HotspotB1R21S15_310 = format_HotspotB1R21S15_310.readFeatures(json_HotspotB1R21S15_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S15_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S15_310.addFeatures(features_HotspotB1R21S15_310);
var lyr_HotspotB1R21S15_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S15_310, 
                style: style_HotspotB1R21S15_310,
                popuplayertitle: 'Hotspot-B1-R21-S15',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S15_310.png" /> Hotspot-B1-R21-S15'
            });
var format_HotspotB1R21S17_311 = new ol.format.GeoJSON();
var features_HotspotB1R21S17_311 = format_HotspotB1R21S17_311.readFeatures(json_HotspotB1R21S17_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S17_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S17_311.addFeatures(features_HotspotB1R21S17_311);
var lyr_HotspotB1R21S17_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S17_311, 
                style: style_HotspotB1R21S17_311,
                popuplayertitle: 'Hotspot-B1-R21-S17',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S17_311.png" /> Hotspot-B1-R21-S17'
            });
var format_HotspotB1R21S181_312 = new ol.format.GeoJSON();
var features_HotspotB1R21S181_312 = format_HotspotB1R21S181_312.readFeatures(json_HotspotB1R21S181_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S181_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S181_312.addFeatures(features_HotspotB1R21S181_312);
var lyr_HotspotB1R21S181_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S181_312, 
                style: style_HotspotB1R21S181_312,
                popuplayertitle: 'Hotspot-B1-R21-S18-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S181_312.png" /> Hotspot-B1-R21-S18-1'
            });
var format_HotspotB1R21S182_313 = new ol.format.GeoJSON();
var features_HotspotB1R21S182_313 = format_HotspotB1R21S182_313.readFeatures(json_HotspotB1R21S182_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S182_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S182_313.addFeatures(features_HotspotB1R21S182_313);
var lyr_HotspotB1R21S182_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S182_313, 
                style: style_HotspotB1R21S182_313,
                popuplayertitle: 'Hotspot-B1-R21-S18-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S182_313.png" /> Hotspot-B1-R21-S18-2'
            });
var format_HotspotB1R21S26_314 = new ol.format.GeoJSON();
var features_HotspotB1R21S26_314 = format_HotspotB1R21S26_314.readFeatures(json_HotspotB1R21S26_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S26_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S26_314.addFeatures(features_HotspotB1R21S26_314);
var lyr_HotspotB1R21S26_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S26_314, 
                style: style_HotspotB1R21S26_314,
                popuplayertitle: 'Hotspot-B1-R21-S26',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S26_314.png" /> Hotspot-B1-R21-S26'
            });
var format_HotspotB1R21S301_315 = new ol.format.GeoJSON();
var features_HotspotB1R21S301_315 = format_HotspotB1R21S301_315.readFeatures(json_HotspotB1R21S301_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S301_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S301_315.addFeatures(features_HotspotB1R21S301_315);
var lyr_HotspotB1R21S301_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S301_315, 
                style: style_HotspotB1R21S301_315,
                popuplayertitle: 'Hotspot-B1-R21-S30-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S301_315.png" /> Hotspot-B1-R21-S30-1'
            });
var format_HotspotB1R21S302_316 = new ol.format.GeoJSON();
var features_HotspotB1R21S302_316 = format_HotspotB1R21S302_316.readFeatures(json_HotspotB1R21S302_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S302_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S302_316.addFeatures(features_HotspotB1R21S302_316);
var lyr_HotspotB1R21S302_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S302_316, 
                style: style_HotspotB1R21S302_316,
                popuplayertitle: 'Hotspot-B1-R21-S30-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S302_316.png" /> Hotspot-B1-R21-S30-2'
            });
var format_HotspotB1R21S303_317 = new ol.format.GeoJSON();
var features_HotspotB1R21S303_317 = format_HotspotB1R21S303_317.readFeatures(json_HotspotB1R21S303_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S303_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S303_317.addFeatures(features_HotspotB1R21S303_317);
var lyr_HotspotB1R21S303_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S303_317, 
                style: style_HotspotB1R21S303_317,
                popuplayertitle: 'Hotspot-B1-R21-S30-3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S303_317.png" /> Hotspot-B1-R21-S30-3'
            });
var format_HotspotB1R21S31_318 = new ol.format.GeoJSON();
var features_HotspotB1R21S31_318 = format_HotspotB1R21S31_318.readFeatures(json_HotspotB1R21S31_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S31_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S31_318.addFeatures(features_HotspotB1R21S31_318);
var lyr_HotspotB1R21S31_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S31_318, 
                style: style_HotspotB1R21S31_318,
                popuplayertitle: 'Hotspot-B1-R21-S31',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S31_318.png" /> Hotspot-B1-R21-S31'
            });
var format_HotspotB1R21S32_319 = new ol.format.GeoJSON();
var features_HotspotB1R21S32_319 = format_HotspotB1R21S32_319.readFeatures(json_HotspotB1R21S32_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S32_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S32_319.addFeatures(features_HotspotB1R21S32_319);
var lyr_HotspotB1R21S32_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S32_319, 
                style: style_HotspotB1R21S32_319,
                popuplayertitle: 'Hotspot-B1-R21-S32',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S32_319.png" /> Hotspot-B1-R21-S32'
            });
var format_HotspotB1R21S38_320 = new ol.format.GeoJSON();
var features_HotspotB1R21S38_320 = format_HotspotB1R21S38_320.readFeatures(json_HotspotB1R21S38_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R21S38_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R21S38_320.addFeatures(features_HotspotB1R21S38_320);
var lyr_HotspotB1R21S38_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R21S38_320, 
                style: style_HotspotB1R21S38_320,
                popuplayertitle: 'Hotspot-B1-R21-S38',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R21S38_320.png" /> Hotspot-B1-R21-S38'
            });
var format_HotspotB1R22S1_321 = new ol.format.GeoJSON();
var features_HotspotB1R22S1_321 = format_HotspotB1R22S1_321.readFeatures(json_HotspotB1R22S1_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S1_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S1_321.addFeatures(features_HotspotB1R22S1_321);
var lyr_HotspotB1R22S1_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S1_321, 
                style: style_HotspotB1R22S1_321,
                popuplayertitle: 'Hotspot-B1-R22-S1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S1_321.png" /> Hotspot-B1-R22-S1'
            });
var format_HotspotB1R22S16_322 = new ol.format.GeoJSON();
var features_HotspotB1R22S16_322 = format_HotspotB1R22S16_322.readFeatures(json_HotspotB1R22S16_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S16_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S16_322.addFeatures(features_HotspotB1R22S16_322);
var lyr_HotspotB1R22S16_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S16_322, 
                style: style_HotspotB1R22S16_322,
                popuplayertitle: 'Hotspot-B1-R22-S16',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S16_322.png" /> Hotspot-B1-R22-S16'
            });
var format_HotspotB1R22S19_323 = new ol.format.GeoJSON();
var features_HotspotB1R22S19_323 = format_HotspotB1R22S19_323.readFeatures(json_HotspotB1R22S19_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S19_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S19_323.addFeatures(features_HotspotB1R22S19_323);
var lyr_HotspotB1R22S19_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S19_323, 
                style: style_HotspotB1R22S19_323,
                popuplayertitle: 'Hotspot-B1-R22-S19',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S19_323.png" /> Hotspot-B1-R22-S19'
            });
var format_HotspotB1R22S261_324 = new ol.format.GeoJSON();
var features_HotspotB1R22S261_324 = format_HotspotB1R22S261_324.readFeatures(json_HotspotB1R22S261_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S261_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S261_324.addFeatures(features_HotspotB1R22S261_324);
var lyr_HotspotB1R22S261_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S261_324, 
                style: style_HotspotB1R22S261_324,
                popuplayertitle: 'Hotspot-B1-R22-S26-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S261_324.png" /> Hotspot-B1-R22-S26-1'
            });
var format_HotspotB1R22S262_325 = new ol.format.GeoJSON();
var features_HotspotB1R22S262_325 = format_HotspotB1R22S262_325.readFeatures(json_HotspotB1R22S262_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S262_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S262_325.addFeatures(features_HotspotB1R22S262_325);
var lyr_HotspotB1R22S262_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S262_325, 
                style: style_HotspotB1R22S262_325,
                popuplayertitle: 'Hotspot-B1-R22-S26-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S262_325.png" /> Hotspot-B1-R22-S26-2'
            });
var format_HotspotB1R22S263_326 = new ol.format.GeoJSON();
var features_HotspotB1R22S263_326 = format_HotspotB1R22S263_326.readFeatures(json_HotspotB1R22S263_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S263_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S263_326.addFeatures(features_HotspotB1R22S263_326);
var lyr_HotspotB1R22S263_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S263_326, 
                style: style_HotspotB1R22S263_326,
                popuplayertitle: 'Hotspot-B1-R22-S26-3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S263_326.png" /> Hotspot-B1-R22-S26-3'
            });
var format_HotspotB1R22S30_327 = new ol.format.GeoJSON();
var features_HotspotB1R22S30_327 = format_HotspotB1R22S30_327.readFeatures(json_HotspotB1R22S30_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R22S30_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R22S30_327.addFeatures(features_HotspotB1R22S30_327);
var lyr_HotspotB1R22S30_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R22S30_327, 
                style: style_HotspotB1R22S30_327,
                popuplayertitle: 'Hotspot-B1-R22-S30',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R22S30_327.png" /> Hotspot-B1-R22-S30'
            });
var format_HotspotB1R23S3_328 = new ol.format.GeoJSON();
var features_HotspotB1R23S3_328 = format_HotspotB1R23S3_328.readFeatures(json_HotspotB1R23S3_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S3_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S3_328.addFeatures(features_HotspotB1R23S3_328);
var lyr_HotspotB1R23S3_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S3_328, 
                style: style_HotspotB1R23S3_328,
                popuplayertitle: 'Hotspot-B1-R23-S3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S3_328.png" /> Hotspot-B1-R23-S3'
            });
var format_HotspotB1R23S4_329 = new ol.format.GeoJSON();
var features_HotspotB1R23S4_329 = format_HotspotB1R23S4_329.readFeatures(json_HotspotB1R23S4_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S4_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S4_329.addFeatures(features_HotspotB1R23S4_329);
var lyr_HotspotB1R23S4_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S4_329, 
                style: style_HotspotB1R23S4_329,
                popuplayertitle: 'Hotspot-B1-R23-S4',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S4_329.png" /> Hotspot-B1-R23-S4'
            });
var format_HotspotB1R23S7_330 = new ol.format.GeoJSON();
var features_HotspotB1R23S7_330 = format_HotspotB1R23S7_330.readFeatures(json_HotspotB1R23S7_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S7_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S7_330.addFeatures(features_HotspotB1R23S7_330);
var lyr_HotspotB1R23S7_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S7_330, 
                style: style_HotspotB1R23S7_330,
                popuplayertitle: 'Hotspot-B1-R23-S7',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S7_330.png" /> Hotspot-B1-R23-S7'
            });
var format_HotspotB1R23S12_331 = new ol.format.GeoJSON();
var features_HotspotB1R23S12_331 = format_HotspotB1R23S12_331.readFeatures(json_HotspotB1R23S12_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S12_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S12_331.addFeatures(features_HotspotB1R23S12_331);
var lyr_HotspotB1R23S12_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S12_331, 
                style: style_HotspotB1R23S12_331,
                popuplayertitle: 'Hotspot-B1-R23-S12',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S12_331.png" /> Hotspot-B1-R23-S12'
            });
var format_HotspotB1R23S18_332 = new ol.format.GeoJSON();
var features_HotspotB1R23S18_332 = format_HotspotB1R23S18_332.readFeatures(json_HotspotB1R23S18_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S18_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S18_332.addFeatures(features_HotspotB1R23S18_332);
var lyr_HotspotB1R23S18_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S18_332, 
                style: style_HotspotB1R23S18_332,
                popuplayertitle: 'Hotspot-B1-R23-S18',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S18_332.png" /> Hotspot-B1-R23-S18'
            });
var format_HotspotB1R23S20_333 = new ol.format.GeoJSON();
var features_HotspotB1R23S20_333 = format_HotspotB1R23S20_333.readFeatures(json_HotspotB1R23S20_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S20_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S20_333.addFeatures(features_HotspotB1R23S20_333);
var lyr_HotspotB1R23S20_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S20_333, 
                style: style_HotspotB1R23S20_333,
                popuplayertitle: 'Hotspot-B1-R23-S20',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S20_333.png" /> Hotspot-B1-R23-S20'
            });
var format_HotspotB1R23S22_334 = new ol.format.GeoJSON();
var features_HotspotB1R23S22_334 = format_HotspotB1R23S22_334.readFeatures(json_HotspotB1R23S22_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S22_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S22_334.addFeatures(features_HotspotB1R23S22_334);
var lyr_HotspotB1R23S22_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S22_334, 
                style: style_HotspotB1R23S22_334,
                popuplayertitle: 'Hotspot-B1-R23-S22',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S22_334.png" /> Hotspot-B1-R23-S22'
            });
var format_HotspotB1R23S23_335 = new ol.format.GeoJSON();
var features_HotspotB1R23S23_335 = format_HotspotB1R23S23_335.readFeatures(json_HotspotB1R23S23_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S23_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S23_335.addFeatures(features_HotspotB1R23S23_335);
var lyr_HotspotB1R23S23_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S23_335, 
                style: style_HotspotB1R23S23_335,
                popuplayertitle: 'Hotspot-B1-R23-S23',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S23_335.png" /> Hotspot-B1-R23-S23'
            });
var format_HotspotB1R23S25_336 = new ol.format.GeoJSON();
var features_HotspotB1R23S25_336 = format_HotspotB1R23S25_336.readFeatures(json_HotspotB1R23S25_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R23S25_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R23S25_336.addFeatures(features_HotspotB1R23S25_336);
var lyr_HotspotB1R23S25_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R23S25_336, 
                style: style_HotspotB1R23S25_336,
                popuplayertitle: 'Hotspot-B1-R23-S25',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R23S25_336.png" /> Hotspot-B1-R23-S25'
            });
var format_HotspotB1R24S4_337 = new ol.format.GeoJSON();
var features_HotspotB1R24S4_337 = format_HotspotB1R24S4_337.readFeatures(json_HotspotB1R24S4_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R24S4_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R24S4_337.addFeatures(features_HotspotB1R24S4_337);
var lyr_HotspotB1R24S4_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R24S4_337, 
                style: style_HotspotB1R24S4_337,
                popuplayertitle: 'Hotspot-B1-R24-S4',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R24S4_337.png" /> Hotspot-B1-R24-S4'
            });
var format_HotspotB1R24S71_338 = new ol.format.GeoJSON();
var features_HotspotB1R24S71_338 = format_HotspotB1R24S71_338.readFeatures(json_HotspotB1R24S71_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R24S71_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R24S71_338.addFeatures(features_HotspotB1R24S71_338);
var lyr_HotspotB1R24S71_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R24S71_338, 
                style: style_HotspotB1R24S71_338,
                popuplayertitle: 'Hotspot-B1-R24-S7-1',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R24S71_338.png" /> Hotspot-B1-R24-S7-1'
            });
var format_HotspotB1R24S72_339 = new ol.format.GeoJSON();
var features_HotspotB1R24S72_339 = format_HotspotB1R24S72_339.readFeatures(json_HotspotB1R24S72_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R24S72_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R24S72_339.addFeatures(features_HotspotB1R24S72_339);
var lyr_HotspotB1R24S72_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R24S72_339, 
                style: style_HotspotB1R24S72_339,
                popuplayertitle: 'Hotspot-B1-R24-S7-2',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R24S72_339.png" /> Hotspot-B1-R24-S7-2'
            });
var format_HotspotB1R24S73_340 = new ol.format.GeoJSON();
var features_HotspotB1R24S73_340 = format_HotspotB1R24S73_340.readFeatures(json_HotspotB1R24S73_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotB1R24S73_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotB1R24S73_340.addFeatures(features_HotspotB1R24S73_340);
var lyr_HotspotB1R24S73_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotB1R24S73_340, 
                style: style_HotspotB1R24S73_340,
                popuplayertitle: 'Hotspot-B1-R24-S7-3',
                interactive: true,
                title: '<img src="styles/legend/HotspotB1R24S73_340.png" /> Hotspot-B1-R24-S7-3'
            });
var format_Warm_moduleB1R11S9_341 = new ol.format.GeoJSON();
var features_Warm_moduleB1R11S9_341 = format_Warm_moduleB1R11S9_341.readFeatures(json_Warm_moduleB1R11S9_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warm_moduleB1R11S9_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warm_moduleB1R11S9_341.addFeatures(features_Warm_moduleB1R11S9_341);
var lyr_Warm_moduleB1R11S9_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warm_moduleB1R11S9_341, 
                style: style_Warm_moduleB1R11S9_341,
                popuplayertitle: 'Warm_module-B1-R11-S9',
                interactive: true,
                title: '<img src="styles/legend/Warm_moduleB1R11S9_341.png" /> Warm_module-B1-R11-S9'
            });
var format_Warm_moduleB1R11S15_342 = new ol.format.GeoJSON();
var features_Warm_moduleB1R11S15_342 = format_Warm_moduleB1R11S15_342.readFeatures(json_Warm_moduleB1R11S15_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warm_moduleB1R11S15_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warm_moduleB1R11S15_342.addFeatures(features_Warm_moduleB1R11S15_342);
var lyr_Warm_moduleB1R11S15_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warm_moduleB1R11S15_342, 
                style: style_Warm_moduleB1R11S15_342,
                popuplayertitle: 'Warm_module-B1-R11-S15',
                interactive: true,
                title: '<img src="styles/legend/Warm_moduleB1R11S15_342.png" /> Warm_module-B1-R11-S15'
            });
var format_Warm_moduleB1R11S31_343 = new ol.format.GeoJSON();
var features_Warm_moduleB1R11S31_343 = format_Warm_moduleB1R11S31_343.readFeatures(json_Warm_moduleB1R11S31_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warm_moduleB1R11S31_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warm_moduleB1R11S31_343.addFeatures(features_Warm_moduleB1R11S31_343);
var lyr_Warm_moduleB1R11S31_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warm_moduleB1R11S31_343, 
                style: style_Warm_moduleB1R11S31_343,
                popuplayertitle: 'Warm_module-B1-R11-S31',
                interactive: true,
                title: '<img src="styles/legend/Warm_moduleB1R11S31_343.png" /> Warm_module-B1-R11-S31'
            });
var format_Warm_moduleB1R16S67_344 = new ol.format.GeoJSON();
var features_Warm_moduleB1R16S67_344 = format_Warm_moduleB1R16S67_344.readFeatures(json_Warm_moduleB1R16S67_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warm_moduleB1R16S67_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warm_moduleB1R16S67_344.addFeatures(features_Warm_moduleB1R16S67_344);
var lyr_Warm_moduleB1R16S67_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warm_moduleB1R16S67_344, 
                style: style_Warm_moduleB1R16S67_344,
                popuplayertitle: 'Warm_module-B1-R16-S67',
                interactive: true,
                title: '<img src="styles/legend/Warm_moduleB1R16S67_344.png" /> Warm_module-B1-R16-S67'
            });
var format_Warm_moduleB1R18S31_345 = new ol.format.GeoJSON();
var features_Warm_moduleB1R18S31_345 = format_Warm_moduleB1R18S31_345.readFeatures(json_Warm_moduleB1R18S31_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warm_moduleB1R18S31_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warm_moduleB1R18S31_345.addFeatures(features_Warm_moduleB1R18S31_345);
var lyr_Warm_moduleB1R18S31_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warm_moduleB1R18S31_345, 
                style: style_Warm_moduleB1R18S31_345,
                popuplayertitle: 'Warm_module-B1-R18-S31',
                interactive: true,
                title: '<img src="styles/legend/Warm_moduleB1R18S31_345.png" /> Warm_module-B1-R18-S31'
            });
var format_DiodeFailureB1R10S34_346 = new ol.format.GeoJSON();
var features_DiodeFailureB1R10S34_346 = format_DiodeFailureB1R10S34_346.readFeatures(json_DiodeFailureB1R10S34_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiodeFailureB1R10S34_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiodeFailureB1R10S34_346.addFeatures(features_DiodeFailureB1R10S34_346);
var lyr_DiodeFailureB1R10S34_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiodeFailureB1R10S34_346, 
                style: style_DiodeFailureB1R10S34_346,
                popuplayertitle: 'Diode Failure-B1-R10-S34',
                interactive: true,
                title: '<img src="styles/legend/DiodeFailureB1R10S34_346.png" /> Diode Failure-B1-R10-S34'
            });
var format_DiodeFailureB1R13S51_347 = new ol.format.GeoJSON();
var features_DiodeFailureB1R13S51_347 = format_DiodeFailureB1R13S51_347.readFeatures(json_DiodeFailureB1R13S51_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiodeFailureB1R13S51_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiodeFailureB1R13S51_347.addFeatures(features_DiodeFailureB1R13S51_347);
var lyr_DiodeFailureB1R13S51_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiodeFailureB1R13S51_347, 
                style: style_DiodeFailureB1R13S51_347,
                popuplayertitle: 'Diode Failure-B1-R13-S51',
                interactive: true,
                title: '<img src="styles/legend/DiodeFailureB1R13S51_347.png" /> Diode Failure-B1-R13-S51'
            });
var format_DiodeFailureB1R10S39_348 = new ol.format.GeoJSON();
var features_DiodeFailureB1R10S39_348 = format_DiodeFailureB1R10S39_348.readFeatures(json_DiodeFailureB1R10S39_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiodeFailureB1R10S39_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiodeFailureB1R10S39_348.addFeatures(features_DiodeFailureB1R10S39_348);
var lyr_DiodeFailureB1R10S39_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiodeFailureB1R10S39_348, 
                style: style_DiodeFailureB1R10S39_348,
                popuplayertitle: 'Diode Failure-B1-R10-S39',
                interactive: true,
                title: '<img src="styles/legend/DiodeFailureB1R10S39_348.png" /> Diode Failure-B1-R10-S39'
            });
var format_DiodeFailureB1R15S25_349 = new ol.format.GeoJSON();
var features_DiodeFailureB1R15S25_349 = format_DiodeFailureB1R15S25_349.readFeatures(json_DiodeFailureB1R15S25_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiodeFailureB1R15S25_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiodeFailureB1R15S25_349.addFeatures(features_DiodeFailureB1R15S25_349);
var lyr_DiodeFailureB1R15S25_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiodeFailureB1R15S25_349, 
                style: style_DiodeFailureB1R15S25_349,
                popuplayertitle: 'Diode Failure-B1-R15-S25',
                interactive: true,
                title: '<img src="styles/legend/DiodeFailureB1R15S25_349.png" /> Diode Failure-B1-R15-S25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CNL02_1_TIR_ortho_1.setVisible(true);lyr_HotspotB1R1S6_2.setVisible(true);lyr_HotspotB1R1S10_3.setVisible(true);lyr_HotspotB1R1S14_4.setVisible(true);lyr_HotspotB1R2S9_5.setVisible(true);lyr_HotspotB1R2S13_6.setVisible(true);lyr_HotspotB1R3S10_7.setVisible(true);lyr_HotspotB1R3S12_8.setVisible(true);lyr_HotspotB1R3S29_9.setVisible(true);lyr_HotspotB1R4S6_10.setVisible(true);lyr_HotspotB1R4S16_11.setVisible(true);lyr_HotspotB1R4S24_12.setVisible(true);lyr_HotspotB1R4S31_13.setVisible(true);lyr_HotspotB1R4S40_14.setVisible(true);lyr_HotspotB1R5S7_15.setVisible(true);lyr_HotspotB1R5S13_16.setVisible(true);lyr_HotspotB1R5S18_17.setVisible(true);lyr_HotspotB1R5S26_18.setVisible(true);lyr_HotspotB1R5S27_19.setVisible(true);lyr_HotspotB1R5S28_20.setVisible(true);lyr_HotspotB1R5S31_21.setVisible(true);lyr_HotspotB1R5S43_22.setVisible(true);lyr_HotspotB1R5S44_23.setVisible(true);lyr_HotspotB1R6S3_24.setVisible(true);lyr_HotspotB1R6S4_25.setVisible(true);lyr_HotspotB1R6S11_26.setVisible(true);lyr_HotspotB1R6S13_27.setVisible(true);lyr_HotspotB1R6S16_28.setVisible(true);lyr_HotspotB1R6S24_29.setVisible(true);lyr_HotspotB1R6S27_30.setVisible(true);lyr_HotspotB1R6S33_31.setVisible(true);lyr_HotspotB1R6S50_32.setVisible(true);lyr_HotspotB1R7S5_33.setVisible(true);lyr_HotspotB1R7S61_34.setVisible(true);lyr_HotspotB1R7S62_35.setVisible(true);lyr_HotspotB1R7S16_36.setVisible(true);lyr_HotspotB1R7S22_37.setVisible(true);lyr_HotspotB1R7S24_38.setVisible(true);lyr_HotspotB1R7S321_39.setVisible(true);lyr_HotspotB1R7S322_40.setVisible(true);lyr_HotspotB1R7S323_41.setVisible(true);lyr_HotspotB1R7S324_42.setVisible(true);lyr_HotspotB1R7S37_43.setVisible(true);lyr_HotspotB1R7S621_44.setVisible(true);lyr_HotspotB1R7S622_45.setVisible(true);lyr_HotspotB1R8S71_46.setVisible(true);lyr_HotspotB1R8S72_47.setVisible(true);lyr_HotspotB1R8S14_48.setVisible(true);lyr_HotspotB1R8S19_49.setVisible(true);lyr_HotspotB1R8S23_50.setVisible(true);lyr_HotspotB1R8S30_51.setVisible(true);lyr_HotspotB1R8S35_52.setVisible(true);lyr_HotspotB1R8S41_53.setVisible(true);lyr_HotspotB1R8S51_54.setVisible(true);lyr_HotspotB1R8S55_55.setVisible(true);lyr_HotspotB1R8S59_56.setVisible(true);lyr_HotspotB1R8S61_57.setVisible(true);lyr_HotspotB1R8S62_58.setVisible(true);lyr_HotspotB1R8S64_59.setVisible(true);lyr_HotspotB1R8S71_60.setVisible(true);lyr_HotspotB1R9S6_61.setVisible(true);lyr_HotspotB1R9S9_62.setVisible(true);lyr_HotspotB1R9S15_63.setVisible(true);lyr_HotspotB1R9S18_64.setVisible(true);lyr_HotspotB1R9S28_65.setVisible(true);lyr_HotspotB1R9S31_66.setVisible(true);lyr_HotspotB1R9S40_67.setVisible(true);lyr_HotspotB1R9S48_68.setVisible(true);lyr_HotspotB1R9S49_69.setVisible(true);lyr_HotspotB1R9S55_70.setVisible(true);lyr_HotspotB1R9S66_71.setVisible(true);lyr_HotspotB1R9S69_72.setVisible(true);lyr_HotspotB1R9S72_73.setVisible(true);lyr_HotspotB1R9S74_74.setVisible(true);lyr_HotspotB1R9S75_75.setVisible(true);lyr_HotspotB1R9S79_76.setVisible(true);lyr_HotspotB1R10S3_77.setVisible(true);lyr_HotspotB1R10S5_78.setVisible(true);lyr_HotspotB1R10S10_79.setVisible(true);lyr_HotspotB1R10S11_80.setVisible(true);lyr_HotspotB1R10S13_81.setVisible(true);lyr_HotspotB1R10S21_82.setVisible(true);lyr_HotspotB1R10S41_83.setVisible(true);lyr_HotspotB1R10S42_84.setVisible(true);lyr_HotspotB1R10S44_85.setVisible(true);lyr_HotspotB1R10S50_86.setVisible(true);lyr_HotspotB1R10S55_87.setVisible(true);lyr_HotspotB1R10S57_88.setVisible(true);lyr_HotspotB1R10S63_89.setVisible(true);lyr_HotspotB1R10S64_90.setVisible(true);lyr_HotspotB1R10S65_91.setVisible(true);lyr_HotspotB1R10S68_92.setVisible(true);lyr_HotspotB1R10S72_93.setVisible(true);lyr_HotspotB1R10S74_94.setVisible(true);lyr_HotspotB1R10S83_95.setVisible(true);lyr_HotspotB1R10S84_96.setVisible(true);lyr_HotspotB1R11S2_97.setVisible(true);lyr_HotspotB1R11S3_98.setVisible(true);lyr_HotspotB1R11S4_99.setVisible(true);lyr_HotspotB1R11S13_100.setVisible(true);lyr_HotspotB1R11S25_101.setVisible(true);lyr_HotspotB1R11S26_102.setVisible(true);lyr_HotspotB1R11S27_103.setVisible(true);lyr_HotspotB1R11S28_104.setVisible(true);lyr_HotspotB1R11S29_105.setVisible(true);lyr_HotspotB1R11S38_106.setVisible(true);lyr_HotspotB1R11S39_107.setVisible(true);lyr_HotspotB1R11S40_108.setVisible(true);lyr_HotspotB1R11S51_109.setVisible(true);lyr_HotspotB1R11S56_110.setVisible(true);lyr_HotspotB1R11S58_111.setVisible(true);lyr_HotspotB1R11S59_112.setVisible(true);lyr_HotspotB1R11S61_113.setVisible(true);lyr_HotspotB1R11S63_114.setVisible(true);lyr_HotspotB1R11S64_115.setVisible(true);lyr_HotspotB1R11S66_116.setVisible(true);lyr_HotspotB1R11S711_117.setVisible(true);lyr_HotspotB1R11S712_118.setVisible(true);lyr_HotspotB1R11S72_119.setVisible(true);lyr_HotspotB1R11S731_120.setVisible(true);lyr_HotspotB1R11S732_121.setVisible(true);lyr_HotspotB1R11S75_122.setVisible(true);lyr_HotspotB1R11S76_123.setVisible(true);lyr_HotspotB1R11S78_124.setVisible(true);lyr_HotspotB1R11S841_125.setVisible(true);lyr_HotspotB1R11S842_126.setVisible(true);lyr_HotspotB1R11S843_127.setVisible(true);lyr_HotspotB1R12S2_128.setVisible(true);lyr_HotspotB1R12S3_129.setVisible(true);lyr_HotspotB1R12S41_130.setVisible(true);lyr_HotspotB1R12S42_131.setVisible(true);lyr_HotspotB1R12S9_132.setVisible(true);lyr_HotspotB1R12S14_133.setVisible(true);lyr_HotspotB1R12S17_134.setVisible(true);lyr_HotspotB1R12S18_135.setVisible(true);lyr_HotspotB1R12S19_136.setVisible(true);lyr_HotspotB1R12S21_137.setVisible(true);lyr_HotspotB1R12S26_138.setVisible(true);lyr_HotspotB1R12S29_139.setVisible(true);lyr_HotspotB1R12S32_140.setVisible(true);lyr_HotspotB1R12S38_141.setVisible(true);lyr_HotspotB1R12S40_142.setVisible(true);lyr_HotspotB1R12S44_143.setVisible(true);lyr_HotspotB1R12S45_144.setVisible(true);lyr_HotspotB1R12S48_145.setVisible(true);lyr_HotspotB1R12S49_146.setVisible(true);lyr_HotspotB1R12S52_147.setVisible(true);lyr_HotspotB1R12S54_148.setVisible(true);lyr_HotspotB1R12S55_149.setVisible(true);lyr_HotspotB1R12S57_150.setVisible(true);lyr_HotspotB1R12S65_151.setVisible(true);lyr_HotspotB1R12S68_152.setVisible(true);lyr_HotspotB1R12S70_153.setVisible(true);lyr_HotspotB1R12S74_154.setVisible(true);lyr_HotspotB1R12S76_155.setVisible(true);lyr_HotspotB1R12S77_156.setVisible(true);lyr_HotspotB1R12S80_157.setVisible(true);lyr_HotspotB1R12S81_158.setVisible(true);lyr_HotspotB1R12S82_159.setVisible(true);lyr_HotspotB1R12S83_160.setVisible(true);lyr_HotspotB1R12S84_161.setVisible(true);lyr_HotspotB1R13S51_162.setVisible(true);lyr_HotspotB1R13S52_163.setVisible(true);lyr_HotspotB1R13S6_164.setVisible(true);lyr_HotspotB1R13S9_165.setVisible(true);lyr_HotspotB1R13S10_166.setVisible(true);lyr_HotspotB1R13S15_167.setVisible(true);lyr_HotspotB1R13S17_168.setVisible(true);lyr_HotspotB1R13S20_169.setVisible(true);lyr_HotspotB1R13S23_170.setVisible(true);lyr_HotspotB1R13S31_171.setVisible(true);lyr_HotspotB1R13S34_172.setVisible(true);lyr_HotspotB1R13S42_173.setVisible(true);lyr_HotspotB1R13S45_174.setVisible(true);lyr_HotspotB1R13S50_175.setVisible(true);lyr_HotspotB1R13S56_176.setVisible(true);lyr_HotspotB1R13S57_177.setVisible(true);lyr_HotspotB1R13S58_178.setVisible(true);lyr_HotspotB1R13S59_179.setVisible(true);lyr_HotspotB1R13S79_180.setVisible(true);lyr_HotspotB1R13S80_181.setVisible(true);lyr_HotspotB1R13S81_182.setVisible(true);lyr_HotspotB1R13S84_183.setVisible(true);lyr_HotspotB1R14S5_184.setVisible(true);lyr_HotspotB1R14S8_185.setVisible(true);lyr_HotspotB1R14S14_186.setVisible(true);lyr_HotspotB1R14S15_187.setVisible(true);lyr_HotspotB1R14S17_188.setVisible(true);lyr_HotspotB1R14S19_189.setVisible(true);lyr_HotspotB1R14S20_190.setVisible(true);lyr_HotspotB1R14S23_191.setVisible(true);lyr_HotspotB1R14S24_192.setVisible(true);lyr_HotspotB1R14S28_193.setVisible(true);lyr_HotspotB1R14S29_194.setVisible(true);lyr_HotspotB1R14S31_195.setVisible(true);lyr_HotspotB1R14S331_196.setVisible(true);lyr_HotspotB1R14S332_197.setVisible(true);lyr_HotspotB1R14S41_198.setVisible(true);lyr_HotspotB1R14S44_199.setVisible(true);lyr_HotspotB1R14S47_200.setVisible(true);lyr_HotspotB1R14S51_201.setVisible(true);lyr_HotspotB1R14S54_202.setVisible(true);lyr_HotspotB1R14S58_203.setVisible(true);lyr_HotspotB1R14S60_204.setVisible(true);lyr_HotspotB1R14S63_205.setVisible(true);lyr_HotspotB1R14S80_206.setVisible(true);lyr_HotspotB1R14S881_207.setVisible(true);lyr_HotspotB1R14S882_208.setVisible(true);lyr_HotspotB1R15S6_209.setVisible(true);lyr_HotspotB1R15S71_210.setVisible(true);lyr_HotspotB1R15S72_211.setVisible(true);lyr_HotspotB1R15S73_212.setVisible(true);lyr_HotspotB1R15S9_213.setVisible(true);lyr_HotspotB1R15S12_214.setVisible(true);lyr_HotspotB1R15S18_215.setVisible(true);lyr_HotspotB1R15S20_216.setVisible(true);lyr_HotspotB1R15S281_217.setVisible(true);lyr_HotspotB1R15S282_218.setVisible(true);lyr_HotspotB1R15S31_219.setVisible(true);lyr_HotspotB1R15S32_220.setVisible(true);lyr_HotspotB1R15S47_221.setVisible(true);lyr_HotspotB1R15S55_222.setVisible(true);lyr_HotspotB1R15S63_223.setVisible(true);lyr_HotspotB1R15S721_224.setVisible(true);lyr_HotspotB1R15S722_225.setVisible(true);lyr_HotspotB1R15S77_226.setVisible(true);lyr_HotspotB1R15S81_227.setVisible(true);lyr_HotspotB1R15S83_228.setVisible(true);lyr_HotspotB1R16S1_229.setVisible(true);lyr_HotspotB1R16S41_230.setVisible(true);lyr_HotspotB1R16S42_231.setVisible(true);lyr_HotspotB1R16S8_232.setVisible(true);lyr_HotspotB1R16S13_233.setVisible(true);lyr_HotspotB1R16S15_234.setVisible(true);lyr_HotspotB1R16S18_235.setVisible(true);lyr_HotspotB1R16S19_236.setVisible(true);lyr_HotspotB1R16S21_237.setVisible(true);lyr_HotspotB1R16S24_238.setVisible(true);lyr_HotspotB1R16S25_239.setVisible(true);lyr_HotspotB1R16S28_240.setVisible(true);lyr_HotspotB1R16S32_241.setVisible(true);lyr_HotspotB1R16S34_242.setVisible(true);lyr_HotspotB1R16S35_243.setVisible(true);lyr_HotspotB1R16S37_244.setVisible(true);lyr_HotspotB1R16S38_245.setVisible(true);lyr_HotspotB1R16S45_246.setVisible(true);lyr_HotspotB1R16S51_247.setVisible(true);lyr_HotspotB1R16S59_248.setVisible(true);lyr_HotspotB1R16S60_249.setVisible(true);lyr_HotspotB1R16S62_250.setVisible(true);lyr_HotspotB1R16S68_251.setVisible(true);lyr_HotspotB1R16S75_252.setVisible(true);lyr_HotspotB1R17S11_253.setVisible(true);lyr_HotspotB1R17S12_254.setVisible(true);lyr_HotspotB1R17S3_255.setVisible(true);lyr_HotspotB1R17S10_256.setVisible(true);lyr_HotspotB1R17S16_257.setVisible(true);lyr_HotspotB1R17S22_258.setVisible(true);lyr_HotspotB1R17S26_259.setVisible(true);lyr_HotspotB1R17S35_260.setVisible(true);lyr_HotspotB1R17S40_261.setVisible(true);lyr_HotspotB1R17S44_262.setVisible(true);lyr_HotspotB1R17S45_263.setVisible(true);lyr_HotspotB1R17S51_264.setVisible(true);lyr_HotspotB1R17S53_265.setVisible(true);lyr_HotspotB1R17S54_266.setVisible(true);lyr_HotspotB1R17S67_267.setVisible(true);lyr_HotspotB1R17S68_268.setVisible(true);lyr_HotspotB1R18S10_269.setVisible(true);lyr_HotspotB1R18S15_270.setVisible(true);lyr_HotspotB1R18S22_271.setVisible(true);lyr_HotspotB1R18S23_272.setVisible(true);lyr_HotspotB1R18S24_273.setVisible(true);lyr_HotspotB1R18S25_274.setVisible(true);lyr_HotspotB1R18S37_275.setVisible(true);lyr_HotspotB1R18S40_276.setVisible(true);lyr_HotspotB1R18S48_277.setVisible(true);lyr_HotspotB1R18S49_278.setVisible(true);lyr_HotspotB1R18S50_279.setVisible(true);lyr_HotspotB1R18S52_280.setVisible(true);lyr_HotspotB1R18S59_281.setVisible(true);lyr_HotspotB1R18S64_282.setVisible(true);lyr_HotspotB1R19S21_283.setVisible(true);lyr_HotspotB1R19S22_284.setVisible(true);lyr_HotspotB1R19S8_285.setVisible(true);lyr_HotspotB1R19S13_286.setVisible(true);lyr_HotspotB1R19S16_287.setVisible(true);lyr_HotspotB1R19S17_288.setVisible(true);lyr_HotspotB1R19S21_289.setVisible(true);lyr_HotspotB1R19S221_290.setVisible(true);lyr_HotspotB1R19S222_291.setVisible(true);lyr_HotspotB1R19S28_292.setVisible(true);lyr_HotspotB1R19S34_293.setVisible(true);lyr_HotspotB1R19S371_294.setVisible(true);lyr_HotspotB1R19S372_295.setVisible(true);lyr_HotspotB1R19S40_296.setVisible(true);lyr_HotspotB1R19S41_297.setVisible(true);lyr_HotspotB1R19S43_298.setVisible(true);lyr_HotspotB1R19S51_299.setVisible(true);lyr_HotspotB1R19S56_300.setVisible(true);lyr_HotspotB1R20S9_301.setVisible(true);lyr_HotspotB1R20S25_302.setVisible(true);lyr_HotspotB1R20S28_303.setVisible(true);lyr_HotspotB1R20S31_304.setVisible(true);lyr_HotspotB1R20S36_305.setVisible(true);lyr_HotspotB1R20S39_306.setVisible(true);lyr_HotspotB1R20S46_307.setVisible(true);lyr_HotspotB1R20S47_308.setVisible(true);lyr_HotspotB1R21S3_309.setVisible(true);lyr_HotspotB1R21S15_310.setVisible(true);lyr_HotspotB1R21S17_311.setVisible(true);lyr_HotspotB1R21S181_312.setVisible(true);lyr_HotspotB1R21S182_313.setVisible(true);lyr_HotspotB1R21S26_314.setVisible(true);lyr_HotspotB1R21S301_315.setVisible(true);lyr_HotspotB1R21S302_316.setVisible(true);lyr_HotspotB1R21S303_317.setVisible(true);lyr_HotspotB1R21S31_318.setVisible(true);lyr_HotspotB1R21S32_319.setVisible(true);lyr_HotspotB1R21S38_320.setVisible(true);lyr_HotspotB1R22S1_321.setVisible(true);lyr_HotspotB1R22S16_322.setVisible(true);lyr_HotspotB1R22S19_323.setVisible(true);lyr_HotspotB1R22S261_324.setVisible(true);lyr_HotspotB1R22S262_325.setVisible(true);lyr_HotspotB1R22S263_326.setVisible(true);lyr_HotspotB1R22S30_327.setVisible(true);lyr_HotspotB1R23S3_328.setVisible(true);lyr_HotspotB1R23S4_329.setVisible(true);lyr_HotspotB1R23S7_330.setVisible(true);lyr_HotspotB1R23S12_331.setVisible(true);lyr_HotspotB1R23S18_332.setVisible(true);lyr_HotspotB1R23S20_333.setVisible(true);lyr_HotspotB1R23S22_334.setVisible(true);lyr_HotspotB1R23S23_335.setVisible(true);lyr_HotspotB1R23S25_336.setVisible(true);lyr_HotspotB1R24S4_337.setVisible(true);lyr_HotspotB1R24S71_338.setVisible(true);lyr_HotspotB1R24S72_339.setVisible(true);lyr_HotspotB1R24S73_340.setVisible(true);lyr_Warm_moduleB1R11S9_341.setVisible(true);lyr_Warm_moduleB1R11S15_342.setVisible(true);lyr_Warm_moduleB1R11S31_343.setVisible(true);lyr_Warm_moduleB1R16S67_344.setVisible(true);lyr_Warm_moduleB1R18S31_345.setVisible(true);lyr_DiodeFailureB1R10S34_346.setVisible(true);lyr_DiodeFailureB1R13S51_347.setVisible(true);lyr_DiodeFailureB1R10S39_348.setVisible(true);lyr_DiodeFailureB1R15S25_349.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CNL02_1_TIR_ortho_1,lyr_HotspotB1R1S6_2,lyr_HotspotB1R1S10_3,lyr_HotspotB1R1S14_4,lyr_HotspotB1R2S9_5,lyr_HotspotB1R2S13_6,lyr_HotspotB1R3S10_7,lyr_HotspotB1R3S12_8,lyr_HotspotB1R3S29_9,lyr_HotspotB1R4S6_10,lyr_HotspotB1R4S16_11,lyr_HotspotB1R4S24_12,lyr_HotspotB1R4S31_13,lyr_HotspotB1R4S40_14,lyr_HotspotB1R5S7_15,lyr_HotspotB1R5S13_16,lyr_HotspotB1R5S18_17,lyr_HotspotB1R5S26_18,lyr_HotspotB1R5S27_19,lyr_HotspotB1R5S28_20,lyr_HotspotB1R5S31_21,lyr_HotspotB1R5S43_22,lyr_HotspotB1R5S44_23,lyr_HotspotB1R6S3_24,lyr_HotspotB1R6S4_25,lyr_HotspotB1R6S11_26,lyr_HotspotB1R6S13_27,lyr_HotspotB1R6S16_28,lyr_HotspotB1R6S24_29,lyr_HotspotB1R6S27_30,lyr_HotspotB1R6S33_31,lyr_HotspotB1R6S50_32,lyr_HotspotB1R7S5_33,lyr_HotspotB1R7S61_34,lyr_HotspotB1R7S62_35,lyr_HotspotB1R7S16_36,lyr_HotspotB1R7S22_37,lyr_HotspotB1R7S24_38,lyr_HotspotB1R7S321_39,lyr_HotspotB1R7S322_40,lyr_HotspotB1R7S323_41,lyr_HotspotB1R7S324_42,lyr_HotspotB1R7S37_43,lyr_HotspotB1R7S621_44,lyr_HotspotB1R7S622_45,lyr_HotspotB1R8S71_46,lyr_HotspotB1R8S72_47,lyr_HotspotB1R8S14_48,lyr_HotspotB1R8S19_49,lyr_HotspotB1R8S23_50,lyr_HotspotB1R8S30_51,lyr_HotspotB1R8S35_52,lyr_HotspotB1R8S41_53,lyr_HotspotB1R8S51_54,lyr_HotspotB1R8S55_55,lyr_HotspotB1R8S59_56,lyr_HotspotB1R8S61_57,lyr_HotspotB1R8S62_58,lyr_HotspotB1R8S64_59,lyr_HotspotB1R8S71_60,lyr_HotspotB1R9S6_61,lyr_HotspotB1R9S9_62,lyr_HotspotB1R9S15_63,lyr_HotspotB1R9S18_64,lyr_HotspotB1R9S28_65,lyr_HotspotB1R9S31_66,lyr_HotspotB1R9S40_67,lyr_HotspotB1R9S48_68,lyr_HotspotB1R9S49_69,lyr_HotspotB1R9S55_70,lyr_HotspotB1R9S66_71,lyr_HotspotB1R9S69_72,lyr_HotspotB1R9S72_73,lyr_HotspotB1R9S74_74,lyr_HotspotB1R9S75_75,lyr_HotspotB1R9S79_76,lyr_HotspotB1R10S3_77,lyr_HotspotB1R10S5_78,lyr_HotspotB1R10S10_79,lyr_HotspotB1R10S11_80,lyr_HotspotB1R10S13_81,lyr_HotspotB1R10S21_82,lyr_HotspotB1R10S41_83,lyr_HotspotB1R10S42_84,lyr_HotspotB1R10S44_85,lyr_HotspotB1R10S50_86,lyr_HotspotB1R10S55_87,lyr_HotspotB1R10S57_88,lyr_HotspotB1R10S63_89,lyr_HotspotB1R10S64_90,lyr_HotspotB1R10S65_91,lyr_HotspotB1R10S68_92,lyr_HotspotB1R10S72_93,lyr_HotspotB1R10S74_94,lyr_HotspotB1R10S83_95,lyr_HotspotB1R10S84_96,lyr_HotspotB1R11S2_97,lyr_HotspotB1R11S3_98,lyr_HotspotB1R11S4_99,lyr_HotspotB1R11S13_100,lyr_HotspotB1R11S25_101,lyr_HotspotB1R11S26_102,lyr_HotspotB1R11S27_103,lyr_HotspotB1R11S28_104,lyr_HotspotB1R11S29_105,lyr_HotspotB1R11S38_106,lyr_HotspotB1R11S39_107,lyr_HotspotB1R11S40_108,lyr_HotspotB1R11S51_109,lyr_HotspotB1R11S56_110,lyr_HotspotB1R11S58_111,lyr_HotspotB1R11S59_112,lyr_HotspotB1R11S61_113,lyr_HotspotB1R11S63_114,lyr_HotspotB1R11S64_115,lyr_HotspotB1R11S66_116,lyr_HotspotB1R11S711_117,lyr_HotspotB1R11S712_118,lyr_HotspotB1R11S72_119,lyr_HotspotB1R11S731_120,lyr_HotspotB1R11S732_121,lyr_HotspotB1R11S75_122,lyr_HotspotB1R11S76_123,lyr_HotspotB1R11S78_124,lyr_HotspotB1R11S841_125,lyr_HotspotB1R11S842_126,lyr_HotspotB1R11S843_127,lyr_HotspotB1R12S2_128,lyr_HotspotB1R12S3_129,lyr_HotspotB1R12S41_130,lyr_HotspotB1R12S42_131,lyr_HotspotB1R12S9_132,lyr_HotspotB1R12S14_133,lyr_HotspotB1R12S17_134,lyr_HotspotB1R12S18_135,lyr_HotspotB1R12S19_136,lyr_HotspotB1R12S21_137,lyr_HotspotB1R12S26_138,lyr_HotspotB1R12S29_139,lyr_HotspotB1R12S32_140,lyr_HotspotB1R12S38_141,lyr_HotspotB1R12S40_142,lyr_HotspotB1R12S44_143,lyr_HotspotB1R12S45_144,lyr_HotspotB1R12S48_145,lyr_HotspotB1R12S49_146,lyr_HotspotB1R12S52_147,lyr_HotspotB1R12S54_148,lyr_HotspotB1R12S55_149,lyr_HotspotB1R12S57_150,lyr_HotspotB1R12S65_151,lyr_HotspotB1R12S68_152,lyr_HotspotB1R12S70_153,lyr_HotspotB1R12S74_154,lyr_HotspotB1R12S76_155,lyr_HotspotB1R12S77_156,lyr_HotspotB1R12S80_157,lyr_HotspotB1R12S81_158,lyr_HotspotB1R12S82_159,lyr_HotspotB1R12S83_160,lyr_HotspotB1R12S84_161,lyr_HotspotB1R13S51_162,lyr_HotspotB1R13S52_163,lyr_HotspotB1R13S6_164,lyr_HotspotB1R13S9_165,lyr_HotspotB1R13S10_166,lyr_HotspotB1R13S15_167,lyr_HotspotB1R13S17_168,lyr_HotspotB1R13S20_169,lyr_HotspotB1R13S23_170,lyr_HotspotB1R13S31_171,lyr_HotspotB1R13S34_172,lyr_HotspotB1R13S42_173,lyr_HotspotB1R13S45_174,lyr_HotspotB1R13S50_175,lyr_HotspotB1R13S56_176,lyr_HotspotB1R13S57_177,lyr_HotspotB1R13S58_178,lyr_HotspotB1R13S59_179,lyr_HotspotB1R13S79_180,lyr_HotspotB1R13S80_181,lyr_HotspotB1R13S81_182,lyr_HotspotB1R13S84_183,lyr_HotspotB1R14S5_184,lyr_HotspotB1R14S8_185,lyr_HotspotB1R14S14_186,lyr_HotspotB1R14S15_187,lyr_HotspotB1R14S17_188,lyr_HotspotB1R14S19_189,lyr_HotspotB1R14S20_190,lyr_HotspotB1R14S23_191,lyr_HotspotB1R14S24_192,lyr_HotspotB1R14S28_193,lyr_HotspotB1R14S29_194,lyr_HotspotB1R14S31_195,lyr_HotspotB1R14S331_196,lyr_HotspotB1R14S332_197,lyr_HotspotB1R14S41_198,lyr_HotspotB1R14S44_199,lyr_HotspotB1R14S47_200,lyr_HotspotB1R14S51_201,lyr_HotspotB1R14S54_202,lyr_HotspotB1R14S58_203,lyr_HotspotB1R14S60_204,lyr_HotspotB1R14S63_205,lyr_HotspotB1R14S80_206,lyr_HotspotB1R14S881_207,lyr_HotspotB1R14S882_208,lyr_HotspotB1R15S6_209,lyr_HotspotB1R15S71_210,lyr_HotspotB1R15S72_211,lyr_HotspotB1R15S73_212,lyr_HotspotB1R15S9_213,lyr_HotspotB1R15S12_214,lyr_HotspotB1R15S18_215,lyr_HotspotB1R15S20_216,lyr_HotspotB1R15S281_217,lyr_HotspotB1R15S282_218,lyr_HotspotB1R15S31_219,lyr_HotspotB1R15S32_220,lyr_HotspotB1R15S47_221,lyr_HotspotB1R15S55_222,lyr_HotspotB1R15S63_223,lyr_HotspotB1R15S721_224,lyr_HotspotB1R15S722_225,lyr_HotspotB1R15S77_226,lyr_HotspotB1R15S81_227,lyr_HotspotB1R15S83_228,lyr_HotspotB1R16S1_229,lyr_HotspotB1R16S41_230,lyr_HotspotB1R16S42_231,lyr_HotspotB1R16S8_232,lyr_HotspotB1R16S13_233,lyr_HotspotB1R16S15_234,lyr_HotspotB1R16S18_235,lyr_HotspotB1R16S19_236,lyr_HotspotB1R16S21_237,lyr_HotspotB1R16S24_238,lyr_HotspotB1R16S25_239,lyr_HotspotB1R16S28_240,lyr_HotspotB1R16S32_241,lyr_HotspotB1R16S34_242,lyr_HotspotB1R16S35_243,lyr_HotspotB1R16S37_244,lyr_HotspotB1R16S38_245,lyr_HotspotB1R16S45_246,lyr_HotspotB1R16S51_247,lyr_HotspotB1R16S59_248,lyr_HotspotB1R16S60_249,lyr_HotspotB1R16S62_250,lyr_HotspotB1R16S68_251,lyr_HotspotB1R16S75_252,lyr_HotspotB1R17S11_253,lyr_HotspotB1R17S12_254,lyr_HotspotB1R17S3_255,lyr_HotspotB1R17S10_256,lyr_HotspotB1R17S16_257,lyr_HotspotB1R17S22_258,lyr_HotspotB1R17S26_259,lyr_HotspotB1R17S35_260,lyr_HotspotB1R17S40_261,lyr_HotspotB1R17S44_262,lyr_HotspotB1R17S45_263,lyr_HotspotB1R17S51_264,lyr_HotspotB1R17S53_265,lyr_HotspotB1R17S54_266,lyr_HotspotB1R17S67_267,lyr_HotspotB1R17S68_268,lyr_HotspotB1R18S10_269,lyr_HotspotB1R18S15_270,lyr_HotspotB1R18S22_271,lyr_HotspotB1R18S23_272,lyr_HotspotB1R18S24_273,lyr_HotspotB1R18S25_274,lyr_HotspotB1R18S37_275,lyr_HotspotB1R18S40_276,lyr_HotspotB1R18S48_277,lyr_HotspotB1R18S49_278,lyr_HotspotB1R18S50_279,lyr_HotspotB1R18S52_280,lyr_HotspotB1R18S59_281,lyr_HotspotB1R18S64_282,lyr_HotspotB1R19S21_283,lyr_HotspotB1R19S22_284,lyr_HotspotB1R19S8_285,lyr_HotspotB1R19S13_286,lyr_HotspotB1R19S16_287,lyr_HotspotB1R19S17_288,lyr_HotspotB1R19S21_289,lyr_HotspotB1R19S221_290,lyr_HotspotB1R19S222_291,lyr_HotspotB1R19S28_292,lyr_HotspotB1R19S34_293,lyr_HotspotB1R19S371_294,lyr_HotspotB1R19S372_295,lyr_HotspotB1R19S40_296,lyr_HotspotB1R19S41_297,lyr_HotspotB1R19S43_298,lyr_HotspotB1R19S51_299,lyr_HotspotB1R19S56_300,lyr_HotspotB1R20S9_301,lyr_HotspotB1R20S25_302,lyr_HotspotB1R20S28_303,lyr_HotspotB1R20S31_304,lyr_HotspotB1R20S36_305,lyr_HotspotB1R20S39_306,lyr_HotspotB1R20S46_307,lyr_HotspotB1R20S47_308,lyr_HotspotB1R21S3_309,lyr_HotspotB1R21S15_310,lyr_HotspotB1R21S17_311,lyr_HotspotB1R21S181_312,lyr_HotspotB1R21S182_313,lyr_HotspotB1R21S26_314,lyr_HotspotB1R21S301_315,lyr_HotspotB1R21S302_316,lyr_HotspotB1R21S303_317,lyr_HotspotB1R21S31_318,lyr_HotspotB1R21S32_319,lyr_HotspotB1R21S38_320,lyr_HotspotB1R22S1_321,lyr_HotspotB1R22S16_322,lyr_HotspotB1R22S19_323,lyr_HotspotB1R22S261_324,lyr_HotspotB1R22S262_325,lyr_HotspotB1R22S263_326,lyr_HotspotB1R22S30_327,lyr_HotspotB1R23S3_328,lyr_HotspotB1R23S4_329,lyr_HotspotB1R23S7_330,lyr_HotspotB1R23S12_331,lyr_HotspotB1R23S18_332,lyr_HotspotB1R23S20_333,lyr_HotspotB1R23S22_334,lyr_HotspotB1R23S23_335,lyr_HotspotB1R23S25_336,lyr_HotspotB1R24S4_337,lyr_HotspotB1R24S71_338,lyr_HotspotB1R24S72_339,lyr_HotspotB1R24S73_340,lyr_Warm_moduleB1R11S9_341,lyr_Warm_moduleB1R11S15_342,lyr_Warm_moduleB1R11S31_343,lyr_Warm_moduleB1R16S67_344,lyr_Warm_moduleB1R18S31_345,lyr_DiodeFailureB1R10S34_346,lyr_DiodeFailureB1R13S51_347,lyr_DiodeFailureB1R10S39_348,lyr_DiodeFailureB1R15S25_349];
lyr_HotspotB1R1S6_2.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R1S10_3.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R1S14_4.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R2S9_5.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R2S13_6.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R3S10_7.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R3S12_8.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R3S29_9.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R4S6_10.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R4S16_11.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R4S24_12.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R4S31_13.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R4S40_14.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S7_15.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S13_16.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S18_17.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S26_18.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S27_19.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S28_20.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S31_21.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S43_22.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R5S44_23.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S3_24.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S4_25.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S11_26.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S13_27.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S16_28.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S24_29.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S27_30.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S33_31.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R6S50_32.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S5_33.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S61_34.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S62_35.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S16_36.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S22_37.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S24_38.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S321_39.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S322_40.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S323_41.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S324_42.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S37_43.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S621_44.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R7S622_45.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S71_46.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S72_47.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S14_48.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S19_49.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S23_50.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S30_51.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S35_52.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S41_53.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S51_54.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S55_55.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S59_56.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S61_57.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S62_58.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S64_59.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R8S71_60.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S6_61.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S9_62.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S15_63.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S18_64.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S28_65.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S31_66.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S40_67.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S48_68.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S49_69.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S55_70.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S66_71.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S69_72.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S72_73.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S74_74.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S75_75.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R9S79_76.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S3_77.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S5_78.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S10_79.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S11_80.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S13_81.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S21_82.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S41_83.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S42_84.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S44_85.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S50_86.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S55_87.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S57_88.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S63_89.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S64_90.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S65_91.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S68_92.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S72_93.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S74_94.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S83_95.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R10S84_96.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S2_97.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S3_98.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S4_99.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S13_100.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S25_101.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S26_102.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S27_103.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S28_104.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S29_105.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S38_106.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S39_107.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S40_108.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S51_109.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S56_110.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S58_111.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S59_112.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S61_113.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S63_114.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S64_115.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S66_116.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S711_117.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S712_118.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S72_119.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S731_120.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S732_121.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S75_122.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S76_123.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S78_124.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S841_125.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S842_126.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R11S843_127.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S2_128.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S3_129.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S41_130.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S42_131.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S9_132.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S14_133.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S17_134.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S18_135.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S19_136.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S21_137.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S26_138.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S29_139.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S32_140.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S38_141.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S40_142.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S44_143.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S45_144.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S48_145.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S49_146.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S52_147.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S54_148.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S55_149.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S57_150.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S65_151.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S68_152.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S70_153.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S74_154.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S76_155.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S77_156.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S80_157.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S81_158.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S82_159.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S83_160.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R12S84_161.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S51_162.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S52_163.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S6_164.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S9_165.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S10_166.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S15_167.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S17_168.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S20_169.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S23_170.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S31_171.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S34_172.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S42_173.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S45_174.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S50_175.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S56_176.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S57_177.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S58_178.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S59_179.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S79_180.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S80_181.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S81_182.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R13S84_183.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S5_184.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S8_185.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S14_186.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S15_187.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S17_188.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S19_189.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S20_190.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S23_191.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S24_192.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S28_193.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S29_194.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S31_195.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S331_196.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S332_197.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S41_198.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S44_199.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S47_200.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S51_201.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S54_202.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S58_203.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S60_204.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S63_205.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S80_206.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S881_207.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R14S882_208.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S6_209.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S71_210.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S72_211.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S73_212.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S9_213.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S12_214.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S18_215.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S20_216.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S281_217.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S282_218.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S31_219.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S32_220.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S47_221.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S55_222.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S63_223.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S721_224.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S722_225.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S77_226.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S81_227.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R15S83_228.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S1_229.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S41_230.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S42_231.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S8_232.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S13_233.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S15_234.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S18_235.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S19_236.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S21_237.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S24_238.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S25_239.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S28_240.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S32_241.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S34_242.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S35_243.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S37_244.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S38_245.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S45_246.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S51_247.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S59_248.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S60_249.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S62_250.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S68_251.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R16S75_252.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S11_253.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S12_254.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S3_255.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S10_256.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S16_257.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S22_258.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S26_259.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S35_260.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S40_261.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S44_262.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S45_263.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S51_264.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S53_265.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S54_266.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S67_267.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R17S68_268.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S10_269.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S15_270.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S22_271.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S23_272.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S24_273.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S25_274.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S37_275.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S40_276.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S48_277.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S49_278.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S50_279.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S52_280.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S59_281.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R18S64_282.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S21_283.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S22_284.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S8_285.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S13_286.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S16_287.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S17_288.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S21_289.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S221_290.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S222_291.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S28_292.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S34_293.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S371_294.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S372_295.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S40_296.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S41_297.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S43_298.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S51_299.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R19S56_300.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S9_301.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S25_302.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S28_303.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S31_304.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S36_305.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S39_306.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S46_307.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R20S47_308.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S3_309.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S15_310.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S17_311.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S181_312.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S182_313.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S26_314.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S301_315.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S302_316.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S303_317.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S31_318.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S32_319.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R21S38_320.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S1_321.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S16_322.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S19_323.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S261_324.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S262_325.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S263_326.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R22S30_327.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S3_328.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S4_329.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S7_330.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S12_331.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S18_332.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S20_333.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S22_334.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S23_335.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R23S25_336.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R24S4_337.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R24S71_338.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R24S72_339.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R24S73_340.set('fieldAliases', {'id': 'id', });
lyr_Warm_moduleB1R11S9_341.set('fieldAliases', {'id': 'id', });
lyr_Warm_moduleB1R11S15_342.set('fieldAliases', {'id': 'id', });
lyr_Warm_moduleB1R11S31_343.set('fieldAliases', {'id': 'id', });
lyr_Warm_moduleB1R16S67_344.set('fieldAliases', {'id': 'id', });
lyr_Warm_moduleB1R18S31_345.set('fieldAliases', {'id': 'id', });
lyr_DiodeFailureB1R10S34_346.set('fieldAliases', {'id': 'id', });
lyr_DiodeFailureB1R13S51_347.set('fieldAliases', {'id': 'id', });
lyr_DiodeFailureB1R10S39_348.set('fieldAliases', {'id': 'id', });
lyr_DiodeFailureB1R15S25_349.set('fieldAliases', {'id': 'id', });
lyr_HotspotB1R1S6_2.set('fieldImages', {'id': '', });
lyr_HotspotB1R1S10_3.set('fieldImages', {'id': '', });
lyr_HotspotB1R1S14_4.set('fieldImages', {'id': '', });
lyr_HotspotB1R2S9_5.set('fieldImages', {'id': '', });
lyr_HotspotB1R2S13_6.set('fieldImages', {'id': '', });
lyr_HotspotB1R3S10_7.set('fieldImages', {'id': '', });
lyr_HotspotB1R3S12_8.set('fieldImages', {'id': '', });
lyr_HotspotB1R3S29_9.set('fieldImages', {'id': '', });
lyr_HotspotB1R4S6_10.set('fieldImages', {'id': '', });
lyr_HotspotB1R4S16_11.set('fieldImages', {'id': '', });
lyr_HotspotB1R4S24_12.set('fieldImages', {'id': '', });
lyr_HotspotB1R4S31_13.set('fieldImages', {'id': '', });
lyr_HotspotB1R4S40_14.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S7_15.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S13_16.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S18_17.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S26_18.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S27_19.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S28_20.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S31_21.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S43_22.set('fieldImages', {'id': '', });
lyr_HotspotB1R5S44_23.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S3_24.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S4_25.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S11_26.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S13_27.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S16_28.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S24_29.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S27_30.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S33_31.set('fieldImages', {'id': '', });
lyr_HotspotB1R6S50_32.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S5_33.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S61_34.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S62_35.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S16_36.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S22_37.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S24_38.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S321_39.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S322_40.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S323_41.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S324_42.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S37_43.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S621_44.set('fieldImages', {'id': '', });
lyr_HotspotB1R7S622_45.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S71_46.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S72_47.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S14_48.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S19_49.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S23_50.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S30_51.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S35_52.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S41_53.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S51_54.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S55_55.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S59_56.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S61_57.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S62_58.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S64_59.set('fieldImages', {'id': '', });
lyr_HotspotB1R8S71_60.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S6_61.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S9_62.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S15_63.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S18_64.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S28_65.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S31_66.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S40_67.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S48_68.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S49_69.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S55_70.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S66_71.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S69_72.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S72_73.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S74_74.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S75_75.set('fieldImages', {'id': '', });
lyr_HotspotB1R9S79_76.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S3_77.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S5_78.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S10_79.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S11_80.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S13_81.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S21_82.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S41_83.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S42_84.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S44_85.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S50_86.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S55_87.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S57_88.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S63_89.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S64_90.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S65_91.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S68_92.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S72_93.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S74_94.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S83_95.set('fieldImages', {'id': '', });
lyr_HotspotB1R10S84_96.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S2_97.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S3_98.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S4_99.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S13_100.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S25_101.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S26_102.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S27_103.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S28_104.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S29_105.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S38_106.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S39_107.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S40_108.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S51_109.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S56_110.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S58_111.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S59_112.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S61_113.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S63_114.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S64_115.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S66_116.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S711_117.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S712_118.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S72_119.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S731_120.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S732_121.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S75_122.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S76_123.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S78_124.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S841_125.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S842_126.set('fieldImages', {'id': '', });
lyr_HotspotB1R11S843_127.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S2_128.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S3_129.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S41_130.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S42_131.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S9_132.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S14_133.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S17_134.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S18_135.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S19_136.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S21_137.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S26_138.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S29_139.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S32_140.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S38_141.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S40_142.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S44_143.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S45_144.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S48_145.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S49_146.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S52_147.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S54_148.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S55_149.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S57_150.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S65_151.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S68_152.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S70_153.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S74_154.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S76_155.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S77_156.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S80_157.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S81_158.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S82_159.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S83_160.set('fieldImages', {'id': '', });
lyr_HotspotB1R12S84_161.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S51_162.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S52_163.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S6_164.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S9_165.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S10_166.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S15_167.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S17_168.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S20_169.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S23_170.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S31_171.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S34_172.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S42_173.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S45_174.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S50_175.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S56_176.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S57_177.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S58_178.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S59_179.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S79_180.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S80_181.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S81_182.set('fieldImages', {'id': '', });
lyr_HotspotB1R13S84_183.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S5_184.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S8_185.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S14_186.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S15_187.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S17_188.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S19_189.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S20_190.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S23_191.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S24_192.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S28_193.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S29_194.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S31_195.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S331_196.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S332_197.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S41_198.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S44_199.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S47_200.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S51_201.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S54_202.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S58_203.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S60_204.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S63_205.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S80_206.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S881_207.set('fieldImages', {'id': '', });
lyr_HotspotB1R14S882_208.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S6_209.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S71_210.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S72_211.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S73_212.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S9_213.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S12_214.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S18_215.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S20_216.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S281_217.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S282_218.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S31_219.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S32_220.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S47_221.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S55_222.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S63_223.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S721_224.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S722_225.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S77_226.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S81_227.set('fieldImages', {'id': '', });
lyr_HotspotB1R15S83_228.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S1_229.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S41_230.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S42_231.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S8_232.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S13_233.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S15_234.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S18_235.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S19_236.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S21_237.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S24_238.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S25_239.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S28_240.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S32_241.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S34_242.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S35_243.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S37_244.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S38_245.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S45_246.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S51_247.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S59_248.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S60_249.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S62_250.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S68_251.set('fieldImages', {'id': '', });
lyr_HotspotB1R16S75_252.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S11_253.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S12_254.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S3_255.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S10_256.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S16_257.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S22_258.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S26_259.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S35_260.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S40_261.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S44_262.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S45_263.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S51_264.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S53_265.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S54_266.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S67_267.set('fieldImages', {'id': '', });
lyr_HotspotB1R17S68_268.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S10_269.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S15_270.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S22_271.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S23_272.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S24_273.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S25_274.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S37_275.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S40_276.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S48_277.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S49_278.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S50_279.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S52_280.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S59_281.set('fieldImages', {'id': '', });
lyr_HotspotB1R18S64_282.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S21_283.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S22_284.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S8_285.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S13_286.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S16_287.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S17_288.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S21_289.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S221_290.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S222_291.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S28_292.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S34_293.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S371_294.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S372_295.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S40_296.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S41_297.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S43_298.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S51_299.set('fieldImages', {'id': '', });
lyr_HotspotB1R19S56_300.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S9_301.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S25_302.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S28_303.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S31_304.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S36_305.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S39_306.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S46_307.set('fieldImages', {'id': '', });
lyr_HotspotB1R20S47_308.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S3_309.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S15_310.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S17_311.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S181_312.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S182_313.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S26_314.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S301_315.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S302_316.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S303_317.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S31_318.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S32_319.set('fieldImages', {'id': '', });
lyr_HotspotB1R21S38_320.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S1_321.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S16_322.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S19_323.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S261_324.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S262_325.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S263_326.set('fieldImages', {'id': '', });
lyr_HotspotB1R22S30_327.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S3_328.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S4_329.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S7_330.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S12_331.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S18_332.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S20_333.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S22_334.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S23_335.set('fieldImages', {'id': '', });
lyr_HotspotB1R23S25_336.set('fieldImages', {'id': '', });
lyr_HotspotB1R24S4_337.set('fieldImages', {'id': '', });
lyr_HotspotB1R24S71_338.set('fieldImages', {'id': '', });
lyr_HotspotB1R24S72_339.set('fieldImages', {'id': '', });
lyr_HotspotB1R24S73_340.set('fieldImages', {'id': '', });
lyr_Warm_moduleB1R11S9_341.set('fieldImages', {'id': '', });
lyr_Warm_moduleB1R11S15_342.set('fieldImages', {'id': '', });
lyr_Warm_moduleB1R11S31_343.set('fieldImages', {'id': '', });
lyr_Warm_moduleB1R16S67_344.set('fieldImages', {'id': '', });
lyr_Warm_moduleB1R18S31_345.set('fieldImages', {'id': '', });
lyr_DiodeFailureB1R10S34_346.set('fieldImages', {'id': '', });
lyr_DiodeFailureB1R13S51_347.set('fieldImages', {'id': '', });
lyr_DiodeFailureB1R10S39_348.set('fieldImages', {'id': '', });
lyr_DiodeFailureB1R15S25_349.set('fieldImages', {'id': '', });
lyr_HotspotB1R1S6_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R1S10_3.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R1S14_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R2S9_5.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R2S13_6.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R3S10_7.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R3S12_8.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R3S29_9.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R4S6_10.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R4S16_11.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R4S24_12.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R4S31_13.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R4S40_14.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S7_15.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S13_16.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S18_17.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S26_18.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S27_19.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S28_20.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S31_21.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S43_22.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R5S44_23.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S3_24.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S4_25.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S11_26.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S13_27.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S16_28.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S24_29.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S27_30.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S33_31.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R6S50_32.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S5_33.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S61_34.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S62_35.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S16_36.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S22_37.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S24_38.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S321_39.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S322_40.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S323_41.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S324_42.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S37_43.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S621_44.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R7S622_45.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S71_46.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S72_47.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S14_48.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S19_49.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S23_50.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S30_51.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S35_52.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S41_53.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S51_54.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S55_55.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S59_56.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S61_57.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S62_58.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S64_59.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R8S71_60.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S6_61.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S9_62.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S15_63.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S18_64.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S28_65.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S31_66.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S40_67.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S48_68.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S49_69.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S55_70.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S66_71.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S69_72.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S72_73.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S74_74.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S75_75.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R9S79_76.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S3_77.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S5_78.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S10_79.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S11_80.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S13_81.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S21_82.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S41_83.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S42_84.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S44_85.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S50_86.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S55_87.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S57_88.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S63_89.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S64_90.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S65_91.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S68_92.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S72_93.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S74_94.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S83_95.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R10S84_96.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S2_97.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S3_98.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S4_99.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S13_100.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S25_101.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S26_102.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S27_103.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S28_104.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S29_105.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S38_106.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S39_107.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S40_108.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S51_109.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S56_110.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S58_111.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S59_112.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S61_113.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S63_114.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S64_115.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S66_116.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S711_117.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S712_118.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S72_119.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S731_120.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S732_121.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S75_122.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S76_123.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S78_124.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S841_125.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S842_126.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R11S843_127.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S2_128.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S3_129.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S41_130.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S42_131.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S9_132.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S14_133.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S17_134.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S18_135.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S19_136.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S21_137.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S26_138.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S29_139.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S32_140.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S38_141.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S40_142.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S44_143.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S45_144.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S48_145.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S49_146.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S52_147.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S54_148.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S55_149.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S57_150.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S65_151.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S68_152.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S70_153.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S74_154.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S76_155.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S77_156.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S80_157.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S81_158.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S82_159.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S83_160.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R12S84_161.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S51_162.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S52_163.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S6_164.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S9_165.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S10_166.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S15_167.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S17_168.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S20_169.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S23_170.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S31_171.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S34_172.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S42_173.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S45_174.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S50_175.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S56_176.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S57_177.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S58_178.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S59_179.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S79_180.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S80_181.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S81_182.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R13S84_183.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S5_184.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S8_185.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S14_186.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S15_187.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S17_188.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S19_189.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S20_190.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S23_191.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S24_192.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S28_193.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S29_194.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S31_195.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S331_196.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S332_197.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S41_198.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S44_199.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S47_200.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S51_201.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S54_202.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S58_203.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S60_204.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S63_205.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S80_206.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S881_207.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R14S882_208.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S6_209.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S71_210.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S72_211.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S73_212.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S9_213.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S12_214.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S18_215.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S20_216.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S281_217.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S282_218.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S31_219.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S32_220.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S47_221.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S55_222.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S63_223.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S721_224.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S722_225.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S77_226.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S81_227.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R15S83_228.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S1_229.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S41_230.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S42_231.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S8_232.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S13_233.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S15_234.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S18_235.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S19_236.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S21_237.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S24_238.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S25_239.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S28_240.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S32_241.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S34_242.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S35_243.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S37_244.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S38_245.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S45_246.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S51_247.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S59_248.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S60_249.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S62_250.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S68_251.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R16S75_252.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S11_253.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S12_254.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S3_255.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S10_256.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S16_257.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S22_258.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S26_259.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S35_260.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S40_261.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S44_262.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S45_263.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S51_264.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S53_265.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S54_266.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S67_267.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R17S68_268.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S10_269.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S15_270.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S22_271.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S23_272.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S24_273.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S25_274.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S37_275.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S40_276.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S48_277.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S49_278.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S50_279.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S52_280.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S59_281.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R18S64_282.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S21_283.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S22_284.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S8_285.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S13_286.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S16_287.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S17_288.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S21_289.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S221_290.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S222_291.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S28_292.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S34_293.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S371_294.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S372_295.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S40_296.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S41_297.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S43_298.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S51_299.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R19S56_300.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S9_301.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S25_302.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S28_303.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S31_304.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S36_305.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S39_306.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S46_307.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R20S47_308.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S3_309.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S15_310.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S17_311.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S181_312.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S182_313.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S26_314.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S301_315.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S302_316.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S303_317.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S31_318.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S32_319.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R21S38_320.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S1_321.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S16_322.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S19_323.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S261_324.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S262_325.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S263_326.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R22S30_327.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S3_328.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S4_329.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S7_330.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S12_331.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S18_332.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S20_333.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S22_334.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S23_335.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R23S25_336.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R24S4_337.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R24S71_338.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R24S72_339.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_HotspotB1R24S73_340.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Warm_moduleB1R11S9_341.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Warm_moduleB1R11S15_342.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Warm_moduleB1R11S31_343.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Warm_moduleB1R16S67_344.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Warm_moduleB1R18S31_345.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_DiodeFailureB1R10S34_346.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_DiodeFailureB1R13S51_347.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_DiodeFailureB1R10S39_348.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_DiodeFailureB1R15S25_349.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_DiodeFailureB1R15S25_349.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});