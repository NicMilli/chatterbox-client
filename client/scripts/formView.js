// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    if (Rooms._selectedRoom === undefined || Rooms._selectedRoom === 'All rooms') {
      alert('Please select a room to post to, or create your own!');
    } else {
      if ($('#message').val().length === 0) {
        return alert('Please type a message first!');
      }
      Parse.create({roomname: Rooms._selectedRoom, text: $('#message').val(), username: App.username}, () => {
        Messages.updateToRoom();
      });
    }
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};