export function mergeSortAnimations(array)
{   
    if(array.length<=1) return array
    const tempArray = array.slice();
    const animation=[];
    mergeOperator(array,0,array.length-1,tempArray,animation)
    return animation;
}
function mergeOperator(finalArray, startID, endID, tempArray, animation){
    if(startID==endID){return;}
    const midID=Math.floor((startID+endID)/2);
    mergeOperator(tempArray,startID,midID,finalArray,animation);
    mergeOperator(tempArray,midID+1,endID,finalArray,animation);
    merger(finalArray,startID,midID,endID,tempArray,animation);
    console.log(finalArray);
    return finalArray;
}
function merger(finalArray,startID,midID,endID,tempArray,animation)
{let k=startID;
 let i=startID;
 let j=midID+1;
 while(i<=midID && j<=endID){
    animation.push([i,j]);
    animation.push([i,j]);
    if(tempArray[i]<=tempArray[j])
   { 
    animation.push([k,tempArray[i]]);
    finalArray[k++]=tempArray[i++];  }
    else{
        animation.push([k,tempArray[j]]);
        finalArray[k++]=tempArray[j++];          
    } 
 }
 while(i<=midID){
    animation.push([i,i]);
    animation.push([i,i]);
    animation.push([k,tempArray[i]]);
    finalArray[k++]=tempArray[i++]; 
 }
 while(j<=endID){
    animation.push([j,j]);
    animation.push([j,j]);
    animation.push([k,tempArray[j]]);
    finalArray[k++]=tempArray[j++]; 
 }

}

//heap sort
export function HeapsortAnimation(arr)
    {   
        const Heapanimation=[];
        var n = arr.length;
        console.log(arr)
        // Build heap (rearrange array)
        var limit=Math.floor(n / 2)-1;
        for (var i = limit; i >= 0; i--)
        {   
            heapify(arr, n, i, Heapanimation);
        }
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            console.log("swap",i,arr[0],0,arr[i],"99")
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;   
            Heapanimation.push(["swap",i,arr[i],0,arr[0]]); 
            console.log(arr);
            heapify(arr, i, 0,Heapanimation);
            
        }
        console.log(arr);
        return Heapanimation;
        
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i,Heapanimation)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        
        if (l < n && arr[l] > arr[largest])
           {  
                Heapanimation.push(["comp",1,l,largest]);
               Heapanimation.push(["comp",2,l,largest]);
               largest = l;
             } 
        // If right child is larger than largest so far
       
        if (r < n && arr[r] > arr[largest])
           {   
               Heapanimation.push(["comp",1,r,largest]);
           Heapanimation.push(["comp",2,r,largest]);
               largest = r;      
           }
        // If largest is not root
        if (largest != i) {
            console.log("swap",i,arr[largest],largest,arr[i])
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;  
            console.log(arr);
            Heapanimation.push(["swap",i,arr[i],largest,arr[largest]]);
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest,Heapanimation);
        }
    }
 
    /* A utility function to print array of size n */




    //Bubble sort
    export function bubbleSortAnimation(array)
    {
        const bubbleAnimation=[];
        let n=array.length;
        for(let i=0;i<n-1;i++)
        {
            for(let j=0;j<n-1-i;j++)
            {
                if(array[j]>array[j+1])
                {
                    bubbleAnimation.push(["comp",1,j,j+1]);
                    bubbleAnimation.push(["comp",2,j,j+1]);
                    var temp=array[j+1];
                    array[j+1]=array[j];
                    array[j]=temp;
                    bubbleAnimation.push(["swap",j,array[j],j+1,array[j+1]]);
                }
            }
        }
        return bubbleAnimation;
    }
    
 

    ///Quick sort

    export function quickSortAnimation(arr)
    {   console.log(arr);
        const quickAnimation=[];
        quickSorting(arr,0,arr.length-1,quickAnimation);
        return quickAnimation;
        console.log(arr);
    }
    function quickSorting(arr, left, right,quickAnimation)
    {
        if(left>=right)return;
        
        //Math.floor((left+right)/2);
        let index=partition(arr,left,right,quickAnimation);
        quickSorting(arr,left,index-1,quickAnimation);
        quickSorting(arr,index+1,right,quickAnimation);
        
    }
    function partition(arr,low,high,quickAnimation){
        let pivot=high;
    let i = (low-1);

    for (let j = low; j < high; j++) {
        if (arr[j] <= arr[pivot]) {
            quickAnimation.push(["comp",1,j,pivot]);
           quickAnimation.push(["comp",2,j,pivot]);
            i++;

            let swapTemp = arr[i];
            arr[i] = arr[j];
            arr[j] = swapTemp;
            quickAnimation.push(["swap",i,arr[i],j,arr[j]]);
        }
    }

    let swapTemp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = swapTemp;
    quickAnimation.push(["swap",i+1,arr[i+1],high,arr[high]]);
    return i+1;

       
    //     while(left<=right){
    //     while(arr[left]<arr[pivot])
    //     {    quickAnimation.push(["comp",1,left,pivot]);
    //          quickAnimation.push(["comp",2,left,pivot]);
    //          left++;
    //     }
    //     while(arr[right]>arr[pivot])
    //     {   quickAnimation.push(["comp",1,right,pivot]);
    //        quickAnimation.push(["comp",2,right,pivot]);
    //        right--;
    //     }
    //     if(left<=right)
    //     {
    //      var temp=arr[left];
    //     arr[left]=arr[right];
    //     arr[right]=temp;
    //     quickAnimation.push(["swap",left,arr[left],right,arr[right]]);
    //     left++;
    //     right--; 
    //     }
    // }
    //   return left;

    }

 

 
 

