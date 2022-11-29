const REGIONNAMEFILTERING = "REGIONNAMEFILTERING";

export const regionNameFiltering = (name) => ({ type: REGIONNAMEFILTERING, name });

const initialState = { regionName: "서울특별시 종로구" };

function regionFiltering(state = initialState, action) {
  switch (action.type) {
    case REGIONNAMEFILTERING:
      return { regionName : action.name };
    default:
      return state;
  }
}

export default regionFiltering;