#  Problem Statement 2

### Objective: 
You are given a list of strings where each character in the string represents a number. Your task is to find and return the string that represents the largest numerical value.

Character to Number Mapping:

```bash
 'a' = 0
 'b' = 1
 'c' = 2
 
 'i' = 8
```

###  Input: 
A list of strings where each string consists of characters ranging from 'a' to 'i'. Each string represents a number where the first character is the most significant digit.

###  Output: 
Return the string that represents the largest numerical value.

Constraints: Each character '𝐶' in the list satisfies:
```bash
  ′𝑎′ ≤ 𝐶 ≤ ′𝑖′ .
```

## Example:

Input: abc bcad aaef bac iaa

Output: bcad

Explanation: Convert each string to its corresponding numerical value:

```
 "abc" -> 012
 "bcad" -> 1230
 "aaef" -> 0045
 "bac" -> 102
 "iaa" -> 800
 ```

 Compare the numerical values:

```
012 (abc)
1230 (bcad)
0045 (aaef)
102 (bac)
800 (iaa)
```

The string "bcad" represents the largest numerical value (1230), so it is the output.

### Where to code?

To write code please open file `src\assessments\02\solution.js` or click [here](src\assessments\02\solution.js)
