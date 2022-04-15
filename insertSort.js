
const list=[1,20,7,7,5,100,444]


const insertSort=()=>{
    
    for (i=1;i<list.length;i++){
    

    for(j=0;j<=i-1;j++){
        
        aux=list[i]
        
        
        if(list[i]>list[j]){
            
          
          
        
            for(k=i;k>j;k--){
                
                list[k]=list[k-1]
               
               
                
            }
            
            list[j]=aux
            
        
           
            
        }
        
        
    }
    
}
    return list;
}

console.log(insertSort(list))
