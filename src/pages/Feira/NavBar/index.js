import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <IconButton>
        <Badge
          color="primary"
        >
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}