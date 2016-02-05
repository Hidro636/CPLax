if(Meteor.isClient) {
    Template.headbar.events({
        "click .navbar-item": function(event) {
            $('#homeButton').removeClass('active');
            $('#scheduleButton').removeClass('active');
            $('#galleryButton').removeClass('active');
            $('#dropdownLinks').removeClass('active');
            $('#recruitsButton').removeClass('active');
            var id = "#" + event.target.id.replace("Link", "Button");
            $(id).addClass("active");

        }
    });
}