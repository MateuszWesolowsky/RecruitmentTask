export const initialState = {
  data: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        totalPages: action.payload.totalPages,
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'CHANGE_ENDPOINT':
      return { ...state, endpoint: action.payload, currentPage: 1 };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
