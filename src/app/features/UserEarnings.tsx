import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings () {
    return <UserEarningsWrapper>
        <ValueDescriptor color={'primary'} value={560322.02} description={'Ganhos no mês'} isCurrency></ValueDescriptor>
        <ValueDescriptor color={'primary'} value={560322.02} description={'Ganhos na semana'} isCurrency></ValueDescriptor>
        <ValueDescriptor color={'default'} value={560322.02} description={'Ganhos de sempre'} isCurrency></ValueDescriptor>
        <ValueDescriptor color={'default'} value={4312410} description={'Total de palavras'}></ValueDescriptor>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`