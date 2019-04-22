package setUpClass;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = {"."},
plugin ={
		"pretty", "html:target/cucumber-report","json:target/cucumber.json", "usage:target/usage.jsonx", "junit:target/cucumber.xml"})	
//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
public class TestRun {

	@BeforeClass
	public static void beforeClass() throws Exception {
		BrowserSetUp.before_Class();
		
	}
	@AfterClass
	public static void afterClass() throws Exception {
//		BrowserSetUp.after_Class();
	
	}
 
}

















