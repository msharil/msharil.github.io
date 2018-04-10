
$("#frmMN").submit( function( event ) {

	event.preventDefault();

	var name = $("#txtName").val();
	var weight = $("#txtWeight").val();
	var mn = $("#txtFatLoss").val();
	

	if(name == '' || weight == '' || mn == '') {
		alert('Sila lengkapkan maklumat');
	} else {

		// kira Protein
		// P = MN x 40%
		// gP = P / 4
		var P = mn*0.4
		var gP = parseFloat(P)/4

		// kira Carbs
		// C = MN x 30%
		// gC = C / 4
		var C = mn*0.3
		var gC = parseFloat(C)/4

		// kira Fat
		// F = MN x 30%
		// gF = F / 9
		var F = mn*0.3
		var gF = parseFloat(F)/9

		//alert(' '+ name + ' ' + weight +'kg  MN' + mn);	
		var str = '';

		str += '<b>Nama: </b>' + name.toUpperCase() + ' <br>';
		str += '<b>Berat: </b>' + weight + 'kg <br>';
		str += '<b>Magic Number: </b>' + mn + ' <br>';
		str += '<table class="table table-border table-striped">';

		str += '<tr>';
		str += '<th scope="row">Protein</th>';
		str += '<td>'+ P.toFixed(2) +' kcal</td>';
		str += '<td>'+ gP.toFixed(2) +' gram</td>';
		str += '</tr>';

		str += '<tr>';
		str += '<th scope="row">Karbohidrat</th>';
		str += '<td>'+ C.toFixed(2) +' kcal</td>';
		str += '<td>'+ gC.toFixed(2) +' gram</td>';
		str += '</tr>';

		str += '<tr>';
		str += '<th scope="row">Lemak Baik</th>';
		str += '<td>'+ F.toFixed(2) +' kcal</td>';
		str += '<td>'+ gF.toFixed(2) +' gram</td>';
		str += '</tr>';

		// str += '<p><b>Protein: </b>' + P +' kcal => ' + gP.toFixed(2) + 'g </p>';
		// str += '<p><b>Karbo: </b>' + C +' kcal => ' + gC.toFixed(2) + 'g </p>';
		// str += '<p><b>Lemak Baik: </b>' + F +' kcal => ' + gF.toFixed(2) + 'g </p>';

		str += '</table>';
		//alert('<p>Protein: ' + P + ' => ' + gP + 'g </p>');
		$('#result').html(str);
	}
	
});