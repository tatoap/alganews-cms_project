import { mdiAlert} from "@mdi/js";
import Icon from "@mdi/react";
import Heading from "./Typography/Heading";

export interface ErrorDisplayProps {
    title?: string,
    message?: string
    small?: boolean
}

function ErrorDisplay (props: ErrorDisplayProps) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        color: '#274060'
    }}>
    <Icon 
        path={mdiAlert}
        size={props.small ? '24px' : '48px'}        
    />
    <Heading level={2}>{ props.title || 'Erro ao renderizar componente'}</Heading>  
    <span style={{ fontFamily: '"Roboto Mono", monospace', fontSize: 12 }}>{ props.message || 'Erro desconhecido'}</span>
    </div>
}

export default ErrorDisplay;