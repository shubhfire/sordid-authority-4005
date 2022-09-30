import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const ReqAuth=({children})=>{
    const isAuth=useSelector((store)=>store.AppReducer.isAuth)

    const location=useLocation()
    if(!isAuth){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    return children
}

export default ReqAuth