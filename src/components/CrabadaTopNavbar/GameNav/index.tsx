import * as S from './styled'
import { MenuItems } from '../constants'
import Header from './Header'

const GameNav = () => {
  return (
    <>
      <Header />
      <S.Nav>
        <S.MenuList>
          {MenuItems.map((MenuItem) => (
            <S.MenuItem key={MenuItem.title}>
              <S.MenuItemButton
                className={`${
                  MenuItem.title === 'Crab Prices' ? 'active' : ''
                }`}
              >
                <span>{MenuItem.title.toUpperCase()}</span>
              </S.MenuItemButton>
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.Nav>
    </>
  )
}

export default GameNav