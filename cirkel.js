var chart = AmCharts.makeChart("chartdiv",
{
    "type": "serial",
    "theme": "dark",
    "dataProvider": [{
        "name": "Word",
        "points": 100,
        "color": "#7F8DA9",
        "bullet": "1478786649_Word_15.png"
    }, {
        "name": "Sublimetext",
        "points": 60,
        "color": "#FEC514",
        "bullet": "sublime_text_icon_2181.png"
    }, {
        "name": "HTML",
        "points": 80,
        "color": "#DB4C3C",
        "bullet": "1478786051_browser-html-coding.png"
    }, {
        "name": "Javascript",
        "points": 10,
        "color": "  #32CD32",
        "bullet": "1478786174_code-programming-javascript-software-develop-command-language.png"
    }],
    "valueAxes": [{
        "maximum": 100,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 10,
        "bulletSize": 52,
        "colorField": "color",
        "cornerRadiusTop": 8,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 100,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
        "enabled": true
     }
});