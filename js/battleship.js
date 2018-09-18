

// var view = {
//     displayMessage: function (msg) {
//         var messageArea = document.getElementById('messageArea');
//         messageArea.innerHTML = msg;
//     },
//     displayHit: function (location) {
//         var cell = document.getElementById(location);
//         cell.setAttribute('class', 'hit');
//     },
//     displayMiss: function (location) {
//         var cell = document.getElementById(location);
//         cell.setAttribute('class', 'miss');
//     }
// };


// var model = {
//     boardSize: 7,
//     numShips: 3,
//     shipsSunk: 0,
//     shipLength: 3,
//     // ships: [{   locations: ['06', '16', '26'], hits: ['', '', '']   },
//     //         {   locations: ['24', '34', '44'], hits: ['', '', '']   },
//     //         {   locations: ['10', '11', '12'], hits: ['', '', 'hit']   }],
//     ships: [{   locations: [0, 0, 0], hits: ['', '', '']   },
//             {   locations: [0, 0, 0], hits: ['', '', '']   },
//             {   locations: [0, 0, 0], hits: ['', '', '']   }],
//     fire: function (guess) {
//         for (var i = 0; i < this.numShips; i++) {
//             var ship = this.ships[i];
//             var index = ship.locations.indexOf(guess);
//             if (index >= 0) {
//                 ship.hits[index] = 'hit';
//                 view.displayHit(guess);
//                 view.displayMessage('HIT !');
//                 if (this.isSunk(ship)) {
//                     view.displayMessage('You sank my battleship!');
//                     this.shipsSunk++;
//                 }
//                 return true;
//             }
//         }
//         view.displayMiss(guess);
//         view.displayMessage('You missed.');
//         return false;
//     },
//     isSunk: function (ship) {
//         for (var i = 0; i < this.shipLength; i++) {
//             if (ship.hits[i] !== 'hit') {
//                 return false;
//             }
//         }
//         return true;
//     },
//     generateShipLocations: function() { 
//         var locations;
//         for (var i = 0; i < this.numShips; i++) {
//             do {
//                 locations = this.generateShip(); 
//             } while (this.collision(locations)); 
//                 this.ships[i].locations = locations;
//         } 
//     },
//     generateShip: function() {
//         var direction = Math.floor(Math.random() * 2);
//         var row, col;

//         if (direction === 1) {  //horizontal
//             row = Math.floor(Math.random() * this.boardSize);
//             col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//         } else {    //vertical
//             row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//             col = Math.floor(Math.random() * this.boardSize);
//         }

//         var newShipLocations =[];
//         for (i = 0; i < this.shipLength; i++) {
//             if (direction === 1) {                
//                 newShipLocations.push(row + '' + (col + i));
//             } else {
//                 newShipLocations.push((row + i) + '' + col);
//             }
//         }
//         return newShipLocations;
//     },
//     collision: function (locations) {
//         for (i = 0; i < this.numShips; i++) {
//             var ship = model.ships[i];
//             for (j = 0; j < locations.length; j++) {
//                 if (ship.locations.indexOf(locations[j]) >= 0) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
// };


// var controller = {
//     guesses: 0,
//     processGuess: function (guess) {
//         var location = parseGuess(guess);
//         if (location) {
//             this.guesses++;
//             var hit = model.fire(location);
//             if (hit && model.shipsSunk === model.numShips) {
//                 view.displayMessage('You sank all batlleships, in ' + this.guesses + ' guesses');
//             }
//         }
//     }
// }


// function parseGuess(guess) {
//     var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G'];

//     if (guess == null || guess.length !== 2) {
//         alert('Oops, please enter a letter and a number on the board.');
//     } else {
//         var firsChar = guess.charAt(0);
//         var column = guess.charAt(1);
//         var row = alphabet.indexOf(firsChar);

//         if (isNaN(row) || isNaN(column)) {
//             alert("Oops, that isn't on the board.");
//         } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
//             alert("Oops, that's off the board!");
//         } else {
//             return row + column;
//         }        
//     }
//     return null;
// }


// function handleFireButton() {
//     var guessInput = document.getElementById('guessInput');
//     var guess = guessInput.value.toUpperCase();
//     controller.processGuess(guess);

//     guessInput.value = '';
// }


// function handleKeyPress(e) {
//     var fireButton = document.getElementById('fireButton');
//     if (e.keyCode === 13) {
//         fireButton.click();
//         return false;
//     }
// }


// function init() {
//     var fireButton = document.getElementById('fireButton');
//     fireButton.onclick = handleFireButton;
//     var guessInput = document.getElementById('guessInput'); 
//     guessInput.onkeypress = handleKeyPress;
//     model.generateShipLocations();
// }


// window.onload = init;












function init() {
    
}

var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById('messageArea');
        messageArea.textContent = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.className = 'hit';
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.className = 'miss';
    }
}

var model = {
    boardSize: 7,
    numShips: 3,
    ships: [{   locations: [], hits: ['', '', '']   },
            {   locations: [], hits: ['', '', '']   },
            {   locations: [], hits: ['', '', '']   }],
    shipsSunk: 0,
    shipLength: 3,
    fire: function() {

    },
    generateShip: function () {
        var randDirection = Math.floor(Math.random() * 2);
        var result = [];

        if (randDirection === 1) {      // horizontal        
            var randFirstNum = Math.floor(Math.random() * this.boardSize);
            var randSecondNum = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            for (var i = 0; i < this.shipLength; i++) {
                result.push(randFirstNum + '' + (randSecondNum + i));
            }             
        } else {                        // vertical
            var randFirstNum = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            var randSecondNum = Math.floor(Math.random() * this.boardSize);
            for (var i = 0; i < this.shipLength; i++) {
                result.push((randFirstNum + i) + '' + randSecondNum);
            }
        }
        return result;
    },
    generateShipLocations: function() { 
        for (var i = 0; i < this.numShips; i++) {
            do {
                var locations = this.generateShip();
            } while (this.collision(locations));
                this.ships[i].locations = locations;
        }
    },
    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
}


for(i = 0; i < model.ships.length; i++) {
    console.log(model.ships[i].locations);
}
console.log('============');
model.generateShipLocations();
for(i = 0; i < model.ships.length; i++) {
    console.log(model.ships[i].locations);
}

// var p = model.generateShip();
// for(i = 0; i < p.length; i++) {
//     console.log(p[i]);
//     view.displayHit(p[i]);
// }



//qweqweqwe