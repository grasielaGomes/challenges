// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Sample Input: 07:05:45PM
// Sample Output: 19:05:45

function timeConversion(s) {
  const time = s.split(":");
  const [hours, minutes, seconds] = time;
  const second = seconds.slice(0, 2);
  const ampm = seconds.slice(2);
  let militaryHours = "";
  if (ampm === "PM") {
    if (hours === "12") {
      militaryHours = hours;
    } else {
      militaryHours = parseInt(hours) + 12;
    }
  } else {
    if (hours === "12") {
      militaryHours = "00";
    } else {
      militaryHours = hours;
    }
  }
  return `${militaryHours}:${minutes}:${second}`;
}

console.log(timeConversion("12:05:45PM")); // 12:05:45
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:05:45AM")); // 00:05:45
