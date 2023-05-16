const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentTime = currentDate.toLocaleTimeString();
function calculate(day) {
  switch (day) {
    case 0:
      return 'Rest day'; 
    case 1:
    case 2:
      return 'Lessons on Tuesday and Thursday';
    case 3:
      return 'Rest day'; 
    default:
      return 'Just a normal working dayyyyyyyyyyy';
  }
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = dayNames[currentDay];

const schedule = calculate(currentDay);

console.log(`The current time is ${currentTime}`);
console.log(`Today is ${dayName}`);
console.log(`Schedule for today: ${schedule}`);
