/*
Day 3 of 30 Days Of Code

Write a JavaScript function to count how many vowels are in an argument string.

Created on Fri Mar 26 2020 10:12pm

@author: Mustapha Moshood Olawale 


*/

monoTong = (input_value) => {
	let input = input_value.toLowerCase()
	let vowel = 'aeiou';
  	let output = 0;
  	 // This loop through the input and check if it is in the vowel. 
	for(let i = 0; i < input.length ; i++){
	    if (vowel.indexOf(input[i]) !== -1){
	      output += 1;
	    } 
	}
  	console.log(output);
};
monoTong('You ARE NOT A man')


