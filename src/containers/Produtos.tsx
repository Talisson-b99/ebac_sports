import Produto from '../components/Produto'

import * as S from './styles'
import { useGetProductsQuery } from '../services/productsApi'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProductsQuery()

  if (!produtos) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
