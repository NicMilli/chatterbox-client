// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: new Set(),
  _selectedRoom: 'All rooms',

  update: function() {
    Messages._data.forEach((object) => {
      Rooms._data.add(object.roomname);
    });
    RoomsView.render();
  },

  add: function(roomName) {
    if (roomName === null || roomName.length < 3) {
      alert('Please make sure your roomname has 3 or more characters');
    } else {
      Parse.create({roomname: roomName, text: 'Look at my cool new room', username: App.username});
      App.fetch();
    }
  },

};