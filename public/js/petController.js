
app.controller('petController', function($scope,$http,$window,$routeParams) {
	$scope.init = function () {
		$scope.name=$routeParams.name;
		$scope.getpetslist();
		

	};
	
	$scope.getpetslist=function(){
	    
		$http.get(
		"/v1/humans/"+$routeParams.name+"/pets",
		{
            'Content-Type': 'application/json'
        }
		).then(function (response) {
			
		       if(response.data && response.data.length>0){
				$scope.petlist=response.data;
					
				}
				
			
            
            }, function (response) {
               alert("eror"+response) ;
            });
		 
	}
	
	
	
	
})
