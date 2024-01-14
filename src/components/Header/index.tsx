import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useAppSelector } from '../../redux/store'

const Header = () => {
  const products = useAppSelector((state) => state.cart.cart)
  const favoritos = useAppSelector((state) => state.cart.favoritos)
  const valorTotal = products.reduce((acc, curr) => acc + curr.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {products.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
