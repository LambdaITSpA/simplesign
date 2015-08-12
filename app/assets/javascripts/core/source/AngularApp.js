(function(){
	var app = angular.module('simple_sign', []);
	app.factory('documentShowService', function($rootScope, $http, $timeout) {
	    var documentShowService = {};
	    documentShowService.document = {};

	    documentShowService.getDocument = function(document_id) {
	    	$http.get('/documents/' + document_id + '.json').
			success(function(data, status, headers, config) {
	    		documentShowService.document = data.document;
	        	documentShowService.broadcastDocument();
			}).
			error(function(data, status, headers, config) {
				config.log(':c');
			});
	    };

	    documentShowService.getDocuments = function(){
	    	$http.get('/documents.json').
			success(function(data, status, headers, config) {
				documentShowService.documents = data.documents;
	        	documentShowService.broadcastDocuments();
	        	$timeout(function(){ angular.element(document).trigger('init-offcanvas'); }, 1000);
			}).
			error(function(data, status, headers, config) {
				config.log(':c');
			});
	    }

	    documentShowService.broadcastDocument = function() {
	        $rootScope.$broadcast('handleDocumentBroadcast');
	    };

	    documentShowService.broadcastDocuments = function() {
	        $rootScope.$broadcast('handleDocumentsBroadcast');
	    };

	    return documentShowService;
	});
	app.controller('DocumentsIndexController', function($scope, $rootScope, $http, $timeout, documentShowService){
		console.log('Get documents');
		$scope.documents = documentShowService.getDocuments();
		$rootScope.$on('handleDocumentsBroadcast', function() {
	        $scope.documents = documentShowService.documents;
			console.log('lista de documentos refrescada c:');
	    });

		$scope.show_document = function(document_id){
			documentShowService.getDocument(document_id);
		}
	});
	app.directive('ngConfirmClick', function(){
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    });
	app.controller('DocumentShowController', function($scope, $rootScope, $window, $http, documentShowService){
		$scope.document = {};
		$rootScope.$on('handleDocumentBroadcast', function() {
	        $scope.document = documentShowService.document;
	    	console.log('get_user_serial: ' + $scope.get_user_serial);
	    });

	    $scope.sign_document = function(){
	    	$scope.valid_user_error = false;
	    	console.log('firmando ...');
	    	var params = '';
	    	if ($scope.chilean_id_serial !== undefined){
	    		params = '?serial=' + $scope.chilean_id_serial;
	    	}
	    	$http.get('/documents/' + $scope.document.id + '/sign.json' + params).
			success(function(data, status, headers, config) {
				if(data.document.valid_user){
					console.log('firmado!');
					angular.element('#signModal').modal('hide');
		    		$scope.document = data.document;
		    		documentShowService.getDocuments();
		    	}else{
		    		$scope.valid_user_error = true;
		    		console.log('usuario invalido!');
		    	}
			}).
			error(function(data, status, headers, config) {
				config.log(':c');
			});
	    }
	    $scope.destroy_document = function(){
	    	console.log('borrando ...');
	    	$http.get('/documents/' + $scope.document.id + '/destroy.json').
			success(function(data, status, headers, config) {
				console.log('borrado!');
				$window.materialadmin.AppOffcanvas.closeOffcanvas();
				$window.materialadmin.AppOffcanvas._removeBackdrop();
	    		$scope.document = {};
	    		documentShowService.getDocuments();
			}).
			error(function(data, status, headers, config) {
				config.log(':c');
			});
	    }
	});
})();
//window.materialadmin.AppOffcanvas.openOffcanvas('#offcanvas-document')
//window.materialadmin.AppOffcanvas.closeOffcanvas()