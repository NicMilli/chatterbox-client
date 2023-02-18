var RefreshView = {

  $refreshButton: $('.refreshButton'),

  initialise: function() {
    RefreshView.$refreshButton.on('click', RefreshView.onClick);
  },

  onClick: function() {
    App.fetch();
  }

};