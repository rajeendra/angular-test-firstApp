	//console.log(angular);
	var module = angular.module("myAppModule",[]);
	module.controller("mainCtrl", Main);

	function Main($scope){
		$scope.userName="foo";
		$scope.hourOfDay=20;
		$scope.curTme=Date();
		console.log("main log");

		$scope.updateTime=function(){
			//alert("xx");
			$scope.curTme=Date();
			console.log("update log");
		}

		$scope.textChange=function(){
			console.log("text changed");

		}
	}
