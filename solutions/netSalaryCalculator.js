// netSalaryCalculator.js
function calculateNetSalary() {
    // In a browser, we would use prompt for these values
    // For terminal, we'll use command line arguments
    const basicSalary = parseFloat(process.argv[2]) || 0;
    const benefits = parseFloat(process.argv[3]) || 0;
    
    // Check if inputs are valid
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        return "Invalid input! Salary and benefits should be positive numbers.";
    }
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    
    // Calculate PAYE (Tax)
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    } else {
        tax = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
    }
    
    // Calculate NHIF Deductions
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    
    // Calculate NSSF Deductions (assumed at 6% of gross up to a maximum of 18,000)
    const nssfRate = 0.06;
    const nssfMaximum = 18000;
    const nssf = Math.min(grossSalary * nssfRate, nssfMaximum);
    
    // Calculate Net Salary
    const netSalary = grossSalary - (tax + nhif + nssf);
    
    return {
        basicSalary,
        benefits,
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

// For direct execution via terminal
if (require.main === module) {
    console.log(calculateNetSalary());
}

// Export for potential testing
module.exports = calculateNetSalary;