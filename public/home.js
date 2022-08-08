let turn = "x";

const boxes = [];

let winComb = 0;

const winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = (winningPlayer) => {
  let win = false;

  winPos
    .map((list) => list.map((i) => board[i]))
    .forEach((possibleWinCombination, index) => {
      if (possibleWinCombination.every((value) => value == winningPlayer)) {
        winComb = index;
        win = true;
      }
    });

  return win;
};

for (let i = 1; i <= 9; i++) {
  boxes.push(document.getElementById(i.toString()));
}

let board = ["", "", "", "", "", "", "", "", ""];
let win = false;

const addMove = (e) => {
  const box = e.target;
  board[parseInt(box.id) - 1] = turn;

  if (win) return;

  if (turn === "x") {
    const x = document.createElement("div");
    x.classList.add("x");
    box.appendChild(x);
    win = checkWin(turn);
    console.log(win);
    turn = "o";
  } else if (turn === "o") {
    const o = document.createElement("div");
    o.classList.add("o");
    box.appendChild(o);
    win = checkWin(turn);
    console.log(win);
    turn = "x";
  }
  document.getElementById("player1turn").classList.toggle("active");
  document.getElementById("player2turn").classList.toggle("active");

  if (win == true && turn == "o") {
    document.getElementById("player1Won").classList.add("winner");
  } else if (win == true && turn == "x") {
    document.getElementById("player2Won").classList.add("winner");
  } else if (win == false && !board.includes("")) {
    document.getElementById("tie").classList.add("tie");
  }
  if (win) {
    winPos[winComb].forEach((boxnum) => {
      boxes[boxnum].classList.add("win");
      // console.log(boxnum, boxes);
    });
  }

  box.removeEventListener("click", addMove);
};

boxes.forEach((box) => {
  box.addEventListener("click", addMove);
});
