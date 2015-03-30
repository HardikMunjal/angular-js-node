/**
 * Created by Indrajit on 15-07-2014.
 */
app.controller('loginController',['$scope','$http','$location', function($scope,$http,$location){
    var baseUrl = $location.protocol()+"://"+$location.host()+":"+$location.port();
    $scope.userDetails = {};
    $scope.userDetails.username="";
    $scope.userDetails.password="";
    $scope.errorMessage="";
	var UNAME_REGX = /\w+/;

    $scope.formSubmit = function () {
		$scope.errorMessage = "";
        if($scope.isValid()){
            //alert('Valid user');
            $scope.loginUser();
        }else{
			$scope.errorMessage = "Invalid user name";
            //alert('Invalid user');
        }

    };

    $scope.isValid = function(){
        var username = $scope.userDetails.username;
         if(UNAME_REGX.test(username)){
            return true;
        }else{
            return false;
        }
    };

    $scope.loginUser = function(){
        var loginUrl = baseUrl+"/spring-mvc/login";
        var loginUser = {
            userName: $scope.userDetails.username,
            password: $scope.userDetails.password
        };
        $http.post(loginUrl,loginUser);
    };
}]);