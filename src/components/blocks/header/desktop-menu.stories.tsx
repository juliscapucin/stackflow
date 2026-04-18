import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { DesktopMenu } from './desktop-menu'

const meta = {
	title: 'Blocks/Desktop menu',
	component: DesktopMenu,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'In the app this row is hidden below the `lg` breakpoint and shown as a flex row from `lg` up. The default story passes `!flex` so you can review and interact with it at any canvas width.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div className='min-h-24 bg-background'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof DesktopMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
