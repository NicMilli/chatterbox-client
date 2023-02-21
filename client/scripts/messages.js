// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  _roomData: {},
  _tabs: {},

  update: function(data) {
    Messages._data = data;

    MessagesView.render(data);
  },

  updateToRoom: function(room) {
    App.startMessageSpinner();
    if (!room) {
      room = Rooms._selectedRoom;
    } else {
      Rooms._selectedRoom = room;
    }
    Parse.readRoom(Rooms._selectedRoom, (roomData) => {
      Messages._roomData[Rooms._selectedRoomroom] = roomData;
      MessagesView.render(roomData);
      App.stopMessageSpinner();
    });
  },

  newTab: function(roomName) {
    if (roomName in Messages._tabs) {
      Messages.updateToRoom(roomName);
    } else {
      Messages._tabs[roomName] = Object.keys(Messages._tabs).length - 1;
      $('#tabs').prepend(`<button class='tabButton'>${roomName}</button>`);
      $('.tabButton').on('click', function(event) {
        Messages.onClick(event.currentTarget.firstChild.nodeValue);
      });
      Messages.updateToRoom(roomName);
    }
  },

  onClick: function(text) {
    // MessagesView.newTab(event.target);
    event.preventDefault();
    $(`div:contains(${Rooms._selectedRoom})`).removeClass('active');
    $(`div:contains(${text})`).addClass('active');
    Rooms._selectedRoom = text;
    Messages.newTab(Rooms._selectedRoom);
    MessagesView.render();
  },

};
/*
campus: "rfp"
created_at: "2023-02-17T23:11:32.138Z"
github_handle: "akbarimo"
message_id: 83916
roomname: "2302"
text: "https://tinyurl.com/sussy68"
updated_at: "2023-02-17T23:11:32.138Z"
username: "WhenIKillGod"
*/