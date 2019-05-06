package setUpClass.StepDefinition;

import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import object_Element.Add_New_Patient_element;
import setUpClass.BrowserSetUp;
import webApp.PerformAction;

public class Add_Workout extends BrowserSetUp{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	PerformAction wait = new PerformAction();
	Random rad = new Random();
	String name = "" + rad.nextInt(100);
	@When("^Click on play LIBRARY \"([^\"]*)\" button\\.$")
	public void click_on_play_button(String arg1){
		  driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		  
		  
			try {
						
				for(int i=0; i<4; i++) {
					 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
					 Thread.sleep(500);
				}
			}catch(Exception e) {
				
			}
			
			try {
				WebDriverWait wait = new WebDriverWait(driver, 60);
				  wait.until(ExpectedConditions.elementToBeClickable(Add_New_Patient_element.Play_library));
				webelement= driver.findElement(Add_New_Patient_element.Play_library);
				webelement.click();
				Thread.sleep(4000);
			}catch(Exception e) {
				System.out.println(e);
			}
	}

	@Then ("^Click on Add Workout button\\.$")
	public void add_workout() {	
		
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e1) {
			
		}
		try {
			
			js.executeScript("return document.getElementsByClassName('title')[0].click();");
			Thread.sleep(1000);
			
			}catch(Exception e) {
				
			}
}
	@Then("^Enter Workout name\\.$")
	public void enter_Workout_name_and_add_Muscles_strength() throws Throwable{
			  
			
				try {
					Thread.sleep(6000);
				} catch (InterruptedException e) {
				
				}
			try {
			for(int i=0; i<4; i++) {
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(2000);
		
			}
	}catch(Exception exe) {
		
			}
		try {
			js.executeScript("return document.documentElement.scrollTop = 0;");
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				
			}
		try {
		WebElement Wname= driver.findElement(Add_New_Patient_element.Workout_Name);
          Wname.click();
		  Thread.sleep(1000);
         Wname.sendKeys("WorkOut"+name);
			Thread.sleep(2000);
		}catch(NoSuchElementException  nsch) {
			System.out.println(nsch);
		}
	}
		
	@Then("^Select the Muscles strength\\.$")
	public void muscles_strength() {
		try {
			Thread.sleep(2000);
			List<WebElement> Muscles_strength = driver.findElements(Add_New_Patient_element.Muscles_strength);
			Thread.sleep(1000);
			int randomValue = rad.nextInt(Muscles_strength.size()); // Getting a random value that is between 0 and													// (list's size)-1
			Muscles_strength.get(randomValue).click();
			Thread.sleep(2000);
		} catch (Exception e1) {

		}

	}

	@Then("^Finish the workout\\.$")
	public void finish_the_workout() throws Throwable {
		
		try {
			for(int i=0; i<2; i++) {
			 js.executeScript("return document.getElementsByClassName('joyride-tooltip__close')[0].click();"); 
			 Thread.sleep(1000);
			}
	}catch(Exception e) {
		
	}
		
		try {
			js.executeScript("return document.documentElement.scrollTop = 0;");
			Thread.sleep(2000);
			
			webelement= driver.findElement(By.cssSelector("span.wizardCtrls>div> div > button > div > div"));
			webelement.click();
			wait(20);
			
		}catch(Exception e) {
			
		}
	

		try {
			WebDriverWait wait = new WebDriverWait(driver, 60);
			  wait.until(ExpectedConditions.elementToBeClickable(Add_New_Patient_element.finish));
		webelement= driver.findElement(Add_New_Patient_element.finish);
		if(webelement.isDisplayed()) {
			webelement.click();
			wait(10);	
		}}catch(Exception e) {
			
		}
			
		
	}
}
