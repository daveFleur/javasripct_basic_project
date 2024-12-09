'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();

// Your code here

//"first_name": "Tally", "last_name": "Lillyman", "age": 22, "gender": "F", 
//"gender_interest": "X", "location": "city", "min_age_interest": 30, "max_age_interest": 66 },

const myProfile = {
    first_name: "Dave",
    last_name: "Flores",
    age: 23,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 20,
    max_age_interest: 30
}


let userProfile = {
    
};

//Name
let firstName = "";

while (firstName === "") {
    firstName = prompt("What is your first name?");
    if (firstName === "") {
        console.log("Please input a name!");
    }
}

userProfile.first_name = firstName;

//Last name
let lastName = "";

while (lastName === "") {
    lastName = prompt("What is your last name?");
    if (lastName === "") {
        console.log("Please input a last name!");
    }
}

userProfile.last_name = lastName;

//Age
let userAge = "";

while (true) {
    userAge = prompt("What is your age?");

    if (isNaN(userAge)) {
        console.log("Please enter a number!");
    }

    else if (userAge >= 18) {
        break;
    } else {
        console.log("You must be at least 18 years of age!");
    }
}

userProfile.age = Number(userAge);

//Gender
let userGender = "";

while (true) {
    userGender = prompt("What is your gender? (M, F, X)");

    userGender = userGender.toUpperCase();

    if (["M","F","X"].includes(userGender)) {
        break;
    } else {
        console.log("Please choose M, F or X (Other)!");
    }
}

userProfile.gender = userGender;

//Gender interest
let genderInterest = "";

while (true) {
    genderInterest = prompt("What gender are you interested in? (M, F, X)");

    genderInterest = genderInterest.toUpperCase();

    if (["M","F","X"].includes(genderInterest)) {
        break;
    } else {
        console.log("Please choose M, F or X (Other)!");
    }
}

userProfile.gender_interest = genderInterest;

//Location
let userLocation = "";

while (true) {
    userLocation = prompt ("Where do you live? City or rural?");

    userLocation = userLocation.toLowerCase();

    if (["city","rural"].includes(userLocation)) {
        break;
    } else {
        console.log ("Your location must be either city or rural!");
    }
}

userProfile.location = userLocation;

//Minimum interested age
let minimumInterestedAge = "";

while(true) {
    minimumInterestedAge = prompt("What is the minimum age you are interested in?");

    if (isNaN(minimumInterestedAge)) {
        console.log("Please enter a number!");
    }

    else if (minimumInterestedAge >= 18) {
        break;
    } else {
        console.log("The minimum age is 18.");
    }
}

userProfile.min_age_interest = Number(minimumInterestedAge);

//Maximum interested age
let maximumInterestedAge = "";

while (true) {
    maximumInterestedAge = prompt("What is the maximum age you are interested in?");

    if (isNaN(maximumInterestedAge)) {
        console.log("Please input a number!");
    }

    else if (maximumInterestedAge > minimumInterestedAge) {
        break;
    } else {
        console.log("The maximum age must be higher than your minimum!");
    }
}

userProfile.max_age_interest = Number(maximumInterestedAge);

console.log(userProfile);





//Matching

let matches = 0;
let matchedProfiles = [];

for (let i = 0; i < mockData.length; i++) {

    const matchProfile = mockData[i];

    let ageMatch = (userProfile.age >= matchProfile.min_age_interest && userProfile.age <= matchProfile.max_age_interest);
    let profileAgeMatch = (matchProfile.age >= userProfile.min_age_interest && matchProfile.age <= userProfile.max_age_interest);

    let genderMatch = (userProfile.gender === matchProfile.gender_interest);
    let profileGenderMatch = (matchProfile.gender === userProfile.gender_interest);

    let locationMatch = (userProfile.location === matchProfile.location);

    if (ageMatch && profileAgeMatch && genderMatch && profileGenderMatch && locationMatch) {

        matches++;

        matchedProfiles.push({
            Name:matchProfile.first_name,
            Last_Name: matchProfile.last_name,
            Age: matchProfile.age,
            Location: matchProfile.location
        });
    }
}

if (matches > 0 ) {
    console.log(`You have ${matches} matches! Here's a list of people you matched with:`);
    console.table(matchedProfiles);
} else {
    console.log("You have no matches...");
}

