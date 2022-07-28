import styled from 'styled-components'
import Theme from 'styles/theme'

export const FooterBg = styled.footer`
  margin-top: 16px;
  background-color: ${Theme.grayscale.black};
  padding: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Author = styled.div``
export const Link = styled.a`
  display: block;
  margin-top: 16px;
  color: ${Theme.primary.main};
  text-decoration: underline;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
