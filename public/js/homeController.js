
app.controller('homeController', function($scope,$http,$window) {
	$scope.init = function () {
		console.log("init function")
		$scope.gethumanlist();
		

	};
	
	$scope.gethumanlist=function(){
	    
		$http.get(
		"/gethumanslist",
		{
            'Content-Type': 'application/json'
        }
		).then(function (response) {
			
		       if(response.data && response.data.length>0){
				$scope.humanlist=response.data;
					
				}
				
			
            
            }, function (response) {
               alert("eror"+response) ;
            });
		 
	}
	
	
	
	
	
})
