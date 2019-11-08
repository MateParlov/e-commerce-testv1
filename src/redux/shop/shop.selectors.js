import { createSelector } from 'reselect';

const collections = state => state.shopCollections;

export const selectShopCollections = createSelector(
  [collections],
  collections => collections.collections
);
