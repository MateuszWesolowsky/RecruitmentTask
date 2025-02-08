export const initialState = {
  data: [],
  loading: false,
  error: null,
  currentPage: 1,
  page: 1,
  totalPages: 1,
  inputSearch: '',
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
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    case 'SET_PAGE_SEARCH':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_SEARCH_VALUE':
      return { ...state, inputSearch: action.payload };
    default:
      return state;
  }
};
