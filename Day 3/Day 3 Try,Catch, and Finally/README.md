
# [Day 3: Try, Catch, and Finally](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true)

## Problem Statement

Complete the `reverseString` function with the following requirements:

1. **Functionality**:  
   - The function takes one parameter, `s`, which can be of any type.
   - Attempt to reverse `s` using the `split`, `reverse`, and `join` methods.  
   - If `s` is not a string and these methods cannot be applied, an exception will be thrown.  

2. **Exception Handling**:  
   - If an exception is thrown, catch it and print the exception's message on a new line.  
   - Regardless of whether an exception was thrown or not, print the result on a new line:  
     - If no exception was thrown, print the reversed string.  
     - If an exception was thrown, print the original input `s`.  

3. **Output Format**:  
   - The first line (optional): The exception message, if an exception occurs.  
   - The second line: The reversed string (if successful) or the original input (if an exception occurred).  

## Sample Input 1

```
"1234"
```

## Sample Output 1

```
4321
```

**Explanation**:  
- The input is a string, so it can be successfully reversed using `split`, `reverse`, and `join`.  
- No exception is thrown, and the reversed string `4321` is printed.  

## Sample Input 2

```
Number(1234)
```

## Sample Output 2

```
s.split is not a function
1234
```

**Explanation**:  
- The input is a number, not a string, so calling `split` throws an exception.  
- The exception message `"s.split is not a function"` is printed first.  
- Since the reversal failed, the original input `1234` is printed on the next line.  
```