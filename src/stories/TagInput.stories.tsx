import { Story, Meta } from '@storybook/react';
import TagInput, { TagInputProps } from '../app/components/TagInput/TagInput';
import { Tag } from 'react-tag-input';
import { useState } from 'react';

export default {
  title: 'Example/TagInput',
  component: TagInput
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Insira as tags deste post',
    tags: [{id: '1', text: 'JavaScript'}]
}

export const VariousTags = Template.bind({})
VariousTags.args = {
    placeholder: 'Insira as tags deste post',
    tags: [
        {id: '1', text: 'JavaScript'},
        {id: '2', text: 'Java'},
        {id: '3', text: 'Ruby on Rails'},
        {id: '4', text: 'C++'},
        {id: '5', text: 'NodeJS'},
        {id: '6', text: 'TypeScript'}
    ]
}

export function WorkingLiveExample () {
    const [tags, setTags] = useState<Tag[]>([])

    return <TagInput 
        placeholder='Insira as tags deste post'
        tags={tags}
        onAdd={tag => setTags([...tags, tag])}
        onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    />
}