// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    MessagesView.$chats.on('click', '.username', function(event) {
      MessagesView.handleClick(event.currentTarget);
    });
    MessagesView.$chats.addClass('chatsColor');
  },

  render: function(roomData) {
    if (roomData !== undefined) {
      MessagesView.$chats.html('');
      // App.startMessageSpinner();
      // await Parse.readRoom(Rooms._selectedRoom, (roomData) => {
      //   Messages.updateToRoom(roomData);
      //   App.stopMessageSpinner();
      // });
      //App.stopMessageSpinner();

      roomData.forEach((message) => {
        if (message.username in Friends._data) {
          this.renderMessage(message, 'friend');
        } else {
          this.renderMessage(message);
        }
      });
      App.stopMessageSpinner();
    }
  },

  renderMessage: function(message, extraClass = '') {
    MessagesView.$chats.append(MessageView.render({username: message.username, message: message.text, className: extraClass}));
  },

  handleClick: function(event) {
    Friends.toggleStatus($(event).text());
    MessagesView.render(Messages._roomData[Rooms._selectedRoom]);
  }

};