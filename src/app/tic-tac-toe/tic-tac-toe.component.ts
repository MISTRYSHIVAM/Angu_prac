import { Component } from '@angular/core';

@Component({
    selector: 'app-tic-tac-toe',
    standalone: true,
    imports: [],
    templateUrl: './tic-tac-toe.component.html',
    styleUrl: './tic-tac-toe.component.css',
})
export class TicTacToeComponent {
    winArr = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
        [6, 4, 2],
        [2, 5, 8],
    ];
    boardArr = ['', '', '', '', '', '', '', '', ''];
    turnOfX = true;
    result = false;

    checkWin(): any {
        for (let i = 0; i < this.winArr.length; i++) {
            let [first, second, third] = this.winArr[i];

            if (
                this.boardArr[first] &&
                this.boardArr[first] == this.boardArr[second] &&
                this.boardArr[first] == this.boardArr[third]
            ) {
                return true;
            }
        }
        return false;
    }
    clickHandler(index: number, btn: HTMLElement) {
        if (!this.result) {
            this.boardArr[index] = this.turnOfX ? 'X' : 'O';
            btn.innerText = this.turnOfX ? 'X' : 'O';
            btn.setAttribute('disabled', 'true');
            // console.log(this.boardArr);
            this.result = this.checkWin();
            if (!this.result && !this.boardArr.includes('')) {
                alert('Draw');
            }
            if (this.result) {
                alert((this.turnOfX ? 'X' : 'O') + ' is Winner');
            }
            this.turnOfX = this.turnOfX ? false : true;
        } else {
        }
    }
}
