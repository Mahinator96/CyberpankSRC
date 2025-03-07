import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  // Ищем файлы шрифтов .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      }))
    )
    // Конвертер ttf
    .pipe(fonter({
      formats: ['ttf']
    }))
    // Выгружаем
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
  // Ищем файлы шрифтов .ttf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
    }))
  )
  // Конвертер woff
  .pipe(fonter({
    formats: ['woff']
  }))
  // Выгружаем
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  // Ищем ttf 
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  // Конвертер в woff2
  .pipe(ttf2woff2())
  // Выгружаем
  .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontsStyle = () => {
  // Файл стилей подключения шрифтов
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

  fs.readdir(app.path.build.fonts, function(err, fontsFiles) {
		// Проверка на существование файлов шрифтов
    if (fontsFiles){
      // Проверка существует ли файл стилей для подключения шрифтов
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb); // Если файла нет - создаём

        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          // Записываем подключение шрифтов в файл стилей 
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700;
            } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(fontsFile,`@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
            newFileOnly = fontFileName;
          }
        }
      } else {
        // Если файл есть, выводим сообщение
        console.log("Файл scss/fonts.scss уже существует. Для обновления его нужно удалить")
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
}