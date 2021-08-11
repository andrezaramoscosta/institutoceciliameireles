import styled from 'styled-components'
import { colors } from '../../assets/colors'
export const FullHeaderBox = styled.div`
  width: 100%;
  background-color: ${colors.blue};
  padding: 15px 0;
`
export const HeaderBox = styled.div`
  width: 1190px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`
export const Logo = styled.div`
  a {
    img {
      width: 280px;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
`
export const MenuItem = styled.li`
  a {
    font-family: Arial;
    font-size: 16px;
    text-decoration: none;
    margin-left: 70px;
    color: ${colors.white};
    &:hover {
      text-decoration: underline;
      color: ${colors.yellow};
    }
  }
`
