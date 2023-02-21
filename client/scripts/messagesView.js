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
      roomData.forEach((message) => {
        if (message.username in Friends._data) {
          this.renderMessage(message, 'friend');
        } else {
          this.renderMessage(message);
        }
      });
    }
  },

  renderMessage: function(message, extraClass = '') {
    let $message = MessageView.render({username: message.username, message: message.text, className: extraClass});
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    Friends.toggleStatus($(event).text());
    Messages.updateToRoom();
  }

};