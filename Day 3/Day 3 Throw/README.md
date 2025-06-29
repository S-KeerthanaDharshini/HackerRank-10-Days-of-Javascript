
# [Day 3: Throw](https://www.hackerrank.com/challenges/js10-throw/problem?isFullScreen=true)

## Problem Statement

Complete the `isPositive` function with the following requirements:

1. **Functionality**:  
   - The function takes one integer parameter, `a`.  
   - If `a` is positive, return the string `"YES"`.  
   - If `a` is zero, throw an `Error` with the message `"Zero Error"`.  
   - If `a` is negative, throw an `Error` with the message `"Negative Error"`.  

2. **Input Format**:  
   - The first line is an integer `n`, denoting the number of test cases.  
   - Each of the next `n` lines contains an integer `a` to be tested.  

3. **Constraints**:  
   - \( 1 \leq n \leq 5 \)  
   - \(-100 \leq a \leq 100\)  

4. **Output Format**:  
   - For each test case:  
     - If `a` is positive, print `"YES"`.  
     - If `a` is zero, print `"Zero Error"`.  
     - If `a` is negative, print `"Negative Error"`.  

## Sample Input 1

```
3
1
2
3
```

## Sample Output 1

```
YES
YES
YES
```

**Explanation**:  
- All inputs are positive, so the function returns `"YES"` for each case.  

## Sample Input 2

```
3
2
0
6
```

## Sample Output 2

```
YES
Zero Error
YES
```

**Explanation**:  
- `2` is positive → `"YES"`.  
- `0` → Throws `"Zero Error"`.  
- `6` is positive → `"YES"`.  

## Sample Input 3

```
2
-1
20
```

## Sample Output 3

```
Negative Error
YES
```

**Explanation**:  
- `-1` → Throws `"Negative Error"`.  
- `20` is positive → `"YES"`.  
