// Array of special characters to be included in password
var specialCharacters = ["!","@","#","$","%","&","*"];
// Array of numeric characters to be included in password
var numericCharacters = ["1","3","5","7","9","11"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a","e","h","j","o","k","p","s"];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ["B","C","D","L","R","Q","N"];
// Function to prompt user for password options

function getPasswordOptions() {
  var lengthPrompt = prompt("Length of Password?");
  var passLength = lengthPrompt;
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passLength) === true) {
      alert("Password length must be provided as a number");
      return;
}
var specialCharactersConfirm = confirm('Special Characters?');
    // Variable to store boolean regarding the inclusion of numeric characters
var numericCharactersConfirm = confirm('Numerical Characters?');
    // Variable to store boolean regarding the inclusion of lowercase characters
var lowerCasedCharactersConfirm = confirm('Lowercase Characters?');
    // Variable to store boolean regarding the inclusion of uppercase characters
var upperCasedCharactersConfirm = comfirm('Uppercase Characters?');
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (!upperCasedCharactersConfirm && !numericCharactersConfirm && !lowerCasedCharactersConfirm && !specialCharactersConfirm) {
      alert('Must select at least one character type');
      return;
  }   
   // Object to store user input variables
var passwordOptions = {
  special: specialCharactersConfirm,
  numeric: numericCharactersConfirm,
  lower: lowerCasedCharactersConfirm,
  upper: upperCasedCharactersConfirm,
};
    // Return the options object as the exported value of this function
  return passwordOptions;
}


// Write password to the #password input
function writePassword() {
// Runs the function that will generate the password
  var password = getPasswordOptions();
// Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
// Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
