const DOBOOKMARK = "DOBOOKMARK";
const CANCELBOOKMARK = "CANCELBOOKMARK";

export const doBookmark = (id, month, day, apartment, floor) => ({ type: DOBOOKMARK, id, month, day, apartment, floor });
export const cancelBookmark = (id, month, day, apartment, floor) => ({ type: CANCELBOOKMARK, id, month, day, apartment, floor });

const initialState = { bookmarkInfo: [] };

function bookmarking(state = initialState, action) {
  switch (action.type) {
    case DOBOOKMARK:
      const newArray = [action.id, action.month, action.day, action.apartment, action.floor];
      return { bookmarkInfo: [...state.bookmarkInfo, newArray] };
    case CANCELBOOKMARK:
      return { bookmarkInfo: state.bookmarkInfo.filter((e) => e[0] != action.id || e[1] !== action.month || e[2] !== action.day || e[3] !== action.apartment || e[4] !== action.floor) };
    default:
      return state;
  }
}

export default bookmarking;
