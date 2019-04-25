$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/1Signup.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up test on the videotherapy.co application",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "navigate the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Join now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on Clinician image.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_step.open_the_website_url()"
});
formatter.result({
  "duration": 5294147500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 2869476900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 4277047400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\u003cFirst NameVal\u003e\" validation message for First Name.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\u003cEmail AddressVal\u003e\" validation message for Email Address.",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"\u003cPasswordVal\u003e\" validation message for Password.",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\u003cerrormessage\u003e\" user is already existing or not.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Email Address",
        "Password",
        "First NameVal",
        "Email AddressVal",
        "PasswordVal",
        "errormessage"
      ],
      "line": 18,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "Please fill out this field.",
        "Please fill out this field.",
        "Please fill out this field.",
        ""
      ],
      "line": 19,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;2"
    },
    {
      "cells": [
        "Test",
        "",
        "",
        "",
        "Please fill out this field.",
        "Please fill out this field.",
        ""
      ],
      "line": 20,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;3"
    },
    {
      "cells": [
        "Test",
        "Test@@gmail.com",
        "",
        "",
        "A part following \u0027@\u0027 should not contain the symbol \u0027@\u0027.",
        "Please fill out this field.",
        ""
      ],
      "line": 21,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;4"
    },
    {
      "cells": [
        "Test",
        "Test@gmail.com",
        "",
        "",
        "",
        "Please fill out this field.",
        ""
      ],
      "line": 22,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;5"
    },
    {
      "cells": [
        "Test",
        "Test@getnada.com",
        "1234",
        "",
        "",
        "Please match the requested format.",
        ""
      ],
      "line": 23,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;6"
    },
    {
      "cells": [
        "Test",
        "Test@getnada.com",
        "12345678",
        "",
        "",
        "",
        ""
      ],
      "line": 24,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"Please fill out this field.\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"Please fill out this field.\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 6764660800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 4919104400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 5228493300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 2088497200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 3881739400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 2031011000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 3920216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 2324275900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 3262932500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"Please fill out this field.\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 8263067000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 7261223300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 7764317500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 1191666500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 3608254100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 2411444400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2929404500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 2465793700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 2355212700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"A part following \u0027@\u0027 should not contain the symbol \u0027@\u0027.\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 7562798000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@@gmail.com",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 8442453700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 4746961900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 536864400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 2837647400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 2640379600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A part following \u0027@\u0027 should not contain the symbol \u0027@\u0027.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2235528100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 1713727100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 1776395200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 1060633500,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d64.0.3282.119)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.119, webStorageEnabled: true, webdriver.remote.sessionid: 3a2308236a544de8bec7312afbf...}\nSession ID: 3a2308236a544de8bec7312afbf5ca52\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat setUpClass.StepDefinition.SignUp_step.setsendmethod(SignUp_step.java:344)\r\n\tat setUpClass.StepDefinition.SignUp_step.enter_User_First_Name_as(SignUp_step.java:71)\r\n\tat ✽.Then Enter User First Name as \"Test\".(src/test/resources/1Signup.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@gmail.com",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@getnada.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please match the requested format.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
