
// const scores = [3,4,21,36,10,28,35,5,24,42]; //Expected 4 0
const scores = [10,5,20,20,4,5,2,25,1] //Expected 2 4

const breakingRecords = (scores) => {
    let currentRecord = null
    let lowestRecord = null
    let leastPointsBroken = 0
    let mostPointsBroken = 0

    // Write your code here
    for(let i = 0; i < scores.length; i++){
        if(currentRecord == null && lowestRecord == null){
            currentRecord = scores[i]
            lowestRecord = scores[i]
            continue
        }

        if(currentRecord < scores[i]){
            currentRecord = scores[i]
            mostPointsBroken++
        }

        if(lowestRecord > scores[i]){
            lowestRecord = scores[i]
            leastPointsBroken++
        }
    }

    return [mostPointsBroken,leastPointsBroken]
}

breakingRecords(scores)
