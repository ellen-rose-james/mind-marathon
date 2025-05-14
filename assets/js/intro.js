// Redirect to login.html if accessed directly
if (!sessionStorage.getItem('loggedIn')) {
  window.location.href = 'login.html';
}