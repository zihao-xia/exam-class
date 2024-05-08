import { useLocation } from 'react-router-dom'

function useShowHeader() {
  const location = useLocation()
  return location.pathname !== '/login'
}

export default useShowHeader
