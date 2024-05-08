import { routersData, type RouterKeys } from '@/config'
import { useLocation } from 'react-router-dom'

function useShowMenu() {
  const location = useLocation()
  const key: RouterKeys = location.pathname.split('/')[1] as RouterKeys
  if (!key) return false
  return routersData[key].hasMenu
}

export default useShowMenu
