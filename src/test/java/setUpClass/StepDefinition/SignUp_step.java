package setUpClass.StepDefinition;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Object_Element.Object_element;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import setUpClass.BrowserSetUp;
import webApp.PerformAction;

public class SignUp_step extends BrowserSetUp {
	Actions ac = new Actions(driver);
	public static String expectedTitle;
	PerformAction wait = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions a=new Actions (driver);
	public static String Email_Address;
	public static String Email_test;
	Random rad = new Random();
	String name = "" + rad.nextInt(1000);

				// Open web site URl
		@Given("^navigate the application URL\\.$")
		public void open_the_website_url() throws Throwable {
			driver.get(AppURL);
		    driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
			log.info("It's opening the website URL");
		}
		

@Then("^Click on Join now button\\.$")
public void click_on_Sign_up_button() throws Throwable {
	
	webelement= driver.findElement(Object_element.Join_now);
	try {
	if(webelement.isDisplayed()) {
	wait.implictywait(driver);
	setclickmethod();
	log.info("Click on Join Button");
	}}
	catch(Exception e){
	System.err.println(e);
}   
}
@Then("^Click on Clinician image\\.$")
public void  Clinician_image() throws InterruptedException {
	 WebDriverWait wait1 = new WebDriverWait(driver, 30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(Object_element.Clinician)); 
		
	webelement= driver.findElement(Object_element.Clinician);
	wait.implictywait(driver);
	setclickmethod();
	Thread.sleep(1000);
	log.info("register as Clinician user");
}

@Then("^Enter User First Name as \"([^\"]*)\"\\.$")
public void enter_User_First_Name_as(String arg1) throws Throwable {
	webelement= driver.findElement(Object_element.First_Name);
	setsendmethod(arg1);
	Thread.sleep(1000);
	log.info("Enter the user name");
}

@Then("^Enter User Email Address as \"([^\"]*)\"\\.$")
public void enter_User_Email_Address_as(String arg1) throws Throwable {
	webelement= driver.findElement(Object_element.User_Email);
	setsendmethod(arg1);
	log.info("Enter the user Email address");
}

@Then("^Enter User Password as \"([^\"]*)\"$")
public void enter_User_Password_as(String arg1) throws Throwable {
	webelement= driver.findElement(Object_element.User_password);
	setsendmethod(arg1);
	log.info("Enter the user password");

}
@Then("^Select Terms & Conditions check box\\.$")
public void select_Terms_Conditions_check_box() throws Throwable {

//	Object checkbox = js.executeScript("return document.getElementById('termst').checked;");
//	System.out.println("test"+checkbox);

	  if(!(Boolean) js.executeScript("return document.getElementById('termst').checked;")) {
		  js.executeScript("return document.getElementById('termst').click();"); 
		  log.info("Select the checkbox for term and condition policy");
	  }
}
@Then("^Click on SignUp CTA\\.$")
public void click_on_SignUp_CTA() throws Throwable {
	webelement= driver.findElement(Object_element.sign_up);
	setclickmethod();  
	log.info("Click on submit button");
}



@Then("^Verify \"([^\"]*)\" validation message for First Name\\.$")
public void verify_validation_message_for_First_Name(String arg1) throws Throwable {
	try {
		Object Email_validation = js
				.executeScript("return document.getElementById('firstNameT').validationMessage");
		wait.implictywait(driver);
		System.out.println(Email_validation);
		wait.implictywait(driver);
		log.info("It's getting HTML5 validation message for email address using JS executor");
		 Assert.assertEquals(Email_validation, arg1);
		wait.implictywait(driver);
		log.info("verify validation message for First Name");
	} catch (NoSuchElementException NSEt) {

	}
	
  
}
@Then("^Verify \"([^\"]*)\" validation message for Email Address\\.$")
public void verify_validation_message_for_Email_Address(String arg1) throws Throwable {
	try {
		Object Email_validation = js
				.executeScript("return document.getElementById('username2T').validationMessage");
		wait.implictywait(driver);
		System.out.println(Email_validation);
		wait.implictywait(driver);
		log.info("It's getting HTML5 validation message for email address using JS executor");
		 Assert.assertEquals(Email_validation, arg1);
		wait.implictywait(driver);
		log.info("verify validation message for Email Address");
	} catch (NoSuchElementException NEmail) {
  System.out.println(NEmail);
	}   
    
}

@Then("^Verify \"([^\"]*)\" validation message for Password\\.$")
public void verify_validation_message_for_Password(String arg1) throws Throwable {
	try {
		Object Email_validation = js
				.executeScript("return document.getElementById('password2T').validationMessage");
		wait.implictywait(driver);
		System.out.println(Email_validation);
		wait.implictywait(driver);
		log.info("It's getting HTML5 validation message for email address using JS executor");
		 Assert.assertEquals(Email_validation, arg1);
		wait.implictywait(driver);
		log.info("verify validation message for Password");
	} catch (Exception Nt) {
System.out.print(Nt);
	}     
    
}

@Then("^Verify \"([^\"]*)\" user is already existing or not\\.$")
public void error_messge_regitered_user(String error) {
	try {
		String signin_error = driver.findElement(Object_element.Error).getText();
		wait.implictywait(driver);
		 Assert.assertEquals(error, signin_error);
		wait.implictywait(driver);
		log.info("It's verify the user login credentials");
	} catch (NoSuchElementException NF) {

	}
}

@Then("^Enter Email \"([^\"]*)\"\\.$")
public void enter_new_mail(String mail) throws Throwable{
	webelement= driver.findElement(Object_element.User_Email);
	setclickmethod();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	webelement.clear();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	Email_test = mail + name;
	Email_Address = mail + name + "@getnada.com";
	setsendmethod(Email_Address);
	System.err.println(Email_Address);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	log.info("Enter the random email address");
}
@Then ("^Close the Popup alert message\\.$")
public void close_popup() throws Throwable{
	try {
		
		webelement=	driver.findElement(Object_element.Close_popup);
		if(webelement.isDisplayed())
		wait.implictywait(driver);
		setclickmethod();
	     log.info("close the poup alert message");
	}catch(NoSuchElementException popup) {
		System.out.println(popup);
	}
		
}
@Then("^click on \"([^\"]*)\" button\\.$")
public void click_on_button(String arg1) throws Throwable {

	try {
	webelement=	driver.findElement(Object_element.Next);
	setclickmethod();
     log.info("click on Next button");
	}catch(Exception e) {
		System.out.println(e);
	}
}

@Then("^Fill last name and select radio button\\.$")
public void fill_last_name_and_select_radio_button() throws Throwable {
	try {
	webelement=driver.findElement(Object_element.Last_Name);
	setsendmethod("Test");
	
	webelement=driver.findElement(Object_element.Radio);
	setclickmethod();
	log.info("Fills Last name");
	}catch(Exception e) {
		System.out.println(e);
	}
}

@Then("^Select Degree Title\\.$")
public void select_Degree_and_Experience_Title() throws Throwable {
	try {
		webelement=driver.findElement(Object_element.Degree_Title);
		setclickmethod();
		
		List<WebElement> Degree_title=driver.findElements(Object_element.select_degree_Title);	
		int randomValue = rad.nextInt(Degree_title.size()); // Getting a random value that is between 0 and (list's size)-1
		Degree_title.get(randomValue).click();
		Thread.sleep(2000);
	log.info("Select Degree Title");	
	}catch(Exception nschy) {
		System.out.println("Unable to select degree title");
	}
}
	@Then("^Select Experience Title\\.$")
	public void experience_title() {
		try {
			webelement=driver.findElement(Object_element.Experience);
			ac.click(webelement).build().perform();
			Thread.sleep(1000);
			List<WebElement> Experience_title=driver.findElements(Object_element.Select_Experience);	
			int randomValue = rad.nextInt(Experience_title.size()); // Getting a random value that is between 0 and (list's size)-1
			Experience_title.get(randomValue).click();
			Thread.sleep(2000);
			log.info("Select Experience Title");	
		}catch(Exception e2) {
			System.out.println(e2);
		}
	
}
@Then("^Select registarion code as \"([^\"]*)\"$")
public void select_registarion_code_as(String arg1) throws Throwable {
   
	webelement=driver.findElement(Object_element.Registration_code_radio);	
	setclickmethod();
	Thread.sleep(1000);
	log.info("Slecting No as registration code");	
}

@Then("^Click on Finish Button\\.$")
public void click_on_Finish_Button() throws Throwable {
	WebElement finish=driver.findElement(By.xpath("(//span[text()='Finish'])[2]"));
	finish.click();
	Thread.sleep(1000);
	log.info("Click on Finish button");  

	
}
@Then("^Refresh the page\\.$")
public void refresh_the_page() throws Throwable {
	driver.navigate().refresh();
	   driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
}


@Then ("^Hover on the profile image icon\\.$")
public void profile() throws Throwable{
	 WebDriverWait wait1 = new WebDriverWait(driver, 30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(Object_element.profile)); 
		
		try {
			webelement=driver.findElement(Object_element.close_alert_mesage);
			for(int i=0; i<2; i++) {
			if(webelement.isDisplayed()) {
					webelement.click();	
			}
			}
		}catch(Exception e) {
			
		}
	webelement = driver.findElement(Object_element.profile);
	ac.moveToElement(webelement).build().perform();
	Thread.sleep(1000);
	
}

@Then ("^Click on Logout button\\.$")
	public void logout() throws Throwable{
	
	webelement = driver.findElement(Object_element.logout);
	js.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;');",webelement);
	Thread.sleep(3000);
	setclickmethod();
}



@Then ("^Login the application\\.$")
public void login() throws Throwable{
	
	webelement = driver.findElement(Object_element.Login_link);
	setclickmethod();
	
	webelement =  driver.findElement(Object_element.Login_email);
	setsendmethod(Email_Address);
	
	webelement = driver.findElement(Object_element.Login_pass);
	setsendmethod("12345678");
	
	webelement = driver.findElement(Object_element.login_cta);
	setclickmethod();
	
	
	
}
public void setsendmethod(String arg1) throws Throwable{
	webelement.click();
	Thread.sleep(500);
	wait.implictywait(driver);
	webelement.clear();
	Thread.sleep(500);
	webelement.sendKeys(arg1);
	Thread.sleep(500);
	wait.implictywait(driver);
}
public void setclickmethod() throws InterruptedException{
	webelement.click();
	wait.implictywait(driver);
	Thread.sleep(500);

}
}