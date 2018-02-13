
(function() {
  var app = angular.module('OnlineShopping', ['store-directives','ngCookies']);
  
app.controller('StoreController', function() {
    this.products = smartphones;
  });

/*Cart code starts here*/
app.controller('CartController', ['$scope','$cookies', function($scope,$cookies){
	
		
	$scope.products = smartphones;
		
	$scope.cart = [];
	  
	$scope.total = 0;
	 
	 /*
if ($cookieStore.get('cart') !== null) {
		 		
		$scope.cart =  $cookieStore.get('cart');
		
	   }
		
	*/
		
		
	if(!angular.isUndefined($cookies.get('total'))){
		  
	$scope.total = parseFloat($cookies.get('total'));
		
	}
			
	if (!angular.isUndefined($cookies.get('cart'))) {
		 		
	$scope.cart =  $cookies.getObject('cart');
		
	}
		
		
	$scope.addItemToCart = function(product){
  
		 	
	if ($scope.cart.length === 0){
		 		
	product.count = 1;
		 		
	$scope.cart.push(product);
		 	
	} else {
		 		
	var repeat = false;
		 		
	for(var i = 0; i< $scope.cart.length; i++){
		 			
	if($scope.cart[i].id === product.id){
		 				
	repeat = true;
		 				
	$scope.cart[i].count +=1;
		 			
	}
		 		
	}
		 		
	if (!repeat) {
		 			
	product.count = 1;
		 		 	
	$scope.cart.push(product);	
		 		
	}
		 	
	}
		 	
	var expireDate = new Date();
      
	expireDate.setDate(expireDate.getDate() + 1);
		 	
	$cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
		 	
	$scope.cart = $cookies.getObject('cart');
		 
		  
	$scope.total += parseFloat(product.price);
      
	$cookies.put('total', $scope.total,  {'expires': expireDate});
		 
	};

		 
	$scope.removeItemCart = function(product){
		   
		   
	if(product.count > 1){
		     
	product.count -= 1;
		     
	var expireDate = new Date();
         
	expireDate.setDate(expireDate.getDate() + 1);
		     
	$cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			   
	$scope.cart = $cookies.getObject('cart');
		   
	}
		   
	else if(product.count === 1){
		     
	var index = $scope.cart.indexOf(product);
 			 
	$scope.cart.splice(index, 1);
 			 
	expireDate = new Date();
       
	expireDate.setDate(expireDate.getDate() + 1);
 			 
	$cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			 
	$scope.cart = $cookies.getObject('cart');
		     
		   
	}
		   
		   
	$scope.total -= parseFloat(product.price);
       
	$cookies.put('total', $scope.total,  {'expires': expireDate});
		   
		 
	};

	
}]);
/*Cart code ends here*/

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.currentImageChange = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });


  var smartphones = [{
    id:1,
    name: 'Samsung',
    description: "With a leathery feel, the Samsung Galaxy On5 has a classy look with a thin frame that provides you a comfortable steady grip. The quick launch feature in the phone lets you capture moments easily by pushing the home button twice. With a Palm Gesture Selfie feature, a wide viewing angle and the Beauty Shot mode, the camera gives you rewarding selfie experiences.",
    ModelName:'Galaxy On5',
    price: 110.50,
    SimType:'Dual SIM',
    color: 'Black',
    TouchScreen:'Yes',
	canPurchase:true,
        soldOut:false,
    images: [
      "img/mob-01.jpg",
      "img/mob-02.jpg",
      "img/mob-03.jpeg"
    ],
    reviews: [{
      stars: 5,
      body: "I have bought it in ?6,291.00 Very good product in this price.",
      author: "joe@thomas.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "More than Worth to buy.Simply super With 1.5GB RAM",
      author: "tim@hater.com",
      createdOn: 1397490980837
    }]
  }, {
    id:2,
    name: 'Lenovo',
    description: "The Lenovo K8 Plus boasts of a dual rear camera setup, the sort that you usually find on more expensive devices. The secondary camera is used to gauge dep",
    ModelName:'Lenovo K6 Power',
    price: 200.00,
    SimType:'Dual SIM',
    color: 'Gold',
    TouchScreen:'Yes',
	canPurchase:true,
        soldOut:false,
    images: [
      "img/mob-04.jpeg",
      "img/mob-05.jpg",
      "img/mob-06.jpeg",
    ],
    reviews: [{
      stars: 3,
      body: "Actually I was confused between red me 4 note and Lenovo k8 plus. Some guys suggested me to buy red me 4 note but at last I go with Lenovo k8 plus",
      author: "JimmyDean@sausage.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "I noticed some people saying one speaker working out of two they don't no well about it.",
      author: "Rock@alyssaNicoll.com",
      createdOn: 1397490980837
    }]
  }, {
    id:3,
    name: 'LG',
    description: "The expansive 13.97 cm (5.5) IPS Full HD+ FullVision display gives you more to see. The 18:9 screen brings a new dimension to the smartphone viewing experience, taking you to the next level of watching videos, playing games, and browsing the Internet.",
    ModelName:'LG Note4',
    price: 110.50,
    SimType:'Dual SIM',
    color:'White',
    TouchScreen:'Yes',
    canPurchase:true,
    soldOut:false,
    images: [
      "img/mob-07.jpeg",
      "img/mob-08.jpg",
      "img/mob-09.jpg"
    ],
    reviews: [{
      stars: 1,
      body: "Phone is really very faster.display quality is awesome.best phone in this price range.great innovation from lg.love you lg.",
      author: "turtleguyy@zdn.me",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Beautiful design and display phone.",
      author: "LouisW407@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Nice phone.",
      author: "nat@flatland.com",
      createdOn: 1397490980837
    }]
  }];

})();
