package setUpClass.StepDefinition;

import java.util.List;
import java.util.Random;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import object_Element.Add_New_Patient_element;
import object_Element.Signup_element;
import setUpClass.BrowserSetUp;
import webApp.PerformAction;

public class Add_New_Patient extends BrowserSetUp{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	PerformAction wait = new PerformAction();
	Actions a=new Actions (driver);
	Random rad = new Random();
	String name = "" + rad.nextInt(100);
	@When("^Add the new \"([^\"]*)\"\\.$")
	public void add_the_new(String arg1) throws Throwable {
		WebDriverWait wait1 = new WebDriverWait(driver, 30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(Signup_element.close_alert_mesage)); 
			try {
						
				for(int i=0; i<2; i++) {
					 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
					 Thread.sleep(500);
				}
			}catch(Exception e) {
			
			}
			
			try {
		WebDriverWait wait2 = new WebDriverWait(driver, 30);
		wait2.until(ExpectedConditions.visibilityOfElementLocated(Add_New_Patient_element.Add_Patient));  
		webelement= driver.findElement(Add_New_Patient_element.Add_Patient);
		if(webelement.isDisplayed()) {
			webelement.click();
		}
		else {
			System.err.println("add Patient is not clicable");
		}
		}catch(Exception e) {
			System.out.println(e);
		}
		

	}

	@Then("^Enter \"([^\"]*)\" and \"([^\"]*)\"\\.$")
	public void enter_and(String arg1, String arg2) throws Throwable {
	 
	try {
		 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
		 Thread.sleep(500);
	}catch(Exception e) {
		System.out.println(e);
	}
	
	try {
	webelement= driver.findElement(Add_New_Patient_element.FN);
	if(webelement.isEnabled()) {
		webelement.click();
		webelement.sendKeys("Patient"+name);
		wait.implictywait(driver);
	}
	else {
		System.err.println("First Name field is empty data");
	}}catch(Exception e) {
		System.out.println(e);
	}
	
	
	try {
		webelement= driver.findElement(Add_New_Patient_element.LN);
		if(webelement.isEnabled()) {
			webelement.click();
			webelement.sendKeys("test"+name);
			wait.implictywait(driver);
		}
		else {
			System.err.println("last Name field is empty data");
		}}catch(Exception e) {
			System.out.println(e);
		}
	
	}

	@Then("^Select Gender$")
	public void select_Gender() throws Throwable {
	   try {
		   
		List<WebElement> Radio=driver.findElements(Add_New_Patient_element.Radio_button);	
		int randomValue = rad.nextInt(Radio.size()); // Getting a random value that is between 0 and (list's size)-1
		Radio.get(randomValue).click();
		Thread.sleep(2000);
	   }catch(Exception e) {
			System.out.println(e);
		}
	}

	@Then("^Enter Email address\\.$")
	public void enter_Email_address() throws Throwable {
		webelement= driver.findElement(Add_New_Patient_element.Email);
		webelement.click();
		webelement.sendKeys("qaautomation"+name+"@getnada.com");
		Thread.sleep(1000);
	}

	@Then("^Click on Next \"([^\"]*)\" button\\.$")
	public void click_on_button(String arg1) throws Throwable {
		webelement= driver.findElement(Add_New_Patient_element.Next_page);
		webelement.click();
		Thread.sleep(2000);
	}

	@Then("^Enter user Height and Weight\\.$")
	public void enter_user_and_Weight() throws Throwable {
		
		WebDriverWait wait1 = new WebDriverWait(driver, 30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(Signup_element.close_alert_mesage)); 
		try {
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(500);
		}catch(Exception e) {
			Assert.fail("Alert message is not dispalyed");
		}
	    
		try {
			webelement= driver.findElement(Add_New_Patient_element.heightInput);
			webelement.click();
			wait.implictywait(driver);
			webelement.sendKeys("170");
			wait.implictywait(driver);
			
			
		}catch(Exception e) {
			System.out.println(e);
		}
		
		try {
			webelement= driver.findElement(Add_New_Patient_element.weight);
			webelement.click();
			wait.implictywait(driver);
			webelement.sendKeys("75");
			wait.implictywait(driver);
		}catch(Exception e) {
			System.out.println(e);
		}
	}

	@Then("^Select main affected body part\\.$")
	public void select_main_affected_body_part() throws Throwable {
		try {
			webelement= driver.findElement(Add_New_Patient_element.affected);
			webelement.click();
			Thread.sleep(1000);
		}catch(Exception e) {
			System.out.println(e);
		}
	    
		try {
			
			List<WebElement> affected_part=driver.findElements(Add_New_Patient_element.affected_part);	
			int randomValue = rad.nextInt(affected_part.size()); // Getting a random value that is between 0 and (list's size)-1
			affected_part.get(randomValue).click();
			Thread.sleep(2000);
		
		
		}catch(Exception e) {
			System.out.println(e);
		}
		try {
		List<WebElement> Radio=driver.findElements(Add_New_Patient_element.Radio_button);	
		int random = rad.nextInt(Radio.size()); // Getting a random value that is between 0 and (list's size)-1
		Radio.get(random).click();
		Thread.sleep(2000);
		}catch(Exception e) {
			System.out.println(e);
		} 
	}

	@Then("^Select additional involved body part\\.$")
	public void select_additional_involved_body_part() throws Throwable {
		
	
		try {
		List<WebElement> Related_symptoms=driver.findElements(Add_New_Patient_element.Related_symptoms);	
		int random = rad.nextInt(Related_symptoms.size()); // Getting a random value that is between 0 and (list's size)-1
		Related_symptoms.get(random).click();
		Thread.sleep(2000);
		}catch(Exception e) {
			System.out.println(e);
		} 
	}

	@Then("^select Related symptoms\\.$")
	public void select_Related_symptoms() throws Throwable {
	    
		try {
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(500);
		}catch(Exception e) {
			System.out.println(e);
		}
		
		
		try {
			List<WebElement> Related_symptoms=driver.findElements(Add_New_Patient_element.Related_symptoms);	
			int random = rad.nextInt(Related_symptoms.size()); // Getting a random value that is between 0 and (list's size)-1
			Related_symptoms.get(random).click();
			Thread.sleep(2000);
			
		}catch(Exception e) {
			System.out.println(e);
		} 
	
	}
	

	@Then("^Select patient suffered from this problem option\\.$")
	public void select_patient_suffered_from_this_problem_option() throws Throwable {
		try {
			webelement= driver.findElement(Add_New_Patient_element.patient_suffered_duartion);
			webelement.click();
			Thread.sleep(500);
			
		}catch(Exception e) {
			System.out.println(e);
		} 
	    
		try {
			List<WebElement> Related_symptoms=driver.findElements(Add_New_Patient_element.affected_part);	
			int random = rad.nextInt(Related_symptoms.size()); // Getting a random value that is between 0 and (list's size)-1
			Related_symptoms.get(random).click();
			Thread.sleep(2000);
			
		}catch(Exception e) {
			System.out.println(e);
		} 
	try {
		List<WebElement> Radio=driver.findElements(Add_New_Patient_element.Radio_button);	
		int randomValue = rad.nextInt(Radio.size()); // Getting a random value that is between 0 and (list's size)-1
		Radio.get(randomValue).click();
		Thread.sleep(2000);
	}catch(Exception e) {
		System.out.println(e);
	} 
	}

	@Then("^Click on create care plan \"([^\"]*)\"\\.$")
	public void click_on(String arg1) throws Throwable {
	    
		try {
			webelement= driver.findElement(Add_New_Patient_element.create_paln);
			webelement.click();
			wait.implictywait(driver);
			Thread.sleep(500);
			log.info("create the Plan");
		}catch(Exception e) {
			System.out.println(e);
		} }

}
