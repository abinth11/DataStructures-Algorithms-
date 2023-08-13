const LinkedList = require('../implementation/linked-list')
const ll = new LinkedList()
ll.append(10)
ll.append(20)
ll.prepend(30)
ll.prepend(50)
console.log(ll.print())
function reverseList(list){
    let prev = null
    let curr = list.head
    let next = null
    while(curr){
        next = curr.next
        curr.next = prev
        prev=curr
        curr=next
    }
    list.head=prev
    return list
}
reverseList(ll)
console.log(ll.print())