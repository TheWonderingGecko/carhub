import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  ContainerStyles: string
  HandleClick?: MouseEventHandler<HTMLButtonElement>
  BtnType?: 'button' | 'submit'
}
