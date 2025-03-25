const locatorList = require("../locators/locatorList");
let emailId = "";
const { I } = inject();

// Comment: Function to generate a random email ID
function getEmailId() {
  let rand = "abcdefghijklmnopqrstuvwxyz1234567890";
  let domain = ["example.com", "test.com"];
  let emailid = "";
  for (let i = 1; i <= 8; i++) {
    emailid += rand[Math.floor(Math.random() * rand.length)];
  }
  emailid += "@" + domain[Math.floor(Math.random() * domain.length)];
  return emailid;
}

// Generate a new email ID and assign it
emailId = getEmailId();

// Comment: Step definition for opening the homepage
Given('I am on homepage', () => {
  try {
    I.amOnPage(locatorList.locators.homepage);
    I.wait(5);
  } catch (error) {
    console.error("Error navigating to homepage:", error);
  }
});

// Comment: Step for creating a new account
Then('I Go To create Account Page & Create An Account', () => {
  try {
    I.click(locatorList.locators.creatAccountlink);
    I.wait(5);
    I.fillField(locatorList.locators.firstname, locatorList.Data.firstname);
    I.fillField(locatorList.locators.lastname, locatorList.Data.lastname);
    I.fillField(locatorList.locators.createEmail, emailId);
    I.fillField(locatorList.locators.password, locatorList.Data.password);
    I.fillField(locatorList.locators.confirmPassword, locatorList.Data.password);
    // Scroll into view before clicking the button
    I.scrollIntoView(locatorList.locators.createAccountButton);
    I.click(locatorList.locators.createAccountButton);
    I.wait(10);
    // Take a screenshot after account creation
    I.saveScreenshot('AccountCreated.png');
  } catch (error) {
    console.error("Error creating account:", error);
  }
});

// Comment: Step for signing in with the created account
Then('I Sign In with created account', () => {
  try {
    I.click(locatorList.locators.signInLink);
    I.wait(3);
    I.fillField(locatorList.locators.loginEmail, emailId);
    I.fillField(locatorList.locators.loginPassword, locatorList.Data.password);
    I.click(locatorList.locators.signInButton);
    I.wait(5);

    // Take a screenshot after logging in
    I.saveScreenshot('LoggedIn.png');
  } catch (error) {
    console.error("Error signing in:", error);
  }
});