// --------------------------------------------------------------------------------
// brandstof

google.charts.load('current', {
  'packages': ['gauge']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Brandstof', 80]
  ]);

  var options = {
    width: 335,
    height: 240,
    redFrom: 0,
    redTo: 10,
    yellowFrom: 10,
    yellowTo: 25,
    greenFrom: 25,
    greenTo: 100,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('brandstof'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
}


// ---------------------------------------------------------------------------------
// snelheid

var data = [{
  type: "indicator",
  mode: "gauge+number+delta",
  value: 240,
  title: {
    text: "Speed",
    font: {
      size: 24
    }
  },
  delta: {
    reference: 150,
    increasing: {
      color: "#00B3A6"
    }
  },
  gauge: {
    axis: {
      range: [null, 400],
      tickwidth: 1,
      tickcolor: "red"
    },
    bar: {
      color: "#00B3A6"
    },
    bgcolor: "white",
    borderwidth: 2,
    bordercolor: "gray",
    steps: [{
        range: [0, 200],
        color: "#FFFFFF"
      },
      {
        range: [200, 300],
        color: "#E9E9E9"
      },
      {
        range: [300, 400],
        color: "#D9D9D9"
      }
    ],
    threshold: {
      line: {
        color: "red",
        width: 10
      },
      thickness: 0.75,
      value: 395
    }
  }
}];

var layout = {
  // width: 325,
  height: 240,
  margin: {
    t: 25,
    r: 35,
    l: 25,
    b: 0
  },
  paper_bgcolor: "#00538A",
  font: {
    color: "#FFFFFF",
    family: "Arial"
  }
};

Plotly.newPlot('snelheidGauge', data, layout);


// --------------------------------------------------------------------
// Eten en Drinken

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(tweeChart);

function tweeChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'Velocity'],
    ['0', 1],
    ['10', 1],
    ['11', 2],
    ['12', 3],
    ['13', 4],
    ['14', 3.5]
  ]);

  var options = {
    title: 'Acceleratie',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }

  };

  var chart = new google.visualization.LineChart(document.getElementById('acceleratie'));

  chart.draw(data, options);
}

// --------------------------------------------------------------------
// Drinken

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(maakChart);

function maakChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Drinken'],
    ['2004', 30189],
    ['2005', 27989],
    ['2006', 19389],
    ['2007', 17098]
  ]);

  var options = {
    title: 'Voorraaden Drinken',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }

  };

  var chart = new google.visualization.LineChart(document.getElementById('drinken_chart'));

  chart.draw(data, options);
}

// --------------------------------------------------------------------
// Eten

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(etenChart);

function etenChart() {

  var data = google.visualization.arrayToDataTable([
    ['Eten', 'Verdeling'],
    ['Fruit', 11],
    ['Groente', 2],
    ['Rijst', 7],
    ['Snacks', 2],
    ['Ontbijt', 2]
  ]);

  var options = {
    title: 'Eten voorraad'
  };

  var chart = new google.visualization.PieChart(document.getElementById('eten_chart'));

  chart.draw(data, options);
}

// --------------------------------------------------------------------
// G-Force

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(gforceChart);

function gforceChart() {
  var data = google.visualization.arrayToDataTable([
    ['Seconds', 'Height', 'Speed'],
    ['15', 1000, 400],
    ['30', 1170, 460],
    ['45', 660, 1120],
    ['60', 1030, 540]
  ]);

  var options = {
    title: 'G-Force',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('gforce_chart'));

  chart.draw(data, options);
}


// --------------------------------------------------------------------
// Height

google.charts.load("current", {
  packages: ['corechart']
});
google.charts.setOnLoadCallback(heightChart);

function heightChart() {
  var data = google.visualization.arrayToDataTable([
    ["Rocket", "Height", {
      role: "style"
    }],
    ["Space X", 70, "#003A60"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2
  ]);

  var options = {
    title: "Hoogte van in meters",
    legend: {
      position: "none"
    },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("height"));
  chart.draw(view, options);
}

// --------------------------------------------------------------------
// Price

google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Space X');
        data.addColumn('number', 'Price');
        data.addRows([
          ['Standard Payment Plan',  {v: 62000000, f: '$62M'}]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
      }
