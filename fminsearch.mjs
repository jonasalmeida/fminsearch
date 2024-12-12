// moving fminsearch to ES6 - under development!

console.log(`fminsearch.mjs imported \n${Date()}`);

// illustrative examples of fun

function logistic(x,P){
    return x.map(
        xi => 1 / (1 + Math.exp(-(P[0] + (P[1] * xi))))
    )
}

// fminSearch

function fminsearch(fun,Parm0,x,y,Opt){// fun = function(x,Parm)
	// example
	//
	// x = [32,37,42,47,52,57,62,67,72,77,82,87,92];
    // y=[749,1525,1947,2201,2380,2537,2671,2758,2803,2943,3007,2979,2992]
	// fun = function(x,P){return x.map(function(xi){return (P[0]+1/(1/(P[1]*(xi-P[2]))+1/P[3]))})}
	// Parms=jmat.fminsearch(fun,[100,30,10,5000],x,y)
	//
	// Another test for the same function:
	// x=[32,37,42,47,52,57,62,67,72,77,82,87,92];y=[0,34,59,77,99,114,121,133,146,159,165,173,170];
	//
	// Opt is an object will all other parameters, from the objective function (cost function), to the 
	// number of iterations, initial step vector and the display switch, for example
	// Parms=fminsearch(fun,[100,30,10,5000],x,y,{maxIter:10000,display:false})
	
	if(!Opt){Opt={}};
	if(!Opt.maxIter){Opt.maxIter=1000};
	if(!Opt.step){// initial step is 1/100 of initial value (remember not to use zero in Parm0)
		Opt.step=Parm0.map(function(p){return p/100});
		Opt.step=Opt.step.map(function(si){if(si==0){return 1}else{ return si}}); // convert null steps into 1's
	};
	if(typeof(Opt.display)=='undefined'){Opt.display='console'};
	if(!Opt.objFun){Opt.objFun=function(y,yp){return y.map(function(yi,i){return Math.pow((yi-yp[i]),2)}).reduce(function(a,b){return a+b})}} // SSD default objective function being minimized
	let Model={}
	var ya,y0,yb,fP0,fP1;
	var P0=[...Parm0],P1=[...Parm0]; // clone parameter array to decouple passing by reference
	var n = P0.length;
	var step=Opt.step;
	function funEval(P){return Opt.objFun(y,fun(x,P))}//function evaluation for curent Parameter values to determine value of objective function, passed as a Opt parameter (Opt.objFun)
	// silly multi-univariate walk
	// assemble Model
	let model={
		Opt:Opt,
		x:x,
		y:y,
		parmi:P0, // initial parameter values
		fun:fun
	}
	for(var i=0;i<Opt.maxIter;i++){
		for(var j=0;j<n;j++){ // take a step for each parameter
			P1=[...P0];
			P1[j]+=step[j];
			if(funEval(P1)<funEval(P0)){ // if parm value going in the righ direction
				step[j]=1.2*step[j]; // then go a little faster
				P0=[...P1];
			}
			else{
				step[j]=-(0.5*step[j]); // otherwiese reverse and go slower
			}	
		}
		if(Opt.display=='console'){
			if(i==0){
				console.log('  i  ','  ObjFun ','  Parms ')
			}
			console.log(i+1,funEval(P0),P0)

			if((i>10)&&(funEval(P1)==funEval(P0))){
				break
			}
		}
			
			//{if(i>(Opt.maxIter-10)){console.log(i+1,funEval(P0),P0)}}
	}
	model.parmf=P0 // final parameter values
	return model
};

// test execution
/*
let x = [32,37,42,47,52,57,62,67,72,77,82,87,92];
let y=[749,1525,1947,2201,2380,2537,2671,2758,2803,2943,3007,2979,2992]
//x=[32,37,42,47,52,57,62,67,72,77,82,87,92];
//y=[0,34,59,77,99,114,121,133,146,159,165,173,170]
let fun = function(x,P){return x.map(function(xi){return (P[0]+1/(1/(P[1]*(xi-P[2]))+1/P[3]))})}
let Parms=fminsearch(fun,[100,30,10,5000],x,y)
*/


export {
    logistic,
    fminsearch
}

