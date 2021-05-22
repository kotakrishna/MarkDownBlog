import React from "react";
import { auth } from "./AuthFireBase";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_LOGIN_IS_LOADING = "USER_LOGIN_IS_LOADING";
export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS";
export const USER_SIGN_UP_ERROR = "USER_SIGN_UP_ERROR";
export const USER_SIGN_UP_IS_LOADING = "USER_SIGN_UP_IS_LOADING";

// export const signUp = (email, password) => {
//   return auth.createUserWithEmailAndPassword(email, password);
// };

export const userLogin_Success = (payload:any) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};
export const userLogin_Error = () => {
  return {
    type: USER_LOGIN_ERROR,
  };
};
export const userLogin_isLoading = () => {
  return {
    type: USER_LOGIN_IS_LOADING,
  };
};
export const userSignUp_Success = (payload:any) => {
  return {
    type: USER_SIGN_UP_SUCCESS,
    payload,
  };
};
export const userSignUp_Error = () => {
  return {
    type: USER_SIGN_UP_ERROR,
  };
};
export const userSignUp_isLoading = () => {
  return {
    type: USER_SIGN_UP_IS_LOADING,
  };
};

export const userSignUp = (payload:any) => async (dispatch:any) => {
  try {
    dispatch(userSignUp_isLoading());
    await auth
      .createUserWithEmailAndPassword(payload.mail, payload.password)
      .then((res) => {
        dispatch(userSignUp_Success(res.user));
      })
      .catch((er) => console.log(er));
    // dispatch(userLogin_Success());
  } catch {
    dispatch(userSignUp_Error());
  }
};
export const userLogin = (payload:any) => async (dispatch:any) => {
  try {
    dispatch(userLogin_isLoading());
    console.log("is Loading");
    await auth
      .signInWithEmailAndPassword(payload.mail, payload.password)
      .then((res) => {
        dispatch(userLogin_Success(res.user));
        console.log("is Success");
        console.log(res.user);
      })
      .catch((er) => console.log(er));
    // dispatch(userLogin_Success());
  } catch {
    console.log("is fail  ");
    dispatch(userLogin_Error());
  }
};
