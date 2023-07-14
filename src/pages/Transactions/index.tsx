import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from './styles';

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.500,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/06/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 4.500,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>13/06/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
