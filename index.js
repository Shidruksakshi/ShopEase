import fs from 'fs'

fs.writeFileSync('hello.txt', 'Hello Node.js');


const data = fs.readFileSync('hello.txt', 'utf-8'); //utf = unicode transformation format
console.log(data);


