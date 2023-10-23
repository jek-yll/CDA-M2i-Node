import fs from "fs"
import LineByLine from 'n-readlines';


const file = './nomDesRepertoires.txt';
const linerReader = new LineByLine(file);

let line = '';


while(line = linerReader.next()){
    const nomDuRepertoire = line.toString().trim()
    fs.mkdir(nomDuRepertoire, (err) => {
        if (err){
            console.log(err.message);
            return
        }
    })
}