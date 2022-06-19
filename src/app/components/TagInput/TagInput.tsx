import { WithContext as ReactTagInput, Tag } from 'react-tag-input';
import * as TI from './TagInput.styles'

export interface TagInputProps {
    onAdd: (tag: Tag) => any
    onDelete: (i: number) => any
    tags: Tag[]
    placeholder: string
}

const KeyCodes = {
    comma: 188,
    enter: 13,
    tab: 9
}

function TagInput (props: TagInputProps) {
    return <TI.Wrapper>
        <ReactTagInput 
            placeholder={props.placeholder}
            handleAddition={props.onAdd}
            handleDelete={props.onDelete}
            tags={props.tags}
            allowDragDrop={false}
            autofocus={false}
            delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
        />
    </TI.Wrapper>
}

export default TagInput;