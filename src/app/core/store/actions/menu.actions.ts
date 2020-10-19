import { createAction, props } from '@ngrx/store';
import { Dish, Menu } from '../../models/menu';

export const loadMenuSuccess = createAction(
  '[Menu Page] Load Menu Success',
  props<{ menu: Menu }>()
);

export const addDish = createAction('[Menu Page] Create Dish', props<{ dish: Dish }>());
