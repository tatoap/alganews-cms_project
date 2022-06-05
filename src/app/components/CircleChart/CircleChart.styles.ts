import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SvgWrapper = styled.div`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 16px;
    }
`

export const Svg = styled.svg`
    transform: rotate(90deg);
`

export const Circle = styled.circle`
    transition: stroke-dashoffset 850ms ease
`

export const CircleBG = styled.circle.attrs({
    fill: '#fff'
})``

export const Percentage = styled.span<{ color: string }>`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${p => p.color};

    font-weight: 900;
    font-size: 1.2em;
`

export const Caption = styled.span`
    font-size: 1em;
    font-weight: 400;
    text-transform: lowercase;
    color: 'color';
`