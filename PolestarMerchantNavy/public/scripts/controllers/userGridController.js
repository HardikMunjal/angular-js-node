/**
 * Created by Indrajit on 16-07-2014.
 */
app.controller('userGridController',['$scope','$http','$location', function($scope,$http,$location){
    $scope.myData = [
        {username:"john",password:"smith",id:"1"},
        {username:"user_name",password:"password",id:"2"},
        {username:"dfdbfd",password:"v cvfb",id:"3"},
        {username:"rajib",password:"v cvfb",id:"4"}
    ];
    $scope.myOptions = { data: 'myData' };
}]);
