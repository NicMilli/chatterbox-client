// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  toggleStatus: function(username) {
    if (username in Friends._data) {
      localStorage.setItem(`ChatterBox-${username}`, false);
      delete Friends._data[username];
      alert(`You have succesfully removed ${$(username).text()} as a friend`);
    } else {
      if (username !== App.username) {
        localStorage.setItem(`ChatterBox-${username}`, true);
        Friends._data[username] = true;
        alert(`You have succesfully added ${username} as a friend`);
      }
    }
  }

};