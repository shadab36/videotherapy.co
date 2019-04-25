package setUpClass.StepDefinition;

import java.util.List;
import java.util.Random;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import object_Element.Add_New_Patient_element;
import object_Element.Signup_element;
import setUpClass.BrowserSetUp;
import webApp.PerformAction;

public class Add_Workout extends BrowserSetUp{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	PerformAction wait = new PerformAction();
	Random rad = new Random();
	String name = "" + rad.nextInt(100);
	@When("^Click on play LIBRARY \"([^\"]*)\" button\\.$")
	public void click_on_play_button(String arg1) throws Throwable {
		WebDriverWait wait1 = new WebDriverWait(driver, 30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(Signup_element.close_alert_mesage)); 
			try {
						
				for(int i=0; i<4; i++) {
					 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
					 Thread.sleep(500);
				}
			}catch(Exception e) {
				System.out.println(e);
			}
			
			try {
				
				webelement= driver.findElement(Add_New_Patient_element.Play_library);
				webelement.click();
				wait(20);
				Thread.sleep(4000);
			}catch(Exception e) {
				System.out.println(e);
			}
	}

	@Then ("^Click on Add Workout button\\.$")
	public void add_workout() throws Throwable {	
		
		Thread.sleep(1000);
		try {
			
			js.executeScript("return document.getElementsByClassName('title')[0].click();");
			Thread.sleep(1000);
			
			}catch(Exception e) {
				System.out.println(e);
			}
		
		
		
	
		
}
	@Then("^Enter Workout name and add Muscles strength\\.$")
	public void enter_Workout_name_and_add_Muscles_strength() throws Throwable {
		Thread.sleep(2000);
		try {
			for(int i=0; i<4; i++) {
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(500);
			}
	}catch(Exception e) {
		
	
			
			}
		try {
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.elementToBeClickable(Add_New_Patient_element.Workout_Name));	
		webelement= driver.findElement(Add_New_Patient_element.Workout_Name);
		if(webelement.isDisplayed()) {
			webelement.click();
			wait(10);	
		webelement.sendKeys("WorkOut"+name);
		wait(20);
		}
		}catch(Exception e) {
			
		}
		try {
			List<WebElement> Muscles_strength=driver.findElements(Add_New_Patient_element.Muscles_strength);	
			int randomValue = rad.nextInt(Muscles_strength.size()); // Getting a random value that is between 0 and (list's size)-1
			Muscles_strength.get(randomValue).click();
			Thread.sleep(2000);
		}catch(Exception e) {
			
		}
		
		
		try {
			for(int i=0; i<2; i++) {
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(500);
			}
	}catch(Exception e) {
		
	}
		
	}



	@Then("^Finish the workout\\.$")
	public void finish_the_workout() throws Throwable {
		webelement= driver.findElement(Add_New_Patient_element.finish);
		if(webelement.isDisplayed()) {
			webelement.click();
			wait(10);	
		}
	}
}
