let turn = 1
let arr1 = [0 , 0 , 0]
let arr2 = [0 , 0 , 0]
let arr3 = [0 , 0 , 0]
let result = false
let winner = 0

// Preload hover sound
const hoverAudio = new Audio('pop final.mp3');
hoverAudio.volume = 0;
hoverAudio.play().then(() => hoverAudio.pause());


function main(x){
    if(turn%2===0){
        document.getElementById(x).innerHTML = '0'
        turn = turn + 1
        console.log(x)
        console.log('even turn')
        document.getElementById(x).classList.add('disabled') 
    }
    else{
    document.getElementById(x).innerHTML = 'X'
        turn = turn+1
        console.log(x)
        console.log('odd turn')
        document.getElementById(x).classList.add('disabled')
    }
    
    x = parseInt(x)

    if(turn%2!=0){ //0
        if(x===1){
            arr1[0] = 2
        }
        if(x===2){
            arr1[1] = 2
        }
        if(x===3){
            arr1[2] = 2
        }
        if(x===4){
            arr2[0] = 2
        }
        if(x===5){
            arr2[1] = 2
        }
        if(x===6){
            arr2[2] = 2
        }
        if(x===7){
            arr3[0] = 2
        }
        if(x===8){
            arr3[1] = 2
        }
        if(x===9){
            arr3[2] = 2
        }
    }
    else{ // X
        if(x===1){
            arr1[0] = 1
        }
        if(x===2){
            arr1[1] = 1
        }
        if(x===3){
            arr1[2] = 1
        }
        if(x===4){
            arr2[0] = 1
        }
        if(x===5){
            arr2[1] = 1
        }
        if(x===6){
            arr2[2] = 1
        }
        if(x===7){
            arr3[0] = 1
        }
        if(x===8){
            arr3[1] = 1
        }
        if(x===9){
            arr3[2] = 1
        }
    }
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)

  
    // win case 1 row 1
    if(arr1[0]===arr1[1] && arr1[1]===arr1[2] && arr1[0]!=0){
        result = true
        if(arr1[0]===1){
            winner = 1
        }
        if(arr1[0]===2){
            winner = 2
        }
    }
    // win case 2 row 2
    if(arr2[0]===arr2[1] && arr2[1]===arr2[2] && arr2[0]!=0){
        result = true
        if(arr2[0]===1){
            winner = 1
        }
        if(arr2[0]===2){
            winner = 2
        }
    }
    // win case 3 row 3
    if(arr3[0]===arr3[1] && arr3[1]===arr3[2] && arr3[0]!=0){
        result = true
        if(arr3[0]===1){
            winner = 1
        }
        if(arr3[0]===2){
            winner = 2
        }
    }
    // win case 4 col 1
    if(arr1[0]===arr2[0] && arr2[0]===arr3[0] && arr1[0]!=0){
        result = true
        if(arr1[0]===1){
            winner = 1
        }
        if(arr1[0]===2){
            winner = 2
        }
    }
    // win case 5 col 2
    if(arr1[1]===arr2[1] && arr2[1]===arr3[1] && arr1[1]!=0){
        result = true
        if(arr1[1]===1){
            winner = 1
        }
        if(arr1[1]===2){
            winner = 2
        }
    }
    // win case 6 col 3
    if(arr1[2]===arr2[2] && arr2[2]===arr3[2] && arr1[2]!=0){
        result = true
        if(arr1[2]===1){
            winner = 1
        }
        if(arr1[2]===2){
            winner = 2
        }
    }
    // win case 7 diag 1
    if(arr1[0]===arr2[1] && arr2[1]===arr3[2] && arr1[0]!=0){
        result = true
        if(arr1[0]===1){
            winner = 1
        }
        if(arr1[0]===2){
            winner = 2
        }
    }
    // win case 8 diag 2
    if(arr1[2]===arr2[1] && arr2[1]===arr3[0] && arr1[2]!=0){
        result = true
        if(arr1[2]===1){
            winner = 1
        }
        if(arr1[2]===2){
            winner = 2
        }
    }
    announce_winner()
    
}
function announce_winner(){
    console.log('turn ',turn)
    console.log('result ', result)
    if(result===true){
        disable_all()
        console.log("winner" , winner)
        document.getElementById('reset').style.visibility = 'visible'

        if(winner===1){
        document.getElementById('result').style.visibility = 'visible'
        document.getElementById('result').innerHTML = "X wins"
        document.getElementById('result').className = "alert alert-success mt-2"
        }
        if(winner===2){
            document.getElementById('result').style.visibility = 'visible'    
            document.getElementById('result').innerHTML = "0 wins"
            document.getElementById('result').className = "alert alert-success mt-2"
        }
    }
       if(turn===10 && result ===false){
        document.getElementById('result').style.visibility = 'visible'  
        document.getElementById('reset').style.visibility = 'visible'
        document.getElementById('result').innerHTML = "Draw"
        document.getElementById('result').className = "alert alert-success mt-2"
       }
       
}
function disable_all(){
    document.getElementById('1').classList.add('disabled')
    document.getElementById('2').classList.add('disabled')
    document.getElementById('3').classList.add('disabled')
    document.getElementById('4').classList.add('disabled')
    document.getElementById('5').classList.add('disabled')
    document.getElementById('6').classList.add('disabled')
    document.getElementById('7').classList.add('disabled')
    document.getElementById('8').classList.add('disabled')
    document.getElementById('9').classList.add('disabled')
}

function click_sound(){
    document.getElementById('pop_audio').play()
}
function hover_sound(){
    document.getElementById('hover_audio').play()
}
function reset_game(){
    result = false
    winner = 0
    turn = 1
    arr1 = [0 , 0 , 0]
    arr2 = [0 , 0 , 0]
    arr3 = [0 , 0 , 0]

    document.getElementById('1').classList.remove('disabled')
    document.getElementById('2').classList.remove('disabled')
    document.getElementById('3').classList.remove('disabled')
    document.getElementById('4').classList.remove('disabled')
    document.getElementById('5').classList.remove('disabled')
    document.getElementById('6').classList.remove('disabled')
    document.getElementById('7').classList.remove('disabled')
    document.getElementById('8').classList.remove('disabled')
    document.getElementById('9').classList.remove('disabled')

    document.getElementById('1').innerHTML = ''
    document.getElementById('2').innerHTML = ''
    document.getElementById('3').innerHTML = ''
    document.getElementById('4').innerHTML = ''
    document.getElementById('5').innerHTML = ''
    document.getElementById('6').innerHTML = ''
    document.getElementById('7').innerHTML = ''
    document.getElementById('8').innerHTML = ''
    document.getElementById('9').innerHTML = ''

    document.getElementById('result').style.visibility = 'hidden'
    document.getElementById('reset').style.visibility = 'hidden'
}


