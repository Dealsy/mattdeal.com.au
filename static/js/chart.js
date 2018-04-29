var chart = AmCharts.makeChart("index_chart", {
  "type": "serial",
  "theme": "light",
  "addClassNames": true,
  "marginLeft": 25,
  "marginRight": 25,
  "marginTop": 45,
  "marginBottom": 0,
  "autoMarginOffset": 15,
  "startDuration": 2,
  "sequencedAnimation": false,
  "dataProvider": [ {
    "month": "JAN",
    "value1": 40,
    "value2": 15,
    "value3": 0,
    "value4": 20,
    "color": "#807fd3"
  }, {
    "month": "FEB",
    "value1": 10,
    "value2": 15,
    "value3": 0,
    "value4": 0,
    "color": "#6e6abc"
  }, {
    "month": "MAR",
    "value1": 40,
    "value2": 15,
    "value3": 0,
    "value4": 20,
    "color": "#807fd3"
  }, {
    "month": "APR",
    "value1": 22,
    "value2": 15,
    "value3": 0,
    "value4": 2,
    "color": "#6e6abc"
  }, {
    "month": "MAY",
    "value1": 53,
    "value2": 15,
    "value3": 0,
    "value4": 33,
    "color": "#807fd3"
  }, {
    "month": "JUN",
    "value1": 15,
    "value2": 15,
    "value3": 0,
    "value4": -5,
    "color": "#6e6abc"
  }, {
    "month": "JUL",
    "value1": 65,
    "value2": 15,
    "value3": 0,
    "value4": 45,
    "color": "#807fd3"
  }, {
    "month": "AUG",
    "value1": 30,
    "value2": 15,
    "value3": 0,
    "value4": 10,
    "color": "#6e6abc"
  }, {
    "month": "SEP",
    "value1": 58,
    "value2": 15,
    "value3": 0,
    "value4": 38,
    "color": "#807fd3"
  }, {
    "month": "OCT",
    "value1": 15,
    "value2": 15,
    "value3": 0,
    "value4": -5,
    "color": "#6e6abc"
  }, {
    "month": "NOV",
    "value1": 68,
    "value2": 15,
    "value3": 0,
    "value4": 48,
    "color": "#807fd3"
  }, {
    "month": "DEC",
    "value1": 77,
    "value2": 15,
    "value3": 0,
    "value4": 62,
    "color": "#6e6abc"
  }],
  "graphs": [{
    "id": "g1",
    "lineAlpha": 0,
    "lineThickness": 3,
    "valueField": "value1",
    "showBalloon": false
  }, {
    "id": "g2",
    "lineAlpha": 0,
    "lineColor": "#fff",
    "lineThickness": 0,
    "fillColors": "#807fd3",
    "fillColorsField": "color",
    "fillAlphas": 1,
    "valueField": "value2",
    "showBalloon": false
  }, {
    "id": "g3",
    "lineAlpha": 1,
    "lineColor": "#fff",
    "lineThickness": 5,
    "valueField": "value3",
    "balloonColor": "#5fb3f3",
    "balloonText": "[[value1]]",
    "balloon": {
      "drop": true,
      "adjustBorderColor": false,
      "color": "#ffffff"      
    }
  }, {
    "id": "g4",
    "lineAlpha": 1,
    "lineColor": "#000",
    "lineThickness": 10,
    "valueField": "value4",
    "showBalloon": false,
    "stackable": false,
    "lineAlpha": 0.6
    }
  ],
  "categoryField": "month",
  "categoryAxis": {
    "color": "#8a86c7",
    "axisColor": "#5957b1",
    "gridAlpha": 0,
    "startOnAxis": false,
    "balloon":{
      "fillAlpha":1,
      "fontSize":15,
      "horizontalPadding":10
    }
  },
  "valueAxes": [{
    "stackType": "regular",
    "gridAlpha": 0,
    "gridColor": "#5957b1",
    "axisAlpha": 0,
    "labelsEnabled": false,
    "minimum": 0,
    "maximum": 100,
    "ignoreAxisWidth": true
  }],
  "balloon": {
    "borderThickness": 0,
    "shadowAlpha": 0,
    "fontSize": 18
  },
  "chartCursor": {
    "cursorAlpha": 0.7,
    "cursorColor": "#5fb3f3",
    "limitToGraph": "g3",
    "categoryBalloonColor": "#5e59b9",
    "categoryBalloonAlpha": 1,
    "zoomable": false
  },
  "defs": {
    "filter": [{
      "x": "-50%",
      "y": "-50%",
      "width": "200%",
      "height": "200%",
      "id": "blur",
      "feGaussianBlur": {
        "in": "SourceGraphic",
        "stdDeviation": "15"
      }
    }]
  }
});