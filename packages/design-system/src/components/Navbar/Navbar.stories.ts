import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './index';

const meta = {
	title: 'Pokemon/Navbar',
	component: Navbar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: 'PokeApi',
		menus: [
			{ id: '0', label: 'Go Field' },
			{ id: '1', label: 'Pokebook' },
		],
	},
};
