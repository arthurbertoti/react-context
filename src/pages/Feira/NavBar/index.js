import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useCarrinhoContext } from 'commom/context/Carrinho';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { quantidadeProdutos }=  useCarrinhoContext();
  const navigate = useNavigate();
  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={!quantidadeProdutos}
        onClick={() => { navigate("/carrinho") }}
      >
        <Badge
          color="primary"
          badgeContent={quantidadeProdutos}
        >
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}