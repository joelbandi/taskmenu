const { menubar } = require('menubar');

const mb = menubar({
  index: `https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1&authuser=${process.env.G_USER}`,
  showDockIcon: false
});

mb.on('ready', () => {
  mb.app.dock.hide();
});
mb.on('hide', () => {
  mb.app.dock.hide();
});
mb.on('after-hide', () => {
  mb.app.dock.hide();
});
mb.on('after-close', () => {
  mb.app.dock.hide();
});
mb.on('focus-lost', () => {
  mb.app.dock.hide();
});
