//Leetcode : 496

function nextGreaterElement(nums1, nums2) {
  let stack = []
  let map = {}

  for (let num of nums2) {

    while (stack.length && num > stack[stack.length - 1]) {
      let smaller = stack.pop()
      map[smaller] = num
    }

    stack.push(num)
  }

  while (stack.length) {
    map[stack.pop()] = -1
  }

  return nums1.map(num => map[num])
}
console.log(nextGreaterElement([4,1,2], [1,3,4,2]))             //[ -1, 3, -1 ]         Time Complexity : O(n)