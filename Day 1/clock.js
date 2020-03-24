const date = new Date();

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(`Today is: ${days[date.getDay()]}`);




console.log(`Current time is: ${date.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) }`); 