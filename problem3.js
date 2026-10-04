function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number' ||  tokensUsed < 0){
        return 'Invalid';

    }
    if(tokensUsed <= 500){
        return 0;
    }
    
    const billingRules = tokensUsed - 500;
    const quantity = billingRules / 100
    const quantityInceil = Math.floor(quantity)
    const cost = quantityInceil * 5
    return cost
}

const result = calculateAiCost (300)
console.log(result)
const result2 = calculateAiCost (500)
console.log(result2)
const result3 = calculateAiCost (650)
console.log(result3)
const result4 = calculateAiCost (1000)
console.log(result4)
const result5 = calculateAiCost (-10)
console.log(result5)
const result6 = calculateAiCost ("500")
console.log(result6)