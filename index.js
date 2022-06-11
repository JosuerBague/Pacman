
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
    deltaX: 0,
    deltaY: 0,
    x: 1,
    y: 1,
    init: true,
}

let ghostArray = [
    {
        // Ghost One
        id: '#ghost-1',
        x: 9,
        y: 5,
        xUnit: null,
        yUnit: null,
        deltaX: 0,
        deltaY: 0,
        move: 'left',
        init: true
    },
    {
        // Ghost Two
        id: '#ghost-2',
        x: 18,
        y: 1,
        xUnit: null,
        yUnit: null,
        deltaX: 0,
        deltaY: 0,
        move: 'right',
        init: true
    },
    {
        // Ghost Three
        id: '#ghost-3',
        x: 8,
        y: 16,
        xUnit: null,
        yUnit: null,
        deltaX: 0,
        deltaY: 0,
        move: 'up',
        init: true
    },
    {
        // Ghost Four
        id: '#ghost-4',
        x: 5,
        y: 16,
        xUnit: null,
        yUnit: null,
        deltaX: 0,
        deltaY: 0,
        move: 'down',
        init: true
    },
    {
        // Ghost Five
        id: '#ghost-5',
        x: 14,
        y: 16,
        xUnit: null,
        yUnit: null,
        deltaX: 0,
        deltaY: 0,
        move: 'left',
        init: true
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
    let brickWidth = document.querySelector('.row .wall').offsetWidth / 10;

    if (e.keyCode === 38 && currWorld[pacMan.y - 1][pacMan.x] != 2) { // UP
        pacMan.yCounter--;
        pacMan.deltaY--;
        pacMan.yUnit = pacMan.yUnit - brickWidth;
    }
    else if (e.keyCode === 39 && currWorld[pacMan.y][pacMan.x + 1] != 2) { // Right
        pacMan.xCounter++
        pacMan.deltaX++;
        pacMan.xUnit = pacMan.xUnit + brickWidth;
    }
    else if (e.keyCode === 40 && currWorld[pacMan.y + 1][pacMan.x] != 2) { // Down
        pacMan.yCounter++;
        pacMan.deltaY++;
        pacMan.yUnit = pacMan.yUnit + brickWidth;
    }
    else if (e.keyCode === 37 && currWorld[pacMan.y][pacMan.x - 1] != 2) { // Left
        pacMan.xCounter--;
        pacMan.deltaX--;
        pacMan.xUnit = pacMan.xUnit - brickWidth;
    }

    updatePacMan(e);
    showCherry();
    updateWorld();
}

function updatePacMan(e) {
    // Initialize pacman to position (1,1):
    let brickWidth = document.querySelector('.row .wall').offsetWidth;
    if (pacMan.init) {
        pacMan.xUnit = pacMan.x * brickWidth;
        pacMan.yUnit = pacMan.y * brickWidth;
        pacMan.init = false;
    }

    // Change pacMan orientation:
    if (e?.keyCode === 38) {
        document.querySelector('.pacman-img').style.transform = `rotate(-90deg)`;
    }
    else if (e?.keyCode === 39) {
        document.querySelector('.pacman-img').style.transform = `rotate(0deg)`;
    }
    else if (e?.keyCode === 40) {
        document.querySelector('.pacman-img').style.transform = `rotate(90deg)`;
    }
    else if (e?.keyCode === 37) {
        document.querySelector('.pacman-img').style.transform = `rotate(0deg)`;
        document.querySelector('.pacman-img').style.transform = 'scaleX(-1)';
    }

    // Change pacMan array position:
    if (pacMan.deltaX === 10) {
        pacMan.x++;
        pacMan.deltaX = 0;
    }
    else if (pacMan.deltaX === -10) {
        pacMan.x--;
        pacMan.deltaX = 0;
    }

    if (pacMan.deltaY === 10) {
        pacMan.y++;
        pacMan.deltaY = 0;
    }
    else if (pacMan.deltaY === -10) {
        pacMan.y--;
        pacMan.deltaY = 0;
    }


    document.getElementById('pacman').style.top = `${pacMan.yUnit}px`;
    document.getElementById('pacman').style.left = `${pacMan.xUnit}px`;

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

}

/* ### Ghosts ### */


function updateGhosts() {


    let brickWidth = document.querySelector('.row .wall').offsetWidth;
    for (let i = 0; i < ghostArray.length; i++) {

        // Initialize ghosts to their start positions:
        if (ghostArray[i].init) {
            ghostArray[i].xUnit = ghostArray[i].x * brickWidth;
            ghostArray[i].yUnit = ghostArray[i].y * brickWidth;
            ghostArray[i].init = false;
        }

        // Change ghost position:
        if (ghostArray[i].deltaX === 10) {
            ghostArray[i].x++;
            ghostArray[i].deltaX = 0;
        }
        else if (ghostArray[i].deltaX === -10) {
            ghostArray[i].x--;
            ghostArray[i].deltaX = 0;
        }

        if (ghostArray[i].deltaY === 10) {
            ghostArray[i].y++;
            ghostArray[i].deltaY = 0;
        }
        else if (ghostArray[i].deltaY === -10) {
            ghostArray[i].y--;
            ghostArray[i].deltaY = 0;
        }

        let ghostSprite = document.querySelector(`${ghostArray[i].id}`);
        console.log(ghostSprite)
        ghostSprite.style.top = `${ghostArray[i].yUnit}px`;
        ghostSprite.style.left = `${ghostArray[i].xUnit}px`;
    }

    checkDeath();
}

function moveGhosts() {
    // Generate number inclusive of 0 but exclusive of 4.
    // Math.floor( Math.random () * (max - min) + min);

    for (let i = 0; i < ghostArray.length; i++) {

        let brickWidth = document.querySelector('.row .wall').offsetWidth;

        let isLeftValid =
            [
                (ghostArray[i].move === 'left'),
                (currWorld[ghostArray[i].y][ghostArray[i].x - 1] != 2),
            ];

        let isRightValid =
            [
                (ghostArray[i].move === 'right'),
                (currWorld[ghostArray[i].y][ghostArray[i].x + 1] != 2),
            ];

        let isDownValid =
            [
                (ghostArray[i].move === 'down'),
                (currWorld[ghostArray[i].y + 1][ghostArray[i].x] != 2),
            ];

        let isUpValid = [
            (ghostArray[i].move === 'up'),
            (currWorld[ghostArray[i].y - 1][ghostArray[i].x] != 2),
        ];


        if (isLeftValid.every(condition => condition)) {
            ghostArray[i].xUnit = ghostArray[i].xUnit - brickWidth / 10;
            ghostArray[i].deltaX--;
        }
        else if (isRightValid.every(condition => condition)) { // Right
            ghostArray[i].xUnit = ghostArray[i].xUnit + brickWidth / 10;
            ghostArray[i].deltaX++;
        }
        else if (isDownValid.every(condition => condition)) { // Down
            ghostArray[i].yUnit = ghostArray[i].yUnit + brickWidth / 10;
            ghostArray[i].deltaY++;
        }
        else if (isUpValid.every(condition => condition)) { // Up
            ghostArray[i].yUnit = ghostArray[i].yUnit - brickWidth / 10;
            ghostArray[i].deltaY--;
        } else {
            let moveToken = Math.floor(Math.random() * 4);

            if (moveToken === 0) {
                ghostArray[i].move = 'up';
            }
            else if (moveToken === 1) {
                ghostArray[i].move = 'right';
            }
            else if (moveToken === 2) {
                ghostArray[i].move = 'down';
            } else {
                ghostArray[i].move = 'left';
            }

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