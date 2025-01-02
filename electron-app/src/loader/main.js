const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");

let preloadWin, loaderInter;

loader = (win, settings) => {
  preloadWin = new BrowserWindow({
    width: 550,
    height: 250,
    resizable: false,
    frame: false,
    title: settings.title,
    icon: path.join(__dirname, "../", settings.icon),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  preloadWin.setMenuBarVisibility(false);
  preloadWin.loadFile(path.join(__dirname, "index.html"));

  loaderInter = setInterval(() => {
    win.webContents
      .executeJavaScript("document.body.getAttribute('data-loader')")
      .then((value) => {
        processLoad(value);

        if (parseInt(value, 10) !== 100) {
          return;
        }

        clearInterval(loaderInter);
        setTimeout(() => {
          preloadWin = "";
          win.setKiosk(true);
          win.show();
        }, 500);
      })
      .catch((error) => {
        clearInterval(loaderInter);
        dialog.showErrorBox(
          "Ошибка",
          "Ошибка #1: Не удалось считать параметр проекта."
        );
        app.quit();
      });
  }, 500);
};

processLoad = (num) => {
  const progress = preloadWin.webContents.executeJavaScript(
    "document.getElementById('progress').style.width = '" + num + "%';"
  );
};

exports.loaderInter = loaderInter;

module.exports = {
  loader,
  processLoad,
};
