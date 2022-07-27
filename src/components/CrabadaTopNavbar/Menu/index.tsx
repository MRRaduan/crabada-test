import * as S from './styled'

const MenuItems = [
  {
    title: 'Crab Prices',
    route: '/crab-prices',
  },
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

const Menu = () => {
  return (
    <>
      <S.MenuList>
        {MenuItems.map((MenuItem) => (
          <S.MenuItem key={MenuItem.title}>{MenuItem.title}</S.MenuItem>
        ))}
      </S.MenuList>
    </>
  )
}

export default Menu
