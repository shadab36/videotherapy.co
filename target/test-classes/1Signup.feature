@signup_test 
Feature: Sign up test on the videotherapy.co application 
Scenario: 
	Given navigate the application URL. 
	Then Click on Join now button. 
	Then Click on Clinician image. 
Scenario Outline: Signup test with invalid data. 
	Then Enter User First Name as "<First Name>". 
	Then Enter User Email Address as "<Email Address>". 
	Then Enter User Password as "<Password>" 
	Then Select Terms & Conditions check box. 
	Then Click on SignUp CTA. 
	Then Verify "<First NameVal>" validation message for First Name. 
	Then Verify "<Email AddressVal>" validation message for Email Address. 
	Then Verify "<PasswordVal>" validation message for Password. 
	Then Verify "<errormessage>" user is already existing or not. 
	Examples: 
		|First Name | Email Address       | Password  |First NameVal              |Email AddressVal                                       | PasswordVal                      |   errormessage                                     |
		|           |                     |           |Please fill out this field.|  Please fill out this field.                          | Please fill out this field.      |                                                    |
		| Test      |                     |           |                           |Please fill out this field.                            |Please fill out this field.       |                                                    |
		| Test      | Test@@gmail.com     |           |                           |A part following '@' should not contain the symbol '@'.|Please fill out this field.       |                                                    |
		| Test      | Test@gmail.com      |           |                           |                                                       |Please fill out this field.       |                                                    |
		|Test       |Test@getnada.com     |1234       |                           |                                                       |Please match the requested format.|                                                    |     
		|Test       |Test@getnada.com     |12345678   |                           |                                                       |                                  |                                                    |           
		
@signupTest_valid 
Scenario: 
	Then Refresh the page. 
	Then Click on Join now button. 
	Then Click on Clinician image. 
Scenario Outline: Data driving for valid sign-up. 
	Then Enter User First Name as "<First Name>". 
	Then Enter Email "<Email Address>". 
	Then Enter User Password as "<Password>" 
	Then Select Terms & Conditions check box. 
	Then Click on SignUp CTA. 
	Examples: 
		|First Name | Email Address       | Password  |
		|Test       |seleniumqa           |12345678   |		
		
@follow_the_instructions 
Scenario: 
	Then Close the Popup alert message. 
	Then click on "Next" button. 
	Then Fill last name and select radio button. 
	Then click on "Next" button. 
	Then Select Degree Title. 
	Then Select Experience Title. 
	Then click on "Next" button. 
	Then Select registarion code as "NO" 
	Then click on "Next" button. 
	Then Click on Finish Button.
	Then Hover on the profile image icon.
	Then Click on Logout button.
	
	Scenario:
	Then Login the application.

				                        