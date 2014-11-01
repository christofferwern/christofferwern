	// create the module and name it scotchApp
	var app = angular.module('app', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/education', {
				templateUrl : 'pages/education.html',
				controller  : 'educationController'
			})

			// route for the contact page
			.when('/projects', {
				templateUrl : 'pages/projects.html',
				controller  : 'projectsController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	app.controller('educationController', function($scope) {
		$scope.message = 'Look! I am an education page.';
	});

	app.controller('projectsController', function($scope) {
		$scope.message = 'Look! I am an projects page.';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});