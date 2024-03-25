const initState = {
  favourites: {
    content: [],
  },
};

const mainReducer = function (state = initState, action) {
  switch (action.type) {
    case "ADD_TO_FAVS":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
