// fizz buzz

// 3 6 9 12 fizz
// 5 10 15 20 buzz
// 15 30 45 fizz buzz



for(let i =1; i<=100;i++){
    if(i%15===0){
        console.log(`${i} fizz buzz`);
    }
    else if(i % 3 === 0){
        console.log(`${i} fizz`);
        continue;
    }else if(i % 5 === 0){
        console.log(`${i} buzz`);
        continue;
    }
    console.log(i);
}