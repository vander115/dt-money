import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputsType = z.infer<typeof searchFormSchema>

/* 
  Porque um componente renderiza?
  - Hooks changed (Mudou o estado, contexto, reducer)
  - Props changed (Mudou propriedades)
  - Parent rerendered (componente pai rerenderizou)

  Qual o fluxo de renderização?
  1. O React recria o HTML da interface daquele componente
  2. Compara com a versão do HTML recriada com a versão anterior
  3. SE mudou alguma coisa, ele reescreve o HTML na tela

  Memo:
  0. Hooks changed, Props changed (deep comparison)
  0.1. Compara as versões anteriores dos hooks e props
  0.2. Se mudou algo, ele vai permitir a nova renderização 
*/

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputsType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(
    data: SearchFormInputsType,
  ) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
