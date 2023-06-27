export const COMPANY_NAME = 'balipic'
export const COMPANY_COPYRIGHTS = 'Balipic © 2022'

export const LINK_FB = 'https://www.facebook.com/abcgames.fun'
export const LINK_IG = 'https://www.instagram.com/abcgames.fun'

export const COLOR_LIGHT_BLUE = '#AEE2FF'
export const COLOR_WHITE = '#FFFFFF'
export const COLOR_LIGHT = '#C0DBEA'
export const COLOR_LIGHT_PINK = '#E8A0BF'
export const COLOR_BLUE = '#6DA9E4'
export const COLOR_ORANGE = '#F6BA6F'
export const COLOR_LIGHT_PURPLE = '#BA90C6'
export const COLOR_BG_PURPLE = '#B2A4FF'
export const COLOR_BG_LIGHT_YELLOW = '#FFFBAC'

export interface PortfolioModel {
  imgUrl: string
  title: string
  desc: string
}

export const PORTFOLIOS: PortfolioModel[] = [
  {
    imgUrl: 'photoshoot1.jpg',
    title: 'ROEMY CAMPAIGN',
    desc: 'Roemy',
  },
  {
    imgUrl: 'photoshoot2.jpg',
    title: 'LOST IN NOWHERE',
    desc: 'Nowhere',
  },
  {
    imgUrl: 'photoshoot3.jpg',
    title: 'NIGHT TIME',
    desc: 'Jungle',
  },
  {
    imgUrl: 'photoshoot4.jpg',
    title: 'SUNSET',
    desc: 'Romantic',
  },
]
