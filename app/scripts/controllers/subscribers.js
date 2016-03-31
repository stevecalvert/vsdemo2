'use strict';

/**
 * @ngdoc function
 * @name vsdemo2App.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the vsdemo2App
 */

var fb = new Firebase('https://crackling-fire-6688.firebaseio.com/subscribers');

angular.module('vsdemo2App')
  .controller('SubscribersCtrl', function ( $scope, $firebaseObject, orderByPriorityFilter) {

  	$scope.data = $firebase(fb);
    $scope.subscribers = $firebase(fb);

  	//$scope.subscribers = [ { 'no':1,'name':'Blobby','loyalty':1,'joinDate':'3/5/16

  	$scope.subscribers = $firebaseArray(fb);
  	

    

  //   $http.get('http://localhost:9000/subscribers.json').success(function(data){
  //  		$scope.subscribers = data;
  //  		console.log( "Rx subscriber data", data)
		// })


  	console.log( "Reading subs, ", $scope.subscribers)
    $scope.gridOptions = { 
    	data: 'subscribers',
    	enableGridMenu: true,  
    	columnDefs: [
            {field:'no', displayName:'No.'}, 
            {field:'name', displayName:'Name'},
            {field:'loyalty', displayName:'Loyalty Score'},
            {field:'joinDate', displayName:'Date of Joining'}
        ]
	};
  });
