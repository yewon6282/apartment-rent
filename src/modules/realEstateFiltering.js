const REGIONCODEFILTERING = "REGIONCODEFILTERING";
const CONTRACTDATEFILTERING = "CONTRACTDATEFILTERING";

export const regionCodeFiltering = (num) => ({ type: REGIONCODEFILTERING, num });
export const contractDateFiltering = (num) => ({ type: CONTRACTDATEFILTERING, num });

const initialState = { regionCode: "11110", contractDate: "201512" };

function realEstateFiltering(state = initialState, action) {
  switch (action.type) {
    case REGIONCODEFILTERING:
      return { regionCode: action.num, contractDate: state.contractDate };
    case CONTRACTDATEFILTERING:
      return { regionCode: state.regionCode, contractDate: action.num };
    default:
      return (state = initialState);
  }
}

export default realEstateFiltering;