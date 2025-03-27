function node(value=null, nextnode=null){
    return {value,nextnode};
}

function linkedList(){
    let head=null;

    function append(value){
        const newNode=node(value);

        if(!head){
            head=newNode;
            return;
        }

        let current=head;
        while(current.nextnode!==null){
            current=current.nextnode;
        }
        current.nextnode=newNode;
    }

    function prepend(value){
        const newNode=node(value);

        head=newNode;
    }

    function size(){
        let count=0;
        let current =head;
        while(current!=null){
            count++;
            current=current.nextnode;
        }
        return count;
    }

    function getHead(){
        return head;
    }

    function tail(){
        if(!head) return head;

        let current=head;
        while(current.nextnode!=null){
            current=current.nextnode;
        }
        return current
    }

    function atIndex(index){
        if(index<0)return null;

        let current=head;
        let i=0;

        while(current!=null){
            if(i===index) return current;
            current=current.nextnode;
            i++;
        }
        return null;
    }

    function pop(){
        if(!head) return null;

        if(!head.nextnode){
            head=null;
            return;
        }

        let current =head;
        let prev=null;

        while(current.nextnode!=null){
            prev=current;
            current=current.nextnode
        }
        prev.nextnode=null;
    }

    function contains(value){
        let current=head;
        while(current!=null){
            if(current.value===value) return true;
            current=current.nextnode;
        }

        return false;
    }


    function find(value){
        let current=head;
        let index=0;

        while(current!=null){
            if(current.value===value) return index;
            current=current.nextnode;
            index++;
        }
    }


    function tostring(){
        let str="";
        let current=head;

        while(current!=null){
            str+=`${current.value}->`;
            current=current.nextnode;
        }
        str+='null';
        return str;
    }



    function insertAt(value,index){
        if(index===0)
        {
            prepend(value);
            return;
        }
        const prevnode=atIndex(index,-1);
        if(!prevnode) return;

        const newNode=node(value,prevnode.nextnode)
        prevnode.nextnode=newNode;
    }

    function removeAt(index) {
        if (index === 0) {
          head = head?.nextnode || null;
          return;
        }
    
        const prevnode = atIndex(index - 1);
        const nodeToRemove = prevnode?.nextnode;
    
        if (!prevnode || !nodeToRemove) return;
    
        prevnode.nextnode = nodeToRemove.nextnode;
      }




      return{
        append,
        prepend,
        pop,
        size,
        getHead,
        tail,
        atIndex,
        contains,
        find,
        tostring,
        insertAt,
        removeAt
      };
    
}


export{linkedList};