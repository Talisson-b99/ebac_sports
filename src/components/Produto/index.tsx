import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { add, desfavoritar, favoritar } from '../../redux/cart/reducer'
import { useAppSelector } from '../../redux/store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useAppSelector((state) => state.cart.favoritos)
  const favoritoAlredy = favoritos.some(
    (favorito) => favorito.id === produto.id
  )

  const handleAddProduct = () => {
    dispatch(add(produto))
  }

  const handleFavoritar = () => {
    if (favoritoAlredy) {
      dispatch(desfavoritar(produto))
    } else {
      dispatch(favoritar(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {favoritoAlredy
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAddProduct} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
