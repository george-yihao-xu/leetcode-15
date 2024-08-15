// helper fn
// Given a sorted array and a target sum, find all pairs of numbers that sum to the target
function twoSum(nums, start, target) {
  let result = [];
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] > target) {
      // too large, move right pointer to left
      right--;
    } else if (nums[left] + nums[right] < target) {
      // too small, move left pointer to right
      left++;
    } else {
      // found the pair
      result.push([nums[left], nums[right]]);

      // cull duplicates
      while (nums[left] === nums[left + 1]) left++;
      while (nums[right] === nums[right - 1]) right--;

      // move pointers
      left++;
      right--;
    }
  }

  return result;
}

console.log("test two sum");
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 10)); // [[1, 9], [2, 8], [3, 7], [4, 6]]

function nSum(nums, n, start, target) {
  let result = [];
  if (n === 2) {
    return twoSum(nums, start, target);
  }

  for (let i = start; i < nums.length; i++) {
    const recResult = nSum(nums, n - 1, i + 1, target - nums[i]);
    recResult.forEach((arr) => {
      arr.push(nums[i]);
      result.push(arr);
    });

    // cull duplicates
    while (nums[i] === nums[i + 1]) i++;
  }

  return result;
}

console.log("test n sum");
console.log(nSum([-3, -2, 0, 2, 5], 3, 0, 0)); // [[-3, -2,  5], [0, -2, 2],...]
