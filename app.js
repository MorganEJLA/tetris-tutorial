document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
    const width = 10;


    //The terominoes//

    const lTetromino = [
        //make the l tectromino an array with 4 items inside it//
        //each of the four arrays is one of its rotations. 
        [1, width+1, width*2+1, 2],
        [width,width+1, width+2, width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,+width*2+2]

    ]
    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]

    ]
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1] 

    ]
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1] 
    ]
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]     
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    //randomly select a Tetromino and its first rotation.//

    let random = Math.floor(Math.random()*theTetrominoes.length)
    // console.log(random);
    //Math.random()
    //.length
    // Math.floor() rounds down the number to its nearest full integer//

    //Replace the first zero below with random so that instead of passing through 0 and accessing the first item of each time, we 
    //passing a number from 0 to 4 randomly.
    //chang the second item to currentRotation whcih above is set to 0.
    let current = theTetrominoes[random][currentRotation];

    // console.log(theTetrominoes[0][0]);


    //draw the etromino//

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    //undraw the tetromino//

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })


    }


//setInterval (function, 1000) allows us to invoke a function that we have passed through it after X amount of time. 
//time is 1000 miliseconds oe one secondd so that each tetromino auto moves down the grid every second. 
//make tetromino move down every second//

timerId = setInterval(moveDown, 1000)

//assign a function to keycode //

// function control(e) {
//     if(e.keyCode === 37){
//         moveLeft()
//     } else if (e.keyCode === 38) {
 
//     } else if (e.keyCode === 39) {
//        moveRight()
//     } else if (e.keyCode === 40) {
//        moveDown()
//     }


function control(e) {
    
    if (e.keyCode === 39)
      moveRight()
    
    else if (e.keyCode === 38)
      rotate()
  
    else if (e.keyCode === 37)
      moveLeft()
 
    else (e.keyCode === 40)
      moveDown()
    
  }

document.addEventListener('keyup', control)




//move down function

function moveDown() {
    undraw()
    currentPosition += width
    draw()
    freeze()
};


//freeze function//
function freeze(){
if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
    current.forEach(index =>squares[currentPosition + index].classList.add('taken'))
    //start a random tetromino falling
    random = Math.floor(Math.random() * theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw();
    }   
}
//move the tetromino left, unless is at the edge or there is a blockage//
// function moveLeft() {
//     undraw()
//     const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0 )

//     if(!isAtLeftEdge) currentPosition -=1

//     if(current.some(index => squares[currentPosition +index].classList.contains("taken")))
//         currentPosition +=1

//     }     
//     draw();
// },

// function moveRight() {
//    undraw()
// //     const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

// //     if(!isAtRightEdge) currentPosition +=1

// //     if(current.some(index => squares[currentPosition + index].classList.contains("taken")))
// //         currentPosition -=1
// //     }
// //     draw();
// },

function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if(!isAtRightEdge) currentPosition += 1
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    
      currentPosition -= 1
    }
    draw()

    
    }
 function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0 )

    if(!isAtLeftEdge) currentPosition -=1

    if(current.some(index => squares[currentPosition +index].classList.contains('taken'))) {
        currentPosition +=1

    }     
    draw();
    }


function rotate(){
    undraw()
    currentRotation ++
    if(currentRotation === current.length){ // if the current rotation gets to 4 make it go back to 0
        currentRotatopm = 0
    }
    current = theTetrominoes[random][currentRotation]
    draw ();
    }
});
