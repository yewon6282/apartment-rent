const DOLOGIN = "DOLOGIN";
const DOLOGOUT = "DOLOGOUT";

export const doLogin = (id, password) => ({ type: DOLOGIN, id, password });
export const doLogout = () => ({ type: DOLOGOUT });

const initialState = [];

const logging = (state = initialState, action) => {
  switch (action.type) {
    case DOLOGIN:
      return (state = [action.id, action.password]);
    case DOLOGOUT:
      return (state = []);
    default:
      return state;
  }
};

export default logging;