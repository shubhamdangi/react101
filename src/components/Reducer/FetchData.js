import React, { useReducer } from "react";

const initialState = {
  isLoading: true,
  data: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action) {
    case "Fetch_success":
      break;

    default:
      break;
  }
};

function FetchData() {
  const [state, dispatch] = useDispatch(reducer, initialState);
  return <div>FetchData</div>;
}

export default FetchData;
