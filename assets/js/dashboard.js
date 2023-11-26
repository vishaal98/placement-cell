console.log("I am here");

// Replace 'userName' with the user's actual name
let userName = document.querySelector("div.profile-info h2").innerText;
// Split the user's name into words
let words = userName.split(" ");

// Get the first letter of the first and last word
let initials =
  words[0].charAt(0).toUpperCase() +
  (words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : "");
console.log(initials);
// Display the initials in the profile image section
document.getElementById("initials").textContent = initials;
