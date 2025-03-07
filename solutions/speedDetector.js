// speedDetector.js
function checkSpeed() {
    // Get speed input (in a browser this would use prompt)
    // For terminal testing, we'll use a sample value or command line argument
    const speed = parseInt(process.argv[2]); // passing speed as command line argument
    
    // Check if input is valid
    if (isNaN(speed) || speed < 0) {
        return "Invalid input! Speed should be a positive number.";
    }
    
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

// For direct execution via terminal
if (require.main === module) {
    console.log(checkSpeed());
}

// Export for potential testing
module.exports = checkSpeed;