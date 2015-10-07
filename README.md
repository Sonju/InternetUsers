## Africa Mobile-Celluar Subscription API 2013
**Open source API framework using MEAN stack framework.**

The Africa Mobile Subscription API is for businesses, governments, and civic institutions to filter by country African mobile subscription users (per 100 people).
###### Data Source: [UNHCR](http://data.un.org/Data.aspx?d=WDI&f=Indicator_Code%3aIT.CEL.SETS.P2)


##### Technologies Used
1. MongoDB
2. Express
3. Node
4. Angular
5. Mapstarter.com
6. D3 (javascript data visualization tool)

##### Installation
 Go to Sonju GitHub page and clone africa-mobile-subscribers repository  
 1. Open your preferred Mongo database. The author used Mongo Hub and input database values
 2. In terminal change directories to africa-mobile-subscribers
 3. Type 'npm install' then 'npm start'. The server should connect.
 4. Browse to localhost:3000

##### Code
HTTP API
```javascript

var africaApp = angular.module('africaApp', []);

africaApp.controller('countriesController', function($scope, $http) {

  $scope.url = '/countries/api';

  $scope.fetch = function() {
    $http.get($scope.url).success(function(data) {

      $scope.countries = data;
      console.log(data);
    });
  }

  $scope.fetch();

});
```

##### Database table
*Columns*

  Country | Value | Year
  --------|-------|-----
  Kenya |  71 | 2013

##### Images
App screenshots

background image open source: pixabay.com
![Image](/public/screenshots/home_page.png)

![Image](/public/screenshots/countryData_page.png)

![Image](/public/screenshots/search_filter.png)

App 2.0 Version will have map
![Image](/public/screenshots/map.png)

##### 2.0 Iteration
- Data map work in progress.
- Include local mobile providers.
