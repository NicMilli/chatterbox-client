// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    RoomsView.$select.empty();
    Rooms._data.forEach((room, roomname) => {
      RoomsView.renderRoom(roomname);
      //Messages.updateToRoom(roomname);
    });
  },

  renderRoom: function(roomname) {
    $('<option />', {text: roomname}).appendTo(RoomsView.$select);
  },

  handleChange: function(event) {
    event.preventDefault();
    $(`button:contains(${Rooms._selectedRoom})`).removeClass('activeTab');
    Rooms._selectedRoom = RoomsView.$select.find('option:selected').text();
    Messages.newTab(Rooms._selectedRoom);
    //MessagesView.render();
  },

  handleClick: function() {
    let roomName = window.prompt('What do you want to name your new room');
    Rooms.add(roomName);
  },


};
