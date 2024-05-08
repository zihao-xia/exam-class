import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { type RouterKeys, routersData, superAdminMenus } from '@/config'
import usePathKey from '@/hooks/usePathKey'

function MenuComponent() {
  const [currentMenu, setCurrentMenu] = useState('')
  const Navigate = useNavigate()

  const menus = superAdminMenus
  const pathKey = usePathKey()

  useEffect(() => {
    if (pathKey) {
      setCurrentMenu(pathKey)
    }
  }, [])

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentMenu(e.key)
    Navigate(routersData[e.key as RouterKeys].path)
  }

  return <Menu onClick={onClick} selectedKeys={[currentMenu]} mode="horizontal" items={menus} />
}

export default MenuComponent
