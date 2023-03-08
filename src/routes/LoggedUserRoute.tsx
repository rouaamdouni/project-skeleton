import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../features/signin/contexts/Auth'

export default function LoggedUserRoute() {
  const { authStatus } = useAuth()
  return authStatus.status === 'loggedIn' ? <Outlet /> : <Navigate to="/login" />
}
