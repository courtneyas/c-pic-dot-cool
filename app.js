var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function(){
	var options = '';
	for (var i = 0; i<cities.length; i++){

		var option =$('<option', {
			value: cities [i],
			text: cities [i]
		});

		$('#cities-type').append(option);

		$("select").change(function() {

       var city = $("#cities-type").val();
     

       if (city == "New York City"){
           $('body').attr('class','nyc');
       } else if (city == "San Francisco"){
           $('body').attr('class','sf');
       } else if (city == "Los Angeles"){
           $('body').attr('class','la');
       } else if (city == "Austin, TX"){
           $('body').attr('class','austin');
       } else if (city == "Sydney"){


	}

	$(#city-type).on('change', function(){
		var cities = $('#city-type').val();
		planet = planet.toLowerCase().trim();
	})


})

//  var options = '';
//    for (var i = 0; i < city.length; i++) {
//        options += '<option value="'+ city[i] + '">' + city[i] + '</option>';
//        }
//        $("#city-type").append(options);  

   

//        $("#city-type").val('');
//    });
// });