import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-50'>
      <Link href='/' className='flex items-center gap-2'>
        <Image src='/logo.png' alt='PersonaAI Logo' width={40} height={40} />
        <span className='text-2xl font-bold font-asap'>
          Persona <span className='text-sky-400'>AI*</span>
        </span>
      </Link>
    </header>
  )
}

export default Header
