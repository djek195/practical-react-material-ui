import { HeaderContainer, Logo } from '../../styles/header';
import Menu from '../Menu';
import ActionIcons from './ActionIconsDesktop';

export default function HeaderDesktop({ matchesMobile }) {
  return (
    <HeaderContainer>
      <Logo>Cats & friends</Logo>
      <Menu />
      <ActionIcons />
    </HeaderContainer>
  );
}
