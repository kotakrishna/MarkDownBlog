import React from 'react'
import {Redirect,Route} from 'react-router-dom'


interface IPrivate{
    children:any,
    exact?:boolean,
    path:any
}
export default function PrivateRoute({children,exact=false,path="/login"}:IPrivate) {
    if(false){
        return <Redirect to="/" />
    }
    return (
        <Route path={path} exact={exact} >
            {children}
        </Route>
    )
}
