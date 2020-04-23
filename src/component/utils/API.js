// import axios from "axios";
import axios from "axios";

const profData = {
  name: "Bhaskar Tripathi",
  tagline: "SAP HCM Consultant",
  phone: "949-294-6447",
  email: "b108t@outlook.com",
  summary: `A self motivated critical thinker with a strong background in SAP HCM. Robust knowledge and deep experience in technical as well as functional SAP HR. Also crossed skilled in other technologies like integration and full stack development (MERN)`,
  background: ["Bhaskar Tripathi has over 13 years of IT experience, including 12 years in SAP HCM experience in both Implementation and Support Projects.",
    "He has significant experience in US Payroll, Time Management, Organizational Management, Personnel Administration, HR Renewal, SAP-SF EC integration.",
    "Certified in Employee Central (SuccessFactors) , Performance Management Goal Manage (PMGM).",
    "Certified in Dell Boomi Integration.",
    "MS in Software Engineering, Birla Institute of Technology and Science."
  ],
  linkedIn: "https://www.linkedin.com/in/bhaskar-tripathi-b231b714",
  github: "https://github.com/bhaskar-tripathi",
  projects: [
    {
      id: "project1",
      name: "Note Taker App",
      description: "This app lets you save you notes and keep the list of stored notes handy for you to look up later. It also let you delete the note you no longer wish to keep.",
      url: "https://note-taker-app-bt.herokuapp.com/"
    },
    {
      id: "project2",
      name: "Weekly Meal Planner",
      description: `As a health-conscious person with a busy schedule, I want to be able to look up recipes and be able to add them to my calendar so that I can plan my weekly meal plans.
          Delivered using:
          UIKit Edamam API Google Calendar API
          Search bar allows for up to 100 recipes
          The results are displayed in an accordion that has the ingredients, a picture, and the link to the recipe.
          A calendar button allows the user to add it to their calendar.`,
      url: "https://hollyisaredhead.github.io/Weekly-meal-planner/"
    },
    {
      id: "project3",
      name: "Budget Tracker",
      description: `An application that allows you to track your budget. This app works offline too. That means... 
          you can add expenses and deposits to your budget with or without a connection. You can download the app
          on your phone or on your mobile device using "Add to Home Screen" option from browser menu.`,
      url: "https://bt-budget-app.herokuapp.com/"
    },
    {
      id: "project4",
      name: "Weather Dashboard",
      description: `An application that lets to check the weather forcast for any city. The city search allows to 
          pick a city as you type. This app also stores your last 5 city searches which you can click directly to get
          their current weather.`,
      url: "https://bhaskar-tripathi.github.io/homework6/"
    },
    {
      id: "project5",
      name: "Employee Data Search",
      description: `An application that let you view your employee's database. It allows you to filter or sort by
          any column.`,
      url: "https://bhaskar-tripathi.github.io/homework15/"
    },
    {
      id: "project6",
      name: "Fitness Tracker",
      description: `An application that you can use to view, create and track daily workouts. you can 
          log multiple exercises in a workout on a given day. It allows you to track the name,
          type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, 
          you are able to track the distance traveled`,
      url: "https://bt-fitness.herokuapp.com/"
    }
  ]
};
export default {
  getProfileData: function (profUser) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (profUser !== "bhaskar") {
          reject(new Error("No Profile Data Found!!!"))
        }
        else {
          resolve(profData);
        }
      }, 100);
    })
  },
  getMyBlogs: function (user = "bhaskar.tripathi") {
    return axios.get(`https://content.services.sap.com/cs/searches/userProfile?userName=${user}&objectTypes=blogpost&sort=published,desc&size=20&page=0`,
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'crossdomain': true
        }
      })
      .then(res => {
        return res.data._embedded.contents;
      })
      .catch(err => {
        return (
          [
            {
              "tags": [
                {
                  "id": "399814863717995876203615023559515",
                  "objectType": "primaryTag",
                  "url": "https://blogs.sap.com/tags/399814863717995876203615023559515",
                  "displayName": "HCM Employee Self-Service"
                },
                {
                  "id": "decoupledframework",
                  "objectType": "userTag",
                  "url": "https://blogs.sap.com/tag/decoupledframework",
                  "displayName": "decoupledframework"
                },
                {
                  "id": "ess personal profile",
                  "objectType": "userTag",
                  "url": "https://blogs.sap.com/tag/ess-personal-profile",
                  "displayName": "ess personal profile"
                }
              ],
              "id": "blogs.sap.com_blogpost_109914",
              "url": "https://blogs.sap.com/2014/06/30/enhancement-of-standard-infotype-in-ess-personal-profile-ehp-5-and-above/",
              "objectType": "blogpost",
              "root": {
                "id": "blogs.sap.com_blogpost_109914",
                "url": "https://blogs.sap.com/2014/06/30/enhancement-of-standard-infotype-in-ess-personal-profile-ehp-5-and-above/",
                "objectType": "blogpost"
              },
              "target": {
                "id": "blogs.sap.com_blogpost_109914",
                "url": "https://blogs.sap.com/2014/06/30/enhancement-of-standard-infotype-in-ess-personal-profile-ehp-5-and-above/",
                "objectType": "blogpost"
              },
              "accepted": false,
              "archived": false,
              "closed": false,
              "status": "published",
              "primaryTag": "399814863717995876203615023559515",
              "displayName": "Enhancement of Standard Infotype in ESS Personal Profile (EHP 5 and above)",
              "content": "This blog describes the steps to enhance standard infotypes for ESS Personal Profile (Details Screen). The purpose of this blog is to consolidate all steps required for enhancement of decoupled infotype and the subsequent changes in UI in ESS. This is just to make life easier for beginners and doesn’t include too much of advance concept. It covers the following areas: Enhancing standard infotype 0006 for country US Screen Validation UI to infotype field Conversion Controlling field visibility according to subtype What it does not include: Enhancing the infotype screen in backend (Transaction PA30). Hence no screen validation and screen field conversion for PA30. Scenario: Add custom Mobile No. and a related fields in infotype 0006. This will be used for US employees. The field is subjected to format validation and display of field requires conversion. Finally, these fields should be hidden for certain subtypes. Lets Begin: Step 1: Enhance infotype 0006 structure We need to add field in CI include CI_P0006. So as you can see, I have added 2 fields: i) Mobile No. ii) Do not disturb (For not receiving text messages). Step 2: Enhance UI screen structure for infotype 0006 Since we only want to use these fields for country US, we should only be enhancing only the US specific structure. It is assumed that already a US screen exists (as we are only enhancing) and you can check the same by opening Component Configuration: You can also create your own country specific screen from scratch and add the configuration here. Note that configuration key here allows us to configure screen based on MOLGA and Subtype for an infotype. Screen structure of IT0006 for US is HCMT_BSP_PA_US_R0006 which you can check in transaction GENIL_MODEL_EDITOR (or in view V_T588UICONVCLAS). So we add the fields in the customer include inside this structure (note that I have 4 screen fields for the above mentioned 2 database fields and hence require conversion): Step 3: Enhance the UI screen As we saw in step 2, there is already an FPM UIBB configuration HRESS_CC_PER_DTL_ADDRESS_US for US. So now we need to add our fields in the same. There are 2 ways to do that: i) Create Enhancement ii) Create Customization. I am going with the later one for no special reason. So we open the component configuration HRESS_CC_PER_DTL_ADDRESS_US and select ‘Create Customizing’ from additional function. As we added our fields in the UI structure, the custom field would automatically appear (courtesy feeder class CL_HRESS_PER_DETAIL) in the field list. So now we can add them to the screen. You can also make the necessary field attribute change here, e.g. show/hide label, display type and so on. That’s all we have to do to enhance infotype with custom fields if there are no requirement of validations and conversions. Please note, in case of automatic conversion, you must keep the screen field name same as DB field. However, we want to go further by having UI screen conversion. Step 4: UI Conversion For this, you must implement BADI HRPAD00INFTYUI (with filter value for infotype we are implementing for). For our requirement we need to implement only 2 methods: INPUT_CONVERSION (convert screen structure to DB structure) and OUTPUT_CONVERSION (convert DB structure to screen structure). Take caution in using MOVE-CORRESPONDING here since this BADI is called after SAP standard UI conversion. So this statement may disturb the already converted structure. It is advised to touch only the required fields. Since my logic of conversion is similar to what SAP standard is for telephone number, I reused the standard class-method for INPUT_CONVERSION. For OUTPUT_CONVERSION, I am implementing only a little piece of standard code. Step 5: Business Logic check (validation) Now we want to put some validations around our custom fields e.g. mobile number should be only 10 digit in total. To do this we need to implement BADI HRPAD00INFTYBL. In our scenario, validations are only required for insert and modify operation. So we add the code inside INSERT_COMPUTATIONS and MODIFY_COMPUTATIONS. To throw an error, we can add message to import parameter for message handler. Remember that checks implemented using this BADI would not be performed in transaction PA30 subjected to condition. And the condition is: if the infotype is not fully decoupled. You can find this information by reading views V_T582ITVCLAS in parallel with V_T582ITD. However, this is good for only standard infotypes since all new custom infotypes that we create through PM01 are automatically built on decoupled framework. Step 6: Hide custom fields for particular subtype Now this requirement can be achieved in two ways: Create a different component configuration – As noted in step 2, with the use of configuration key, we can configuration different screen based on MOLGA and subtype. However, I wouldn’t use this just for hiding a couple of fields. I would rather use this option when there are some other major screen differences. Enhance the feeder class and set the field property dynamically – I find this more appropriate in the current scenario. As mentioned earlier, feeder class CL_HRESS_PER_DETAIL provides all data to our UIBBs. So we’ll enhance GET_DATA method by using implicit enhancement at the end of standard code. Points to note: We want to ensure that our code should trigger only for infotype 0006 for US. So first we check that and then implement our code. You can always get access to data (business data) using MO_ENTITY object. Screen field meta data is container in table CT_FIELD_USAGE. You can make changes to field properties by updating values in this table. Also ensure that if you have done changes in this table, parameter EV_FIELD_USAGE_CHANGED should be set. If you want to hide fields at subtype level per country version, you can make use of views: V_T588MFPROPS and V_T588MFPROPC. However, above logic gives more control in terms of further conditions to base our field visibility. Thats it. We are done with customization. Now lets test. So we got our custom field on screen and also the validations are working. Now lets check other subtype for which we have hidden the checkbox: Yes, the check box is hidden 😀 ! Hope its helpful for all those who are new to this area and find themselves tangled in too much information on infotype decoupled framework (as far as enhancing infotype is concerned) and ESS personal profile page. I would also recommend reading the excellent blog Summary of configuration options in ESS Personal Information scenario by Sagar (Keep it bookmarked 😉 ). Cheers!",
              "author": {
                "userName": "bhaskar.tripathi",
                "displayName": "Bhaskar Tripathi"
              },
              "source": "source_system",
              "published": "2014-06-30T13:46:16.000+0000",
              "updated": "2014-06-30T13:46:16.000+0000",
              "serverTimestamp": "2019-12-02T12:19:05.000+0000",
              "comments": 13,
              "likes": 5,
              "votes": 0,
              "answers": 0,
              "engaged": 18.0,
              "created": "2019-12-02T12:19:06.000+0000",
              "modified": "2019-12-02T12:19:06.000+0000",
              "moderated": false,
              "_links": {
                "target": {
                  "href": "https://content.services.sap.com/contents/blogs.sap.com_blogpost_109914{?projection}",
                  "templated": true
                },
                "root": {
                  "href": "https://content.services.sap.com/contents/blogs.sap.com_blogpost_109914{?projection}",
                  "templated": true
                },
                "all": {
                  "href": "https://content.services.sap.com/contents/search/findByRootId?page=0&size=10&sort=objectType,asc&id=blogs.sap.com_blogpost_109914"
                },
                "update": {
                  "href": "https://content.services.sap.com/cs/update?id=blogs.sap.com_blogpost_109914"
                },
                "update-all": {
                  "href": "https://content.services.sap.com/cs/update-all?id=blogs.sap.com_blogpost_109914"
                }
              }
            },
            {
              "tags": [
                {
                  "id": "adobe print form",
                  "objectType": "userTag",
                  "url": "https://blogs.sap.com/tag/adobe-print-form",
                  "displayName": "adobe print form"
                },
                {
                  "id": "bhaskar tripathi s blog",
                  "objectType": "userTag",
                  "url": "https://blogs.sap.com/tag/bhaskar-tripathi-s-blog",
                  "displayName": "bhaskar tripathi s blog"
                }
              ],
              "id": "blogs.sap.com_blogpost_89637",
              "url": "https://blogs.sap.com/2013/07/28/curious-case-of-page-break-in-adobe-forms/",
              "objectType": "blogpost",
              "root": {
                "id": "blogs.sap.com_blogpost_89637",
                "url": "https://blogs.sap.com/2013/07/28/curious-case-of-page-break-in-adobe-forms/",
                "objectType": "blogpost"
              },
              "target": {
                "id": "blogs.sap.com_blogpost_89637",
                "url": "https://blogs.sap.com/2013/07/28/curious-case-of-page-break-in-adobe-forms/",
                "objectType": "blogpost"
              },
              "accepted": false,
              "archived": false,
              "closed": false,
              "status": "published",
              "displayName": "Curious Case of Page Break in Adobe Forms :)",
              "content": "In this blog I am going to explain a solution to a very peculiar case of page break in Adobe forms that I came across in a project. Our first idea was to use conditional break which didn’t work somehow. And so I took alternative approach explained here. So here goes the problem: My client was printing a position description form in adobe which had multiple sections each of which could take any amount of space. First section was a header section with fixed length followed by variable length sections. The problem was to position those sections based on their length which was a run time factor. In short, these sections should print in such a way that if a particular section cannot be accommodated in the current page then it should start from next page. Let me explain with examples by breaking this issue in 3 scenarios. Scenario 1: Since section 1 is small enough to be accommodated in page one, it is printed in page 1. Section 2 then begins from page 2. Scenario 2: Since section 1 is too large to be accommodated in page 1 but smaller than one full page, it gets printed in page 2 followed by section 2. Scenario 3: Since section 1 is very large with its content spanning over more than one full page, it doesn’t move to next page and instead beings from page 1 itself. Section 2 then follows. First idea (failed attempt): My first attempt was to use conditional break. But it didn’t work for some reason which is still unknown (http://scn.sap.com/thread/3390883). Alternative solution: The solution that finally worked doesn’t make use of conditional break and instead use ‘Page break within content’ option with some code trick. When ‘Page break within content’ option in subform is unchecked, the system tries to put all the content of subform in one page. So if a content is unable to fit in current page, it moves to the next page. So this should handle scenarios 1 and 2 mentioned above. However, this creates a problem for scenario 3 in which it leads to truncation of data because of the length of data being greater than one full page. To handle this situation, I created 2 subforms for each section. One with page break option selected and other without it. Now I had to build a logic which should make the appropriate subform visible and hide the other. Here is the logic for that: Step 1. Find number of pages the content spans. Step 2. Calculate the length of content. If the content is spread over two pages, length should be calculated from each page. Step 3. IF LENGTH < 250 (avg. length of content which can be accommodated in one page) AND Number of PAGESPAN < 3 { Display subform with page break option checked. } ELSE. { Display subform with page break option unchecked. } For a particular subform, spanning over 3 or more pages guarantees that the content cannot be accommodated in one page, the length calculation is done for maximum of 2 pages. I have created a sample form with three sections and a driver program to explain this. The actual code in the form looks like this: var a = xfa.layout.pageSpan(SF2.TextField2); if (a == 2) { var b = xfa.layout.h(SF2.TextField2,\"mm\",0) + xfa.layout.h(SF2.TextField2,\"mm\",1); } else if(a == 1) { var b = xfa.layout.h(data.MainSF.sf12.SF2.TextField2,\"mm\"); } if ((b < 250) & (a < 3)) { data.MainSF.sf12.SF2.presence = \"hidden\"; } else { data.MainSF.sf12.SF3.presence = \"hidden\"; } After this logic, it is important to relayout the form to accommodate these changes. Otherwise, it will create blank spaces in the form arising out of subforms hiding. Relayout removes these subform completely from the final form. xfa.layout.relayout(); Using the driver program, one can try out different length of text (through ‘Repetition of String’ screen field) in each section and see the form behavior: Here are the form & interface xml download with driver program dump. https://docs.google.com/file/d/0ByG7GZ2g6JYCYllrb3dVX1RlU00/edit?usp=sharing I hope this would help you in your similar requirements. Thanks for reading!!! PS: This is my first experiment with Blogs. So excuse me if it is ill-written 🙂",
              "author": {
                "userName": "bhaskar.tripathi",
                "displayName": "Bhaskar Tripathi"
              },
              "source": "source_system",
              "published": "2013-07-28T13:45:24.000+0000",
              "updated": "2013-07-28T13:45:24.000+0000",
              "serverTimestamp": "2019-12-02T13:17:32.000+0000",
              "comments": 5,
              "likes": 1,
              "votes": 0,
              "answers": 0,
              "engaged": 6.0,
              "created": "2019-12-02T13:17:33.000+0000",
              "modified": "2019-12-02T13:17:33.000+0000",
              "moderated": false,
              "_links": {
                "target": {
                  "href": "https://content.services.sap.com/contents/blogs.sap.com_blogpost_89637{?projection}",
                  "templated": true
                },
                "root": {
                  "href": "https://content.services.sap.com/contents/blogs.sap.com_blogpost_89637{?projection}",
                  "templated": true
                },
                "all": {
                  "href": "https://content.services.sap.com/contents/search/findByRootId?page=0&size=10&sort=objectType,asc&id=blogs.sap.com_blogpost_89637"
                },
                "update": {
                  "href": "https://content.services.sap.com/cs/update?id=blogs.sap.com_blogpost_89637"
                },
                "update-all": {
                  "href": "https://content.services.sap.com/cs/update-all?id=blogs.sap.com_blogpost_89637"
                }
              }
            },
            {
              "tags": [
                {
                  "id": "833755570260738661924709785639136",
                  "objectType": "primaryTag",
                  "url": "https://blogs.sap.com/tags/833755570260738661924709785639136",
                  "displayName": "ABAP Development"
                }
              ],
              "id": "blogs.sap.com_blogpost_334669",
              "url": "https://blogs.sap.com/?p=334669",
              "objectType": "blogpost",
              "root": {
                "id": "blogs.sap.com_blogpost_334669",
                "url": "https://blogs.sap.com/?p=334669",
                "objectType": "blogpost"
              },
              "target": {
                "id": "blogs.sap.com_blogpost_334669",
                "url": "https://blogs.sap.com/?p=334669",
                "objectType": "blogpost"
              },
              "accepted": false,
              "archived": false,
              "closed": false,
              "status": "published",
              "primaryTag": "833755570260738661924709785639136",
              "displayName": "Native SQL &amp; its use with DATABASE CONNECTION in SAP",
              "content": "NATIVE SQL in SAP By Bhaskar Tripathi 29-Dec-2012 Introduction Open SQL is used to access database table defined in ABAP dictionary irrespective of the database platform the R/3 system is based. In contrast, native SQL statements are used to access database tables not defined in ABAP dictionary and hence allow us to integrate data not part of R/3 system. Figure 1.1 Database access through Open SQL statement Figure 1.2 Database access (database outside SAP administration) through Native SQL statement bypassing R/3 Database Interface Since native SQL are database specific statements, program containing these statements will not run in different database systems. This document is intended to describe the statements which are used with Oracle database. The document divides the topic into following sections: Executing Native SQL statements. Establishing/disconnecting connection to external database. Selecting data from a table Inserting/Updating table entry Statements for common operations Handling exception from native SQL statements Executing Native SQL statements To indicate the ABAP processor that the following statement is native SQL statement and hence to bypass R/3 database interface, we need to precede such statement by EXEC SQL and followed by ENDEXEC as shown below: EXEC SQL [PERFORMING ABAP_ROUTINE]. SELECT pernr INTO :lv_pernr FROM PERNRTAB ENDEXEC. The addition PERFORMING is applicable only with the SELECT native SQL statement (also, not applicable in OO ABAP context) and calls the routine ABAP_ROUTINE after each successful call of SELECT statement. This addition is further explained in section “Selecting data from a table”. Establishing/disconnecting connection to external database Before communicating with external database, connection must be established with it. Connection with external database is established using the statement: EXEC SQL. CONNECT TO dbs [AS con]ENDEXEC. The addition AS can be used to name the connection. dbs is the name of the external database system. We store this name in SAP database table DBCON (field ‘CON_NAME’). dbs is specified either as literal or using a variable. When a variable is used with dbs, it should be preceded by a colon ‘:’. This representation of variable in EXEC SQL statement is called as Host Variable. For example, EXEC SQL. CONNECT TO ‘EXT_DB’ENDEXEC. Above statement can be written as: DATA: lv_dbs. lv_dbs = ‘EXT_DB’. EXEC SQL. CONNECT TO :lv_dbsENDEXEC. Disconnection to external database is done using the statement: EXEC SQL. DISCONNECT dbs.ENDEXEC. Selecting data from a table Once the connection is established, a SELECT statement can be used to fetch data from external database. A single record extraction can be done using the statement: EXEC SQL [PERFORMING <form_routine>]. SELECT <column_name> INTO <host_variable> FROM <table_name> WHERE <sql_condition>ENDEXEC. For example, EXEC SQL. SELECT position INTO :lv_position FROM ZRESPERNR WHERE pernr = ‘10874138’ENDEXEC. The above statement tries to fetch position of the employee whose pernr is 10874138 in table ZRESPERNR. But if we want to extract multiple records, we have to modify the statement as: EXEC SQL PERFORMING add_rec. SELECT position INTO :lv_position FROM ZRESPERNR WHERE pernr = ‘10874138’ENDEXEC. FORM add_rec. “Display or store LV_POSITION locally.ENDFORM. PERFORMING addition implicitly opens a cursor for the SELECT statement following it and also calls the specified form routine. This way we can fetch multiple records. However, this is not allowed in ABAP objects since global classes do not have access to global data and subroutines of the calling ABAP program. For ABAP objects, we have to explicitly open cursor to extract multiple records. Following example explain this. DATA: lv_pernr TYPE pernr_d, gt_zrespernr TYPE STANDARD TABLE OF pernr_d. EXEC SQL. OPEN cursor FOR SELECT pernr FROM ZRESPERNRENDEXEC DO. CLEAR lv_pernr. EXEC SQL. FETCH NEXT c1 INTO :lv_pernr ENDEXEC. IF sy-subrc <> 0. EXIT. ELSE. APPEND lv_pernr TO gt_zrespernr. ENDIF. ENDDO. EXEC SQL. CLOSE cursor ENDEXEC. Inserting/Updating table entry A new record is inserted with an INSERT statement which has the following syntax: INSERT INTO<table_name> ( <field 1>, <field 2>,…<Field n> ) VALUES ( <val 1>, <val 2>,…<val n> ) Where <field n> represents name of the field and <valn> the value for the field. Value <val n> can be specified as literal or as host variable. Also, any function (producing output valuewhich is compatible to target field format) valid in the given external database can be used in place of <val n>. Following example inserts a new record in table ZRESPERNR: DATA: lv_pernr TYPE pernr_d. lv_pernr = ‘10007588’. EXEC SQL. INSERT INTO ZRESPERNR ( PERNR, NAME, POSITION, DOJ ) VALUES ( :lv_pernr, ‘STEVE JOB’, ‘CEO’, TO_DATE(:sy-datum,’MM/DD/YYYY’) ) ENDEXEC. Records in a table laying in the external database are updated using UPDATE statement: UPDATE <table_name> SET <field 1> = <val 1>, <field 2> = <val 2>…<fieldn> = <val n> WHERE <sql_condition> Following example updates the value in field POSITION for records where current position name is ‘CEO’. DATA: lv_ceo TYPE char20. lv_ceo = ‘CEO’. EXEC SQL. UPDATE ZRESPERNR SET POSITION = ‘CFO’ WHERE POSTION = :lv_ceo. ENDEXEC. Statements for common operations Aggregate Function: With native SQL, we can use various aggregate functions which are very useful while selecting rows from external database. There are five such aggregate functions: Count function – COUNT function returns the number of rows in a table satisfying the criteria specified in the WHERE clause. Eg. the following statement returns total number or employees whose employee number is < ‘10007483’. DATA:lv_rows TYPE i. EXEC SQL. SELECT COUNT(pernr) INTO :lv_rows FROM ZRESPERNR WHERE pernr < ‘10007483’ ENDEXEC. Sum function – SUM function returns the sum of all selected columns. Eg. the following statement returns total of annual salaries of employees whose employee number is < ‘10007483’. DATA: lv_amount TYPE p length 15 DECIMALS 2. EXEC SQL. SELECT SUM(ansal) INTO :lv_amount FROM ZRESPERNR WHERE pernr < ‘10007483’ ENDEXEC. Avg function – AVG function calculates the average value of a column of numeric type. Eg. the following statement returns average annual salaries of employees whose employee number is < ‘10007483’. DATA: lv_amount TYPE p length 15 DECIMALS 2. EXEC SQL. SELECT AVG(ansal) INTO :lv_amount FROM ZRESPERNR WHERE pernr < ‘10007483’ ENDEXEC. Max function – MAX is used to find the maximum value or highest value of a certain column. Eg. the following statement returns largest annual salary among the employees whose employee number is < ‘10007483’. DATA: lv_amount TYPE p length 15 DECIMALS 2. EXEC SQL. SELECT MAX(ansal) INTO :lv_amount FROM ZRESPERNR WHERE pernr < ‘10007483’ ENDEXEC. Min function – MIN is used to find the minimum value or lowest value of a certain column. Eg. the following statement returns smallest annual salary among the employees whose employee number is < ‘10007483’. DATA: lv_amount TYPE p length 15 DECIMALS 2. EXEC SQL. SELECT MIN(ansal) INTO :lv_amount FROM ZRESPERNR WHERE pernr < ‘10007483’ ENDEXEC. Note: Above functions also have many variations which are not discussed here. System Date & Time: Sometimes we need system (external database) current date and time in our program. We can fetch system date & time using table DUAL. DUAL is a temporary table maintained in Oracle data dictionary having exactly one row and used to select pseudo columns. Following example following code snippet fetches system date and time from external database. DATA: lv_oracle_date TYPE c LENGTH 40, lv_oracle_timestamp TYPE c LENGTH 40. EXEC SQL. select CURRENT_DATE from dual into :lv_oracle_date ENDEXEC. EXEC SQL. select CURRENT_TIMESTAMP from dual into :lv_oracle_timestamp ENDEXEC. WRITE: ‘DATE: ‘, lv_oracle_date. WRITE: / ‘TIMESTAMP: ‘, lv_oracle_timestamp. Handling exception from native SQL statements Handling errors/exception while working with native SQL statements is very important as various checks, such as source and target data type compatibility check are not performed during compilation. When a native SQL statement fails, it sets the value of SY-SUBRC to non-zero. We use this value to raise an exception of type CX_SY_NATIVE_SQL_ERROR. We can then catch the same exception and import the error message to display in our program. Following example explains this. DATA: lv_exc_ref TYPE REF TO cx_sy_native_sql_error, lv_error_text TYPE string. TRY. EXEC SQL. CONNECT TO :lv_store_dbs ENDEXEC. IF sy–subrc <> 0. RAISE EXCEPTION TYPE cx_sy_native_sql_error. ENDIF. CATCH cx_sy_native_sql_error INTO lv_exc_ref. CLEAR: lv_error_text. lv_error_text = lv_exc_ref->get_text( ). MESSAGE lv_error_text TYPE ‘I’. ENDTRY. Summary Native SQL is used to access data from external database. In this document we saw the architecture of SAP in the context of data access through open SQL and native SQL. We then saw how to execute native SQL statements and how to establish/disconnect connections to external database. We took example of Oracle SQL and discussed statements for selecting table rows, inserting/updating data into tables, useful functions while selecting data and how to handle errors/exceptions. References: http://help.sap.com Personal Experience",
              "author": {
                "userName": "bhaskar.tripathi",
                "displayName": "Bhaskar Tripathi"
              },
              "source": "broker",
              "published": "2012-12-28T17:59:08.000+0000",
              "updated": "2012-12-28T17:59:08.000+0000",
              "serverTimestamp": "2020-04-22T03:33:01.000+0000",
              "comments": 3,
              "likes": 4,
              "votes": 0,
              "answers": 0,
              "engaged": 7.0,
              "created": "2019-12-02T13:48:05.000+0000",
              "modified": "2020-04-22T03:33:04.000+0000",
              "moderated": false,
              "_links": {
                "target": {
                  "href": "https://content.services.sap.com/contents/blogs.sap.com_blogpost_334669{?projection}",
                  "templated": true
                },
                "root": {
                  "href": "https://content.services.sap.com/contents/blogs.sap.com_blogpost_334669{?projection}",
                  "templated": true
                },
                "all": {
                  "href": "https://content.services.sap.com/contents/search/findByRootId?page=0&size=10&sort=objectType,asc&id=blogs.sap.com_blogpost_334669"
                },
                "update": {
                  "href": "https://content.services.sap.com/cs/update?id=blogs.sap.com_blogpost_334669"
                },
                "update-all": {
                  "href": "https://content.services.sap.com/cs/update-all?id=blogs.sap.com_blogpost_334669"
                }
              }
            }
          ]
        );
      })
  }
};
