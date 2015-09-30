if(geo_position_js.init()){

		   geo_position_js.getCurrentPosition(
		   	function(position){
		   		console.log(position);
		   	},
		   	function(error){
		   		console.log(error);	
		   	});
		}
		else{
		   console.log("Functionality not available");
		}