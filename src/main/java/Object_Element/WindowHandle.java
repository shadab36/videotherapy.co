package Object_Element;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

public class WindowHandle {
	public static void window() throws InterruptedException, AWTException {
	StringSelection s2 = new StringSelection("C:\\Users\\AL Moin Webtech\\Desktop\\rhyme.txt");
	Toolkit.getDefaultToolkit().getSystemClipboard().setContents(s2, null);
	Thread.sleep(2000);
	Robot robot = new Robot();
	robot.keyPress(KeyEvent.VK_CONTROL);
	robot.delay(250);
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);
	robot.keyPress(KeyEvent.VK_CONTROL);
	robot.keyPress(KeyEvent.VK_V);
	robot.keyRelease(KeyEvent.VK_V);
	robot.keyRelease(KeyEvent.VK_CONTROL);
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.delay(500);
	robot.keyRelease(KeyEvent.VK_ENTER);
	Thread.sleep(3000);
}
}