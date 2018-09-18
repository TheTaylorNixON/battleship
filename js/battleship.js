

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
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('HIT !');
                if (this.isSunk(ship)) {
                    view.displayMessage('You sank my battleship!');
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage('You missed.');
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== 'hit') {
                return false;
            }
        }
        return true;
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

function parseGuess(guess) {
    var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G'];

    if (guess == null || guess.length !== 2) {
        view.displayMessage('Please enter a valid letter and a number');
    } else {
        var firsChar = guess.charAt(0);
        var column = guess.charAt(1);
        var row = alphabet.indexOf(firsChar);

        if (isNaN(row) || isNaN(column)) {
            view.displayMessage('Please enter a valid letter and a number');
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            view.displayMessage("That's off the board!");
        } else {
            return row + column;
        }        
    }
    return null;
}

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('You sank all batlleships, in ' + this.guesses + ' guesses');
            }
        }
    }
}

function handlerFireButton() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value.toUpperCase();
    controller.processGuess(guess);

    guessInput.value = '';    
}

function handlerKeyPress(e) {
    var fireButton = document.getElementById('fireButton');
    if (e.keyCode === 13) {
        fireButton.click();
        e.preventDefault();
        // return false;
    }
}

function cellHandler(e) {
    var id = e.target.id;
    model.fire(id);
}

function init() {
    model.generateShipLocations();
    var button = document.getElementById('fireButton');
    button.onclick = handlerFireButton;
    var guessInput = document.getElementById('guessInput'); 
    guessInput.onkeypress = handlerKeyPress;
    var cell = document.getElementById('table');
    cell.addEventListener('click', function (e) {cellHandler(e);}, false);
}

window.onload = init;