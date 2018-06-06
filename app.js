// make an array of the cities

var cities = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"];

$(document).ready(function(){
	var options = '';
	for (var i = 0; i<cities.length; i++){

		var option =$('<option', {
			value: cities [i],
			text: cities [i]
		});

		$('#city-type').append(option);

		$("select").change(function() {

       var city = $("#city-type").val();
     
       // make photo change on selection
       if (city == "New York City"){
           $('body').attr('class','NYC');
       } else if (city == "San Francisco"){
           $('body').attr('class','SF');
       } else if (city == "Los Angeles"){
           $('body').attr('class','LA');
       } else if (city == "Austin"){
           $('body').attr('class','ATX');
       } else if (city == "Sydney"){
       		$('body').attr('class',"SYD")


	}

	$('#city-type').on('change', function(){
		var cities = $('#city-type').val();
		planet = planet.toLowerCase().trim();}




//  var options = '';
//    for (var i = 0; i < city.length; i++) {
//        options += '<option value="'+ city[i] + '">' + city[i] + '</option>';
//        }
//        $("#city-type").append(options);  

   

//        $("#city-type").val('');
//    });
// });