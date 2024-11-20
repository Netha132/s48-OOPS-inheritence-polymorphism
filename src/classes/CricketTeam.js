class CricketTeam{
    constructor(batter,bowlers,allRounder){
        console.log("Indian cricket players");
        console.log(`Total Players:${batter+bowlers+allRounder}`);
        this.batter=batter;
        this.bowlers=bowlers;
        this.allRounder=allRounder;
    }
    batterNames=()=>{
        console.log("India Batter=Rohit,Kohli,Dhoni")
    }
    bowlersNames=()=>{
        console.log("India Bowler=Bhumrah,sriraj,ashwin,shami")
    }
    allRounderNames=()=>{
        console.log("India Allrounder=Jadeja,hardhik,ShivamDube,Axer patel")
    }

}
export default CricketTeam;