import * as S from './styled'
import SearchIcon from '../../images/SearchIcon.svg'
import HomeIcon from '../../images/HomeIcon.svg'
import JoystickIcon from '../../images/JoystickIcon.svg'
import NorthIcon from '../../images/NorthIcon.svg'
import DiamondIcon from '../../images/DiamondIcon.svg'
import HubIcon from '../../images/HubIcon.svg'
import TwitterIcon from '../../images/TwitterIcon.svg'
import DiscordIcon from '../../images/DiscordIcon.svg'
import TwitchIcon from '../../images/TwitchIcon.svg'

const MenuItems = [
  {
    name: 'search',
    img: <SearchIcon />,
  },
  {
    name: 'home',
    img: <HomeIcon />,
  },
  {
    name: 'joystcik',
    img: <JoystickIcon />,
  },
  {
    name: 'north',
    img: <NorthIcon />,
  },
  {
    name: 'diamond',
    img: <DiamondIcon />,
  },
  {
    name: 'hub',
    img: <HubIcon />,
  },
]

const SocialItems = [
  {
    name: 'twitter',
    img: <TwitterIcon />,
    url: 'https://twitter.com/P2EAnalytics',
  },
  {
    name: 'twitter',
    img: <DiscordIcon />,
    url: 'https://discord.com/invite/VDkTXHNrSp',
  },
  {
    name: 'twitter',
    img: <TwitchIcon />,
    url: 'https://www.twitch.tv/p2eanalytics',
  },
]

const SideNavBar = () => {
  return (
    <S.Wrapper>
      <S.NavHeader>
        <S.P2ELogo>
          <picture>
            <source
              srcSet="images/P2EABeta.svg"
              width={50}
              media="(min-width: 768px)"
            />
            <img
              src="images/P2EABrand.svg"
              width={230}
              alt="P2E Analytics Logo"
            />
          </picture>
        </S.P2ELogo>
      </S.NavHeader>
      <S.Menu>
        {MenuItems.map((MenuItem) => (
          <S.Item key={MenuItem.name}>{MenuItem.img}</S.Item>
        ))}
        {SocialItems.map((SocialItem) => (
          <S.SocialItem key={SocialItem.name}>
            <a href={SocialItem.url} target="_blank">
              {SocialItem.img}
            </a>
          </S.SocialItem>
        ))}
      </S.Menu>
    </S.Wrapper>
  )
}

export default SideNavBar
