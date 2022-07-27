import * as S from './styled'
import Chrevron from 'images/Chevron.svg'
import { useState } from 'react'

const MenuItems = [
  {
    title: 'Profile',
    route: '/profile',
  },
  {
    title: 'Economy',
    route: '/economy',
  },
  {
    title: 'Population',
    route: '/population',
  },
]

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <S.Dropdown>
      <S.SelectedItem onClick={handleToggleMenu}>
        Crab Prices
        <Chrevron />
      </S.SelectedItem>
      <S.MenuList isOpen={isMenuOpen}>
        {MenuItems.map((MenuItem) => (
          <S.MenuItem key={MenuItem.title}>{MenuItem.title}</S.MenuItem>
        ))}
      </S.MenuList>
    </S.Dropdown>
  )
}

export default MobileNav
