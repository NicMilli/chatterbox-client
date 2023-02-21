// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),
  $messageSpinner: $('.messageSpinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    RefreshView.initialise();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // setInterval(function() {
    //   App.fetch();
    // }, 10000);

  },

  fetch: function(callback = ()=>{}) {
    //$('#chats').not(':first-child').empty();
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.update(data);
      Rooms.update();
      callback();
    });

  },

  startSpinner: function() {
    //App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    //App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  startMessageSpinner: function() {
    $('#chats').prepend('<div class="messageSpinner"><i class="fa-solid fa-fish fa-lg"></i></div>');
  },

  stopMessageSpinner: function() {
    $('.messageSpinner').remove();
  }
};
