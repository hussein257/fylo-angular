import Dexie, { Table } from 'dexie';

export interface TodoList {
  id?: number;
  title: string;
}
export interface TodoItem {
  id?: number;
  todoListId: number;
  name: string;
  muscle: string;
  difficulty: string;
  equipment: string;
  type: string;
  instructions: string;
}

export class AppDB extends Dexie {
  todoItems!: Table<TodoItem, number>;
  todoLists!: Table<TodoList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      todoLists: '++id',
      todoItems: '++id, todoListId',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const todoListId = await db.todoLists.add({
      title: 'To Do Today',
    });
    await db.todoItems.bulkAdd([
      {
        todoListId,
        name: 'Feed the birds',
        muscle: '',
        difficulty: '',
        equipment: '',
        type: '',
        instructions: '',
      },
      {
        todoListId,
        name: 'Feed the birds',
        muscle: '',
        difficulty: '',
        equipment: '',
        type: '',
        instructions: '',
      },
      {
        todoListId,
        name: 'Feed the birds',
        muscle: '',
        difficulty: '',
        equipment: '',
        type: '',
        instructions: '',
      },
    ]);
  }
}

export const db = new AppDB();

