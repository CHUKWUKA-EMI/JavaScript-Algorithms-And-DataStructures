//implememnt a singly-linked list

//The link node
class LinkNode{
    constructor(data){
        this.data = data
        this.next=null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head =null
        this.size=0
    }

    //insert data at the head of the linked list
    insert(data){
        if(this.head===null){
            this.head = new LinkNode(data)
        }
        else{
        let temp = this.head
        this.head =new LinkNode(data)
        this.head.next =temp
        }

        this.size++
    }

    
    // insert multiple values at the same time
    bulkInsert(array){
        for(let i=0;i<array.length;i++){
            this.insert(array[i])
        }
    }

    //search
    find(data){  
        //To find the data iterate through the Nodes until there is a match
        let currentHead = this.head
        while(currentHead.next){
            if(currentHead.data == data){
                return true
            }
            currentHead = currentHead.next
        }

        return false
    }

    //get a node by index
    findByIndex(index){
        let currentHead = this.head
        // if index is outside the boundaries of our linked list, return null
        if(index <0 || index>this.size) return null

        //iterate till you get to the particular index
        for(let i=0; i<index; i++){
            currentHead = currentHead.next
        }
        //return the last node which is the node at the given index
        return currentHead.data
    }

    //delete
    remove(data){
        let currentHead = this.head
        if(currentHead ===null) throw "Operation not permitted in an empty list"
        if(currentHead.data===data){
            currentHead = currentHead.next
            this.size--
        }else{
            let prev = currentHead
            //iterate through the nodes
            while(currentHead.next){
                if(currentHead.data === data){
                    //remove by skipping
                    prev.next = currentHead.next
                    prev = currentHead
                    currentHead = currentHead.next
                    break; //break out of the loop
                }
                prev = currentHead
                currentHead = currentHead.next
            }

            //if it the data is not in the head or middle (i.e nodes that have next nodes), it must be in the tail
            if(currentHead.data ===data){
                //delete the tail by skipping it
                prev.next = null
            }

            this.size--
        }
    }

    //helper function for printing the linkedList
    printList(){
        let node =''
        let currentHead = this.head
        while(currentHead){
            node =`${node}${currentHead.data} -> `
            currentHead = currentHead.next
        }
       
        console.log(`${node}null`)
    }
}

//how to reverse a linkedList
function reverseLinkedList(linkedList){
  let currentHead = linkedList.head
  let previousHead = null
  while(currentHead){
      let nextHead = currentHead.next
      //reverse the pointers such that each node points to the previous node
      currentHead.next = previousHead
      previousHead = currentHead
      currentHead = nextHead
  }

  return currentHead 

}

const linkedList = new SinglyLinkedList()

//insert data into the linked list: Time Complexity is O(1) => constant time
linkedList.insert(3)
linkedList.insert(5)
linkedList.insert(4)
linkedList.insert(6)
linkedList.insert(7)
linkedList.insert(9)
linkedList.insert(8)
linkedList.insert(2)
linkedList.printList()


// bulk insert
linkedList.bulkInsert([2,5,4,6,7,9,8,3])
linkedList.printList()


/*
Find data in the linked list: Time Complexity is O(n) =>linear
 where n is the number of items you have to loop through to get to the node where the data is.
*/
console.log(linkedList.find(3)) //returns true
console.log(linkedList.find(1)) //returns false
console.log(linkedList.find(9)) //returns true
console.log(linkedList.find(11)) //returns false

//find by index
const d4 =linkedList.findByIndex(4)//returns 6
console.log(d4) //prints 6

/* 
delete a node by value: Time Complexity is O(n)
where n is the length of nodes you have to traverse to get the node to be deleted
*/
linkedList.remove(3)
linkedList.printList()
console.log(linkedList.find(3)) //now returns false

//reverse linked list
reverseLinkedList(linkedList)
linkedList.printList()
