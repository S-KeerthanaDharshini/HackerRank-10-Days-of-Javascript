function getSecondLargest(nums) {
    // Complete the function
    let largest = Number.MIN_VALUE;
    let seclargest = Number.MIN_VALUE;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > largest && nums[i] > seclargest){
            seclargest = largest ;
            largest = nums[i];
        }else if(nums[i] <largest && nums[i] > seclargest) {
           seclargest =  nums[i];
        }
    }
    return seclargest;
}