# gulpFull
## Полноценная минимальная сборка Gulp.
### gulp v1.0

Возможности:
- Компилирует код из .scss в .css и сохраняет в папке dist/css *(плагины: gulp-sass и sass)*
- Объединяет шаблоны .html из папки src/html в единый index.html файл *(плагин: gulp-file-include)*
- Переносит изображения из папки src/images в dist/images, перед этим сжимая их без потери качества *(плагин: gulp-imagemin)*
- Отслеживает уже изменённые изображения, чтобы не создавать дополнительные копии *(плагин: gulp-newer)*
- Разворачивает локальный сервер и открывает файл dist/index.html в браузере *(плагин: browser-sync)*
- Отслеживает изменения в файлах .html и .css и показывает их в режиме реального времени в браузере *(функция: watcher)*
- Очищает папку dist перед каждым запуском gulp (чтобы в dist не хранилась куча уже удалённых из src файлов) *(плагин: del)*
____
Инструкция:
- Копируем папки: **gulp** и **src**, копируем файлы: **gulpfile.js** и **package.json** в папку с новым проектом
- Открываем терминал в папке и пишем команду **npm i -D gulp**
- Запускаем gulp
