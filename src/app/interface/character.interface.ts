export interface Character {
  class: string;
  originalStats: {
    fullHP: number;
    fullShield: number;
  };
  currentStats: {
    currentHP: number;
    currentShield: number;
  };
}
