import * as S from './styled'
import FooterAuthor from 'images/Footer.svg'

const Footer = () => {
  return (
    <S.FooterBg>
      <div>
        <a href="https://p2eanalytics.com/" target="_blank">
          <FooterAuthor />
        </a>
      </div>
      <S.Link>This is not financial advice</S.Link>
    </S.FooterBg>
  )
}

export default Footer
