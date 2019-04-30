package object_Element;

import org.openqa.selenium.By;

public class Add_New_Patient_element {
	public static By Add_Patient=By.xpath("//span[@class='title'][text()='Add Patient']");
	public static By FN=By.id("firstNameInput");
	public static By LN=By.id("lastNameInput");
	public static By Radio_button=By.xpath("//input[@type='radio']");
	public static By Email=By.id("emailInput");
	public static By Next_page=By.xpath("//span[text()='Next']");
	public static By weight=By.id("weightInput");
	public static By heightInput=By.id("heightInput");
	public static By affected=By.xpath("(//button[@type='button'])[2]");
	public static By affected_part=By.xpath("(//div[@role='menu'])[2]//div//div//div//div");
	public static By Related_symptoms=By.cssSelector("div.multiSelectionChip");
	public static By patient_suffered_duartion=By.cssSelector("div.durationPicker div.durationTypeWrapper>div");
	public static By create_paln=By.xpath("//span[text()='Create Care Plan']");
	
	//Add new WorkOut Element
	
	public static By Play_library=By.cssSelector(".headerMenuItem>a[href='#training-library']");
	public static By Add_Workout=By.xpath("//span[@class='title'][text()='Add Workout']");
//	public static By Workout_Name=By.xpath("//input[@type='text']");
	public static By Workout_Name=By.cssSelector(".trainingNameWrapper>div>input[type='text']");
	public static By Muscles_strength=By.cssSelector("#trainingEditor  div.slider  div.addExerciseButton > div > button > div > div > svg");
//	public static By finish=By.cssSelector("#trainingEditor > div.trainingTabHeader > span:nth-child(5) > div > div > button > div > div > span");
	
	public static By finish=By.cssSelector("#calendarForm div.col-lg-12 button:last-child span");
	
	//Assign Work To Paitent Element
	public static By attach_icon=By.xpath("//div[@class='protocolHoverActions trainingHoverActions']//span[text()='attach_file']");
	public static By check_box=By.cssSelector("div.patientItem>label>input");
	public static By Assign_patient=By.xpath("//span[@class='title'][text()='Assign to patients']");
	public static By Proceed=By.xpath("//span[text()='Proceed']");
	public static By Current_Day=By.cssSelector("div.rbc-current");
	public static By start_time=By.xpath("(//input[@type='text'])[3]");
	public static By time=By.xpath("//span[text()='30']");
	public static By ok=By.xpath("//span[text()='OK']");
	public static By submit=By.xpath("//span[text()='Submit']");
}
