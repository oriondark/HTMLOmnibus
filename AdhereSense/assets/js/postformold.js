 function sendcontactinfo()
 {
var formData = JSON.stringify($("#myForm").serializeArray());
var endpoint = 'https://twb4n8b8k3.execute-api.us-east-1.amazonaws.com/prod/ContactFormLambda'; 
       // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
      var lambdaRequest = new Request(endpoint, {
        method: 'POST',
        // Quick note: 'no-cors' mode is for development on localhost only!
        mode: 'no-cors',
        body: JSON.stringify(body)
      });

      // Call the Fetch API to make our request
      fetch(lambdaRequest)
        // This is where you can handle errors. This is just an example, so we won't cover that.
        .then(response => console.log(response))
        .catch(err => console.log(err));
 }
