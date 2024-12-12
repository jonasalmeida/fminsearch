console.log(`index.js loaded \n${Date()}`);
    
(async function(){
    const fms = await import('./fminsearch.mjs')    // import ES6 fminsearch module
    const logistic = fms.logistic
    const fminsearch = fms.fminsearch
    //test
    let x = [32,37,42,47,52,57,62,67,72,77,82,87,92];
    let y=[749,1525,1947,2201,2380,2537,2671,2758,2803,2943,3007,2979,2992]
    let fun = function(x,P){return x.map(function(xi){return (P[0]+1/(1/(P[1]*(xi-P[2]))+1/P[3]))})}
    model=fminsearch(fun,[100,30,10,5000],x,y)
    console.log(model)
})()