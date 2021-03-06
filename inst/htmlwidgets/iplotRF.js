// Generated by CoffeeScript 1.9.1
HTMLWidgets.widget({
  name: "iplotRF",
  type: "output",
  initialize: function(widgetdiv, width, height) {
    return d3.select(widgetdiv).append("svg").attr("class", "qtlcharts").attr("width", width).attr("height", height);
  },
  renderValue: function(widgetdiv, x) {
    var chartOpts, ref, ref1, ref2, svg;
    svg = d3.select(widgetdiv).select("svg");
    chartOpts = (ref = x.chartOpts) != null ? ref : {};
    chartOpts.width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : svg.attr("width");
    chartOpts.height = (ref2 = chartOpts != null ? chartOpts.height : void 0) != null ? ref2 : svg.attr("height");
    svg.attr("width", chartOpts.width);
    svg.attr("height", chartOpts.height);
    return iplotRF(widgetdiv, x.rfdata, x.genodata, chartOpts);
  },
  resize: function(widgetdiv, width, height) {
    return d3.select(widgetdiv).select("svg").attr("width", width).attr("height", height);
  }
});
