 function sendcontactinfo()
 {
//var formData = JSON.stringify($("#myForm").serializeArray());

 //var formEmail = document.querySelector('Email').value;
      //var formSubject = document.querySelector('Name').value;
      //var formMessage = document.querySelector('Message').value;



var formEmail = document.getElementsByName("form-email")[0].value;
      var formSubject = document.getElementsByName("form-subject")[0].value;
      var formMessage = document.getElementsByName("form-message")[0].value;
	  
	  
	  
      // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
      var endpoint = 'https://twb4n8b8k3.execute-api.us-east-1.amazonaws.com/prod/ContactFormLambda';

      // Remember those form values we just grabbed? We're going to put them into an object here.
      var body = {
        email: formEmail,
        subject: formSubject,
        message: formMessage
      }



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
 function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function trysend()
{
	var email = document.getElementsByName("form-email")[0];
	console.log(email.value);
if (validateEmail(email.value)) {
	console.log('sending');
	sendcontactinfo();
   // $result.text(email + " is valid :)");
   // $result.css("color", "green");
  } else {
  	console.log('not sending');
    email.value='';
  }
  return false;
}
