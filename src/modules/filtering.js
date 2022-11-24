const REGIONCODEFILTERING = "REGIONCODEFILTERING";
const CONTRACTDATEFILTERING = "CONTRACTDATEFILTERING";

export const rigionCodeFiltering = (num) => ({ type: REGIONCODEFILTERING, num });
export const contractDateFiltering = (num) => ({ type: CONTRACTDATEFILTERING, num });

const initialState = { regionCode: "11110", contractDate: "201512" };

function filtering(state = initialState, action) {
  switch (action.type) {
    case REGIONCODEFILTERING:
      console.log("11111");
      return { regionCode: action.num, contractDate: initialState.contractDate };
    case CONTRACTDATEFILTERING:
      console.log("22222")
      return { regionCode: initialState.regionCode, contractDate: action.num };
    default:
      return (state = initialState);
  }
}

export default filtering;
