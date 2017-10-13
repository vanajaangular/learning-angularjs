// var App=angular.module("myApp",[]);
// App.controller("myCtr", function($scope){





    // $scope.name="angular";
//     $scope.people=[
//         {
//             "name":"vanaja",
//              "company":"js",
//             "sal":"1000"      
//           },
//           {
//             "name":"vanu",
//              "company":"js",
//             "sal":"2000"      
//           },
//           {
//             "name":"ammu",
//              "company":"js",
//             "sal":"3000"      
//           }
//     ]
    
// });
    var App=angular.module("myApp",[]);
    App.controller("myCtr", ["$scope","$http",function($scope,$http){
 $http.get("js/data.json ").then(function(item){
        $scope.players=item.data;
    });
}]);
        

