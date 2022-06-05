import { Story, Meta } from '@storybook/react';
import WordPriceCounter, { WordPriceCounterProps } from '../app/components/WordPriceCounter/WordPriceCounter';

export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter
} as Meta;

const Template: Story<WordPriceCounterProps> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({})
Default.args = {
    wordsCount: 20,
    pricePerWord: 0.25
}