import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dish } from '../../models/menu';
import { AppState } from '../reducers';
import { menuFeatureKey, MenuState } from '../reducers/menu.reducer';

export const selectMenu = createFeatureSelector<MenuState>(menuFeatureKey);

export const selectAllDishes = createSelector<AppState, MenuState, Dish[]>(selectMenu, ({ dishes }) => dishes);

export const selectDishById = createSelector<AppState, number, Dish[], Dish>(
  selectAllDishes,
  (dishes, dishId) => dishes[dishId]
);
