let prev=null
let current = this.head
let next = null

while(current){
  next=current.next
  current.next=prev
  prev=current
  current=next
}
this.tail=this.head
this.head=prev