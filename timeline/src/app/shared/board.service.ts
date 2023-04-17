import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private initBoard = [
    {
      id: 1,
      title: 'to Do',
      color: '#e92c62',
      status :'todo',
      list: [
        {
          id: 1,
          text: 'Example Card',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'some Comment',
            },
          ],
        },
        {
            id: 1,
            text: 'Example Card',
            like: 1,
            comments: [
              {
                id: 1,
                text: 'some Comment',
              },
            ],
          },
      ],
    },
    {
      id: 2,
      title: 'Inprogress',
      color: '#e92c62',
      list: [
        {
          id: 2,
          text: 'Example Card',
          like: 1,
          comments: [
            {
              id: 2,
              text: 'some Comment',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Done',
      color: '#e92c62',
      list: [
        {
          id: 3,
          text: 'Example Card',
          like: 1,
          comments: [
            {
              id: 3,
              text: 'some Comment',
            },
          ],
        },
      ],
    },
  ];
  private board: any[] = this.initBoard;
  private board$ = new BehaviorSubject<any[]>(this.initBoard);

  getBoard$() {
    return this.board$.asObservable();
  }
}
