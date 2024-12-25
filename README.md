# Unhandled Division by Zero Exception in JavaScript

This repository demonstrates an unhandled exception that occurs when dividing by zero in a simple JavaScript arithmetic function. The `divide` function throws an error when the divisor is zero, however, the error isn't caught, resulting in a program crash.

## Bug Description
The `divide` function lacks proper error handling.  When called with a divisor of 0, it throws an error which is not caught, causing the program to terminate unexpectedly.

## Solution
The solution involves adding a `try...catch` block to handle the potential `Error` thrown by the `divide` function. This prevents the program from crashing and allows for more graceful error handling.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` in your terminal. The script will crash immediately as the `divide` function is called with `b = 0`.  
3. Once fixed by replacing `bug.js` with `bugSolution.js`, the script should run without crashing.
