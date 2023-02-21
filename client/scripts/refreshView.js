var RefreshView = {

  $refreshButton: $('.refreshButton'),

  initialise: function() {
    RefreshView.$refreshButton.on('click', RefreshView.onClick);
  },

  onClick: function() {
    event.preventDefault();
    Messages.updateToRoom(Rooms._selectedRoom);
  }

};