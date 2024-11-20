import CricketTeam from "./CricketTeam";

class AustraliaTeam extends CricketTeam{

    constructor(batter,bowlers,allRounder){
        super();
        console.log("Australia cricket players")
        console.log(`total players:${batter+bowlers+allRounder}`)
    }

    batterNames=()=>{
        console.log("Australia player = Tim David,Jake Fraser-McGurk,Travis Head")
    }
    bowlersNames=()=>{
        console.log("Australia Bowlers=Pat Cummins	,Mitchell Starc,Spencer Johnson,Xavier Bartlett")
    }
    allRounderNames=()=>{
        console.log("Australia Allrounders=Cameron Green,Mitch Marsh,Glenn Maxwell,Marcus Stoinis")
    }

}
export default AustraliaTeam;