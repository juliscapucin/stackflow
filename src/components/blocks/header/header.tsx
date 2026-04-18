import { Logo } from '@/components/ui/logo/logo'
import { cn } from '@/lib/utils'

import { DesktopMenu } from './desktop-menu'

export type HeaderProps = {
	className?: string
}

export function Header({ className }: HeaderProps) {
	return (
		<header
			className={cn(
				'sticky top-0 z-50 border-b border-foreground bg-background',
				className,
			)}>
			<DesktopMenu />
			<nav
				className='flex items-center justify-between gap-4 px-6 py-4 lg:hidden'
				aria-label='Primary mobile navigation'>
				<Logo asLink variant='compact' />
				<p className='font-plain text-body-small leading-body-small tracking-body-small text-muted-foreground'>
					Mobile menu — coming soon
				</p>
			</nav>
		</header>
	)
}
