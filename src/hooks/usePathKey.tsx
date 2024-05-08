import { type RouterKeys } from '@/config'
import { useLocation } from 'react-router-dom'

function usePathKey() {
  const location = useLocation()
  const key: RouterKeys = location.pathname.split('/')[1] as RouterKeys
  return key
}

export default usePathKey
