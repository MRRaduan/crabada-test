import * as S from './styled'
import { MenuItems } from '../constants'

const GameNav = () => {
  return (
    <S.Nav>
      <S.MenuList>
        {MenuItems.map((MenuItem) => (
          <S.MenuItem
            key={MenuItem.title}
            className={`${MenuItem.title === 'Crab Prices' ? 'active' : ''}`}
          >
            {MenuItem.title.toUpperCase()}
          </S.MenuItem>
        ))}
      </S.MenuList>
    </S.Nav>
  )
}

export default GameNav
