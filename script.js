<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Responsive Web App</title>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="mainContent">
  <div class="container">
    <h2>Welcome, User!</h2>
    <p>Select a feature below:</p>

    <!-- Conversion Features -->
    <div class="feature-category">Unit Conversions</div>
    <div class="feature-card">
      <h3>Choose Conversion Type</h3>
      <select id="conversionType" class="w3-select">
        <option value="CtoF">Celsius to Fahrenheit</option>
        <option value="FtoC">Fahrenheit to Celsius</option>
        <option value="MtoF">Meters to Feet</option>
        <option value="FtoM">Feet to Meters</option>
      </select>
      <input type="number" id="conversionInput" class="w3-input w3-margin-top" placeholder="Enter Value">
      <button class="w3-button w3-teal w3-block" onclick="performConversion()">Convert</button>
      <div id="conversionResult" class="w3-margin-top"></div>
    </div>

    <!-- Additional Features -->
    <div class="feature-category">Factorial (While Loop)</div>
    <div class="feature-card">
      <h3>Find Factorial</h3>
      <input type="number" id="factorialInput" class="w3-input" placeholder="Enter Number">
      <button class="w3-button w3-teal w3-block" onclick="findFactorial()">Calculate</button>
      <div id="factorialResult" class="w3-margin-top"></div>
    </div>

    <div class="feature-category">Sum and Average (First N Natural Numbers)</div>
    <div class="feature-card">
      <h3>Calculate Sum and Average</h3>
      <input type="number" id="sumAverageInput" class="w3-input" placeholder="Enter N">
      <button class="w3-button w3-teal w3-block" onclick="calculateSumAndAverage()">Calculate</button>
      <div id="sumAverageResult" class="w3-margin-top"></div>
    </div>

    <div class="feature-category">Income Tax Calculator</div>
    <div class="feature-card">
      <h3>Calculate Income Tax</h3>
      <input type="number" id="incomeInput" class="w3-input" placeholder="Enter Income">
      <button class="w3-button w3-teal w3-block" onclick="calculateIncomeTax()">Calculate</button>
      <div id="incomeTaxResult" class="w3-margin-top"></div>
    </div>

    <!-- Payroll Calculator -->
    <div class="feature-category">Payroll Calculator</div>
    <div class="feature-card">
      <h3>Manage Payroll</h3>
      <input type="text" id="employeeName" class="w3-input" placeholder="Employee Name">
      <input type="number" id="daysWorked" class="w3-input w3-margin-top" placeholder="Days Worked">
      <input type="number" id="dailyRate" class="w3-input w3-margin-top" placeholder="Daily Rate">
      <input type="number" id="deductionAmount" class="w3-input w3-margin-top" placeholder="Deduction Amount">
      <button class="w3-button w3-teal w3-block w3-margin-top" onclick="addEmployee()">Add Employee</button>
      <table class="w3-table w3-striped w3-bordered w3-margin-top">
        <thead>
          <tr class="w3-light-grey">
            <th>No.</th>
            <th>Name</th>
            <th>Days Worked</th>
            <th>Daily Rate</th>
            <th>Gross Pay</th>
            <th>Deduction</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody id="payrollTableBody"></tbody>
      </table>
    </div>
  </div>
</div>

<div id="menu" class="menu">
  <button onclick="toggleActivityLog()">Activity Log</button>
</div>

<!-- Activity Log -->
<div id="activityLog" class="hidden">
  <h3>Activity Log</h3>
  <ul id="activityLogList"></ul>
</div>

<script src="script.js"></script>
</body>
</html>
