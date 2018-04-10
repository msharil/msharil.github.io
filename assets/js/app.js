
$("#frmMN").submit( function( event ) {

	event.preventDefault();

	var name = $("#txtName").val();
	var weight = $("#txtWeight").val();
	var mn = $("#txtFatLoss").val();
	

	alert('Button submitted! '+ name + ' ' + weight +'kg  MN' + mn);
});