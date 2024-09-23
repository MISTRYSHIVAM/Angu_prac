import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { StonePaperScissorComponent } from './stone-paper-scissor/stone-paper-scissor.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        TicTacToeComponent,
        ChessBoardComponent,
        StonePaperScissorComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
