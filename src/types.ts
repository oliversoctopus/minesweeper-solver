export type CellView = number | "hidden" | "flag";   // 0–8 when revealed

export interface BoardView {
  rows: number;
  cols: number;
  totalMines: number;
  cells: CellView[];          // row-major, list size is width * height
}

export interface Deductions {
  safe: number[];             // cell indices proven safe
  mines: number[];            // cell indices proven to be mines
}

export interface GenerateOptions {
  rows: number;
  cols: number;
  mines: number;
  firstClick: number;         // index; its 3×3 area is kept mine-free
  maxAttempts?: number;
  seed?: number;              // for reproducible boards
}