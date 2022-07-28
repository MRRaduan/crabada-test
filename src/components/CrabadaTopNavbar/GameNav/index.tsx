import * as S from './styled'
import { MenuItems } from '../constants'
import Header from './Header'
import Link from 'next/Link'

const GameNav = () => {
  return (
    <S.GameNavWrapper>
      <Header />
      <S.Nav>
        <S.MenuList>
          {MenuItems.map((MenuItem) => (
            <S.MenuItem key={MenuItem.title}>
              <Link href="/crab-prices">
                <S.MenuItemButton
                  className={`${
                    MenuItem.title === 'Crab Prices' ? 'active' : ''
                  }`}
                >
                  <span>{MenuItem.title.toUpperCase()}</span>
                </S.MenuItemButton>
              </Link>
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.Nav>
    </S.GameNavWrapper>
  )
}

export default GameNav
