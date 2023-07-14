import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme['gray-900']};
    padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewTranscationButton = styled.button`
    cursor: pointer;
    height: 3.125rem;
    border: 0;
    background: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 0.375rem;

    &:hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background 0.2s;
    }
`;
