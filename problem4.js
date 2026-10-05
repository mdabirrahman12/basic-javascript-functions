function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return 'Invalid';
    }
    let top = restaurants [0]; 
    for(let el of restaurants){
        if(el.rating > top.rating){
            top = el;
        }
    }
    return top.name.toUpperCase();
}
const result = topRatedRestaurant ([
    {name:"Chillox",rating:4.5},
    {name:"Sultan's Dine",rating:4.8}]

)
console.log(result)
const result2 = topRatedRestaurant ([
    {name:"KFC",rating:4.2},
    {name:"Pizza Hut",rating:4.6}]

)
console.log(result2)

const result3 = topRatedRestaurant (
    []
)
console.log(result3)
const result4 = topRatedRestaurant (
"restaurants"
)
console.log(result4)