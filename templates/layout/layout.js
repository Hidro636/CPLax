if(Meteor.isClient) {
    Router.route('/', function() {
        this.render('home');
    });

    Router.route('/schedule');

    Router.route('/roster');

    Router.route('/stats');

    Router.route('/staff');

    Router.route('/gallery');

    Router.route('/recruits');

    Router.route('/login');
}