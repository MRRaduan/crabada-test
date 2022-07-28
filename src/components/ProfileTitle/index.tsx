import * as S from './styled'
import ShowHideIcon from 'images/ShowHideIcon.svg'
import Image from 'next/Image'

const ProfileTitle = () => {
  return (
    <S.Wrapper>
      <S.Title>Crab Prices</S.Title>
      <S.ProfileAvatar>
        <S.ProfileImage>
          <Image src="/images/profile-avatar.png" width={40} height={40} />
        </S.ProfileImage>
        <S.ProfileName>Miko's Insights</S.ProfileName>
        <S.ShowHideIcon>
          <ShowHideIcon />
        </S.ShowHideIcon>
      </S.ProfileAvatar>
    </S.Wrapper>
  )
}

export default ProfileTitle
