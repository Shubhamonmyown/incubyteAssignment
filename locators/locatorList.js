const { I, url } = inject();
module.exports = {
    locators: {
        homepage: 'https://magento.softwaretestingboard.com/',
        creatAccountlink: "//a[text()='Create an Account']",
        firstname: '//*[@id="firstname"]',
        lastname: '//*[@id="lastname"]',
        createEmail: '//*[@id="email_address"]',
        password: '//*[@id="password"]',
        confirmPassword: '//*[@id="password-confirmation"]',
        createAccountButton: "//button[.//span[text()='Create an Account']]",
        loginEmail: '//*[@id="email"]',
        loginPassword: '//*[@id="pass"]',
        signInLink: "//a[normalize-space(text())='Sign In']",
        signInButton: "//button[.//span[text()='Sign In']]",


    },
    Data: {
        firstname: 'Shubham',
        lastname: 'Kumar',
        password: 'Test@123',
    }
}
