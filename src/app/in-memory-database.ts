import {InMemoryDbService} from 'angular-in-memory-web-api';
import { observable, throwError } from 'rxjs';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos contas da casa'},
      { id: 2, name: 'Saúde', description: 'Plano de saúde e remedios'},
      { id: 3, name: 'Lazer', description: 'cinemas, praias, parques, etc'},
      { id: 4, name: 'Salários', description: 'Recebimento de salarios'},
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date:'08/04/2018', amount: '70,80', type: 'expense', description: 'wdsfdsfdsfsdfdsfs'} as Entry
    ];


    return { categories, entries };
  }

}
