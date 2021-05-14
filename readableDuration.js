function formatDuration (dur) {
  if(isNaN(dur)){
    return 'Seconds has to be a number';
  }
  //Ensure duration is an integer
  dur = Number(dur);
  //validate input is a non-negative integer
  if(dur<0){
    return 'Seconds has to be a non-negative integer'
  }
  if(dur === 0){
    return 'now';
  }
  
  //Initialize values
  let yearVal = 0;
  let dayVal = 0;
  let hourVal = 0;
  let minuteVal = 0;
  let secondVal = 0;

  let firstRemainder = Math.floor(dur%(60*60*24*365));
  yearVal = Math.floor(dur/(60*60*24*365));
  let secondRemainder = Math.floor(firstRemainder%(60*60*24));
  dayVal = Math.floor(firstRemainder/(60*60*24));
  let thirdRemainder = Math.floor(secondRemainder%(60*60));
  hourVal = Math.floor(secondRemainder/(60*60));
  let  fourthRemainder= Math.floor(thirdRemainder%(60));
  minuteVal = Math.floor(thirdRemainder/(60));
  secondVal = fourthRemainder;

  let year = (yearVal > 0 ) ? yearVal + " year" + numberEnding(yearVal) : ""; 
  let day = (dayVal > 0 ) ? dayVal + " day" + numberEnding(dayVal) : ""; 
  let hour = (hourVal > 0 ) ? hourVal + " hour" + numberEnding(hourVal) : ""; 
  let minute = (minuteVal > 0 ) ? minuteVal + " minute" + numberEnding(minuteVal) : "";
  let second = (secondVal > 0 ) ? secondVal + " second" + numberEnding(secondVal) : "";

 
  let a = [year,day,hour,minute,second].filter((v)=>v !== '');
  
  let finalDur = a.length == 1 ? a[0] : a.slice(0, a.length - 1).join(", ") + " and " + a[a.length - 1];
  return finalDur;
}

function numberEnding(number){
  return (number > 1) ? 's' : '';
}
