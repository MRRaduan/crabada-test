import styled from 'styled-components'
import Theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
`

export const Title = styled.h1`
  margin-top: 22px;
  border-top: solid 1px ${Theme.grayscale.gray100};
  font-size: 24px;
  padding: 12px 20px;
  color: ${Theme.grayscale.white};
  width: 100%;
`

export const ProfileAvatar = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

export const ProfileName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  width: 250px;
`

export const ProfileImage = styled.div`
  margin-right: 8px;
`

export const ShowHideIcon = styled.div``
