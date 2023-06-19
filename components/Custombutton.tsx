import Image from 'next/image'

import { CustomButtonProps } from '@/types'

const Custombutton = ({
  title,
  ContainerStyles,
  HandleClick,
  BtnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => (
  <button
    disabled={false}
    type={BtnType}
    className={`custom-btn ${ContainerStyles}`}
    onClick={HandleClick}
  >
    <span className={`flex-1 ${textStyles}`}> {title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="right icon"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
)
export default Custombutton
