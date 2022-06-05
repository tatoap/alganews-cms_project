import styled from "styled-components";
import CircleChart from "../components/CircleChart";

export default function UserTopTags () {
    return <UserTopTagsWrapper>
        <CircleChart size={88} progress={81} caption='Android' theme={'primary'}></CircleChart>
        <CircleChart size={88} progress={35} caption='Java'></CircleChart>
        <CircleChart size={88} progress={19} caption='JavaScript'></CircleChart>
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`