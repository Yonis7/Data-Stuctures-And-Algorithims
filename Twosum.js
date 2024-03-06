// We will create a function called twoSum
// The goal of this function is to find the indices of the two numbers that add up to the target number.
//Parameters for the function will be an array of numbers (nums) and a target number (target).

const twoSum = (nums, target) => {
  // Step 1: Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Step 2: Iterate through each element after the current element
    for (let j = i + 1; j < nums.length; j++) {
      // Step 3: Check if the sum of the current element and the next element equals the target
      if (nums[i] + nums[j] === target) {
        // Step 4: Return the indices of the two numbers that add up to the target
        return [i, j];
      }
    }
  }
  // Step 5: If no solution is found, return an empty array
  return [];
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
