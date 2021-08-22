class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayer = 'x';
        this.winner = null;
        this.counter = false;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
       if(this.matrix[rowIndex][columnIndex] === null){
           this.matrix[rowIndex][columnIndex] = this.currentPlayer;
           if (this.currentPlayer === 'o') {
               this.currentPlayer = 'x';
           } else {
               this.currentPlayer = 'o';
           }
       } 
    }

    isFinished() {
      if (this.getWinner() === true || this.noMoreTurns() === true){
          return true;
      } else {
          return false;
      }
    }

    getWinner() {
           if(this.matrix[0][0] === 'x' && this.matrix[0][1] === 'x' && this.matrix[0][2] === 'x' ||
           this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x' ||
           this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x' ||
           this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x' ||
           this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x' ||
           this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x' ||
           this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x' ||
           this.matrix[0][2] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][0] === 'x'){
               this.field = true;
               return this.winner = 'x';
           } else if (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o' ||
           this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o' ||
           this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o' ||
           this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o' ||
           this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o' ||
           this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o' ||
           this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o' ||
           this.matrix[0][2] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][0] === 'o') {
               this.field = true;
               return this.winner = 'o';
           } else {
               this.winner = null;
               return this.winner;
           }
       }
    

    noMoreTurns() {
        if(this.matrix[0][0] !== null && this.matrix[0][1] !== null && this.matrix[0][2] !== null &&
            this.matrix[1][0] !== null && this.matrix[1][1] !== null && this.matrix[1][2] !== null &&
            this.matrix[2][0] !== null && this.matrix[2][1] !== null && this.matrix[2][2] !== null){
                this.counter = true;
                return this.counter;
            } 
            return this.counter;
        }
        
        


    isDraw() {
       if (this.noMoreTurns() === true && this.getWinner()){
           return true;
       } else {
           return false;
       }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
