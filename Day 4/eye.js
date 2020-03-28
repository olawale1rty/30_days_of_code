/*
Day 4 of 30 Days Of Code

Write a JavaScript program to get a list of elements that exist in two separate arrays

Created on Sat Mar 28 2020 2:50pm

@author: Mustapha Moshood Olawale 


*/

get_list = (array_1, array_2) => {
		let output_list = [ ]
		array_1.forEach( array = (value) => {
			for(let i = 0; i < array_2.length; i++){
				if(value == array_2[i]){
					output_list.push(value)
				}
			}
		}
		);
		console.log(output_list)
};
get_list([2, 'g', 'b', 90, 7, 'h', 0, 'c'], ['a', 2, 2, 7,'b', 0,])

 