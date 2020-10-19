import { Action, createReducer, on } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';
import { Dish } from '../../models/menu';

export const menuFeatureKey = 'menu';

export interface MenuState {
  dishes: Dish[];
  ingredients: any[];
}

export const initialMenuState: MenuState = {
  dishes: [
    {
      id: 1,
      name: 'pizza',
      difficulty: 70,
      preparingTime: 2,
      ingredients: ['mąka', 'drożdże', 'ser', 'pomidor', 'bazylia', 'oliwa'],
    },
    {
      id: 2,
      name: 'naleśniki',
      difficulty: 10,
      preparingTime: 2,
      ingredients: ['mąka', 'mleko', 'jakjo', 'olej'],
    },
    {
      id: 3,
      name: 'rosół',
      difficulty: 30,
      preparingTime: 2,
      ingredients: ['mięso', 'marchew', 'pietruszka', 'ziele angielskie', 'liść laurowy'],
    },
    {
      id: 4,
      name: 'zupa owocowa',
      difficulty: 65,
      preparingTime: 2,
      ingredients: ['mąka', 'mleko', 'jajko', 'wiśnie'],
    },
    {
      id: 5,
      name: 'chaczapuri',
      difficulty: 82,
      preparingTime: 2,
      ingredients: ['mąka', 'drożdże', 'ser', 'jajko', 'masło'],
    },
    {
      id: 6,
      name: 'kopytka',
      difficulty: 66,
      preparingTime: 2,
      ingredients: ['ziemniaki', 'mąka', 'jajko'],
    },
    {
      id: 7,
      name: 'owsianka',
      difficulty: 44,
      preparingTime: 2,
      ingredients: ['płatki owsiane', 'mleko'],
    },
    {
      id: 8,
      name: 'ratatuj',
      difficulty: 79,
      preparingTime: 2,
      ingredients: ['cukinia', 'bakłażan', 'papryka', 'cukinia', 'cebula', 'czosnek'],
    },
    {
      id: 9,
      name: 'szkszuka',
      difficulty: 54,
      preparingTime: 2,
      ingredients: ['pomidor', 'papryka', 'jajko', 'kumin', 'kolendra', 'cebula', 'czosnek'],
    },
    {
      id: 10,
      name: 'spagetti',
      difficulty: 57,
      preparingTime: 2,
      ingredients: ['makaron', 'pomidor', 'czosnek', 'mięso', 'ser', 'cebula'],
    },
    {
      id: 11,
      name: 'sushi',
      difficulty: 91,
      preparingTime: 2,
      ingredients: ['algi', 'ryż', 'ogórek', 'rzodkiewka', 'ryba', 'awokado'],
    },
    {
      id: 12,
      name: 'zupa pomidorowa',
      difficulty: 58,
      preparingTime: 2,
      ingredients: ['mięso', 'marchew', 'pietruszka', 'cebula', 'pomidor', 'makaron'],
    },
    {
      id: 13,
      name: 'grochówka',
      difficulty: 32,
      preparingTime: 2,
      ingredients: [
        'mięso',
        'kiełbasa',
        'marchew',
        'pietruszka',
        'cebula',
        'czosnek',
        'groch',
        'majeranek',
      ],
    },
    {
      id: 14,
      name: 'szarlotka',
      difficulty: 71,
      preparingTime: 2,
      ingredients: ['mąka', 'jajka', 'masło', 'cukier', 'jabłka', 'cynamon'],
    },
    {
      id: 15,
      name: 'golonka',
      difficulty: 88,
      preparingTime: 2,
      ingredients: ['golonka'],
    },
  ],
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
