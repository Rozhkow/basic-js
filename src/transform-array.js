module.exports = function transform(arr) {
  let mass = []
  
  if(!Array.isArray(arr)) return ERROR

  if (arr.length === 0) return []

  for(let i = 0; i < arr.length; i++) 
     if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') 
    mass.push(arr[i])
   
     else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) 
    mass.push(arr[i + 1])
    
     else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined && arr[i-2] !== "--discard-next") 
    mass.push(arr[i - 1])
    
     else if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) 
    i++

     else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined && arr[i-2] !== "--discard-next") 
    mass.pop(arr[i - 1])
  
  return mass
}
