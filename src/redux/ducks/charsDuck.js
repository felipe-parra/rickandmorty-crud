import axiosBase from "../../utils/axios";
import {
  CREATE_NEW_CHAR,
  CREATE_NEW_CHAR_ERROR,
  CREATE_NEW_CHAR_SUCCESS,
  DELETE_CHAR,
  DELETE_CHAR_ERROR,
  DELETE_CHAR_SUCCESS,
  GET_CHARS,
  GET_CHARS_ERROR,
  GET_CHARS_SUCCESS,
  GET_ONE_CHAR,
  GET_ONE_CHAR_ERROR,
  GET_ONE_CHAR_SUCCESS,
  UPDATE_CHAR,
  UPDATE_CHAR_ERROR,
  UPDATE_CHAR_SUCCESS,
} from "../../constanst/types";

// Initial State
const INITIAL_STATE = {
  chars: [],
  error: null,
  loading: false,
  selected: {
    name: "",
    image: "",
    gender: "",
    species: "",
    status: "",
    origin: "",
    location: "",
  },
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARS:
    case GET_ONE_CHAR:
    case UPDATE_CHAR:
    case CREATE_NEW_CHAR:
    case DELETE_CHAR:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHARS_SUCCESS:
      return {
        ...state,
        loading: false,
        chars: payload,
      };
    case GET_ONE_CHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        selected: payload,
      };

    case UPDATE_CHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        chars: payload,
      };
    case DELETE_CHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        chars: payload,
      };
    case GET_CHARS_ERROR:
    case GET_ONE_CHAR_ERROR:
    case UPDATE_CHAR_ERROR:
    case DELETE_CHAR_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

// aux
export const saveToLocal = (chars) => {
  localStorage.setItem("rickandmorty", JSON.stringify(chars));
};

// Actions

export const getCharsAction = () => async (dispatch, getState) => {
  dispatch({
    type: GET_CHARS,
  });

  try {
    let localData = localStorage.getItem("rickandmorty");

    if (localData) {
      dispatch({
        type: GET_CHARS_SUCCESS,
        payload: JSON.parse(localData),
      });
    } else {
      const { data } = await axiosBase({ method: "GET" });
      saveToLocal(data.results);
      dispatch({
        type: GET_CHARS_SUCCESS,
        payload: data.results,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CHARS_ERROR,
      payload: error,
    });
  }
};

export const getOneCharAction = (charId) => async (dispatch, getState) => {
  console.log("getOneCharAction");
  dispatch({
    type: GET_ONE_CHAR,
  });
  try {
    console.log(getState(), "ducks - one - getState");
    const { data } = await axiosBase({ method: "GET", url: `/${charId}` });
    console.log(Object.keys(data).length > 0);
    console.log(data, "ducks - one - data");
    console.log(getState(), "ducks - one - getState");
    dispatch({
      type: GET_ONE_CHAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("GetOne - error");
    dispatch({
      type: GET_CHARS_ERROR,
      payload: error,
    });
  }
};

export const updateCharAction =
  ({ charId, character }) =>
  async (dispatch, getState) => {
    dispatch({
      type: UPDATE_CHAR,
    });
    try {
      const { chars } = getState().chars;
      chars.map((item) => {
        if (item.id === charId) {
          return character;
        } else {
          return item;
        }
      });
      console.log(chars);
      dispatch({
        type: UPDATE_CHAR_SUCCESS,
        payload: chars,
      });
      saveToLocal(chars);
    } catch (error) {
      dispatch({
        type: GET_CHARS_ERROR,
        payload: error,
      });
    }
  };

// Create
export const createNewCharAction = (newChar) => async (dispatch, getState) => {
  dispatch({
    type: CREATE_NEW_CHAR,
  });
  try {
    const newId = Math.floor(Math.random(0, 1) * 5000);

    const { chars } = getState().chars;
    let addNew = { ...newChar, id: newId };
    const newArr = [...chars, { ...addNew }];
    console.log(addNew, "create");
    console.log(newArr, "create - arr");
    dispatch({
      type: CREATE_NEW_CHAR_SUCCESS,
      payload: newArr,
    });
    saveToLocal(newArr);
  } catch (error) {
    dispatch({
      type: CREATE_NEW_CHAR_ERROR,
      payload: error,
    });
  }
};

export const removeCharAction = (charId) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_CHAR,
  });

  try {
    const { chars } = getState().chars;
    console.log(chars, "remove-bef");
    const newArr = chars.filter((item) => item.id !== charId);
    console.log(chars, "remove-aft");

    dispatch({
      type: DELETE_CHAR_SUCCESS,
      payload: newArr,
    });
    saveToLocal(newArr);
  } catch (error) {
    dispatch({
      type: DELETE_CHAR_ERROR,
      error: error,
    });
  }
};
