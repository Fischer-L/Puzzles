class TicTacToe {
  constructor(n) {
    this._win = 0;
    this._n = n - 1;
    let i = this._n;
    this._row = [];
    while (i >= 0) this._row.push(0);
    this._col = this._row.slice();
    this._dia = 0
    this._rdia = 0
  }
  
  move(r, c, player) {
    if (this._win) return this._win;
    
    let v = player == 1 ? 1 : -1;
    this._row[r] += v;
    this._col[c] += v;
    if (r == c) this._dia += v;
    if (r + c == this._n) this._rdia += v;
    
    if (this._row[r] == 5 || this._col[c] == 5 || this._dia == 5 || this._rdia == 5) {
      this._win = 1;  
    } else if (this._row[r] == -5 || this._col[c] == -5 || this._dia == -5 || this._rdia == -5) {
      this._win = 2;
    }
    return this._win;
  }
}
