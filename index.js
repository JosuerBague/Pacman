
/* ### Globals ### */
let worldsArray = [
    // World 1
    // [
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //     [2, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2],
    //     [2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2],
    //     [2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2],
    //     [2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2],
    //     [2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2],
    //     [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2],
    //     [2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2],
    //     [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    // ],
    // World 2 - Trees
    // [

    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //     [2, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    //     [2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2],
    //     [2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2],
    //     [2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2],
    //     [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    //     [2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2],
    //     [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2],
    //     [2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 2],
    //     [2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2],
    //     [2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
    //     [2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
    //     [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    // ],
    // World 3 - Fancy
    // [
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //     [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    //     [2, 0, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2],
    //     [2, 0, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    //     [2, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2],
    //     [2, 0, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2],
    //     [2, 0, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2],
    //     [2, 0, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 1, 1, 1, 2],
    //     [2, 0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    //     [2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    //     [2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2],
    //     [2, 1, 2, 1, 1, 2, 1, 1, 2, 0, 0, 2, 1, 1, 1, 2, 1, 2, 2, 0],
    //     [2, 1, 1, 2, 1, 1, 2, 1, 2, 0, 0, 2, 1, 1, 1, 2, 1, 2, 0, 0],
    //     [2, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0]

    // ],
    // [
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2],
    //     [5, 5, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 2, 5, 5],
    //     [5, 5, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 5, 5],
    //     [5, 5, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 5, 5],
    //     [5, 5, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 5, 5],
    //     [5, 5, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 5, 5],
    //     [5, 5, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 5, 5],
    //     [2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    //     [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    //     [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    //     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    // ],
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
]

let currWorld = worldsArray[0];


let pacMan = {
    xUnit: null,
    yUnit: null,
    counter: 0,
    x: 1,
    y: 1,
    init: true,
}

let ghostArray = [
    {
        // Ghost One
        id: '#ghost-1',
        x: 9,
        y: 8,
        lastDirection: 'left'
    },
    {
        // Ghost Two
        id: '#ghost-2',
        x: 1,
        y: 18,
    },
    {
        // Ghost Three
        id: '#ghost-3',
        x: 7,
        y: 12,
        lastDirection: 'left'
    },
    {
        // Ghost Four
        id: '#ghost-4',
        x: 15,
        y: 18,
    },
    {
        // Ghost Five
        id: '#ghost-5',
        x: 10,
        y: 2,
    },

]

let cherryTrigger = 0;
let totalFruits = 0;



/* ### World Generation ### */


function generateWorld(world) {
    let worldArea = document.querySelector('#world__area');
    while (worldArea.hasChildNodes()) {
        worldArea.removeChild(worldArea.lastChild);
    }

    for (let i = 0; i < world.length; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < world[i].length; j++) {
            let rowBlock = document.createElement('div');
            if (world[i][j] === 0) {
                rowBlock.classList.add('empty');
            }
            else if (world[i][j] === 1) {
                rowBlock.classList.add('coin')
            }
            else if (world[i][j] === 2) {
                rowBlock.classList.add('wall')
            }
            else if (world[i][j] === 3) {
                rowBlock.classList.add('cherry')
            }

            row.appendChild(rowBlock);
        }
        worldArea.appendChild(row);
    }

    updateGhosts();
    updatePacMan();
}

function updateWorld() {
    if (currWorld[pacMan.y][pacMan.x] == 1) {
        currWorld[pacMan.y][pacMan.x] = 0;
        updateScore(1)
        generateWorld(currWorld);

        if (cherryTrigger < 10) {
            cherryTrigger++
        }
    }
    else if (currWorld[pacMan.y][pacMan.x] == 3) {
        currWorld[pacMan.y][pacMan.x] = 0;
        totalFruits--;
        updateScore(20)
        generateWorld(currWorld);
    }

}

generateWorld(currWorld)


/* ### PacMan Sprite */


document.onkeydown = function movePacman(e) {
    if (e.keyCode === 38 && currWorld[pacMan.y - 1][pacMan.x] != 2) { // UP
        pacMan.y--;
    }
    else if (e.keyCode === 39 && currWorld[pacMan.y][pacMan.x + 1] != 2) { // Right
        pacMan.x++
    }
    else if (e.keyCode === 40 && currWorld[pacMan.y + 1][pacMan.x] != 2) { // Down
        pacMan.y++
    }
    else if (e.keyCode === 37 && currWorld[pacMan.y][pacMan.x - 1] != 2) { // Left
        pacMan.x--
    }

    updatePacMan(e);
    showCherry();
    updateWorld();
}

function updatePacMan(e) {
    if (e?.keyCode === 38) {
        document.querySelector('.pacman-img').style.transform = `rotate(-90deg)`;
    } else if (e?.keyCode === 39) {
        document.querySelector('.pacman-img').style.transform = `rotate(0deg)`;
    } else if (e?.keyCode === 40) {
        document.querySelector('.pacman-img').style.transform = `rotate(90deg)`;
    } else if (e?.keyCode === 37) {
        document.querySelector('.pacman-img').style.transform = `rotate(0deg)`;
        document.querySelector('.pacman-img').style.transform = 'scaleX(-1)';
    }

    let brickWidth = document.querySelector('.row .wall').offsetWidth,
        moveDelta;

    if (pacMan.init) {
        pacMan.xUnit = pacMan.x * brickWidth;
        pacMan.yUnit = pacMan.y * brickWidth;
        pacMan.init = false;
    } else {
        pacMan.xUnit = pacMan.xUnit + pacMan.counter * brickWidth / 3;
        pacMan.yUnit = pacMan.yUnit + pacMan.counter * brickWidth / 3;
    }

    document.getElementById('pacman').style.top = `${pacMan.xUnit}px`;
    document.getElementById('pacman').style.left = `${pacMan.yUnit}px`;

    checkDeath();
}

/* ### Cherry ### */


function showCherry() {
    if (cherryTrigger === 10 && totalFruits !== 3) {
        cherryTrigger = 0;

        let y = Math.floor(Math.random() * 8 + 1);
        let x = Math.floor(Math.random() * 8 + 1);

        let isNotCherry = currWorld[y][x] !== 3;
        let isNotWall = currWorld[y][x] !== 2;
        let isNotPacman = pacMan.y !== y && pacMan.x !== x;

        if (isNotCherry && isNotWall && isNotPacman) {
            currWorld[y][x] = 3;
            totalFruits++
        }
    }

    console.log('count:', cherryTrigger, 'total:', totalFruits);
}

/* ### Ghosts ### */


function updateGhosts() {
    let brickWidth = document.querySelector('.row .wall').offsetWidth;
    for (let i = 0; i < ghostArray.length; i++) {
        let ghost = document.querySelector(`${ghostArray[i].id}`);

        ghost.style.top = `${ghostArray[i].y * brickWidth}px`;
        ghost.style.left = `${ghostArray[i].x * brickWidth}px`;
    }

    checkDeath();
}

function moveGhosts() {
    // Generate number inclusive of 0 but exclusive of 4.
    // Math.floor( Math.random () * (max - min) + min);

    for (let i = 0; i < ghostArray.length; i++) {
        let moveToken = Math.floor(Math.random() * 4);

        let leftMove = [
            (moveToken === 0),
            (currWorld[ghostArray[i].y][ghostArray[i].x - 1] != 2),
        ];

        let rightMove = [
            (moveToken === 1),
            (currWorld[ghostArray[i].y][ghostArray[i].x + 1] != 2),
        ];

        let downMove = [
            (moveToken === 2),
            (currWorld[ghostArray[i].y + 1][ghostArray[i].x] != 2),
        ];

        let upMove = [
            (moveToken === 3),
            (currWorld[ghostArray[i].y - 1][ghostArray[i].x] != 2),
        ];


        if (leftMove.every(condition => condition)) { // Left
            ghostArray[i].x--;
        }
        else if (rightMove.every(condition => condition)) { // Right
            ghostArray[i].x++;
        }
        else if (downMove.every(condition => condition)) { // Down
            ghostArray[i].y++
        }
        else if (upMove.every(condition => condition)) { // Up
            ghostArray[i].y--;
        }

        updateGhosts();
    }
}


function checkDeath() {
    if (ghostArray.some(ghost => {
        if (pacMan.x === ghost.x && pacMan.y === ghost.y) {
            return true;
        }
    })) {
        console.log('game-over')
        clearInterval(ghosty)
        document.querySelector('.pacman-img').style.backgroundImage = "url('death.gif')";
        setTimeout(() => {
            document.querySelector('.pacman-img').style.backgroundImage = 'none';
        }, 1500)

        document.onkeydown = null;
    }
}

let ghosty = setInterval(moveGhosts, 75);

function updateScore(num) {
    let scoreBoard = document.querySelector('.scoreboard');

    scoreBoard.textContent = +scoreBoard.textContent + num;
}


// TODO:
/* 
    1) Scorebox improvement;
    2) Maze worlds;
    3) Ghosts;
    4) set Cherry locations for each world.
    5) reset
    6)
*/