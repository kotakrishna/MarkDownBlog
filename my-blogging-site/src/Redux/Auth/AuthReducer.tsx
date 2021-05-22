// import React from "react";
// import { Switch } from "react-router-dom";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_IS_LOADING,
  USER_LOGIN_ERROR,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_IS_LOADING,
} from "./AuthAction";
import { saveData, getData } from "../../Components/LocalStorage/LocalStorage";
// import { auth } from "./AuthFireBase";

const initial = {
  isLoading: false,
  isError: false,
  isAuth: getData("isAuth") || false,
  User: getData("User") || null,
};

const data = getData("User");
console.log(data);
export default function AuthReducer(state = initial, action:any) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      saveData("isAuth", true);
      // const data = JSON.stringify(action.payload);
      // console.log(JSON.parse(data));
      saveData("User", action.payload);
      // console.log(action.payload);
      return {
        ...state,
        isError: false,
        isAuth: true,
        isLoading: false,
        User: action.payload,
      };
    case USER_LOGIN_ERROR:
      // saveData('isAuth',true)

      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case USER_LOGIN_IS_LOADING:
      // saveData('isAuth',true)
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_SIGN_UP_SUCCESS:
      saveData("isAuth", true);
      saveData("User", action.payload);
      // console.log(action.payload);
      return {
        ...state,
        isError: false,
        isAuth: true,
        isLoading: false,
        User: action.payload,
      };
    case USER_SIGN_UP_ERROR:
      // saveData('isAuth',true)

      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
      };
    case USER_SIGN_UP_IS_LOADING:
      // saveData('isAuth',true)
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };

    default:
      return state;
  }
}
