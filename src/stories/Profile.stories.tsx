import { Story, Meta } from '@storybook/react';
import Profile, { ProfileProps } from '../app/components/Profile/Profile';

export default {
  title: 'Example/Profile',
  component: Profile
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({})
Default.args = {
    name: 'Felipe Hash',
    description: 'criador de conteúdo há 3 anos'
}