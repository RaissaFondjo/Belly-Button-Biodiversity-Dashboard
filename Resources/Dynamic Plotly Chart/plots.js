function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
 /*  D3.js is a JavaScript library for manipulating documents based 
  on data. D3 helps you bring data to life using HTML, SVG, and CSS. 
 */
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();