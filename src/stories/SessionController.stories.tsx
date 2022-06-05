import { Story, Meta } from '@storybook/react';
import SessionController, { SessionControllerProps } from '../app/components/SessionController/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController
} as Meta;

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
    name: 'Cristiano Moreira Silva',
    description: 'editor há 2 anos'
}