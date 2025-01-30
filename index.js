// expecting time to be a string in the format like '8:15' or '12:30'

const numberDict = {
  1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
  21: "twenty-one", 22: "twenty-two", 23: "twenty-three", 24: "twenty-four", 25: "twenty-five", 26: "twenty-six", 27: "twenty-seven", 28: "twenty-eight", 29: "twenty-nine", 30: "thirty"
};
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if(time === "12:00")
    {
      return midday
    }

   let timeArray = time.split(":");
   let ans = "";
   let hour = Number(timeArray[0]);
   if(hour>12)
   {
    hour =  hour -12 ;
   }
  if(timeArray[1] === "00")
    {
      ans = numberDict[hour] + " o'clock";
    }
    else if(timeArray[1]==="30")
      {
        ans = "half past " + numberDict[hour];
      }else if(timeArray[1] === "15")
        {
          ans = "quarter past "+ numberDict[hour];
        }
        else if(timeArray[1] === "45")
          {
            ans = "quarter to "+ numberDict[hour+1];
          }      
    else if(timeArray[1] >30)
    {
      ans = numberDict[60-Number(timeArray[1])];
      ans = ans +' to ';
      ans = ans + numberDict[hour+1];
    }
    else{
      ans = numberDict[Number(timeArray[1])];   
      ans = ans +' past ';
      ans = ans + numberDict[hour];

    }

  //console.log(Number(timeArray[0])+1);

  //console.log(numberDict[60-timeArray[1]]);

  return ans;
}

module.exports = { convertTimeToWords };
