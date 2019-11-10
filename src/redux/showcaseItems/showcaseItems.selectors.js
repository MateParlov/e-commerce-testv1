import { createSelector } from 'reselect';

const showcaseItems = state => state.showcaseItems.items;
const currentIndex = state => state.showcaseItems.currentIndex;

export const selectItems = createSelector(
  [showcaseItems],
  showcaseItems => showcaseItems
);

export const selectCurrentIndex = createSelector(
  [currentIndex],
  currentIndex => currentIndex
);
