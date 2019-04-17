import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './category.model';

import { BaseResourceService } from '../../../shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})

export class CategoryService extends BaseResourceService<Category>{

  constructor(protected http: HttpClient) {
    super('api/categories', http)
   }
}
