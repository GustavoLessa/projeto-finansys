import { BaseResoruceModel } from '../../../shared/models/base-resource.model';
export class Category extends BaseResoruceModel{

  constructor(
    public id?: number,
    public name?: string,
    public description?: string
    ) {
      super();
    }
}
