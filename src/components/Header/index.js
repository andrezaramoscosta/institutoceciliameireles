import React from 'react'
import { FullHeaderBox, HeaderBox, Logo, Menu, MenuItem } from './style'
import logo from '../../images/Logo.jpg'
const Header = () => {
  const menu = [
    { url: '/quem-somos', title: 'Quem Somos' },
    { url: '/projetos', title: 'Projetos' },
    { url: '/apoie', title: 'Apoie' },
    { url: '/transparencia', title: 'Transparência' },
    { url: '/contato', title: 'Contato' }
  ]
  return (
    <FullHeaderBox>
      <HeaderBox>
        <Logo>
          <a href="/">
            <img src={logo} alt="Instituto Cecilia Meireles" />
          </a>
        </Logo>
        <Menu>
          {menu.map((item, index) => (
            <MenuItem>
              <a href={item.url}>{item.title}</a>
            </MenuItem>
          ))}
        </Menu>
      </HeaderBox>
    </FullHeaderBox>
  )
}
export default Header
