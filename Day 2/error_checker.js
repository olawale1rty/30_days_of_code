/*
Day 2 of 30 Days Of Code

WWrite a JavaScript function to validate whether an argument of a  given valuetype is error or not.

Created on Thurs Mar 26 2020 12:34pm

@author: Mustapha Moshood Olawale 


*/
errorChecker = (input) => {


	if ( typeof(input) === 'string' ||  typeof(input) === 'number' || typeof(input) === 'boolean' ){
		
		console.log(typeof(input));
	}
	else{
		console.log('Error');
	};

	

};

errorChecker();