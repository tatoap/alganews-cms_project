import { Story, Meta } from '@storybook/react';
import Chart, { ChartProps } from '../app/components/Chart/Chart';

export default {
  title: 'Example/Chart',
  component: Chart
} as Meta;

const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
        {
            label: 'Receitas',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: '#0099ff',
            borderColor: 'transparent',
            yAxisID: 'cashflow',
        },
        {
            label: 'Despesas',
            data: [1, 2, 1, 1, 2, 2],
            fill: true,
            backgroundColor: '#274060',
            borderColor: '#274060',
            borderWidth: 0.5,
            yAxisID: 'cashflow',
        },
    ],
};

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
    title: 'Média de performance nos últimos 12 meses',
    data
}

export const WithoutData = Template.bind({})
WithoutData.args = {
    title: 'Média de performance nos últimos 12 meses'
}