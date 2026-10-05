function averageResponseTime(times) {
  if (!Array.isArray(times)|| times.length === 0) {
        return "Invalid";
   }
    for(let item of times){
      if(typeof item !== "number"){
        return"Invalid";
      }
    }
 let total = 0;
 for(let item of times){
  total += item
 }
 return total / times.length;
}
 const result = averageResponseTime ([120, 200, 150, 130])
 console.log(result)
 const result2 = averageResponseTime ([100, 100])
 console.log(result2)
 const result3 = averageResponseTime ([])
 console.log(result3)
 const result4 = averageResponseTime ("logs")
 console.log(result4)
 const result5 = averageResponseTime ([120, "200", 150])
 console.log(result5)