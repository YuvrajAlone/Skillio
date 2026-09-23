export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "integer-to-roman": {
    id: "integer-to-roman",
    title: "Integer to Roman",
    difficulty: "Medium",
    category: "Hash Table • Math • String",
    description: {
      text: "Given an integer, convert it to a Roman numeral using the standard symbols and subtraction rules.",
      notes: [
        "Roman numerals are formed from highest to lowest decimal place values.",
        "Use subtractive forms such as IV, IX, XL, XC, CD, and CM.",
      ],
    },
    examples: [
      { input: "num = 3", output: '"III"' },
      { input: "num = 58", output: '"LVIII"' },
      { input: "num = 1994", output: '"MCMXCIV"' },
    ],
    constraints: ["1 ≤ num ≤ 3999"],
    starterCode: {
      javascript: `function intToRoman(num) {
  // Write your solution here
}

console.log(intToRoman(3)); // Expected: III
console.log(intToRoman(58)); // Expected: LVIII
console.log(intToRoman(1994)); // Expected: MCMXCIV`,
      python: `def intToRoman(num):
    # Write your solution here
    pass

print(intToRoman(3))  # Expected: III
print(intToRoman(58))  # Expected: LVIII
print(intToRoman(1994))  # Expected: MCMXCIV`,
      java: `class Solution {
  public static String intToRoman(int num) {
    // Write your solution here
    return "";
  }

  public static void main(String[] args) {
    System.out.println(intToRoman(3)); // Expected: III
    System.out.println(intToRoman(58)); // Expected: LVIII
    System.out.println(intToRoman(1994)); // Expected: MCMXCIV
  }
}`,
    },
    expectedOutput: {
      javascript: "III\nLVIII\nMCMXCIV",
      python: "III\nLVIII\nMCMXCIV",
      java: "III\nLVIII\nMCMXCIV",
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "Hash Table • Math • String",
    description: {
      text: "Given a Roman numeral, convert it to an integer.",
      notes: [
        "Roman numerals are usually written largest to smallest, with six subtraction cases: IV, IX, XL, XC, CD, and CM.",
      ],
    },
    examples: [
      { input: 's = "III"', output: "3", explanation: "III = 3." },
      {
        input: 's = "LVIII"',
        output: "58",
        explanation: "L = 50, V = 5, and III = 3.",
      },
      {
        input: 's = "MCMXCIV"',
        output: "1994",
        explanation: "M + CM + XC + IV = 1994.",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 15",
      "s contains only I, V, X, L, C, D, and M.",
      "s is a valid Roman numeral in the range [1, 3999].",
    ],
    starterCode: {
      javascript: `function romanToInt(s) {
  // Write your solution here
}

console.log(romanToInt("III")); // Expected: 3
console.log(romanToInt("LVIII")); // Expected: 58
console.log(romanToInt("MCMXCIV")); // Expected: 1994`,
      python: `def romanToInt(s):
    # Write your solution here
    pass

print(romanToInt("III"))  # Expected: 3
print(romanToInt("LVIII"))  # Expected: 58
print(romanToInt("MCMXCIV"))  # Expected: 1994`,
      java: `class Solution {
  public static int romanToInt(String s) {
    // Write your solution here
    return 0;
  }

  public static void main(String[] args) {
    System.out.println(romanToInt("III")); // Expected: 3
    System.out.println(romanToInt("LVIII")); // Expected: 58
    System.out.println(romanToInt("MCMXCIV")); // Expected: 1994
  }
}`,
    },
    expectedOutput: {
      javascript: "3\n58\n1994",
      python: "3\n58\n1994",
      java: "3\n58\n1994",
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "Array • String • Trie",
    description: {
      text: "Write a function to find the longest common prefix string among an array of strings.",
      notes: ["If there is no common prefix, return an empty string."],
    },
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: "There is no common prefix among the input strings.",
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 200",
      "0 ≤ strs[i].length ≤ 200",
      "Each non-empty strs[i] consists only of lowercase English letters.",
    ],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected: fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Expected: ""`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

print(longestCommonPrefix(["flower", "flow", "flight"]))  # Expected: fl
print(longestCommonPrefix(["dog", "racecar", "car"]))  # Expected: ""`,
      java: `class Solution {
  public static String longestCommonPrefix(String[] strs) {
    // Write your solution here
    return "";
  }

  public static void main(String[] args) {
    System.out.println(longestCommonPrefix(new String[]{"flower", "flow", "flight"})); // Expected: fl
    System.out.println(longestCommonPrefix(new String[]{"dog", "racecar", "car"})); // Expected: empty
  }
}`,
    },
    expectedOutput: { javascript: "fl\n", python: "fl\n", java: "fl\n" },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] whose values sum to zero.",
      notes: [
        "The solution set must not contain duplicate triplets.",
        "The order of the output and of the triplets does not matter.",
      ],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}

console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
  public static List<List<Integer>> threeSum(int[] nums) {
    // Write your solution here
    return new ArrayList<>();
  }

  public static void main(String[] args) {
    System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
    System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
    System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0,0,0]]
  }
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },

  "3sum-closest": {
    id: "3sum-closest",
    title: "3Sum Closest",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums and an integer target, find three integers in nums whose sum is closest to target and return that sum.",
      notes: ["Each input has exactly one solution."],
    },
    examples: [
      {
        input: "nums = [-1,2,1,-4], target = 1",
        output: "2",
        explanation: "The closest sum is -1 + 2 + 1 = 2.",
      },
      { input: "nums = [0,0,0], target = 1", output: "0" },
    ],
    constraints: [
      "3 ≤ nums.length ≤ 500",
      "-1000 ≤ nums[i] ≤ 1000",
      "-10⁴ ≤ target ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function threeSumClosest(nums, target) {
  // Write your solution here
}

console.log(threeSumClosest([-1,2,1,-4], 1)); // Expected: 2
console.log(threeSumClosest([0,0,0], 1)); // Expected: 0`,
      python: `def threeSumClosest(nums, target):
    # Write your solution here
    pass

print(threeSumClosest([-1,2,1,-4], 1))  # Expected: 2
print(threeSumClosest([0,0,0], 1))  # Expected: 0`,
      java: `class Solution {
  public static int threeSumClosest(int[] nums, int target) {
    // Write your solution here
    return 0;
  }

  public static void main(String[] args) {
    System.out.println(threeSumClosest(new int[]{-1,2,1,-4}, 1)); // Expected: 2
    System.out.println(threeSumClosest(new int[]{0,0,0}, 1)); // Expected: 0
  }
}`,
    },
    expectedOutput: { javascript: "2\n0", python: "2\n0", java: "2\n0" },
  },

  "letter-combinations-of-a-phone-number": {
    id: "letter-combinations-of-a-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    category: "Hash Table • String • Backtracking",
    description: {
      text: "Given a string containing digits from 2 through 9, return all possible letter combinations that the number could represent.",
      notes: [
        "Return the answer in any order.",
        "The digit 1 does not map to any letters.",
      ],
    },
    examples: [
      {
        input: 'digits = "23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      },
      { input: 'digits = ""', output: "[]" },
      { input: 'digits = "2"', output: '["a","b","c"]' },
    ],
    constraints: [
      "0 ≤ digits.length ≤ 4",
      "digits[i] is a digit in the range ['2', '9'].",
    ],
    starterCode: {
      javascript: `function letterCombinations(digits) {
  // Write your solution here
}

console.log(letterCombinations("23")); // Expected: [ad, ae, af, bd, be, bf, cd, ce, cf]
console.log(letterCombinations("")); // Expected: []
console.log(letterCombinations("2")); // Expected: [a, b, c]`,
      python: `def letterCombinations(digits):
    # Write your solution here
    pass

print(letterCombinations("23"))  # Expected: [ad, ae, af, bd, be, bf, cd, ce, cf]
print(letterCombinations(""))  # Expected: []
print(letterCombinations("2"))  # Expected: [a, b, c]`,
      java: `import java.util.*;

class Solution {
  public static List<String> letterCombinations(String digits) {
    // Write your solution here
    return new ArrayList<>();
  }

  public static void main(String[] args) {
    System.out.println(letterCombinations("23")); // Expected: [ad, ae, af, bd, be, bf, cd, ce, cf]
    System.out.println(letterCombinations("")); // Expected: []
    System.out.println(letterCombinations("2")); // Expected: [a, b, c]
  }
}`,
    },
    expectedOutput: {
      javascript: "[ad,ae,af,bd,be,bf,cd,ce,cf]\n[]\n[a,b,c]",
      python:
        "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']\n[]\n['a', 'b', 'c']",
      java: "[ad, ae, af, bd, be, bf, cd, ce, cf]\n[]\n[a, b, c]",
    },
  },

  "4sum": {
    id: "4sum",
    title: "4Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums and an integer target, return all unique quadruplets [nums[a], nums[b], nums[c], nums[d]] whose values sum to target.",
      notes: [
        "The answer may be returned in any order.",
        "The solution set must not contain duplicate quadruplets.",
      ],
    },
    examples: [
      {
        input: "nums = [1,0,-1,0,-2,2], target = 0",
        output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
      },
      { input: "nums = [2,2,2,2,2], target = 8", output: "[[2,2,2,2]]" },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 200",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function fourSum(nums, target) {
  // Write your solution here
}

console.log(fourSum([1,0,-1,0,-2,2], 0)); // Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // Expected: [[2,2,2,2]]`,
      python: `def fourSum(nums, target):
    # Write your solution here
    pass

print(fourSum([1,0,-1,0,-2,2], 0))  # Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
print(fourSum([2,2,2,2,2], 8))  # Expected: [[2,2,2,2]]`,
      java: `import java.util.*;

class Solution {
  public static List<List<Integer>> fourSum(int[] nums, int target) {
    // Write your solution here
    return new ArrayList<>();
  }

  public static void main(String[] args) {
    System.out.println(fourSum(new int[]{1,0,-1,0,-2,2}, 0)); // Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    System.out.println(fourSum(new int[]{2,2,2,2,2}, 8)); // Expected: [[2,2,2,2]]
  }
}`,
    },
    expectedOutput: {
      javascript: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]\n[[2,2,2,2]]",
      python: "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]\n[[2, 2, 2, 2]]",
      java: "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]\n[[2, 2, 2, 2]]",
    },
  },

  "remove-nth-node-from-end-of-list": {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      notes: [
        "The follow-up asks whether the list can be processed in one pass.",
      ],
    },
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
      { input: "head = [1,2], n = 1", output: "[1]" },
    ],
    constraints: [
      "1 ≤ list length ≤ 30",
      "0 ≤ Node.val ≤ 100",
      "1 ≤ n ≤ list length",
    ],
    starterCode: {
      javascript: `function ListNode(val, next) {
  this.val = val ?? 0;
  this.next = next ?? null;
}

function removeNthFromEnd(head, n) {
  // Write your solution here
}

// Test cases: [1,2,3,4,5], 2 => [1,2,3,5]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    # Write your solution here
    pass

# Test case: [1,2,3,4,5], 2 => [1,2,3,5]`,
      java: `class Solution {
  static class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
  }

  public static ListNode removeNthFromEnd(ListNode head, int n) {
    // Write your solution here
    return null;
  }

  // Test case: [1,2,3,4,5], 2 => [1,2,3,5]
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,5]\n[]\n[1]",
      python: "[1, 2, 3, 5]\n[]\n[1]",
      java: "[1, 2, 3, 5]\n[]\n[1]",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing only '(', ')', '{', '}', '[' and ']', determine whether the input string is valid.",
      notes: [
        "Every opening bracket must be closed by the same type of bracket.",
        "Opening brackets must be closed in the correct order.",
        "Every closing bracket must have a corresponding opening bracket of the same type.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
      { input: 's = "([])"', output: "true" },
      { input: 's = "([)]"', output: "false" },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists only of parentheses characters: ()[]{}.",
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}

console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([])")); // Expected: true
console.log(isValid("([)]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("([])"))  # Expected: True
print(isValid("([)]"))  # Expected: False`,
      java: `class Solution {
  public static boolean isValid(String s) {
    // Write your solution here
    return false;
  }

  public static void main(String[] args) {
    System.out.println(isValid("()")); // Expected: true
    System.out.println(isValid("()[]{}")); // Expected: true
    System.out.println(isValid("(]")); // Expected: false
    System.out.println(isValid("([])")); // Expected: true
    System.out.println(isValid("([)]")); // Expected: false
  }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\ntrue\nfalse",
      python: "True\nTrue\nFalse\nTrue\nFalse",
      java: "true\ntrue\nfalse\ntrue\nfalse",
    },
  },

  "add-two-numbers": {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List • Math • Recursion",
    description: {
      text: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order; add the two numbers and return the sum as a linked list.",
      notes: [
        "Each node contains a single digit.",
        "The two numbers do not contain leading zeroes, except for the number 0 itself.",
      ],
    },
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 ≤ Node.val ≤ 9",
      "Each list represents a number without leading zeroes.",
    ],
    starterCode: {
      javascript: `function ListNode(val, next) {
  this.val = val ?? 0;
  this.next = next ?? null;
}

function addTwoNumbers(l1, l2) {
  // Write your solution here
}

// Test cases: [2,4,3] + [5,6,4] => [7,0,8]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    # Write your solution here
    pass

# Test case: [2,4,3] + [5,6,4] => [7,0,8]`,
      java: `class Solution {
  static class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
  }

  public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    // Write your solution here
    return null;
  }

  // Test case: [2,4,3] + [5,6,4] => [7,0,8]
}`,
    },
    expectedOutput: {
      javascript: "[7,0,8]\n[0]\n[8,9,9,9,0,0,0,1]",
      python: "[7, 0, 8]\n[0]\n[8, 9, 9, 9, 0, 0, 0, 1]",
      java: "[7, 0, 8]\n[0]\n[8, 9, 9, 9, 0, 0, 0, 1]",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Hash Table • String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without duplicate characters.",
      notes: ["A substring is a contiguous sequence of characters."],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with length 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with length 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation:
          'The answer is "wke"; "pwke" is a subsequence, not a substring.',
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 × 10⁴",
      "s consists of English letters, digits, symbols, and spaces.",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `class Solution {
  public static int lengthOfLongestSubstring(String s) {
    // Write your solution here
    return 0;
  }

  public static void main(String[] args) {
    System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
    System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
    System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
  }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search • Divide and Conquer",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of sizes m and n, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be O(log(m + n))."],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "The merged array is [1,2,3], whose median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "The median is (2 + 3) / 2 = 2.5.",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 ≤ m, n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}

console.log(findMedianSortedArrays([1, 3], [2])); // Expected: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected: 2.5`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(findMedianSortedArrays([1, 3], [2]))  # Expected: 2
print(findMedianSortedArrays([1, 2], [3, 4]))  # Expected: 2.5`,
      java: `class Solution {
  public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // Write your solution here
    return 0.0;
  }

  public static void main(String[] args) {
    System.out.println(findMedianSortedArrays(new int[]{1, 3}, new int[]{2})); // Expected: 2
    System.out.println(findMedianSortedArrays(new int[]{1, 2}, new int[]{3, 4})); // Expected: 2.5
  }
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2\n2.5",
      java: "2.0\n2.5",
    },
  },

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Two Pointers • String • Dynamic Programming",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
      notes: ["If multiple answers exist, returning any one of them is valid."],
    },
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.',
      },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists only of digits and English letters.",
    ],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here
}

console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Expected: "bb"`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass

print(longestPalindrome("babad"))  # Expected: "bab" or "aba"
print(longestPalindrome("cbbd"))  # Expected: "bb"`,
      java: `class Solution {
  public static String longestPalindrome(String s) {
    // Write your solution here
    return "";
  }

  public static void main(String[] args) {
    System.out.println(longestPalindrome("babad")); // Expected: bab or aba
    System.out.println(longestPalindrome("cbbd")); // Expected: bb
  }
}`,
    },
    expectedOutput: {
      javascript: "bab\nbb",
      python: "bab\nbb",
      java: "bab\nbb",
    },
  },

  "zigzag-conversion": {
    id: "zigzag-conversion",
    title: "Zigzag Conversion",
    difficulty: "Medium",
    category: "String",
    description: {
      text: "Write a function that converts a string into a zigzag pattern on a given number of rows, then reads the pattern row by row.",
      notes: ["For one row, the converted string is unchanged."],
    },
    examples: [
      {
        input: 's = "PAYPALISHIRING", numRows = 3',
        output: '"PAHNAPLSIIGYIR"',
      },
      {
        input: 's = "PAYPALISHIRING", numRows = 4',
        output: '"PINALSIGYAHRPI"',
      },
      { input: 's = "A", numRows = 1', output: '"A"' },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists of English letters, commas, and periods.",
      "1 ≤ numRows ≤ 1000",
    ],
    starterCode: {
      javascript: `function convert(s, numRows) {
  // Write your solution here
}

console.log(convert("PAYPALISHIRING", 3)); // Expected: PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4)); // Expected: PINALSIGYAHRPI
console.log(convert("A", 1)); // Expected: A`,
      python: `def convert(s, numRows):
    # Write your solution here
    pass

print(convert("PAYPALISHIRING", 3))  # Expected: PAHNAPLSIIGYIR
print(convert("PAYPALISHIRING", 4))  # Expected: PINALSIGYAHRPI
print(convert("A", 1))  # Expected: A`,
      java: `class Solution {
  public static String convert(String s, int numRows) {
    // Write your solution here
    return "";
  }

  public static void main(String[] args) {
    System.out.println(convert("PAYPALISHIRING", 3)); // Expected: PAHNAPLSIIGYIR
    System.out.println(convert("PAYPALISHIRING", 4)); // Expected: PINALSIGYAHRPI
    System.out.println(convert("A", 1)); // Expected: A
  }
}`,
    },
    expectedOutput: {
      javascript: "PAHNAPLSIIGYIR\nPINALSIGYAHRPI\nA",
      python: "PAHNAPLSIIGYIR\nPINALSIGYAHRPI\nA",
      java: "PAHNAPLSIIGYIR\nPINALSIGYAHRPI\nA",
    },
  },

  "reverse-integer": {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    category: "Math",
    description: {
      text: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x goes outside the signed 32-bit integer range, return 0.",
      notes: ["Assume the environment does not allow storing 64-bit integers."],
    },
    examples: [
      { input: "x = 123", output: "321" },
      { input: "x = -123", output: "-321" },
      { input: "x = 120", output: "21" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function reverse(x) {
  // Write your solution here
}

console.log(reverse(123)); // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120)); // Expected: 21`,
      python: `def reverse(x):
    # Write your solution here
    pass

print(reverse(123))  # Expected: 321
print(reverse(-123))  # Expected: -321
print(reverse(120))  # Expected: 21`,
      java: `class Solution {
  public static int reverse(int x) {
    // Write your solution here
    return 0;
  }

  public static void main(String[] args) {
    System.out.println(reverse(123)); // Expected: 321
    System.out.println(reverse(-123)); // Expected: -321
    System.out.println(reverse(120)); // Expected: 21
  }
}`,
    },
    expectedOutput: {
      javascript: "321\n-321\n21",
      python: "321\n-321\n21",
      java: "321\n-321\n21",
    },
  },

  "string-to-integer-atoi": {
    id: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    category: "String",
    description: {
      text: "Implement myAtoi(s), which converts a string to a 32-bit signed integer by discarding leading whitespace, reading an optional sign, reading consecutive digits, and stopping at the first non-digit.",
      notes: [
        "Clamp values outside the 32-bit signed integer range to the nearest bound.",
      ],
    },
    examples: [
      { input: 's = "42"', output: "42" },
      { input: 's = "   -042"', output: "-42" },
      { input: 's = "1337c0d3"', output: "1337" },
      { input: 's = "0-1"', output: "0" },
      { input: 's = "words and 987"', output: "0" },
    ],
    constraints: [
      "0 ≤ s.length ≤ 200",
      "s contains English letters, digits, spaces, '+', '-', and '.'.",
    ],
    starterCode: {
      javascript: `function myAtoi(s) {
  // Write your solution here
}

console.log(myAtoi("42")); // Expected: 42
console.log(myAtoi("   -042")); // Expected: -42
console.log(myAtoi("1337c0d3")); // Expected: 1337
console.log(myAtoi("0-1")); // Expected: 0`,
      python: `def myAtoi(s):
    # Write your solution here
    pass

print(myAtoi("42"))  # Expected: 42
print(myAtoi("   -042"))  # Expected: -42
print(myAtoi("1337c0d3"))  # Expected: 1337
print(myAtoi("0-1"))  # Expected: 0`,
      java: `class Solution {
  public static int myAtoi(String s) {
    // Write your solution here
    return 0;
  }

  public static void main(String[] args) {
    System.out.println(myAtoi("42")); // Expected: 42
    System.out.println(myAtoi("   -042")); // Expected: -42
    System.out.println(myAtoi("1337c0d3")); // Expected: 1337
    System.out.println(myAtoi("0-1")); // Expected: 0
  }
}`,
    },
    expectedOutput: {
      javascript: "42\n-42\n1337\n0",
      python: "42\n-42\n1337\n0",
      java: "42\n-42\n1337\n0",
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given an integer x, return true if x is a palindrome and false otherwise.",
      notes: [
        "Negative numbers are not palindromes because of the minus sign.",
      ],
    },
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads the same from left to right and right to left.",
      },
      { input: "x = -121", output: "false" },
      {
        input: "x = 10",
        output: "false",
        explanation: "It reads 01 from right to left.",
      },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
}

console.log(isPalindrome(121)); // Expected: true
console.log(isPalindrome(-121)); // Expected: false
console.log(isPalindrome(10)); // Expected: false`,
      python: `def isPalindrome(x):
    # Write your solution here
    pass

print(isPalindrome(121))  # Expected: True
print(isPalindrome(-121))  # Expected: False
print(isPalindrome(10))  # Expected: False`,
      java: `class Solution {
  public static boolean isPalindrome(int x) {
    // Write your solution here
    return false;
  }

  public static void main(String[] args) {
    System.out.println(isPalindrome(121)); // Expected: true
    System.out.println(isPalindrome(-121)); // Expected: false
    System.out.println(isPalindrome(10)); // Expected: false
  }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Recursion",
    description: {
      text: "Given an input string s and a pattern p, implement regular-expression matching with support for '.' and '*'. The match must cover the entire input string.",
      notes: [
        "'.' matches any single character.",
        "'*' matches zero or more of the preceding element.",
      ],
    },
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: "false",
        explanation: "The pattern does not cover the entire string.",
      },
      { input: 's = "aa", p = "a*"', output: "true" },
      { input: 's = "ab", p = ".*"', output: "true" },
    ],
    constraints: [
      "1 ≤ s.length, p.length ≤ 20",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "Every '*' has a preceding valid character.",
    ],
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Write your solution here
}

console.log(isMatch("aa", "a")); // Expected: false
console.log(isMatch("aa", "a*")); // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true`,
      python: `def isMatch(s, p):
    # Write your solution here
    pass

print(isMatch("aa", "a"))  # Expected: False
print(isMatch("aa", "a*"))  # Expected: True
print(isMatch("ab", ".*"))  # Expected: True`,
      java: `class Solution {
  public static boolean isMatch(String s, String p) {
    // Write your solution here
    return false;
  }

  public static void main(String[] args) {
    System.out.println(isMatch("aa", "a")); // Expected: false
    System.out.println(isMatch("aa", "a*")); // Expected: true
    System.out.println(isMatch("ab", ".*")); // Expected: true
  }
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\ntrue",
      python: "False\nTrue\nTrue",
      java: "false\ntrue\ntrue",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
