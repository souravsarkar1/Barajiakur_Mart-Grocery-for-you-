import {useSelector} from 'react-redux'

import {Navigate, useLocation} from 'react-router-dom'
export const SellerPrivateRoute = ({children}) => {
  const isAuth = useSelector(st=>st.sellerAuthReducer.isAuth);
  const location = useLocation();
  if(!isAuth){
    return <Navigate state={location.pathname} to={'/seller/login'}/>
 }
 return children;
};
