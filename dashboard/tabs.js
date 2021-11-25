// Reference: https://www.w3schools.com/howto/howto_js_tabs.asp
function openDashboard(dashboard) {
  if (dashboard === 'main') {
    window.location.href = './index.html';
  } else if (dashboard === 'secondary') {
    window.location.href = './secondary.html';
  }
}