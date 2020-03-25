/*
Day 0 of 30 Days Of Code

Write a program to display the current day and time in the following format. 
Sample Output: Today is: Tuesday
Current time is: 10PM:30:38

Created on Tues Mar 24 2020 11:12pm

@author: Mustapha Moshood Olawale 


*/


const date = new Date();

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(`Today is: ${days[date.getDay()]}`);




console.log(`Current time is: ${date.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) }`); 