// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //add friend when clicked
    MessagesView.$chats.on('click', '.username', function(event) {
      MessagesView.handleClick(event.currentTarget);
    });

  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    if (Rooms._selectedRoom === 'All rooms') {
      Messages._data.forEach((message) => {
        if (message.username in Friends._data) {
          this.renderMessage(message, 'bestFriend');
        } else {
          this.renderMessage(message);
        }
      });
    } else {
      //Need to await fetching data?
      Parse.readRoom(Rooms._selectedRoom, function(roomData) {
        Messages.updateToRoom(roomData);
      });
      Messages._data.forEach((message) => {
        if (message.username in Friends._data) {
          this.renderMessage(message, 'bestFriend');
        } else {
          this.renderMessage(message);
        }
      });
    }
  },

  renderMessage: function(message, extraClass = '') {
    MessagesView.$chats.append(MessageView.render({username: message.username, message: message.text, className: extraClass}));
  },


  handleClick: function(event) {
    Friends.toggleStatus($(event).text());
    //MessagesView.initialize();
    MessagesView.render();
  }

};