
# fminsearch(fun,Parm0,x,y,Opt)

###Multiparametric nonlinear regression in *javascript*.

The same function is kept (that is where it was originally developed) at <http://jmat.googlecode.com>, see <https://jmat.googlecode.com/git/jmat.js>. The purpose is to develope a simple heuristic for non-linear regression that makes the most of javascript's functional style, and specifically of Map-Reduce patterns, while demanding the least from the browser. The algorithm development has a core regression thread that is elaborated through the use of Options (Opt). These options range from the basic of setting the display and controlling the number of iterations, all the way to configuring the output variable, setting th cost function and executing paralelized Genetic Algorithm style.

###Core algorithm

The core algorithm is a variation on the golden rule of speeding changes in the values of the parameters that decrease the objective function (cost function), while reversing and slowing it down otherwiese. Accordingly, the core algorithm only really has two lines

```
for(var j=0;j<n;j++){ // take a step for each parameter
	P1=cloneVector(P0);
	P1[j]+=step[j];
	if(funParm(P1)<funParm(P0)){ // if parm value going in the righ direction
		step[j]=1.2*step[j]; // go a little faster
		P0=cloneVector(P1);
	}
	else{ // if not
		step[j]=-(0.5*step[j]); // reverse and go slower
	}	
} 
```

	
(...)

####Example - the core thread applied to a 4 variable function

	x = [32,37,42,47,52,57,62,67,72,77,82,87,92]
	y=[749,1525,1947,2201,2380,2537,2671,2758,2803,2943,3007,2979,2992]
	fun = function(x,P){return x.map(function(xi){return (P[0]+1/(1/(P[1]*(xi-P[2]))+1/P[3]))})}
	Parms=jmat.fminsearch(fun,[100,30,10,5000],x,y)
	
	Opt is an object will all other parameters, from the objective function (cost function), to the 
	number of iterations, initial step vector and the display switch, for example
	Parms=jmat.fminsearch(fun,[100,30,10,5000],x,y),{maxIter:10000,display:false})
![icon](https://github.com/jonasalmeida/fminsearch/raw/master/fit.png)
