// we may use a Heap to implement a priotity queue
export default class MinHeap {
    public length: number;
    private data: number[];
    
    constructor(){
        this.length = 0;
        this.data = [];
    }

    insert(value:number):void{
        this.data.push(value);
        this.length++;

        this.heapfyUp(this.length-1);
    }

    delete():number | undefined{
        if(this.length === 0)return -1;
        
        if(this.length === 1){
            this.length--;
            return this.data.pop();
        }
        
        let out = this.data[0];
        this.length--;
        this.data[0] = this.data[this.length];
        this.data.pop();   
        this.heapfyDown(0);
        
        return out;
    }
    
    heapfyDown(idx:number):void{
        if(idx >= this.length)return;

        let indexLC = this.leftChild(idx);
        let indexRC = this.rightChild(idx);

        if(indexLC >=this.length && indexRC >= this.length) return;
        
        let leftC = this.data[indexLC];
        let rightC = this.data[indexRC];
        
        leftC = leftC?leftC:rightC;
        rightC = rightC?rightC:leftC;
            
        if(leftC <= rightC){
            this.data[indexLC] = this.data[idx];
            this.data[idx] = leftC;

            this.heapfyDown(indexLC);
        }else if (rightC <leftC){
            this.data[indexRC] = this.data[idx];
            this.data[idx] = rightC;

            this.heapfyDown(indexRC);
        }

    }
    
    heapfyUp(idx:number):void{
        if(idx === 0) return;

        let parentIndex = this.parent(idx);

        if(this.data[parentIndex]<=this.data[idx]) return;

        let temp = this.data[idx];

        this.data[idx] = this.data[parentIndex];
        this.data[parentIndex] = temp;

        this.heapfyUp(parentIndex);
    }

    parent(idx:number):number{
        return Math.floor((idx-1)/2);
    }
    
    leftChild(idx:number):number{
        return 2*idx+1;
    }
    rightChild(idx:number):number{
        return 2*idx+2;
    }
}


//Some of the differences from my implementation to his
//First he uses recursion = cleaner code but it's less perfomatic, meaning that we have to make a analisis
//and decide if the loss in performance is important
//Second he creates some really cool helper funcions = they make the code easier to understand
//and if something goes wrong or we have to change something, things are easier when we have well defined helper functions
export  class MinHeapMyImplementation {
    public length: number;
    private data: number[];
    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        
        this.length++;
        this.data.push(value);
            
        if(this.data.length ===1) return;

        for(let i=this.length-1;i>=0;i--){
            //lets go up
            let parent_index = Math.floor(Math.abs(i-1)/2)

            if(this.data[parent_index]<=this.data[i]) break;
            
            let temp = this.data[i];
            this.data[i] = this.data[parent_index];
            this.data[parent_index] = temp;

            i=parent_index+1;
        }
    
    }

    delete(): number {
        let lastElement = this.data.pop();
        this.length--;
        
        if(!lastElement)return -1;
        if(this.length === 0) return lastElement;


        let result = this.data[0];
        
        this.data[0] = lastElement;
        let i =0;
        do{
            let IndexLeftChild = 2*i+1;
            let IndexRightChild = 2*i+2;

            if(IndexLeftChild >= this.length && IndexRightChild >= this.length)break;

            if(IndexRightChild >= this.length) IndexRightChild = IndexLeftChild;
            if(IndexLeftChild >= this.length) IndexLeftChild = IndexRightChild;

            if(this.data[IndexLeftChild]<=this.data[IndexRightChild]){
                if(this.data[IndexLeftChild] >= this.data[i])break;
                
                let temp = this.data[i];
                this.data[i] = this.data[IndexLeftChild];
                this.data[IndexLeftChild] = temp;

                i=IndexLeftChild;
            }else{
                if(this.data[IndexRightChild] >= this.data[i])break;
                
                let temp = this.data[i];
                this.data[i] = this.data[IndexRightChild];
                this.data[IndexRightChild] = temp;

                i=IndexRightChild;
            }

        }while(i<this.length)

        return result;
    }
}
