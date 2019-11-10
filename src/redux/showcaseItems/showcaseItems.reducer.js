import DISPLAY_ITEMS from './../../dbData/heroSectionItems';
import { showcaseItemsTypes } from './showcaseItems.types';
import { changeIndex } from './showcaseItems.utils';
const INITIAL_STATE = {
  items: DISPLAY_ITEMS,
  currentIndex: 0
};

const showcaseItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case showcaseItemsTypes.CHANGE_INDEX:
      return {
        ...state,
        currentIndex: changeIndex(state.items.length, action.payload)
      };

    default:
      return state;
  }
};

export default showcaseItemsReducer;
