import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardService } from '../shared/board.service';
import { CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardDetailComponent } from '../card/card-detail/card-detail.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  todo = [
    {
      id: 1,
      name: 'first',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 2,
      name: 'second',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 3,
      name: 'third',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 4,
      name: 'forth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
  ];
  done = [
    {
      id: 5,
      name: 'fifth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 6,
      name: 'sixth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 7,
      name: 'seventh',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 8,
      name: 'eighth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
  ];
  inprogress = [
    {
      id: 9,
      name: 'nineth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 10,
      name: 'tenth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 11,
      name: 'eleventh',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
    {
      id: 12,
      name: 'twentyth',
      describe: 'HelloFirst',
      bgcolor: 'red',
      color: 'white',
      date: '17/04/2566',
      list: [
        { id: 1, title: 'Header', checked: true },
        { id: 2, title: 'Header2', checked: false },
        { id: 3, title: 'Header3', checked: true },
      ],
    },
  ];
  constructor(public dialog: MatDialog) {
 
  }

  openDialog(items: any): void {
    this.dialog.open(CardDetailComponent, {
      data: {
        id: items,
      },
      width: '250px',
    });
  }

  getStyle(item: any) {
    // Logic to calculate the style properties and values based on the item object
    return {
      'font-size': '14px',
    };
  }
  drop(event: CdkDragDrop<any[]>, targetList: string): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('Drop event:', targetList);
      console.log(event.previousContainer.data[event.previousIndex]['id']); ///id
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
