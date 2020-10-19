export interface Menu {
  dishes: Dish[];
  ingredients: any[];
}

export interface Dish {
  id: number;
  name: string;
  difficulty: number;
  ingredients: string[];
  preparingTime: number;
}

export interface DishDto {
  data: Dish;
}
