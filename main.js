const electron = require('electron');

const { app, BrowserWindow } = electron;
let win;

app.on('ready', () => {
  win = new BrowserWindow({
    height: 200,
    width: 200,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
});
