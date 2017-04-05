function enviar_imagen() 
	{
		var file = document.getElementById("photo").files[0]; //fetch file
		var formData = new FormData();                     
		formData.append('foto_tomada', file); //append file to formData object

		$.ajax({
			url: "modelo/take_data.php",
			type: "POST",
			data: formData,
			processData: false, //prevent jQuery from converting your FormData into a string
			contentType: false, //jQuery does not add a Content-Type header for you
			success: function (msg) {
				//alert(msg);
				$("#responde").html(msg);
			}
		});
	}