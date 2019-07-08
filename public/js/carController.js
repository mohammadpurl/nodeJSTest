
app.controller('carController', function($scope,$http,$window,$routeParams) {
	$scope.init = function () {
		$scope.name=$routeParams.name;
		$scope.getcarslist();
		

	};
	
	$scope.getcarslist=function(){
	    
		$http.get(
		"/v1/humans/"+$routeParams.name+"/cars",
		{
            'Content-Type': 'application/json'
        }
		).then(function (response) {
			
		       if(response.data && response.data.length>0){
				$scope.carlist=response.data;
					
				}
				
			
            
            }, function (response) {
               alert("eror"+response) ;
            });
		 
	}
	
	
	
	
})
