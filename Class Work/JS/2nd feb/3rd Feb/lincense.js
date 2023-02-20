// Task: Take user's age as input. Create a variable and log true if the person's age is greater than or equal to 18.
//  False otherwise.
// If the person's age is greater than or equal to 18, 
// log: "Your're eligible for taking license". 
// If not, then log the number of years left for the person to become eligible for a license.

const userAge = prompt("Enter your age: ");
const approval = userAge >= 18;
console.log(approval);
if(approval){
    alert("Your're eligible for taking license");
}
else{
    const leftAge = 18 - userAge;
    alert(`${leftAge} the number of years left for the person to become eligible for a license.`)
}
