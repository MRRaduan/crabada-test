import CrabadaLogo from 'images/CrabadaLogo.svg'
import * as S from './styled'
import Image from 'next/Image'
import formatter from 'utils/formatter'

type Token = {
  name: string
  value: number
  status: 'up' | 'down'
  percentage: number
}

const tokens: Token[] = [
  {
    name: 'AVAX',
    value: 86.55,
    status: 'down',
    percentage: 145,
  },
  {
    name: 'CRA',
    value: 12.1,
    status: 'up',
    percentage: 121,
  },
  {
    name: 'TUS',
    value: 0.11,
    status: 'down',
    percentage: 145,
  },
  {
    name: 'CRAM',
    value: 0.11,
    status: 'down',
    percentage: 145,
  },
]

const Header = () => {
  return (
    <S.Wrapper>
      <S.CrabadaLogo>
        <CrabadaLogo />
      </S.CrabadaLogo>
      <S.CrabadaTokens>
        {tokens.map((token) => (
          <S.CrabadaToken key={token.name}>
            <Image
              src={`/images/tokens/${token.name.toLowerCase()}.png`}
              width={24}
              height={24}
            />
            <S.Name>
              {token.name.toUpperCase()} {formatter.format(token.value)}
            </S.Name>
            <S.TokenStatusTag status={token.status}>
              {token.status === 'up' && '+'}
              {token.status === 'down' && '-'}
              {token.percentage / 100}
            </S.TokenStatusTag>
          </S.CrabadaToken>
        ))}
      </S.CrabadaTokens>
    </S.Wrapper>
  )
}

export default Header
