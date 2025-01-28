export const processNumber = (n: number): { isPrime: boolean; factorial: number | null } => {
    // prime number checker logic -------------------------
    let primeResult = true; // default to true
    if (n <= 1) { //we use edge cases to check if the number is less than 1
      primeResult = false;
    } else if (n === 2 || n === 3) { //edge case for 2 and 3
      primeResult = true;
    } else if (n % 2 === 0) { //edge case for even numbers because they are not prime
      primeResult = false;
    } else {
      const sqrtN = Math.sqrt(n); //square root of n to reduce the number of iterations making the code more efficient
      for (let i = 3; i <= sqrtN; i += 2) { //loop through the numbers starting from 3 because we have already checked for 1 and 2
        if (n % i === 0) { //using modulo to check if the number is divisible by any number then it is not prime
          primeResult = false;
          break;
        }
      }
    }
    // factorial calculation logic -------------------------
    let factorialResult: number | null = null; //default to null or none
    if (n >= 0) { //check if the number is greater than or equal to 0
      factorialResult = 1; //initialize the factorial result to 1
      for (let i = 2; i <= n; i++) { //loop through the numbers starting from 2 because we already have the factorial of 1
        factorialResult *= i; //multiply the factorial result by the current number eg 1*2*3*4*5
      }
    }
    return { //return the results to the caller which is the Home component in the index.tsx file
      isPrime: primeResult,
      factorial: factorialResult
    };
  };