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



// "use strict";

// var playerModel = {
//     boardSize: 7,
//     numShips: 3,
//     ships: [{   locations: [], hits: ['', '', '']   },
//             {   locations: [], hits: ['', '', '']   },
//             {   locations: [], hits: ['', '', '']   }],
//     shipsSunk: 0,
//     shipLength: 3,
//     generateShip: function () {
//         var direction = Math.floor(Math.random() * 2);
//         var row, col;
//         var result = [];

//         if (direction === 1) {      //horizontal   70-71-72
//             row = Math.floor(Math.random() * this.boardSize);
//             col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//             for (var i = 0; i < this.shipLength; i++) {
//                 result.push('1' + String(row) + String(col + i));
//             }
//         } else {                    //vertical
//             row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//             col = Math.floor(Math.random() * this.boardSize);
//             for (var i = 0; i < this.shipLength; i++) {
//                 result.push('1' + String(row + i) + String(col));
//             }
//         }
//         return result;
//     },
//     generateShipLocation: function () {
//         var i = 0;
//         while (i < this.numShips) {
//             this.ships[i].locations = this.generateShip();
//             i++;
//         }
//     },
//     showShips: function(location) {
//         for (var i = 0; i < this.numShips; i++) {
//             var ship = this.ships[i].locations;
//             for (var i = 0; i < this.shipLength; i++) {
//                 view.displayHit(ship[i]);
//             }
//         }
//     },
//     rand: function () {
//         var row = Math.floor(Math.random() * this.boardSize);
//         var col = Math.floor(Math.random() * this.boardSize);
//         var result = '1' + '' + row + '' + col;
//         return result;
//     },
//     hit: function () {
//         fire(this.rand);
//     },
//     fire: function (guess) {
//         for (var i = 0; i < this.numShips; i++) {
//             var ship = this.ships[i];
//             var index = ship.locations.indexOf(guess);
//             if (index >= 0) {
//                 ship.hits[index] = 'hit';
//                 view.displayHit(guess);
//                 view.displayMessage('HIT !');
//                 if (this.isSunk(ship)) {
//                     view.displayMessage('You sank battleship!');
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
// }

// // playerModel.generateShipLocation();
// // playerModel.showShips();
// playerModel.rand();



// var i = 0;
// do {
//     console.log('hellow ');
//     i++;
//     console.log(i);
// } while(i < 3) {
//     console.log('end ' + i);
// }

// var t = [];
// var p = ['100','101','102'];

// t.push(p);
// console.log(t[0]);

// console.log(p[0].split(' '));






            // if(this.checkResult(this.result - 2)) {
            //     this.result = String(Number(this.result) + 9);
            // } else {
            //     this.result = String(Number(this.result) - 2);
            // }

            

            // if(this.checkResult(this.result - 20)) {
            //     this.result = String(Number(this.result) - 2);
            // } else {
            //     this.result = String(Number(this.result) - 20);
            // }
        


            // if(this.hitted[0] == Number(this.result) + 10) {
            //     this.result = String(Number(this.result) + 10);
            //     if(this.result.charAt(1) >= this.boardSize || this.fireGuesses.indexOf(this.result) >= 0) {
            //         ;
            //     } else {
            //         this.result = String(Number(this.result) - 20);
            //     }
            // } else if (this.hitted[0] == Number(this.result) - 10 ) {
            //     this.result = String(Number(this.result) - 10);
            //     if(this.result.charAt(1) >= this.boardSize || this.fireGuesses.indexOf(this.result) >= 0) {
            //         ;
            //     } else {
            //         this.result = String(Number(this.result) + 20);
            //     }
            // } else {
            //     this.result = String(Number(this.result) + 1);
            // }




        // } else {
        //     if (String(Number(this.result) - 2).charAt(2) < this.boardSize 
        //     && this.fireGuesses.indexOf(String(Number(this.result) - 2)) < 0) {
        //         this.result = String(Number(this.result) - 2);
        //     } else if (String(Number(this.result) - 3).charAt(2) > this.boardSize 
        //     || this.fireGuesses.indexOf(String(Number(this.result) - 2)) >= 0
        //     || String(Number(this.result) - 2).charAt(2) > this.boardSize 
        //     || this.fireGuesses.indexOf(String(Number(this.result) - 3)) >= 0 ) {
        //         this.result = String(Number(this.result) + 9);
        //     } else if ( this.fireGuesses.indexOf(String(Number(this.result) + 2)) >= 0 || this.result.charAt(2) >= this.boardSize ) {
        //         this.result = String(Number(this.result) - 9);
        //     } else if ( this.fireGuesses.indexOf(Number(this.result - 2)) >= 0 || this.result.charAt(2) >= this.boardSize ) {
        //         this.result = String(Number(this.result) - 11);                
        //     } else if (String(Number(this.result) + 3).charAt(2) > this.boardSize ) {       // +11 <<<
        //         this.result = String(Number(this.result) + 9);      //11
        //     } else {
        //         this.result = String(Number(this.result) + 9);
        //         if(Number(this.result) < 100
        //         || this.result.charAt(2) >= this.boardSize 
        //         || this.fireGuesses.indexOf(this.result) >= 0
        //         || this.result.charAt(1) >= this.boardSize ) {
        //             this.result = String(Number(this.result) + 11);
        //         }
        //     }
        // }






var p = {
    b: '',
    a: function () {
        // console.log('qweqwe');
        p.b = p.b + 'qwe';
    },
    c: '',
    d: 8,
    e: [13, 12, 11]
}
p.e.sort();
console.log(p.e);

p.d--;

console.log(p.d);

p.c = 9;
console.log(typeof p.c);

p.a();
console.log(p.b);
p.a();
console.log(p.b);

var t = [12,13,14];
console.log(t[-1]);


var g = 'rty';
console.log(g.charAt(3));


var l = 3;
if(l > 0) {
    console.log('111');
} else if(l > 1) {
    console.log('222');
} else if (l > 2) {
    console.log('333');
}

var u = ['160', '110', '163']



console.log(u.indexOf('163'));
console.log('0'<1);
console.log(g.charAt(2));

var result = '163';
console.log(String(Number(result) + 5).charAt(2));



console.log(result == String(u[0] + 3));
console.log(u[0] + 3);

console.log(result == Number(u[0]) + 3);


console.log(result + 5);

var a = '10'-'3';
console.log(typeof a);

var b = -1;
console.log(5+b);


console.log(5-b);

console.log(b == -1);

function qwe(res) {
    var res = String(res);
    console.log(res);
    console.log(typeof res);
}
qwe(130);


            // if (this.result == Number(this.hitted[0]) + 1) {
            //     this.result = String(Number(this.result) + 1);
            //     if(this.checkResult(this.result)) {
            //         this.result = String(Number(this.result) - 3);
            //     }
            // } else if (this.result == Number(this.hitted[0]) - 1) {
            //     this.result = String(Number(this.result) - 1);
            //     if(this.checkResult(this.result)) {
            //         this.result = String(Number(this.result) + 3);
            //     }
            // } else if (this.result == Number(this.hitted[0]) + 10) {
            //     this.result = String(Number(this.result) + 10);
            //     if(this.checkResult(this.result)) {
            //         this.result = String(Number(this.result) - 30);
            //     }
            // } else if (this.result == Number(this.hitted[0]) - 10) {
            //     this.result = String(Number(this.result) - 10);
            //     if(this.checkResult(this.result)) {
            //         this.result = String(Number(this.result) + 30);
            //     }
            // }







            // --- if missed     -3 & +3
            // if ( String(this.result - 3).charAt(1) >= this.boardSize 
            // || String(this.result - 3).charAt(2) >= this.boardSize 
            // || (this.result - 3) < 100) {
            //     if ( this.checkResult(String(Number(this.result) +  9)) ) {
            //         this.result = String(Number(this.result) - 11);
            //     } else {
            //         this.result = String(Number(this.result) + 9);
            //     }   // experemental
            // } else if ( String(this.result + 3).charAt(1) >= this.boardSize 
            // || String(this.result + 3).charAt(2) >= this.boardSize)  {
            //     if ( this.checkResult(String(Number(this.result) +  9)) ) {
            //         this.result = String(Number(this.result) - 11);
            //     } else {
            //         this.result = String(Number(this.result) + 9);
            //     }   // experemental
            //     //EXPERIMENT






            //////LAST
                        // if (this.result == Number(this.hitted[0]) + 1) {
            //     if (this.checkResult(String(this.result - 2))) {
            //         if (this.checkResult(String(Number(this.result) + 9)) ) {
            //             this.result = String(Number(this.result) - 11);
            //         } else {
            //             this.result = String(Number(this.result) + 9);
            //         }
            //     } else {            
            //         this.result = String(Number(this.result) - 2);
            //     }
            // } else if (this.result == Number(this.hitted[0]) - 1) {
            //     if (this.checkResult(String(Number(this.result + 11)))) {
            //         this.result = String(Number(this.result) - 9);
            //     } else {
            //         this.result = String(Number(this.result) + 11);
            //     }
            // } else if (this.result == Number(this.hitted[0]) + 10) {
            //     this.result = String(Number(this.result) - 20);
            // }




                // if ( this.checkResult(String(Number(this.result) + 11)) ) {
                //     if (this.checkResult(String(Number(this.result) - 9))) {
                //         this.result = String(Number(this.result) - 20);
                //     } else {
                //         this.result = String(Number(this.result) - 9);
                //     }
                // } else {
                //     this.result = String(Number(this.result) + 11);
                // }


            ///GENERATENEXTSTAP
            // if (this.checkResult(String(Number(this.result) + step)) ) {
            //     if (this.checkResult(String(Number(this.result) - step)) ) {
            //         if (this.checkResult(String(Number(this.result) + step * 2)) ) {
            //             this.result = String(Number(this.result) + step * 3);
            //         } else {
            //             this.result = String(Number(this.result) + step * 2);
            //         }
            //     } else {
            //         this.result = String(Number(this.result) - step);
            //     }
            // } else {
            //     this.result = String(Number(this.result) + step);
            // }



var l = 5;

(function yyy() {
    console.log(l);
    var k = 7;
    console.log(k);
}());