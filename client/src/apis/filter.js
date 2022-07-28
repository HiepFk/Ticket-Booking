import {
  UpdateFilter,
  FilteredMovie,
  UpdateSort,
  SortMovie,
  ClearFilter,
  SetListView,
  SetGridView,
  SetFilterMovie,
} from "../redux/filterSlice";

export const updateFilter = (dispatch, e) => {
  let name = e.target.name;
  let value = e.target.value;
  let checked = e.target.checked;
  const data = {
    value,
    name,
    checked,
  };

  dispatch(UpdateFilter(data));
};

export const updateSort = (dispatch, e) => {
  console.log(e);
  dispatch(UpdateSort(e));
};
export const sortMovie = (dispatch) => {
  dispatch(SortMovie());
};

export const filterMovie = (dispatch) => {
  dispatch(FilteredMovie());
};

export const clearFilter = (dispatch) => {
  dispatch(ClearFilter());
};

export const setListView = (dispatch) => {
  dispatch(SetListView());
};

export const setGridView = (dispatch) => {
  dispatch(SetGridView());
};

export const setFilterMovie = (dispatch, data) => {
  dispatch(SetFilterMovie(data));
};
