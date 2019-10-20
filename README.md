To package the app, use the following command:

For Mac:

electron-packager . 'App Name' --platform=darwin --arch=x64 --icon=icons/icon.icns --asar --out=release --overwrite

For Windows:

electron-packager . 'App Name' --platform=win32 --arch=x64 --icon=icons/icon.icns --asar --out=release --overwrite
