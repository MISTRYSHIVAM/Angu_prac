import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-to-do-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './to-do-list.component.html',
    styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
    public toDoList = ['one', 'two', 'three'];

    addToToDoList(input: any) {
        this.toDoList.push(input.value);
    }

    removeFromToDoList(index: number) {
        this.toDoList.splice(index, 1);
    }
}
