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

////

year=[1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
cellPhone=[12.69, 16.35, 20.29, 25.08, 30.81, 38.75, 45, 49.16, 55.15, 62.852, 68.63, 76.64, 82.47, 85.68, 89.14, 91.86, 95.28, 98.17]



