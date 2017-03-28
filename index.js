const readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout);

const getAns = (ans) => {
    if (ans == 'y') return true;
    return false;
};

function* rankings () {
    let first = "";
}; 



const rank = rankings();

rl.on('line', (line) => {
    console.log(rank.next(line).value);
}).on('close', () => {
  process.exit(0);
});
console.log('Write hello');