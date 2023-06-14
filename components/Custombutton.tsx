import Image from 'next/image'

import { CustomButtonProps } from '@/types'

const Custombutton = ({
  title,
  ContainerStyles,
  HandleClick,
  BtnType,
}: CustomButtonProps) => (
  <button
    disabled={false}
    type={BtnType}
    className={`custom-btn ${ContainerStyles}`}
    onClick={HandleClick}
  >
    <span className="flex-1"> {title}</span>
  </button>
)
export default Custombutton
