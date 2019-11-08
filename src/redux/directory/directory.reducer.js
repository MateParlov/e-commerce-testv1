import { sections as sectionsItems } from './../../dbData/directoryData';
const INITIAL_STATE = {
  sections: sectionsItems
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
