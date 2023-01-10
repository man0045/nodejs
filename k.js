var arr = [5, 30, 4, 40, 20, 20];
var result = [];

 if(arr[1]/arr[0]>=arr[4]/arr[0]){
  result.push('Decreased')
 }else{
    result.push('Increased')
 }

 if(arr[3]/arr[2]>=arr[5]/arr[2]){
    result.push('Decreased')
   }else{
      result.push('Increased')
   }
console.log(result[0])
console.log(result[1])