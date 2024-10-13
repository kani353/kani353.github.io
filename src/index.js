const fps = 24;
const frame = 1000 / fps;

const sheet = "[1]--[2]--[3]--[4]--[5]--[6]--";
let index = 0;

function drow(){
    if(index >= sheet.length){
        index = 0;
    }
    const animation = document.getElementById("testImg");
    const n = sheet.charAt(index);
    switch(n){
        case "[":{
            const brackets = sheet.indexOf("]", index);
            const count = brackets - index;
            const cellNumber = sheet.slice(index + 1, index + count);

            const img = cellNumber.padStart(4, "0");
            const fileName = `https://github.com/kani353/kani353.github.io/blob/main/img/${img}.png?raw=true`;
            animation.src = fileName;

            index += count + 1;
        }
        break;
        case "-":{
            index ++;
        }
    }
}

setInterval(drow, frame);
