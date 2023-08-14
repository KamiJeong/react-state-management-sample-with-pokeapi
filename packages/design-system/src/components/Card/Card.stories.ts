import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta = {
	title: 'Pokemon/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/44.png',
	},
};

export const NoImage: Story = {
	args: {},
};
