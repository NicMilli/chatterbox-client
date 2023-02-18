// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  update: function(data) {
    Messages._data = data;

    MessagesView.render();
  },

  updateToRoom: function(data) {
    Messages._data = data;
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