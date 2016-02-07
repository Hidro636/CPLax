if (Meteor.isClient) {
    Template.loginModalTemplate.events({
       "submit #loginForm": function(event) {
           event.preventDefault();
           var username = event.target.usernameTextField.value;
           var password = event.target.passwordTextField.value;
           var loginCode = event.target.loginCodeTextField.value;

           //Check if login code == ""


           Meteor.loginWithPassword(username, password, function(err) {
                if(err) {
                    $("#messageArea").html("<label class='message-label'>Invalid username or password!</label>");
                }
           });
       }
    });
}