function calculatenetSalary(gross){
if (gross <= 24000){
    payee = 10;
}
else if (gross > 24000 && gross <= 32333){
    payee = 25;
}
else{
    payee = 30;
}
let tax = (gross * payee) / 100;
let housingLevy = (gross * 1.5) / 100;

let nhif;
if((gross <= 5999 )){
    nhif = 150;
}
else if ((gross >= 6000 && gross <= 7999)){
    nhif = 300;
}
else if ((gross >= 8000 && gross <= 11999)){
    nhif = 400;
}
else if ((gross >= 12000 && gross <= 14999)){
    nhif = 500;
}
else if ((gross >= 15000 && gross <= 19999)){
    nhif = 600;
}
else if ((gross >= 20000 && gross <= 24999)){
    nhif = 750;
}
else if ((gross >= 25000 && gross <= 29999)){
    nhif = 850;
}
else if ((gross >= 30000 && gross <= 34999)){
    nhif = 900;
}
else if ((gross >= 35000 && gross <= 39999)){
    nhif = 950;
}
else if ((gross >= 40000 && gross <= 44999)){
    nhif = 1000;
}
else if ((gross >= 45000 && gross <= 49999)){
    nhif = 1050;
}
else if ((gross >= 50000 && gross <= 59999)){
    nhif = 1200;
}
else if ((gross >= 60000 && gross <= 69999)){
    nhif = 1300;
}
else if ((gross >= 70000 && gross <= 79999)){
    nhif = 1400;
}
else if ((gross >= 80000 && gross <= 89999)){
    nhif = 1500;
}
else if ((gross >= 90000 && gross <= 99999)){
    nhif = 1600;
}

nssf = 400;

 let netsalary = gross -(tax + nssf +nhif + housingLevy);
}
calculatenetSalary(99999)
