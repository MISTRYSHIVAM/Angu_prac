import { Component } from '@angular/core';

@Component({
    selector: 'app-stone-paper-scissor',
    standalone: true,
    imports: [],
    templateUrl: './stone-paper-scissor.component.html',
    styleUrl: './stone-paper-scissor.component.css',
})
export class StonePaperScissorComponent {
    gameArr = ['rock', 'paper', 'scissor'];
    userChoice: string = '';
    aiChoice: string = '';

    clickHandler(choice: string, userCh: HTMLElement) {
        this.userChoice = choice;
        userCh.innerText = 'User : ' + this.userChoice;
        console.log(this);
        this.pcChoice();
    }
    pcChoice() {
        this.aiChoice = this.gameArr[Math.floor(Math.random() * 3)];
    }
    getResult(computerCh: HTMLElement, winner: HTMLElement) {
        if (this.userChoice == '') {
            alert('please select your choice');
        } else {
            computerCh.innerText = 'Computer : ' + this.aiChoice;

            winner.innerText = 'Winner : ' + this.getWinner();
        }
    }
    getWinner(): string {
        let lastResult: string = '';
        switch (this.userChoice) {
            case 'paper':
                if (this.aiChoice == 'scissor') {
                    lastResult = 'Computer';
                } else if (this.aiChoice == 'rock') {
                    lastResult = 'User';
                } else {
                    lastResult = 'Draw';
                }
                break;

            case 'rock':
                if (this.aiChoice == 'paper') {
                    lastResult = 'Computer';
                } else if (this.aiChoice == 'scissor') {
                    lastResult = 'User';
                } else {
                    lastResult = 'Draw';
                }
                break;

            case 'scissor':
                if (this.aiChoice == 'rock') {
                    lastResult = 'Computer';
                } else if (this.aiChoice == 'paper') {
                    lastResult = 'User';
                } else {
                    lastResult = 'Draw';
                }
                break;
        }

        return lastResult;
    }
}
