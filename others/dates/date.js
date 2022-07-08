function getDayName(dateString) {
  let dayName;
  const date = new Date(dateString);
  const day = date.getDay();

  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }
  
  dayName = days[day];

  return dayName;
}

const weekDay = getDayName("11/10/2010");

console.log(weekDay);