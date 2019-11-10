import { showcaseItemsTypes } from './showcaseItems.types';

const changeItem = nextIndex => ({
  type: showcaseItemsTypes.CHANGE_INDEX,
  payload: nextIndex
});

export { changeItem };
