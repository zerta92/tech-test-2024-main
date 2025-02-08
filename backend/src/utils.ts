import { Cat } from './comms/types';

const prices = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66,
  E: 69.0,
  F: 71.25,
};

export const calculatePrice = (cats: Cat[]) => {
  return cats?.reduce((sum, cat) => {
    return sum + (prices[cat.pouchSize] || 0);
  }, 0);
};
