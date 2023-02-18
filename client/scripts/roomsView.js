// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    Rooms._data.forEach((room, roomname) => {
      RoomsView.renderRoom(roomname);
    });
    RoomsView.$select.prepend('<option value="select" selected="selected">All rooms</option>');
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $('<option />', {text: roomname}).appendTo(RoomsView.$select);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    event.preventDefault();
    Rooms._selectedRoom = RoomsView.$select.find('option:selected').text();
    //Rooms.update();
    MessagesView.render();
  },

  handleClick: function() {
    // TODO: Handle the user clicking the "Add Room" button.
    //Get roomname from window?
    let roomName = window.prompt('What do you want to name your new room');
    Rooms.add(roomName);

    App.fetch();
  }

};
