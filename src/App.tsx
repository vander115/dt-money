import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Transactions } from './pages/Transactions';
import { Summary } from './components/Summary';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Transactions />
            <Summary />

            <table>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>R$ 12.500,00</td>
                    </tr>
                </tbody>
            </table>
        </ThemeProvider>
    );
}
