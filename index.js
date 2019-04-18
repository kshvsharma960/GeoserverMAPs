var alignmentID=123;
  var level=7;
  var levelID=159000
  /////////////////////
   var map = new ol.Map({
      view:new ol.View({
        center:[0,0],
        zoom:1
      }),
      layers:[
        new ol.layer.Tile({
          source:new ol.source.OSM()
        })
      ],
      target:'map'
	
    });

   
function treeViewBinding(){

     var serviceRoot = "http://localhost:55234/api/values";
      var a= [{display:"159000 Nation", text: "159000",pos:7, items: [{display:"159090 Sub-Nation", text: "159090" ,pos:6, items: [
                            {display:"159081 Division", text: "159081",pos:5, items: [
                            {display:"159080 Region", text: "159080" ,pos:4  , items: [
                            
                            
{display:"149603 Area", text: "149603",pos:3  ,items: [
{display:"149333 District", text: "149333",pos:2  },
{display:"149337 District", text: "149337",pos:2 ,items: [
{display:"147929 Territory", text: "147929",pos:1  },
{display:"147942 Territory", text: "147942",pos:1},
{display:"148206 Territory", text: "148206" ,pos:1 }
] },
{display:"149339 District", text: "149339",pos:2  },
{ display:"149342 District",text: "149342",pos:2  },
{ display:"149348 District",text: "149348" ,pos:2 },
{display:"149350 District", text: "149350" ,pos:2 },
{display:"149351 District", text: "149351" ,pos:2 },
{display:"149357 District", text: "149357" ,pos:2 },
] },

{display:"149604 Area", text: "149604",pos:3 ,items: [
{display:"149332 District", text: "149332" ,pos:2 },
{display:"149334 District",text: "149334",pos:2  },
{display:"149335 District", text: "149335",pos:2  },
{display:"149346 District", text: "149346",pos:2  },
{display:"149343 District", text: "149343" ,pos:2 },
{display:"149346 District", text: "149346" ,pos:2 },
{display:"149352 District", text: "149352" ,pos:2 },
{display:"149353 District", text: "149353" ,pos:2 },
{display:"149355 District", text: "149355" ,pos:2 },
{display:"149356 District", text: "149356",pos:2  },
{display:"149362 District", text: "149362" ,pos:2 },
] },

{ display:"149605 Area",text: "149605",pos:3 ,
items: [{display:"149340 District", text: "149340" ,pos:2 },
{display:"149341 District", text: "149341" ,pos:2 },
{display:"149344 District", text: "149344" ,pos:2 },
{display:"149347 District", text: "149347" ,pos:2 },
{display:"149349 District", text: "149349" ,pos:2 },
{display:"149354 District", text: "149354",pos:2  },
{display:"149358 District", text: "149358",pos:2  },
{display:"149359 District", text: "149359" ,pos:2 },
{display:"149360 District", text: "149360" ,pos:2 }
] }] }]} ] } ]}];
       homogeneous = new kendo.data.HierarchicalDataSource({
            transport: {
                read: {
                    url: serviceRoot + "/"+levelID+"?level="+level,
                    dataType: "json",
                    async: false
                }
            },
            sync: function (e) {
                treesearch = true;
            },
            requestEnd: function (e) {
                treesearch = true;
            },
            schema: {
                model: {
                    id: "levelID",
                    hasChildren: true
                    
                }
            }
        });
                $("#treeViewDiv").kendoTreeView({
                    dataSource: a,
                    dataTextField: "display",
                    dataValueField: "pos",
                    height:100,

                    select:changeCalled
                });
}
///////////////////////////////////////////////////////////////////////////////
var lvl1=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_1_html"},
      serverType:"geoserver"
    });
  var level1 = new ol.layer.Image ({
title: 'Territiory',
    source:lvl1
  });
/////////////////////////////////////////////////////////////////////////////
var lvl2=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_2_html"},
      serverType:"geoserver"
    });
  var level2 = new ol.layer.Image ({
title: 'District',
    source:lvl2
  });
///////////////////////////////////////////////////////////////////////////////

var lvl3=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_3_html"},
      serverType:"geoserver"
    });
  var level3 = new ol.layer.Image ({
title: 'Area',
    source:lvl3
  });
///////////////////////////////////////////////////////////////////////////////

var lvl4=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_4_html"},
      serverType:"geoserver"
    });
  var level4 = new ol.layer.Image ({
title: 'Region',
    source:lvl4
  });
///////////////////////////////////////////////////////////////////////////////
var lvl5=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_5_html"},
      serverType:"geoserver"
    });
  var level5 = new ol.layer.Image ({
title: 'Division',
    source:lvl5
  });
///////////////////////////////////////////////////////////////////////////////
var lvl6=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_6_html"},
      serverType:"geoserver"
    });
  var level6 = new ol.layer.Image ({
title: 'SubNation',
    source:lvl6
  });
///////////////////////////////////////////////////////////////////////////////
var lvl7=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_7_html"},
      serverType:"geoserver"
    });
  var level7 = new ol.layer.Image ({
title: 'Nation',
    source:lvl7
  });
///////////////////////////////////////////////////////////////////////////////
var lvlPoly=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_poly_html"},
      serverType:"geoserver"
    });
  var levelPoly = new ol.layer.Image ({

title: 'Zips',
    source:lvlPoly
  });
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
  var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Layer Switcher' // Optional label for button
    });
	
	map.addControl(layerSwitcher);



      //map.addLayer(level1);
      //map.addLayer(level2);
      //map.addLayer(level3);
      //map.addLayer(level4);
      //map.addLayer(level5);
      //map.addLayer(level6);
      //map.addLayer(level7);
      //map.addLayer(levelPoly);

map.getView().setCenter(ol.proj.fromLonLat([-120,50]));
map.getView().setZoom(3);

function removeAllLayers(){

  map.removeLayer(level7);
  map.removeLayer(level6);
  map.removeLayer(level5);
  map.removeLayer(level4);
  map.removeLayer(level3);
  map.removeLayer(level2);
  map.removeLayer(level1);
  map.removeLayer(levelPoly);
}
function DownloadMap(localId){
  var lvlPoly=new ol.source.ImageWMS({
      url:'http://10.213.45.103:8899/geoserver/webMap/wms',
      params:{layers:"webMap:align_123_poly_html"},
      format:"image/png",
      CQL_FILTER:  "Level"+position+"_ID ='"+mapid+"'",
      serverType:"geoserver"
    });
}
function generateDownloadLink(FileType){
  var downloadtype="";"application/pdf";
  if(FileType=="pdf"){
downloadtype="application/pdf";
  }
  else{
    downloadtype="image/png";
  }
  
  var extent=map.getView().calculateExtent(map.getSize());
  var bboxVal = escape(ol.proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326').join(","))
  var strDwld="http://localhost:8899/geoserver/wms/reflect?format="+downloadtype+"&layers=webMap:align_"+alignmentID+"_"+position+"_html&CQL_FILTER=Level"+position+"_ID='"+mapid+"'&BBOX="+bboxVal;
  //var str="http://10.213.45.103:8899/geoserver/webMap/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT="+downloadtype+"&TRANSPARENT=true&layers=webMap:align_"+alignmentID+"_"+position+"_html&CQL_FILTER=Level"+position+"_ID ='"+mapid+"'";
  window.open(strDwld);
}


function changeCalled(e){
  removeAllLayers();
  var tempParam=null;
  position=$("#treeViewDiv").getKendoTreeView().dataItem(e.node).pos;
  mapid=$("#treeViewDiv").getKendoTreeView().dataItem(e.node).text;
  if(e.dataItem!="ALL"){
      tempParam=e.dataItem;
  }
var st_params = {
                CQL_FILTER:  "Level"+position+"_ID ='"+mapid+"'"
            };
lvlPoly.updateParams(st_params);
lvl7.updateParams(st_params);

switch(position){
  case 1:
  lvl1.updateParams(st_params);
  map.addLayer(level1);
  break;
    case 2:
  lvl2.updateParams(st_params);
  map.addLayer(level2);
  break;
    case 3:
  lvl3.updateParams(st_params);
  map.addLayer(level3);
  break;
    case 4:
  lvl4.updateParams(st_params);
  map.addLayer(level4);
  break;
    case 5:
  lvl5.updateParams(st_params);
  map.addLayer(level5);
  break;
    case 6:
  lvl6.updateParams(st_params);
  map.addLayer(level6);
  break;
    case 7:
  lvl7.updateParams(st_params);
  map.addLayer(level7);
  break;
}
map.addLayer(levelPoly);
    
}

