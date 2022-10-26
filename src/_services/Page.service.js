const isAPropos = () => window.location.href.endsWith('/a-propos')

const isHome = () => window.location.href.endsWith('/home')

export const pageService = { isAPropos, isHome }