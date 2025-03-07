# Week 1 JavaScript Practice

This repository contains solutions to the JavaScript challenges for Week 1.

## Challenges

### 1. Student Grade Generator
A function that takes student marks as input (between 0 and 100) and outputs the corresponding grade:
- A > 79
- B: 60 to 79
- C: 49 to 59
- D: 40 to 48
- E: less than 40

### 2. Speed Detector
A program that takes the speed of a car as input and:
- Prints "Ok" if the speed is less than 70 km/h
- Gives one demerit point for every 5 km/h above the speed limit (70 km/h)
- Prints "License suspended" if the driver gets more than 12 points

### 3. Net Salary Calculator
A program that calculates an individual's Net Salary based on:
- Basic salary and benefits inputs
- Tax (PAYE) deductions
- NHIF deductions
- NSSF deductions
- Gross salary calculation
- Net salary calculation

## How to Run

Each solution can be run from the terminal using Node.js:

```bash
# Run Student Grade Generator with a mark of 85
node solutions/studentGradeGenerator.js 85

# Run Speed Detector with a speed of 80
node solutions/speedDetector.js 80

# Run Net Salary Calculator with a basic salary of 30000 and benefits of 5000
node solutions/netSalaryCalculator.js 30000 5000