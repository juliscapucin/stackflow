export type NavItem = {
	href: string
	label: string
}

/** Primary routes; shared when the mobile nav is implemented. */
export const primaryNavItems: NavItem[] = [
	{ href: '/work', label: 'Work' },
	{ href: '/services', label: 'Services' },
	{ href: '/about', label: 'About' },
]
