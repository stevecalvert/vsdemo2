'use strict';

/**
 * @ngdoc function
 * @name vsdemo2App.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the vsdemo2App
 */
angular.module('vsdemo2App')
  .controller('GalleryCtrl', function ($scope) {
    var pictures =$scope.pictures=[];



var baseURL="http://lorempixel.com/300/180/";

var titles=["Healthy Food","Healthy @ Work","City Life ",
             "Staying Fit","Looking Good","Nightlife !!"] ;

var keywords=["food", "business","city","sports","fashion", 
               "nightlife"];

var dummyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat turpis. Integer eget consectetur quam. Sed at quam ut dolor varius condimentum et sit amet odio. "

$scope.rate = 3;
$scope.max = 10;
$scope.isReadonly = false;

$scope.addPics=function(i){
   pictures.push({
         url:baseURL+keywords[i],
         title:titles[i],
         summary:dummyText
    })
};

for (var i=0;i<5;i++){
    $scope.addPics(i);
}  

  });
