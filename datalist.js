				function ajaxDatalist(datalist, input, jsonpath, errorText) {
				  var dataList = document.getElementById(datalist);
				  var input = document.getElementById(input);


				  var request = new XMLHttpRequest();
				  request.onreadystatechange = function(response) {
				    if (request.readyState === 4) {
				      if (request.status === 200) {
				        // Parse the JSON
				        var jsonOptions = JSON.parse(request.responseText);

				        // Loop over the JSON array.
				        jsonOptions.forEach(function(item) {
				          // Create a new <option> element.
				          var option = document.createElement('option');
				          // Set the value using the item in the JSON array.
				          option.value = item;
				          // Add the <option> element to the <datalist>.
				          dataList.appendChild(option);
				        });

				        // Update the placeholder text.
				        input.placeholder = "e.g. datalist";
				      } else {
				        // An error occured :(
				        input.placeholder = errorText;
				      }
				    }
				  };

				// Update the placeholder text.
				input.placeholder = "Loading options...";

				// Set up and make the request.
				request.open('GET', jsonpath, true);
				request.send();
};