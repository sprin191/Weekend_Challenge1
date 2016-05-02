$(document).ready(function () {
  var totalMonthlySalaries = 0;

  $('#employeeInfo').on('submit', function (event) {
    event.preventDefault();

    var values = {};
    $.each($('#employeeInfo').serializeArray(), function (i, field) {
        values[field.name] = field.value;
      });

    console.log(values);

    // clear out inputs
    $('#employeeInfo').find('input[type=text]').val('');

    //total monthly salary (company-wide) calculator
    totalMonthlySalaries += Number.parseInt((values.annualSalary) / 12);

    // append to DOM
    appendDom(values);

    console.log(totalMonthlySalaries);

    //function to append new employee information to the DOM
    function appendDom(empInfo) {
      var individualMonthlySalary = Number.parseInt((values.annualSalary) / 12);
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();
      $('#container').data('empSal', individualMonthlySalary);

      $el.append('<p> Employee Name: ' + empInfo.employeeFirstName + ' ' + empInfo.employeeLastName + '</p>' + '<p> Employee ID: ' + empInfo.employeeID + '</p>' + '<p> Job Title: ' + empInfo.jobTitle + '</p>' + '<p> Annual Salary: ' + empInfo.annualSalary + '</p>' + '<p> Overall Monthly Salaries (Company-Wide): ' + totalMonthlySalaries + '</p>' + '<p class = "individualSal"> Individual Monthly Salary: ' + individualMonthlySalary + '</p>' + '<button type="button" class="delete" name="delete">Delete Info</button>');
    }

  });

  //Function to delete selected employee information, and attempt at subtracting individual monthly salary from overall monthly salary (unable to figure out completely; data just stored most recently created employee's monthly salary)
  $('#container').on('click', '.delete', function () {
    $(this).closest('div').remove();
    console.log('Delete');

    totalMonthlySalaries = totalMonthlySalaries - $('#container').data('empSal');
    console.log(totalMonthlySalaries);
  });

});
