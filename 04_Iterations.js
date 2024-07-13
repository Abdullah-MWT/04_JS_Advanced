// +++++++++++++++++++  For Loop  ++++++++++++++++++++

// Basic for Loop
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    
}

// some Basic Projects of  for Loop


for (let i = 1; i<10; i++) {
       for (let j = 1; j < 16; j++) {
        const element = j;
        // console.log(`${i} x ${j} = ${i*j}`);
    }
}


for (let i = 1; i < 16; i++) {
    const element = i;
    // console.log(`6 x ${i}  = ${6 * i}`);
    
}


//  Using break in for loop
for (let i = 0; i <= 20; i++) {
    const element = i;
    if (element == 9) {
        console.log('num 9 is detected');
        break
    }
    console.log(element);
    
}



// Using Contineu in for loop
for (let i = 0; i <= 20; i++) {
    const element = i;
    if (element == 9) {
        console.log('num 9 is detected');
        continue                                                                                                                                  }
    console.log(element);
    
}