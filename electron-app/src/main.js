const { app, BrowserWindow, globalShortcut, dialog } = require("electron");
const path = require("path");
const url = require("url");
const { loader, processLoad, loaderInter } = require("./loader/main");

const settings = {
  title: "XU-301224",
  icon: "icon.ico",
};

let win, preloadWin;

function createWindow() {
  win = new BrowserWindow({
    show: false,
    title: settings.title,
    icon: path.join(__dirname, settings.icon),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.setMenuBarVisibility(false);
  win.loadURL("http://localhost:5000/");

  loader(win, settings);

  // preloadWin.webContents.openDevTools();
  // win.webContents.openDevTools();
}

app.on("ready", () => {
  createWindow();
  globalShortcut.register("Escape", () => {
    clearInterval(loaderInter);
    app.quit();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    clearInterval(loaderInter);
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
