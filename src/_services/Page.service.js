const isAPropos = () => window.location.href.includes('a-propos')

const isHome = () => window.location.href.includes('home')

export const pageService = { isAPropos, isHome }