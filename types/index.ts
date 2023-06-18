import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  ContainerStyles: string
  HandleClick?: MouseEventHandler<HTMLButtonElement>
  BtnType?: 'button' | 'submit'
}

export interface CustomFilterProps {
  title: string
  options: { title: string; value: string }[]
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManuFacturer: (manufacturer: string) => void
}
