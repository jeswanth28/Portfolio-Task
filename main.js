var MyApp = angular.module('myModule', ['AngularChart']);
MyApp.controller("myCntrl", function ($scope, $http) {

    $scope.showGraph = "false"
    $scope.ydata1 = { name: "", data: [] };

    $scope.ydata = [];


    $http.get("testData.json")
        .then(function (response) {
            //Sucess function 
            $scope.contents = response.data.portfolio;
            $scope.stockdata = response.data.hdfc_stock_data.stock.growth_history;
            $scope.ydata1.data = response.data.hdfc_stock_data.stock.graphs.stock_price.values;
            $scope.ydata1.name = response.data.hdfc_stock_data.stock.short_name;
            $scope.ydata.push($scope.ydata1);
            $scope.lineChartXData = response.data.hdfc_stock_data.stock.graphs.x_axis.values;

        }, function (response) {
            //Second function handles error
            $scope.content = "Something went wrong";

        });


    $scope.lineChartYData = $scope.ydata;
           //click function to display the chart
    $scope.showChart = function (x) {
        if (x.name == "HDFC Bank") {
            $scope.showGraph = "true";
            console.log($scope.showgraph);
        }
    };

});