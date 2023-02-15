export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const COMPLETED = "COMPLETED";
export const  LOG_IN ="LOG_IN"
export const  LOG_OUT="LOG_OUT"


export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteAllToDo = () => {
  return {
    type: DELETE_ALL,
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const completedToDo = (payload) => {
  return {
    type: COMPLETED,
    payload,
  };
};
