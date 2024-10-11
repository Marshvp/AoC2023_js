
const fs = require('node:fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data[0]);
    fs.writeFile('result.txt', data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('The file has been saved!');
    })
})