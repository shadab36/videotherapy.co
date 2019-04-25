package setUpClass.StepDefinition;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import object_Element.Add_New_Patient_element;
import object_Element.Signup_element;
import setUpClass.BrowserSetUp;

public class Assignworkout_Patient extends BrowserSetUp {
	JavascriptExecutor js = (JavascriptExecutor) driver;
	@SuppressWarnings("deprecation")
	@When("^Click on attach \"([^\"]*)\" icon\\.$")
	public void click_on_icon(String arg1) throws Throwable {
		
		
		
		try {
			WebDriverWait wait1 = new WebDriverWait(driver, 30);
			wait1.until(ExpectedConditions.visibilityOfElementLocated(Signup_element.close_alert_mesage)); 
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(500);
		}catch(Exception e) {
		}
			try {
				
			webelement= driver.findElement(Add_New_Patient_element.attach_icon);
			if(webelement.isDisplayed()) {
				webelement.click();
				wait(10);	
			}
			}catch(Exception e) {
				Assert.fail("attach icon is not displayed");
			}	
		
	}

	@Then("^Click on patientItem list\\.$")
	public void click_on_patientItem_list() throws Throwable {
	    
		try {
			
			webelement= driver.findElement(Add_New_Patient_element.check_box);
			if(webelement.isDisplayed()) {
				webelement.click();
				wait(10);	
			}
			}catch(Exception e) {
				Assert.fail("patient list  icon is clickable");
			}	
	}
 
	@Then("^Click on Assign to patients Button\\.$")
	public void click_on_Assign_to_patients_Button() throws Throwable {
   try {
			
			webelement= driver.findElement(Add_New_Patient_element.Assign_patient);
			if(webelement.isDisplayed()) {
				webelement.click();
				wait(10);	
			}
			}catch(Exception e) {
				Assert.fail("Click action is not perform");
			}	
	
	    
	}

	@Then("^Click on Procced \"([^\"]*)\" option\\.$")
	public void click_on_option(String arg1) throws Throwable {
	    
		  try {
				
				webelement= driver.findElement(Add_New_Patient_element.Proceed);
				if(webelement.isDisplayed()) {
					webelement.click();
					wait(10);	
				}
				}catch(Exception e) {
					Assert.fail("Click action is not perform");
				}	
		
		    
		
	}

	@Then("^Select the current date and select the start time\\.$")
	public void slect_the_current_date_and_slect_the_start_time() throws Throwable {
		try {
		webelement= driver.findElement(Add_New_Patient_element.Current_Day);
		if(webelement.isDisplayed()) {
			webelement.click();
			wait(10);	
		}

		}catch(Exception e) {
			Assert.fail("Date is not selected");
		}	
		try {
			webelement= driver.findElement(Add_New_Patient_element.start_time);
			if(webelement.isDisplayed()) {
				webelement.click();
				wait(10);	
			}

			}catch(Exception e) {
				Assert.fail("Date is not selected");
			}	

		try {
			webelement= driver.findElement(Add_New_Patient_element.time);
				webelement.click();
				wait(10);	
			Thread.sleep(1000);
		}catch(Exception e) {
			Assert.fail("Time slot is not clickable");
		}
		
		try {
			webelement= driver.findElement(Add_New_Patient_element.ok);
			webelement.click();
			wait(10);	
		Thread.sleep(1000);
		}catch(Exception e) {
			Assert.fail("Unable to click on Ok button");
		}
}   
	

	@Then("^Submit the applicaton\\.$")
	public void submit_the_applicaton() throws Throwable {
		try {
			webelement= driver.findElement(Add_New_Patient_element.submit);
				webelement.click();
				wait(10);	
			Thread.sleep(1000);
		}catch(Exception e) {
			Assert.fail("Time slot is not clickable");
		}
		
	    
	}


}
