import Image from 'next/image'
import{
SearchIcon,
PlusCircleIcon,
UserGroupIcon,
HeartIcon,
PaperAirplaneIcon,
MenuIcon,
HomeIcon,
LinkIcon
} from '@heroicons/react/solid';

function Header() {
  return (
    <div className="shadow-sm bg-white z-50 sticky top-0 border-b-2">

    <div className="flex justify-between  max-w-6xl lg:mx-auto mx-5 items-center">
        {/* Logo */}
        <div className="relative lg:hidden  w-10 h-10 flex-shrink-0 cursor-pointer">  
            <Image 
            src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
            layout="fill"
            />
        </div>
        <div className="relative hidden lg:inline-grid w-20 h-20  cursor-pointer">  
            <Image 
            src="https://cdn.cdnlogo.com/logos/i/91/instagram.svg"
            layout="fill"
            />
        </div>
        {/* Search */}
        <div className="max-w-xs">

        <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500"/>

            </div>
            <input className="bg-gray-50  block w-full pl-10 sm:text-sm border-gray-300 
            focus:ring-black focus:border-black rounded-md "
             placeholder="Search"
             />
        </div>
        </div>
        {/* rightSide */}
            <div className="flex items-center justify-end h-6  space-x-4">
                <HomeIcon className="navBtn" />
                <MenuIcon className="h-6 w-10 md:hidden cursor-pointer"/>
                <div className="navBtn relative">

                <PaperAirplaneIcon className="rotate-45"/>
                <div
                className="absolute -top-1 -right-2 text-xs w-5 h-5
                bg-red-400 rounded-full flex justify-center items-center
                animate-bounce text-zinc-50"
                >5</div>
                </div>

                <LinkIcon className="navBtn"/>
                <HeartIcon className="navBtn"/>
                <PlusCircleIcon className="navBtn"/>
                <UserGroupIcon className="navBtn"/>

                <img 
                className=" h-10 rouded-full cursor-pointer"
                src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
                
                />




            </div>


        

    </div>  
    </div>
  )
}

export default Header