import { useUser } from "../hooks/UserContext";
import { Navigate } from "react-router-dom";


export function Validacao({children}){
    
const {userInfo} =  useUser()

if(Object.keys(userInfo).length === 0){
    return <div>Carregando ...</div>
}

if(!userInfo?.admin){
    return <Navigate  to="/Home"/>
}
    return children
}