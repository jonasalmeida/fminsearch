// moving fminsearch to ES6 - under development!

console.log(`fminsearch.mjs imported \n${Date()}`);

// illustrative examples of fun

function logistic(x,P){
    return x.map(
        xi => 1 / (1 + Math.exp(-(P[0] + (P[1] * xi))))
    )
}


export {
    logistic
}

