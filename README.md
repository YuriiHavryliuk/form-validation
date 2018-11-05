<b>Form Validation</b><br>
===============<br>
<a href="https://yuriihavryliuk.github.io/form-validation/docs/">Preview<a/><br>

Prerequisites
-------------
Required software: `gulp`

Install
-----------------
```
git clone https://github.com/YuriiHavryliuk/form-validation.git && cd form-validation
npm install
```

Launch
-------
```
gulp watch
```
Navigate to [http://localhost:3000](http://localhost:3000)

<h2>Task</h2>
  Create a webpage with a form and button “Submit”. Implement validation of form elements when user clicks “Submit”. Form should have the following elements with validation rules:
<ul>
<li>First name* (text)</li>
<li>Last name* (text)</li>
<li>Birthday* (date + datepicker)</li>
<li>Sex* (radio)</li>
<li>Country* (select)</li>
<li>Email* (email validation)</li>
<li>Password* (password)</li>
<li>Address* (text)</li>
<li>Notes (textarea)</li></ul>
  <b>Req. 1</b>
* indicates a required field.<br>

<b>Req. 2</b><br>
Text fields allow entering all symbols except double and single quotes (‘ and “).<br>

<b>Req. 3</b><br>
Date picker should open when the user clicks on a date field. Only valid date can be entered in the date fields.<br>

<b>Req. 4</b><br>
Email should be a valid email (hint: use regexp to validate email).<br>

<b>Req. 5</b><br>
Textarea allows entering text.<br>

<b>Req. 6</b><br>
Fields are validated when the user clicks “Submit”. Elements with invalid input are highlighted with a red border. Error messages are displayed below form elements. When user fixes input data and clicks “Submit” form is validated again.<br>

<b>Req. 7</b><br>
Error message for every field should correspond to the type of error. e.g. if field “First name” is empty, error message that field can’t be empty is displayed. If it’s not empty, but contains forbidden symbols - we should display a message about forbidden symbols. If email or date fields have an invalid format, the corresponding message should be shown. One field might have multiple errors. Only one error message must be shown.<br>

<b>Req. 8</b><br>
You can use jQuery UI to implement the task. Do not use plugins to validate the form.<br>

<b>Req. 9</b><br>
Show a modal window that validation passed, when entered data is valid. Use third-party plugins for modal window.<br>

<b>Req. 10</b><br>
Save your project on Github with README file<br>
