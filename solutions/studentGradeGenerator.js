// studentGradeGenerator.js
function generateGrade() {
    // Get user input (in a browser this would use prompt)
    // For terminal testing, we'll use a sample value
    const marks = parseInt(process.argv[2]); // passing marks as command line argument
    
    // Check if input is valid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input! Marks should be between 0 and 100.";
    }
    
    // Determine the grade
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    return `Student grade: ${grade}`;
}

// For direct execution via terminal
if (require.main === module) {
    console.log(generateGrade());
}

// Export for potential testing
module.exports = generateGrade;
