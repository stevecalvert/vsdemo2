'use strict';

/**
 * @ngdoc function
 * @name vsdemo2App.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the vsdemo2App
 */


angular.module('vsdemo2App')
  .controller('SubscribersCtrl', function ( $scope, $firebaseArray ) {
    var ref = new Firebase("https://crackling-fire-6688.firebaseio.com/subscribers");


    ref.authWithCustomToken("7IOtkehIHluUotfqYdFf9PorclzlJOQyjv7kImNF", function(error, authData) {
      if (error) {
        console.log("Authentication Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.subscribers = $firebaseArray(ref);

      }
    });

    
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

  	//$scope.data = $firebase(fb);
    //$scope.subscribers = $firebase(fb);

  	//$scope.subscribers = [ { 'no':1,'name':'Blobby','loyalty':1,'joinDate':'3/5/16



  	//sync.$bindTo($scope, "subscribers");

    var localData= 
    [
      {"no": "1","name":"Betty", "loyalty": 3,"joinDate":"3/5/10"},
      {"no": "2","name":"John", "loyalty": 5,"joinDate":"3/5/05"},
      {"no": "3","name":"Peter", "loyalty": 6,"joinDate":"3/5/10"},
      {"no": "4","name":"Jaden", "loyalty": 7,"joinDate":"10/12/12"},
      {"no": "5","name":"Shannon", "loyalty": 9,"joinDate":"22/01/08"}
    ];

    var localData2= 
    [
      [1,"Betty", 3, "3/5/10" ],
      [2,"John", 6, "4/5/10" ],
      [3,"Peter", 9, "17/5/10" ],
      [4,"Jaden", 14, "3/8/10" ],
      [5,"Shannon", 1, "3/12/10" ]
    ];

    //var fred = $.parseJSON(localData);

    $(document).ready(function() {
      $('#example').DataTable( {
          //data : $firebaseArray(firebaseObj);
          data : localData2,
          columns: [
            { title: "no" },
            { title: "name" },
            { title: "loyalty" },
            { title: "joinDate" }
        ]
      } );
    } );


   //  $http.get('http://localhost:9000/subscribers.json').success(function(data){
   //    $('#example').DataTable( {
   //      "ajax": data
   //      } );
      
   //  		$scope.subscribers = data;
   //  		console.log( "Rx subscriber data", data)
	  // })


  	// console.log( "Reading subs, ", $scope.subscribers);

   //  $scope.gridOptions = { 
   //  	data: 'subscribers',
   //  	enableGridMenu: true,  
   //  	columnDefs: [
   //          {field:'no', displayName:'No.'}, 
   //          {field:'name', displayName:'Name'},
   //          {field:'loyalty', displayName:'Loyalty Score'},
   //          {field:'joinDate', displayName:'Date of Joining'}
   //      ]
	  //  };


   //  $scope.SignIn = function(event) {
   //    event.preventDefault();  // To prevent form refresh
   //    var username = $scope.user.email;
   //    var password = $scope.user.password;
       
   //    loginObj.$login('password', {
   //            email: username,
   //            password: password
   //        })
   //        .then(function(user) {
   //            // Success callback
   //            console.log('Authentication successful');
   //        }, function(error) {
   //            // Failure callback
   //          console.log('Authentication failure');
   //    });
   //  }

  });
