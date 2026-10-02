function matchWinner(teamAGoals, teamBGoals)  {
    if(typeof teamAGoals!=='number'|| typeof teamBGoals!=='number'){
        return 'Invalid'
    }
    if(teamAGoals > teamBGoals){
        return'Team A Won';
    }else if (teamBGoals > teamAGoals){
        return'Team B Won';
    }else{
        return'Draw'
    }
}

const result = matchWinner (2,1);
console.log(result)
const result2 = matchWinner (1,3);
console.log(result2)
const result3 = matchWinner (2, 2);
console.log(result3)
const result4 = matchWinner ("3", 2);
console.log(result4)