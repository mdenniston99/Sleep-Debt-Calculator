const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 7;
      break;

    default:
      return "ERROR!";
  }
};
const getActualSleepHours = () => 
  getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

    console.log(getSleepHours('monday'));
    console.log(getActualSleepHours());

const getIdealSleepHours = () => {
 let idealHours = 8;
 return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
    const idealSleepHours =
    getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    }
    else if(actualSleepHours > idealSleepHours) {
      console.log('you got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep this week');
    }
    else if(actualSleepHours < idealSleepHours) {
      console.log('you should get some rest because you slept ' + (idealSleepHours - actualSleepHours) + ' Hours less than you should have this week.');
    } else {
      console.log('ERROR!');
    }
};
calculateSleepDebt();
