console.log(`index.js loaded \n${Date()}`);
    
(async function(){
    const fms = await import('./fminsearch.mjs')
    logistic = fms.logistic
})()