const business = {
  opens: '6:30AM',
  closes: '8:00PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'TH', 'F'],
  employees: {
    shawn: {
      position: 'Cashier',
      daysOfWeekWorking: ['M', 'W'],
    },
    tim: {
      position: 'Cook',
      daysOfWeekWorking: ['TH', 'F'],
    },
    greg: {
      position: 'Janitor',
      daysOfWeekWorking: ['M', 'W'],
    },
    sally: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'T', 'W', 'TH', 'F'],
    },
  },
};

function addWeekends() {
  business.daysOpen.push('SAT', 'SUN');
  business.employees.daysOfWeekWorking.push('SAT', 'SUN');
}

console.log(addWeekends());

console.log(business);
