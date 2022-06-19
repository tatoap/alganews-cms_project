import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary";
import useUser from "../../core/hooks/useUser";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

function UserEarnings () {
    const { user, fetchUser } = useUser();
    //const params = useParams<{ id: string }>()

    useEffect(() => {
        //fetchUser(Number(params.id))
        fetchUser(7)
    }, [fetchUser])

    if (!user)
        return <UserEarningsWrapper style={{ height: 123 }}>
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
        </UserEarningsWrapper>

    return <UserEarningsWrapper>
        <ValueDescriptor color={'primary'} value={user.metrics.monthlyEarnings} description={'Ganhos no mês'} isCurrency></ValueDescriptor>
        <ValueDescriptor color={'primary'} value={user.metrics.weeklyEarnings} description={'Ganhos na semana'} isCurrency></ValueDescriptor>
        <ValueDescriptor color={'default'} value={user.metrics.lifetimeEarnings} description={'Ganhos de sempre'} isCurrency></ValueDescriptor>
        <ValueDescriptor color={'default'} value={user.metrics.lifetimeWords} description={'Total de palavras'}></ValueDescriptor>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`

export default withBoundary(UserEarnings)