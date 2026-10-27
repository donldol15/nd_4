
const fs = require('fs');
require('dotenv').config();


const filename = process.env.FILENAME;


fs.writeFile(filename, 'Hello! This is my text file.', (err) => {
    if (err) {
        console.log('Ошибка записи:', err.message);
        return;
    }

    console.log('Файл успешно создан и заполнен!');

    
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log('Ошибка чтения:', err.message);
            return;
        }

        console.log('Содержимое файла:', data);
    });
});
