let hPlusOne = document.getElementById ("scoreHome");
let gPlusOne = document.getElementById ("scoreGuest");
console.log(hPlusOne)
console.log(gPlusOne)

let homePoints = 0
let guestPoints = 0


function scoreOneHome(){
    let hp = homePoints +=1
hPlusOne.textContent = hp


}

function scoreTwoHome(){
    let hp = homePoints +=2
hPlusOne.textContent = hp


}

function scoreThreeHome(){
    let hp = homePoints +=3
hPlusOne.textContent = hp


}


function scoreOneGuest(){
    let gp = guestPoints +=1
gPlusOne.textContent = gp


}

function scoreTwoGuest(){
    let gp = guestPoints +=2
gPlusOne.textContent = gp


}

function scoreThreeGuest(){
    let gp = guestPoints +=3
gPlusOne.textContent = gp


}