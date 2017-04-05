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
				
				function onDeviceReady() {
					checkConnection();
				}

				function checkConnection() {
					var networkState = navigator.connection.type;

					var states = {};
					states[Connection.UNKNOWN]  = 'Unknown connection';
					states[Connection.ETHERNET] = 'Ethernet connection';
					states[Connection.WIFI]     = 'WiFi connection';
					states[Connection.CELL_2G]  = 'Cell 2G connection';
					states[Connection.CELL_3G]  = 'Cell 3G connection';
					states[Connection.CELL_4G]  = 'Cell 4G connection';
					states[Connection.CELL]     = 'Cell generic connection';
					states[Connection.NONE]     = 'No network connection';

					alert('Connection type: ' + states[networkState]);
				}
			}
		});
	}
	document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }