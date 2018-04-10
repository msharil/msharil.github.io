
$("#frmMN").submit( function( event ) {

	event.preventDefault();

	var name = $("#txtName").val();
	var weight = $("#txtKg").val();
	var mn = $("#txtFatLoss").val();
	

	alert('Button submitted! '+ name + ' ' + weight +'kg <br> MN' + mn);
});