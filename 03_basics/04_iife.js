//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log('DB CONNECTED');
    
})();  /* we hve to put semicolon after the fuction*/
(() => {
    console.log('DB CONNECTED TWO');
    
})()