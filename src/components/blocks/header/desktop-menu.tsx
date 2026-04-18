import { Link } from '@/components/ui/link'
import { Logo } from '@/components/ui/logo/logo'

import { primaryNavItems } from './nav-items'

const ctaLabelClass =
	'text-label-medium leading-label-medium tracking-label-medium font-normal uppercase'

/**
 * Desktop primary navigation (Figma: Stackflow header — desktop).
 * Visibility is controlled with breakpoint utilities (e.g. `hidden lg:flex`) from the parent.
 * Pass e.g. `className="!flex"` in Storybook to preview below the `lg` breakpoint.
 */
export function DesktopMenu() {
	return (
		<div className='mx-auto hidden w-full items-center justify-between gap-8 px-6 py-4 lg:flex'>
			<Logo asLink variant='compact' />
			<nav
				aria-label='Primary'
				className='flex flex-1 items-center justify-center gap-8'>
				<ul className='flex flex-wrap items-center justify-center gap-8'>
					{primaryNavItems.map((item) => (
						<li key={item.href}>
							<Link href={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className='flex shrink-0 items-center gap-4'>
				<Link href='/hire-us'>
					<span className={ctaLabelClass}>Login</span>
				</Link>
			</div>
		</div>
	)
}
