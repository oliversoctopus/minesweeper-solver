import { BoardView, CellView } from "./types.ts";

export function printBoard(board : BoardView) {
    for (let i = 0; i < board.rows; i++) {
        for (let j = 0; j < board.cols; j++) {
            let index = board.cols * i + j;
            let value = board.cells[index];
            if (value === "hidden") {
                console.log("# ");
            } else if (value === "flag") {
                console.log("F ");
            } else {
                console.log(value + " ");
            }
        }
        console.log("\n");
    }
}

// also takes "*" = mine but hidden
export function parseBoard(board: string) {
    let parsed = {} as BoardView; // apparently unsafe but will be handled
    let lines = board.trim().split("\n");
    let board_2d = lines.map((ln) => ln.trim().split(" "));
    parsed.rows = board_2d.length;
    parsed.cols = board_2d[0].length;
    let totalMines = 0;
    parsed.cells = new Array<CellView>(parsed.rows*parsed.cols).fill(0);
    for (let i = 0; i < parsed.rows; i++) {
        for (let j = 0; j < parsed.cols; j++) {
            let elem = board_2d[i][j];
            let index = i * parsed.cols + j;
            if (elem === "#") {
                parsed.cells[index] = "hidden";
            } else if (elem === "F") {
                parsed.cells[index] = "flag";
                totalMines++;
            } else if (elem === "*") {
                parsed.cells[index] = "hidden";
                totalMines++;
            } else {
                parsed.cells[index] = Number(elem);
            }
        }
    }
    parsed.totalMines = totalMines;
    return parsed;
}