/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 - Bineary Search
    - Target found, return mid
    - Go to left or right half
    
 - If right is -1, return 0
 - If left is nums.length, return nums.length
 - Return left
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        else if(nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    if(right === -1) {
        return 0;
    }
    else if(left === nums.length) {
        return nums.length;
    }
    return left;
};

searchInsert([1, 3, 5, 6], 5);