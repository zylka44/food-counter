import { ActionReducerMap } from '@ngrx/store';
import { menuFeatureKey, MenuState, menuReducer } from './menu.reducer';

export interface AppState {
  [menuFeatureKey]: MenuState;
}

export const reducers: ActionReducerMap<AppState> = {
  [menuFeatureKey]: menuReducer,
};
