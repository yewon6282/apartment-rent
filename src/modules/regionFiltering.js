const REGIONCODEFILTERING = "REGIONCODEFILTERING";

export const regionNameFiltering = (name) => ({ type: REGIONCODEFILTERING, name });

const initialState = { regionName: "서울특별시 종로구" };

function regionFiltering(state = initialState, action) {
  switch (action.type) {
    case REGIONCODEFILTERING:
      return { regionName : action.name };
    default:
      return (state = initialState);
  }
}

export default regionFiltering;