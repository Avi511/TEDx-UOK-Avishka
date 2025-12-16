// Common styles for Team and Partners pages
export const sharedStyles = {
	// Card styles
	card: {
		base: 'group bg-white border border-gray-100 overflow-hidden',
		imageContainer: 'aspect-[3/4] overflow-hidden bg-[#e8e2dc]',
		content: 'p-6',
	},
	// Typography
	typography: {
		brandTitle: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
		heroTitle: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
		heroDescriptionDark: 'text-lg md:text-xl text-gray-400 leading-relaxed',
		sectionTitle: 'text-4xl md:text-5xl font-bold text-white',
		cardTitle: 'font-bold text-black text-lg',
		cardSubtitle: 'text-base text-gray-600',
		cardAccent: 'text-base text-[#a68968]',
		trackLabel: 'text-xs uppercase tracking-wider text-gray-400',
	},
	// Colors
	colors: {
		tedxRed: 'text-red-600',
		bgCream: 'bg-[#f5f1ed]',
	},
	// Layout
	layout: {
		heroSection: 'bg-black py-[60px] px-5',
		heroContainer: 'max-w-7xl mx-auto',
		heroFlex: 'flex flex-col md:flex-row justify-between items-start gap-8',
		heroAside: 'max-w-md md:text-right md:ml-auto',
		divider: 'border-t border-gray-200 max-w-7xl mx-auto',
		contentSection: 'py-16 px-6',
		pageContainer: 'max-w-7xl mx-auto',
		pageStack: 'max-w-7xl mx-auto space-y-24',
		gridThreeCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
		partnerGrid: 'grid grid-cols-2 md:grid-cols-3 gap-6',
	},
	// Partner configuration
	partner: {
		logoMaxHeight: 'max-h-20',
	},
};
