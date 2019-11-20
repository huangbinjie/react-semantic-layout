import css from 'csstype'

export type Alignment = 'start' | 'center' | 'end' | 'between'

export type Overflow = 'scroll' | 'hidden' | 'auto'

export function decodeAlignment(alignment: Alignment) {
  switch (alignment) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'between':
      return 'space-between'
    default:
      return 'unset'
  }
}

export type LayoutStyleKey = "width" | "height" | "margin" | "padding" | "color"

export type LayoutStyle = Pick<css.Properties, LayoutStyleKey>

export type ConstraintStyle = {

}
