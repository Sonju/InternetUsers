'use strict';

var africaDonutChart = angular.module('chartApp.controllers', [nvd3]);

  africaDonutChart.controller('donutChartController', function($scope) {

    $scope.url = '/countries/chart';

    /* Chart options */
    $scope.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function(d){return d.Country;},
        y: function(d){return d.Value;},
        showLabels: true,

        pie: {
          startAngle: function(d) {return d.startAngle/2 -Math.PI/2 },
          endAngle: function(d) {return d.endAngle/2 -Math.PI/2}
        },
        transitionDuration: 500,
        legend: {
          margin: {
            top: 5,
            right: 140,
            bottom: 5,
            left, 0
          }
        }
      }

    };

      /* Chart data */
      $scope.data = [
        {  "Country" : "Algeria", "Year" : 2013, "Value" : 102.010781215784 }
        {  "Country" : "Angola", "Year" : 2013, "Value" : 61.8732971124952 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15ac" }, "Country" : "Benin", "Year" : 2013, "Value" : 93.25782193087331 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15ad" }, "Country" : "Botswana", "Year" : 2013, "Value" : 160.641052789905 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15ae" }, "Country" : "Burkina Faso", "Year" : 2013, "Value" : 66.37728294907321 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15af" }, "Country" : "Burundi", "Year" : 2013, "Value" : 24.9625880636833 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b0" }, "Country" : "Cameroon", "Year" : 2013, "Value" : 70.3904685004587 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b1" }, "Country" : "Cape Verde", "Year" : 2013, "Value" : 100.112448060421 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b2" }, "Country" : "Central African Rep.", "Year" : 2013, "Value" : 29.4665754848403 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b3" }, "Country" : "Chad", "Year" : 2013, "Value" : 35.5643768253939 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b4" }, "Country" : "Comoros", "Year" : 2013, "Value" : 47.2842511467281 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b5" }, "Country" : "D.R. Congo", "Year" : 2013, "Value" : 43.7046511331326 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b6" }, "Country" : "Congo", "Year" : 2013, "Value" : 104.769504311508 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b7" }, "Country" : "Cote d'Ivoire", "Year" : 2013, "Value" : 95.4460519609929 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b8" }, "Country" : "Djibouti", "Year" : 2013, "Value" : 27.9658667570899 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15b9" }, "Country" : "Egypt", "Year" : 2013, "Value" : 121.507893024476 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15ba" }, "Country" : "Eq. Guinea", "Year" : 2013, "Value" : 67.47338886731291 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15bb" }, "Country" : "Eritrea", "Year" : 2013, "Value" : 5.60297546159998 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15bc" }, "Country" : "Gabon", "Year" : 2013, "Value" : 214.750037536392 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15bd" }, "Country" : "Gambia", "Year" : 2013, "Value" : 99.97669369513081 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15be" }, "Country" : "Ghana", "Year" : 2013, "Value" : 108.19114815061 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15bf" }, "Country" : "Guinea", "Year" : 2013, "Value" : 63.3150390342803 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c0" }, "Country" : "Guinea-Bissau", "Year" : 2013, "Value" : 74.0910251106789 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c1" }, "Country" : "Kenya", "Year" : 2013, "Value" : 70.5894285100196 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c2" }, "Country" : "Lesotho", "Year" : 2013, "Value" : 86.30152834586271 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c3" }, "Country" : "Liberia", "Year" : 2013, "Value" : 59.5097852227615 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c4" }, "Country" : "Libya", "Year" : 2013, "Value" : 165.044994606968 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c5" }, "Country" : "Madagascar", "Year" : 2013, "Value" : 36.1336961361276 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c6" }, "Country" : "Malawi", "Year" : 2013, "Value" : 32.3301594425862 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c7" }, "Country" : "Mali", "Year" : 2013, "Value" : 129.066937225724 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c8" }, "Country" : "Mauritania", "Year" : 2013, "Value" : 102.527455859821 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15c9" }, "Country" : "Mauritius", "Year" : 2013, "Value" : 123.239818611816 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15ca" }, "Country" : "Morocco", "Year" : 2013, "Value" : 128.525209683063 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15cb" }, "Country" : "Mozambique", "Year" : 2013, "Value" : 48.0042155703902 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15cc" }, "Country" : "Namibia", "Year" : 2013, "Value" : 110.214364947912 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15cd" }, "Country" : "Niger", "Year" : 2013, "Value" : 39.2922096967855 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15ce" }, "Country" : "Nigeria", "Year" : 2013, "Value" : 73.2919616062739 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15cf" }, "Country" : "Rwanda", "Year" : 2013, "Value" : 56.8007939865437 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d0" }, "Country" : "Sao Tome e Principe", "Year" : 2013, "Value" : 64.93966102397501 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d1" }, "Country" : "Senegal", "Year" : 2013, "Value" : 92.92798274710471 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d2" }, "Country" : "Seychelles", "Year" : 2013, "Value" : 147.342682953101 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d3" }, "Country" : "Sierra Leone", "Year" : 2013, "Value" : 44.1343877086214 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d4" }, "Country" : "Somalia", "Year" : 2013, "Value" : 49.382678408622 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d5" }, "Country" : "South Africa", "Year" : 2013, "Value" : 147.464516629014 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d6" }, "Country" : "South Sudan", "Year" : 2013, "Value" : 25.2583596232104 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d7" }, "Country" : "Sudan", "Year" : 2013, "Value" : 72.8523129067604 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d8" }, "Country" : "Swaziland", "Year" : 2013, "Value" : 71.46778667545939 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15d9" }, "Country" : "Tanzania", "Year" : 2013, "Value" : 55.7179314872319 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15da" }, "Country" : "Togo", "Year" : 2013, "Value" : 62.5349018084542 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15db" }, "Country" : "Tunisia", "Year" : 2013, "Value" : 115.603579861438 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15dc" }, "Country" : "Uganda", "Year" : 2013, "Value" : 44.0906907380625 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15dd" }, "Country" : "Zambia", "Year" : 2013, "Value" : 71.504631794996 }
        { "_id" : { "$oid" : "55f4d67aa940157d6efc15de" }, "Country" : "Zimbabwe", "Year" : 2013, "Value" : 96.3498667952729 }
        { "_id" : { "$oid" : "55f8c360cb67ef6ea1e8e026" }, "Country" : "Ethiopia", "Value" : "27.3", "Year" : 2013 }

    ];
  });
