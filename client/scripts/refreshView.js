var RefreshView = {

  $refreshButton: $('.refreshButton'),

  initialise: function() {
    RefreshView.$refreshButton.on('click', RefreshView.onClick);
  },

  onClick: function() {
    Rooms._data.forEach((room) => {
      Messages.updateToRoom(room);
    });
    MessagesView.render(Messages._roomData[Rooms._selectedRoom]);
  }

};