import Link from 'next/link'
import Image from 'next/image'
import { Custombutton } from '@/components'

const Navbar = () => (
  <header className="absolute z-10 w-full">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="car hub Logo"
          width={118}
          height={118}
          className="object-contain"
        />
      </Link>

      <Custombutton
        title=" Sign in"
        BtnType="button"
        ContainerStyles="bg-white text-primary-blue rounded-full min-w-[130px]"
      />
    </nav>
  </header>
)
export default Navbar
