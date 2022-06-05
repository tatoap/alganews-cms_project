import styled from 'styled-components';
import { Wrapper as Button } from '../Button/Button.styles'

export const Wrapper = styled.div`

`

export const ImagePreview = styled.div<{ preview: string }>`
    height: 100%;
    background-image: url(${p => p.preview});
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagePreviewWrapper = styled.div`
    background-color: #274060;
    height: 240px;

    ${Button} {
        display: none;
    }

    &:hover {
        ${ImagePreview}::after {
            content: '';
            width: 100%;
            height: 240px;
            background-color: rgba(39, 64, 96, 0.7);
        }

        ${Button} {
            display: block;
            position: absolute;
            padding: 16px;
            background-color: #fff;
        }
    }
`

export const Input = styled.input`
    display: none;
`

export const Label = styled.label`
    background-color: #09f;
    color: #fff;

    padding: 24px;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 12px;
`

export const ContentLabel = styled.div`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    gap: 10px;

    line-height: 22px;

    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
`