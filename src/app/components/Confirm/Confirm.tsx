import styled from "styled-components"
import Button from "../Button/Button"

export interface ConfirmProps {
    title: string
    onConfirm?: (...args: any[]) => void
    onCancel?: (...args: any[]) => void
}

export default function Confirm (props: ConfirmProps) {
    return <ConfirmWrapper>
        <ConfirmTitle>{ props.title }</ConfirmTitle>
        <ConfirmButtonDisplay>
            <Button variant="danger" label='Não' onClick={props.onCancel}></Button>
            <Button variant="primary" label='Sim' onClick={props.onConfirm}></Button>
        </ConfirmButtonDisplay>
    </ConfirmWrapper>
}

const ConfirmWrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    background-color: #F3F8F9;
    color: #274060;
    width: 230px;
`

export const ConfirmTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: horizontal;
    line-clamp: 1;
    overflow: hidden;
`

const ConfirmButtonDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`