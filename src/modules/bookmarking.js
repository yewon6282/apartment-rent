const DOBOOKMARK = "DOBOOKMARK";
const CANCELBOOKMARK = "CANCELBOOKMARK";
const CANCELALLBOOKMARK = "CANCELALLBOOKMARK";

export const doBookmark = (month, day, apartment) => ({ type: DOBOOKMARK, month, day, apartment });
export const cancelBookmark = (month, day, apartment) => ({ type: CANCELBOOKMARK, month, day, apartment });
export const cancelAllBookmark = () => ({ type: CANCELALLBOOKMARK });

const initialState = { bookmarkInfo: [] };

function bookmarking(state = initialState, action) {
  switch (action.type) {
    case DOBOOKMARK:
      const newArray = [action.month, action.day, action.apartment]
      console.log(state.bookmarkInfo);
      // return { bookmarkInfo: state.bookmarkInfo.concat(newArray) };
      return { bookmarkInfo: [...state.bookmarkInfo, newArray] };
    case CANCELBOOKMARK:
      return { bookmarkInfo: state.bookmarkInfo.filter((e) => e[0] !== action.month && e[1] !== action.day && e[2] !== action.apartment) };
    case CANCELALLBOOKMARK:
      return { bookmarkInfo: [...state.bookmarkInfo, []] };
    default:
      return (state = initialState);
  }
}

export default bookmarking;