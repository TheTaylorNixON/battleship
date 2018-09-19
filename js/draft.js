// var randFirstNum = Math.floor(Math.random() * 7);
// var randSecondNum = Math.floor(Math.random() * 7);
// result = [];
// result2 = [];
// for (var i = 0; i < 3; i++) {
//     result.push(randFirstNum + '' + (randSecondNum + i));
//     result2.push((randFirstNum + i) + '' + randSecondNum);
// }
// console.log(result);
// console.log(result2);












// // var model = {
// //     boardSize: 7,
// //     numShips: 3,
// //     ships: [{   locations: ['06', '16', '26'], hits: ['', '', '']   },
// //             {   locations: ['24', '34', '44'], hits: ['', '', '']   },
// //             {   locations: ['10', '11', '12'], hits: ['', '', '']   }],
// //     shipsSunk: 0,
// //     shipLength: 3,
// //     fire: function() {

// //     },
// //     generateShip: function () {
// //         var direction = Math.floor(Math.random() * 2);
// //         if (direction === 1) {      //  horizontal
// //             var row = Math.floor(Math.random() * this.boardSize);
// //             var col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
// //         } else {                    //  vertical
// //             var row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
// //             var col = Math.floor(Math.random() * this.boardSize);
// //         }

// //         var newShipLocations = [];
// //         console.log(row);
// //         console.log(col);
// //         for (var i = 0; i < this.shipLength; i++) {            
// //             if (direction === 1) {
// //                 newShipLocations.push(row + '' + (col + i));
// //             } else {
// //                 newShipLocations.push((row + i) + '' + col);
// //             }
// //             console.log(newShipLocations);
// //         }
// //     }
// // }


// // model.generateShip();

















// var direction = Math.floor(Math.random() * 2);
// if (direction === 1) {      //  horizontal
//     var row = Math.floor(Math.random() * this.boardSize);
//     var col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
// } else {                    //  vertical
//     var row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//     var col = Math.floor(Math.random() * this.boardSize);
// }

// var newShipLocations = [];
// for (var i = 0; i < this.shipLength; i++) {
//     if (direction === 1) {
//         newShipLocations.push(row + '' + (col + 1));
//     } else {
//         newShipLocations.push((row + i) + '' + col);
//     }
//     console.log(newShipLocations);
//     return newShipLocations;
// }





// var a = [0,1,2,77,66,55,33,22];
// var b = 22;

// console.log(a.indexOf(b));


// var guess = ('B25');
// var firsChar = guess.charAt(1);
// console.log(firsChar);

// var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G'];
// var row = alphabet.indexOf(firsChar);
// console.log(isNaN(row));
// console.log(guess.split('').join('-'));



"use strict";

var playerModel = {
    boardSize: 7,
    numShips: 3,
    ships: [{   locations: [], hits: ['', '', '']   },
            {   locations: [], hits: ['', '', '']   },
            {   locations: [], hits: ['', '', '']   }],
    shipsSunk: 0,
    shipLength: 3,
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        var result = [];

        if (direction === 1) {      //horizontal   70-71-72
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            for (var i = 0; i < this.shipLength; i++) {
                result.push('1' + String(row) + String(col + i));
            }
        } else {                    //vertical
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
            for (var i = 0; i < this.shipLength; i++) {
                result.push('1' + String(row + i) + String(col));
            }
        }
        return result;
    },
    generateShipLocation: function () {
        var i = 0;
        while (i < this.numShips) {
            this.ships[i].locations = this.generateShip();
            i++;
        }
    },
    showShips: function(location) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i].locations;
            for (var i = 0; i < this.shipLength; i++) {
                view.displayHit(ship[i]);
            }
        }
    },
}

playerModel.generateShipLocation();
playerModel.showShips();
// console.log(playerModel.ships[0].locations)
// console.log(playerModel.ships[1].locations)
// console.log(playerModel.ships[2].locations)