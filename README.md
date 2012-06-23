

# fminsearch(fun,Parm0,x,y,Opt)

###Nonlinear regression in *javascript*.

The same function is kept (that is where it was originally developed) at <http://jmat.googlecode.com>, see <http://jmat.googlecode.com/git/jmat.js>. The purpose is to develope a simple heuristic for non-linear regression that makes the most of javascript's functional style, and specifically of Map-Reduce patterns, while demanding the least from the browser. The algorithm development has a core regression thread that is elaborated through the use of Options (Opt). These options range from the basic of setting the display and controlling the number of iterations, all the way to configuring the output variable, setting the cost function and executing paralelized Genetic Algorithm style  

####Example 1 - the core thread

	x = [32,37,42,47,52,57,62,67,72,77,82,87,92]
	y=[749,1525,1947,2201,2380,2537,2671,2758,2803,2943,3007,2979,2992]
	fun = function(x,P){return x.map(function(xi){return (P[0]+1/(1/(P[1]*(xi-P[2]))+1/P[3]))})}
	Parms=jmat.fminsearch(fun,[100,30,10,5000],x,y)
	
	Opt is an object will all other parameters, from the objective function (cost function), to the 
	number of iterations, initial step vector and the display switch, for example
	Parms=jmat.fminsearch(fun,[100,30,10,5000],x,y),{maxIter:10000,display:false})
![icon](https://github.com/jonasalmeida/fminsearch/raw/master/fit.png)