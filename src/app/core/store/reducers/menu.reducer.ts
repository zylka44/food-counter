import { Action, createReducer, on } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';
import { Dish } from '../../models/menu';

export const menuFeatureKey = 'menu';

export interface MenuState {
  dishes: Dish[];
  ingredients: any[];
}

export const initialMenuState: MenuState = {
  dishes: [],
  ingredients: [],
};

export const menuReducer = createReducer(
  initialMenuState,
  on(MenuActions.loadMenuSuccess, (state, { menu }) => {
    return { ...state, ...menu };
  }),
  on(MenuActions.addDish, (state, { dish }) => {
    const newState = {
      dishes: [...state.dishes, dish],
      ingredients: state.ingredients,
    };
    return { ...state, ...newState };
  })
);

export function reducer(state: MenuState | undefined, action: Action) {
  return menuReducer(state, action);
}
