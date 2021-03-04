for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while
var stop = false;
var index = 0;

while (!stop){
    index++;

    if(index == 10){
        stop = true;
        console.log(index, 'parando de rodar o while')
    }
}

// do while
do {
    index--;
    if(index == 0){
        stop = false;
        console.log(index);
    }
} while (stop);