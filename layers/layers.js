var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '写真（オルソ画像）',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '保育園',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 保育園'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '家',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 家'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'レストラン',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> レストラン'
            });
var format_A2716_13__4 = new ol.format.GeoJSON();
var features_A2716_13__4 = format_A2716_13__4.readFeatures(json_A2716_13__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A2716_13__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A2716_13__4.addFeatures(features_A2716_13__4);
var lyr_A2716_13__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A2716_13__4, 
                style: style_A2716_13__4,
                popuplayertitle: 'A27-16_13_東京都',
                interactive: true,
                title: '<img src="styles/legend/A2716_13__4.png" /> A27-16_13_東京都'
            });
var format_A27P16_13__5 = new ol.format.GeoJSON();
var features_A27P16_13__5 = format_A27P16_13__5.readFeatures(json_A27P16_13__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A27P16_13__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A27P16_13__5.addFeatures(features_A27P16_13__5);
var lyr_A27P16_13__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A27P16_13__5, 
                style: style_A27P16_13__5,
                popuplayertitle: 'A27P-16_13_東京都',
                interactive: true,
                title: '<img src="styles/legend/A27P16_13__5.png" /> A27P-16_13_東京都'
            });
var format_A2710_12g_PublicElementarySchool_6 = new ol.format.GeoJSON();
var features_A2710_12g_PublicElementarySchool_6 = format_A2710_12g_PublicElementarySchool_6.readFeatures(json_A2710_12g_PublicElementarySchool_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A2710_12g_PublicElementarySchool_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A2710_12g_PublicElementarySchool_6.addFeatures(features_A2710_12g_PublicElementarySchool_6);
var lyr_A2710_12g_PublicElementarySchool_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A2710_12g_PublicElementarySchool_6, 
                style: style_A2710_12g_PublicElementarySchool_6,
                popuplayertitle: 'A27-10_12-g_PublicElementarySchool',
                interactive: true,
                title: '<img src="styles/legend/A2710_12g_PublicElementarySchool_6.png" /> A27-10_12-g_PublicElementarySchool'
            });
var format_A2710_12g_SchoolDistrict_7 = new ol.format.GeoJSON();
var features_A2710_12g_SchoolDistrict_7 = format_A2710_12g_SchoolDistrict_7.readFeatures(json_A2710_12g_SchoolDistrict_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A2710_12g_SchoolDistrict_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A2710_12g_SchoolDistrict_7.addFeatures(features_A2710_12g_SchoolDistrict_7);
var lyr_A2710_12g_SchoolDistrict_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A2710_12g_SchoolDistrict_7, 
                style: style_A2710_12g_SchoolDistrict_7,
                popuplayertitle: 'A27-10_12-g_SchoolDistrict',
                interactive: true,
                title: '<img src="styles/legend/A2710_12g_SchoolDistrict_7.png" /> A27-10_12-g_SchoolDistrict'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: '内科',
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 内科'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: 'カフェ',
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> カフェ'
            });
var format_N0220_RailroadSection_10 = new ol.format.GeoJSON();
var features_N0220_RailroadSection_10 = format_N0220_RailroadSection_10.readFeatures(json_N0220_RailroadSection_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N0220_RailroadSection_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N0220_RailroadSection_10.addFeatures(features_N0220_RailroadSection_10);
var lyr_N0220_RailroadSection_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N0220_RailroadSection_10, 
                style: style_N0220_RailroadSection_10,
                popuplayertitle: 'N02-20_RailroadSection',
                interactive: true,
                title: '<img src="styles/legend/N0220_RailroadSection_10.png" /> N02-20_RailroadSection'
            });
var format_N0220_Station_11 = new ol.format.GeoJSON();
var features_N0220_Station_11 = format_N0220_Station_11.readFeatures(json_N0220_Station_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N0220_Station_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N0220_Station_11.addFeatures(features_N0220_Station_11);
var lyr_N0220_Station_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N0220_Station_11, 
                style: style_N0220_Station_11,
                popuplayertitle: 'N02-20_Station',
                interactive: true,
                title: '<img src="styles/legend/N0220_Station_11.png" /> N02-20_Station'
            });
var format_P1110_12jgdg_BusStop_12 = new ol.format.GeoJSON();
var features_P1110_12jgdg_BusStop_12 = format_P1110_12jgdg_BusStop_12.readFeatures(json_P1110_12jgdg_BusStop_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P1110_12jgdg_BusStop_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P1110_12jgdg_BusStop_12.addFeatures(features_P1110_12jgdg_BusStop_12);
var lyr_P1110_12jgdg_BusStop_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P1110_12jgdg_BusStop_12, 
                style: style_P1110_12jgdg_BusStop_12,
                popuplayertitle: 'P11-10_12-jgd-g_BusStop',
                interactive: true,
                title: '<img src="styles/legend/P1110_12jgdg_BusStop_12.png" /> P11-10_12-jgd-g_BusStop'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__13, 
                style: style__13,
                popuplayertitle: '小児科',
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> 小児科'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__14, 
                style: style__14,
                popuplayertitle: 'スーパー',
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> スーパー'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__15, 
                style: style__15,
                popuplayertitle: '銭湯',
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> 銭湯'
            });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__16, 
                style: style__16,
                popuplayertitle: '公園',
                interactive: true,
                title: '<img src="styles/legend/_16.png" /> 公園'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__17, 
                style: style__17,
                popuplayertitle: '高校',
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> 高校'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr_A2716_13__4.setVisible(true);lyr_A27P16_13__5.setVisible(true);lyr_A2710_12g_PublicElementarySchool_6.setVisible(true);lyr_A2710_12g_SchoolDistrict_7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr_N0220_RailroadSection_10.setVisible(true);lyr_N0220_Station_11.setVisible(true);lyr_P1110_12jgdg_BusStop_12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr__16.setVisible(true);lyr__17.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr_A2716_13__4,lyr_A27P16_13__5,lyr_A2710_12g_PublicElementarySchool_6,lyr_A2710_12g_SchoolDistrict_7,lyr__8,lyr__9,lyr_N0220_RailroadSection_10,lyr_N0220_Station_11,lyr_P1110_12jgdg_BusStop_12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17];
lyr__1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', 'kind': 'kind', });
lyr__2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', 'cost': 'cost', });
lyr__3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', });
lyr_A2716_13__4.set('fieldAliases', {'A27_005': 'A27_005', 'A27_006': 'A27_006', 'A27_007': 'A27_007', 'A27_008': 'A27_008', });
lyr_A27P16_13__5.set('fieldAliases', {'A27_001': 'A27_001', 'A27_002': 'A27_002', 'A27_003': 'A27_003', 'A27_004': 'A27_004', });
lyr_A2710_12g_PublicElementarySchool_6.set('fieldAliases', {'A27_001': 'A27_001', 'A27_002': 'A27_002', 'A27_003': 'A27_003', 'A27_004': 'A27_004', });
lyr_A2710_12g_SchoolDistrict_7.set('fieldAliases', {'A27_005': 'A27_005', 'A27_006': 'A27_006', 'A27_007': 'A27_007', 'A27_008': 'A27_008', });
lyr__8.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', });
lyr__9.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', });
lyr_N0220_RailroadSection_10.set('fieldAliases', {'N02_001': 'N02_001', 'N02_002': 'N02_002', 'N02_003': 'N02_003', 'N02_004': 'N02_004', });
lyr_N0220_Station_11.set('fieldAliases', {'N02_001': 'N02_001', 'N02_002': 'N02_002', 'N02_003': 'N02_003', 'N02_004': 'N02_004', 'N02_005': 'N02_005', });
lyr_P1110_12jgdg_BusStop_12.set('fieldAliases', {'P11_001': 'P11_001', 'P11_002': 'P11_002', 'P11_003_1': 'P11_003_1', 'P11_003_2': 'P11_003_2', 'P11_003_3': 'P11_003_3', 'P11_003_4': 'P11_003_4', 'P11_003_5': 'P11_003_5', 'P11_003_6': 'P11_003_6', 'P11_003_7': 'P11_003_7', 'P11_003_8': 'P11_003_8', 'P11_003_9': 'P11_003_9', 'P11_003_10': 'P11_003_10', 'P11_003_11': 'P11_003_11', 'P11_003_12': 'P11_003_12', 'P11_003_13': 'P11_003_13', 'P11_003_14': 'P11_003_14', 'P11_003_15': 'P11_003_15', 'P11_003_16': 'P11_003_16', 'P11_003_17': 'P11_003_17', 'P11_003_18': 'P11_003_18', 'P11_003_19': 'P11_003_19', 'P11_004_1': 'P11_004_1', 'P11_004_2': 'P11_004_2', 'P11_004_3': 'P11_004_3', 'P11_004_4': 'P11_004_4', 'P11_004_5': 'P11_004_5', 'P11_004_6': 'P11_004_6', 'P11_004_7': 'P11_004_7', 'P11_004_8': 'P11_004_8', 'P11_004_9': 'P11_004_9', 'P11_004_10': 'P11_004_10', 'P11_004_11': 'P11_004_11', 'P11_004_12': 'P11_004_12', 'P11_004_13': 'P11_004_13', 'P11_004_14': 'P11_004_14', 'P11_004_15': 'P11_004_15', 'P11_004_16': 'P11_004_16', 'P11_004_17': 'P11_004_17', 'P11_004_18': 'P11_004_18', 'P11_004_19': 'P11_004_19', });
lyr__13.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', 'kind': 'kind', });
lyr__14.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', 'kind': 'kind', });
lyr__15.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', });
lyr__16.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', });
lyr__17.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'name': 'name', 'kind': 'kind', });
lyr__1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', 'kind': 'TextEdit', });
lyr__2.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', 'cost': 'Range', });
lyr__3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', });
lyr_A2716_13__4.set('fieldImages', {'A27_005': 'TextEdit', 'A27_006': 'TextEdit', 'A27_007': 'TextEdit', 'A27_008': 'TextEdit', });
lyr_A27P16_13__5.set('fieldImages', {'A27_001': 'TextEdit', 'A27_002': 'TextEdit', 'A27_003': 'TextEdit', 'A27_004': 'TextEdit', });
lyr_A2710_12g_PublicElementarySchool_6.set('fieldImages', {'A27_001': 'TextEdit', 'A27_002': 'TextEdit', 'A27_003': 'TextEdit', 'A27_004': 'TextEdit', });
lyr_A2710_12g_SchoolDistrict_7.set('fieldImages', {'A27_005': 'TextEdit', 'A27_006': 'TextEdit', 'A27_007': 'TextEdit', 'A27_008': 'TextEdit', });
lyr__8.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', });
lyr__9.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', });
lyr_N0220_RailroadSection_10.set('fieldImages', {'N02_001': '', 'N02_002': '', 'N02_003': '', 'N02_004': '', });
lyr_N0220_Station_11.set('fieldImages', {'N02_001': 'TextEdit', 'N02_002': 'TextEdit', 'N02_003': 'TextEdit', 'N02_004': 'TextEdit', 'N02_005': 'TextEdit', });
lyr_P1110_12jgdg_BusStop_12.set('fieldImages', {'P11_001': 'TextEdit', 'P11_002': 'TextEdit', 'P11_003_1': 'TextEdit', 'P11_003_2': 'TextEdit', 'P11_003_3': 'TextEdit', 'P11_003_4': 'TextEdit', 'P11_003_5': 'TextEdit', 'P11_003_6': 'TextEdit', 'P11_003_7': 'TextEdit', 'P11_003_8': 'TextEdit', 'P11_003_9': 'TextEdit', 'P11_003_10': 'TextEdit', 'P11_003_11': 'TextEdit', 'P11_003_12': 'TextEdit', 'P11_003_13': 'TextEdit', 'P11_003_14': 'TextEdit', 'P11_003_15': 'TextEdit', 'P11_003_16': 'TextEdit', 'P11_003_17': 'TextEdit', 'P11_003_18': 'TextEdit', 'P11_003_19': 'TextEdit', 'P11_004_1': 'TextEdit', 'P11_004_2': 'TextEdit', 'P11_004_3': 'TextEdit', 'P11_004_4': 'TextEdit', 'P11_004_5': 'TextEdit', 'P11_004_6': 'TextEdit', 'P11_004_7': 'TextEdit', 'P11_004_8': 'TextEdit', 'P11_004_9': 'TextEdit', 'P11_004_10': 'TextEdit', 'P11_004_11': 'TextEdit', 'P11_004_12': 'TextEdit', 'P11_004_13': 'TextEdit', 'P11_004_14': 'TextEdit', 'P11_004_15': 'TextEdit', 'P11_004_16': 'TextEdit', 'P11_004_17': 'TextEdit', 'P11_004_18': 'TextEdit', 'P11_004_19': 'TextEdit', });
lyr__13.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', 'kind': 'TextEdit', });
lyr__14.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', 'kind': 'TextEdit', });
lyr__15.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', });
lyr__16.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', });
lyr__17.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'name': 'TextEdit', 'kind': 'TextEdit', });
lyr__1.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', 'kind': 'no label', });
lyr__2.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', 'cost': 'no label', });
lyr__3.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', });
lyr_A2716_13__4.set('fieldLabels', {'A27_005': 'no label', 'A27_006': 'no label', 'A27_007': 'no label', 'A27_008': 'no label', });
lyr_A27P16_13__5.set('fieldLabels', {'A27_001': 'no label', 'A27_002': 'no label', 'A27_003': 'no label', 'A27_004': 'no label', });
lyr_A2710_12g_PublicElementarySchool_6.set('fieldLabels', {'A27_001': 'no label', 'A27_002': 'no label', 'A27_003': 'no label', 'A27_004': 'no label', });
lyr_A2710_12g_SchoolDistrict_7.set('fieldLabels', {'A27_005': 'no label', 'A27_006': 'no label', 'A27_007': 'no label', 'A27_008': 'no label', });
lyr__8.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', });
lyr__9.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', });
lyr_N0220_RailroadSection_10.set('fieldLabels', {'N02_001': 'no label', 'N02_002': 'no label', 'N02_003': 'no label', 'N02_004': 'no label', });
lyr_N0220_Station_11.set('fieldLabels', {'N02_001': 'no label', 'N02_002': 'no label', 'N02_003': 'no label', 'N02_004': 'no label', 'N02_005': 'no label', });
lyr_P1110_12jgdg_BusStop_12.set('fieldLabels', {'P11_001': 'no label', 'P11_002': 'no label', 'P11_003_1': 'no label', 'P11_003_2': 'no label', 'P11_003_3': 'no label', 'P11_003_4': 'no label', 'P11_003_5': 'no label', 'P11_003_6': 'no label', 'P11_003_7': 'no label', 'P11_003_8': 'no label', 'P11_003_9': 'no label', 'P11_003_10': 'no label', 'P11_003_11': 'no label', 'P11_003_12': 'no label', 'P11_003_13': 'no label', 'P11_003_14': 'no label', 'P11_003_15': 'no label', 'P11_003_16': 'no label', 'P11_003_17': 'no label', 'P11_003_18': 'no label', 'P11_003_19': 'no label', 'P11_004_1': 'no label', 'P11_004_2': 'no label', 'P11_004_3': 'no label', 'P11_004_4': 'no label', 'P11_004_5': 'no label', 'P11_004_6': 'no label', 'P11_004_7': 'no label', 'P11_004_8': 'no label', 'P11_004_9': 'no label', 'P11_004_10': 'no label', 'P11_004_11': 'no label', 'P11_004_12': 'no label', 'P11_004_13': 'no label', 'P11_004_14': 'no label', 'P11_004_15': 'no label', 'P11_004_16': 'no label', 'P11_004_17': 'no label', 'P11_004_18': 'no label', 'P11_004_19': 'no label', });
lyr__13.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', 'kind': 'no label', });
lyr__14.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', 'kind': 'no label', });
lyr__15.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', });
lyr__16.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', });
lyr__17.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'name': 'no label', 'kind': 'no label', });
lyr__17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});