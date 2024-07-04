#  Problem Statement 2

### Objective: 
You are given a list of strings where each character in the string represents a number. Your task is to find and return the string that represents the largest numerical value.

> If the character is in double digits, then add it with the previous digit to come up with a number that will replce current character + previous character's combined value.

Character to Number Mapping:

```bash
 'a' = 0
 'b' = 1
 'c' = 2
 
 's' = 19
```

###  Input: 
A list of strings where each string consists of characters ranging from 'a' to 's'. Each string represents a number where the first character is the most significant digit.

###  Output: 
Return the string that represents the largest numerical value.

Constraints: Each character '𝐶' in the list satisfies:
```bash
  ′𝑎′ ≤ 𝐶 ≤ ′s′ .
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
 "iaa" -> 900
 ```

 Compare the numerical values:

```
012 (abc)
1230 (bcad)
0045 (aaef)
102 (bac)
900 (iaa)
```

## Examples (level - 2)
```
 "saa" -> 1900
 "csa" -> 210
 "cssa" -> 2200
```

Compare the numerical values:

```
1900 (saa)
210 ((c + s) = 21, a = 0)
2200 ((((c + s) = 21), (1 + s = 20), a=0 ) -> 2200
```

The string "bcad" represents the largest numerical value (1230), so it is the output.

### Where to code?

To write code please open file `src\assessments\02\solution.js` or click [here](src\assessments\02\solution.js)
