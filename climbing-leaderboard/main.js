// Complete the climbingLeaderboard function below.
// Create a new scores array to store scores without duplication
// Use a aliceIndex for alice's score, i for new rankedScores and start from the end of array. Only move i-- if alice's score is greater than array[i]
// While i >= 0, check if alice's score is smaller than array[i]? if so, result push i+2 and aliceIndex++
// Else if alice's score is equal to array[i], result push i+1 and aliceIndex++
// Else i--
// After the while loop, add 1 for the remaining alice's score. Return result array
// Time: O(m+n) Space: O(m)
function climbingLeaderboard(scores, alice) {
    let res = [];
    let rankedScores = [];
    for(let i = 0; i < scores.length; i++) {
        while(i < scores.length - 1 && scores[i] === scores[i+1]) {
            i++;
        }
        rankedScores.push(scores[i]);
    }
    let aliceIndex = 0;
    let i = rankedScores.length - 1;
    while(i >= 0 && aliceIndex < alice.length) {
        if(alice[aliceIndex] < rankedScores[i]) {
            res.push(i+2);
            aliceIndex++;
        }
        else if(alice[aliceIndex] === rankedScores[i]) {
            res.push(i+1);
            aliceIndex++;
        }
        else {
            i--;
        }
    }
    for(let j = aliceIndex; j < alice.length; j++) {
        res.push(1);
    }
    return res;
}
