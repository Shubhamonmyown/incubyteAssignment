Feature: SignUp&Login
  In order to check Account 

  Scenario: SignUp 
    Given I am on homepage
    Then I Go To create Account Page & Create An Account
    
  Scenario: SignIn
    Given I am on homepage
    Then I Sign In with created account
