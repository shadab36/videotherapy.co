package setUpClass.StepDefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import setUpClass.BrowserSetUp;


public class TakeImageStep extends BrowserSetUp {
	@After
	public void tearDown(Scenario scenario) {
	    if (scenario.isFailed()) {	    	
	      log.info("Scenario failed, now taking screenshot");
	      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	      scenario.embed(screenshot, "image/png");
	    }
	}
}



