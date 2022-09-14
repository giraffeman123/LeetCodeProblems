/**
 * LeetCode Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const listFromArray = a => a.length ? 
    new ListNode(a[0], listFromArray(a.slice(1))) : null;

const arrayFromList = head => head ? 
    [head.val].concat(arrayFromList(head.next)) : [];                                    

module.exports = {
    ListNode:ListNode,
    listFromArray:listFromArray,
    arrayFromList:arrayFromList    
}