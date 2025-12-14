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
		heroTitle: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
		sectionTitle: 'text-4xl md:text-5xl font-bold text-black',
		cardTitle: 'font-bold text-black text-lg',
		cardSubtitle: 'text-base text-gray-600',
		cardAccent: 'text-base text-[#a68968]',
		trackLabel: 'text-xs uppercase tracking-wider text-gray-400',
		description: 'text-xl md:text-2xl text-gray-600',
	},
	// Colors
	colors: {
		tedxRed: 'text-red-600',
		black: 'text-black',
		gray600: 'text-gray-600',
		gray400: 'text-gray-400',
		tan: 'text-[#a68968]',
		bgBeige: 'bg-[#e8e2dc]',
		bgCream: 'bg-[#f5f1ed]',
	},
	// Layout
	layout: {
		main: 'min-h-screen bg-white',
		heroSection: 'pt-20 pb-16 px-6',
		heroContainer: 'max-w-7xl mx-auto',
		heroGrid: 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
		divider: 'border-t border-gray-200 max-w-7xl mx-auto',
		contentSection: 'py-16 px-6',
		gridThreeCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
		partnerGrid: 'grid grid-cols-2 md:grid-cols-3 gap-6',
	},
	// Partner configuration
	partner: {
		logoMaxHeight: 'max-h-20',
	},
};
