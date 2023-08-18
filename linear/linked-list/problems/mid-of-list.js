const LinkedList = require('../implementation/linked-list')
const ll = new LinkedList()
ll.append(10)
ll.append(20)
ll.prepend(30)
ll.prepend(50)
ll.append(60)
console.log(ll.print())

function findMid(list){
    let slowPtr = list.head
    let fastPtr = list.head
    while(fastPtr&&fastPtr.next){
        slowPtr=slowPtr.next
        fastPtr=fastPtr.next.next
    }
    return slowPtr.val
}
console.log(findMid(ll))