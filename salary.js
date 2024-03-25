// Function to calculate payee (tax) based on basic salary
function calculatePayee(basicSalary) {
    let payee = 0;
    if (basicSalary <= 24000) {
        payee = 0;
    } else if (basicSalary <= 32333) {
        payee = (basicSalary - 24000) * 0.1;
    } else if (basicSalary <= 40333) {
        payee = 833 + (basicSalary - 32333) * 0.15;
    } else if (basicSalary <= 48333) {
        payee = 2500 + (basicSalary - 40333) * 0.2;
    } else if (basicSalary <= 57333) {
        payee = 4583 + (basicSalary - 48333) * 0.25;
    } else {
        payee = 8125 + (basicSalary - 57333) * 0.3;
    }
    return payee;
}

// Function to calculate NHIF deductions based on basic salary
function calculateNHIF(basicSalary) {
    let nhifDeductions = 0;
    // Define NHIF deduction bands and their corresponding amounts
    const nhifBands = [
        { upperLimit: 5999, amount: 150 },
        { upperLimit: 7999, amount: 300 },
        { upperLimit: 11999, amount: 400 },
        { upperLimit: 14999, amount: 500 },
        { upperLimit: 19999, amount: 600 },
        { upperLimit: 24999, amount: 750 },
        { upperLimit: 29999, amount: 850 },
        { upperLimit: 34999, amount: 900 },
        { upperLimit: 39999, amount: 1000 },
        { upperLimit: 44999, amount: 1100 },
        { upperLimit: 49999, amount: 1200 },
        { upperLimit: 59999, amount: 1300 },
        { upperLimit: 69999, amount: 1400 },
        { upperLimit: 79999, amount: 1500 },
        { upperLimit: 89999, amount: 1600 },
        { upperLimit: Infinity, amount: 1700 }
    ];

    // Find the appropriate NHIF band for the given basic salary
    for (const band of nhifBands) {
        if (basicSalary <= band.upperLimit) {
            nhifDeductions = band.amount;
            break;
        }
    }
    return nhifDeductions;
}

// Function to calculate NSSFDeductions based on basic salary
function calculateNSSF(basicSalary) {
    const nssfDeductions = Math.min(basicSalary * 0.06, 2000);
    return nssfDeductions;
}

// Function to calculate gross salary
function calculateGrossSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    return grossSalary;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePayee(basicSalary);
    const nhifDeductions = calculateNHIF(basicSalary);
    const nssfDeductions = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);
    return netSalary;
}

// Main program
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

const netSalary = calculateNetSalary(basicSalary, benefits);

console.log("Net Salary:", netSalary);
