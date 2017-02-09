(function() {
  var homeNavTag = document.querySelector('.nav-bar-home');
  homeNavTag.style.backgroundColor = 'white';
  homeNavTag.style.borderBottom = 'none';
})();

var homePage = function() {
  var profileView = document.querySelector('.profile-content');
  profileView.style.display = 'none';

  var profileNavTag = document.querySelector('.nav-bar-profile');
  profileNavTag.style.backgroundColor = '#6495ED';
  profileNavTag.style.borderBottom = '2px solid blue';

  var homeView = document.querySelector('.home-content');
  homeView.style.display = 'block';

  var homeNavTag = document.querySelector('.nav-bar-home');
  homeNavTag.style.backgroundColor = 'white';
  homeNavTag.style.borderBottom = 'none';


};

var profilePage = function() {
  var homeView = document.querySelector('.home-content');
  homeView.style.display = 'none';

  var homeNavTag = document.querySelector('.nav-bar-home');
  homeNavTag.style.backgroundColor = '#6495ED';
  homeNavTag.style.borderBottom = '2px solid blue';

  var profileView = document.querySelector('.profile-content');
  profileView.style.display = 'block';
  
  var profileNavTag = document.querySelector('.nav-bar-profile');
  profileNavTag.style.backgroundColor = 'white';
  profileNavTag.style.borderBottom = 'none';

};