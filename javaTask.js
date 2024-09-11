function calculateTax(income, expenses){
    if((income <= 0)||(expenses <= 0)){
        return "Invalid Input";
    }
    let totalSavings = income - expenses;
    let totalTax = totalSavings*0.2;
    return totalTax;
}

function sendNotification(email) {
    if(email.includes("@")!== true){
        return "invalid email";
    }
        
        let emailSplit = email.split("@")
       let notification = emailSplit[0]+ " sent you an email from "+ 
        emailSplit[1];
       return notification;
      
       
    }


    function checkDigitsInName(name) {
   
        if(typeof name !== "string"){
             return "Invalid Input"
         }
         for (let letter of name) {
            
           
             if (!isNaN(letter)) {
                 return true; 
             }
         }
         return false; 
     }
     
    
     function calculateFinalScore(obj) {
        if (typeof obj !== "object") {
          return "Invalid Input";
        }
        if (
          typeof obj.name !== "string" &&
          typeof obj.testScore !== "number" &&
          typeof obj.schoolGrade !== "number"
        ) {
          return false;
        }
        if (obj.testScore <= 0 || obj.schoolGrade <= 0) {
          return "Invalid Input";
        }
        if (obj.testScore >= 50 || obj.schoolGrade >= 30) {
          return false;
        }
      
        let totalScore = obj.testScore + obj.schoolGrade;
      
        if (obj.isFFamily) {
          totalScore = totalScore + 20;
        }
      
        if (totalScore >= 80 && obj.isFFamily) {
          return true;
        } else if (totalScore >= 80 && !obj.isFFamily) {
          return true;
        } else if (totalScore < 80 && !obj.isFFamily) {
          return false;
        } else if (totalScore < 80 && obj.isFFamily) {
          return false;
        }
      }



      function waitingTime(waitingTimes, serialNumber) {
        if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
          return "Invalid Input";
        }
      
        let totalSpendTime = 0;
        for (let waitingMin of waitingTimes) {
          totalSpendTime += waitingMin;
        }
        let totalSpendTimeAvg = Math.round(totalSpendTime / waitingTimes.length);
        let serialNumberminus = serialNumber - 1;
      
        let spacicWaitingTime = serialNumberminus - waitingTimes.length;
      
        let totalWaitingTime = spacicWaitingTime * totalSpendTimeAvg;
      
        return totalWaitingTime;
      }
      
     
     
  




console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));


console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));


console.log(checkDigitsInName("Raj123")); 
console.log(checkDigitsInName("Suman"));   console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));


console.log(
    calculateFinalScore({
      name: "Rajib",
      testScore: 45,
      schoolGrade: 25,
      isFFamily: true,
    })
  );
  
  console.log(
    calculateFinalScore({
      name: "Rajib",
      testScore: 45,
      schoolGrade: 25,
      isFFamily: false,
    })
  );
  console.log(calculateFinalScore("hello"));
  console.log(
    calculateFinalScore({
      name: "Rajib",
      testScore: 15,
      schoolGrade: 25,
      isFFamily: true,
    })
  );



  console.log(waitingTime([3, 5, 7, 11, 6], 10));
  console.log(waitingTime([13, 2], 6));
  console.log(waitingTime([13, 2, 6, 7, 10], 6));
  console.log(waitingTime([6], 4));
  console.log(waitingTime(7, 10));
  console.log(waitingTime("[6,2]", 9));
  console.log(waitingTime([7, 8, 3, 4, 5], "9"));
  
  
     
