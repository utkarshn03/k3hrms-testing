import { Fragment } from 'react'
import { Disclosure, /*Menu, Transition*/ } from '@headlessui/react'
//import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdClose, MdMenu } from "react-icons/md";


const navigation = [
    { name: 'Home', href: ''},
    { name: 'Kiit', href: ''},
    { name: 'Kims', href: ''},    
    { name: 'Kiss', href: ''},
    { name: 'Temple', href: ''},
    { name: 'Hospitality', href: ''},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className=" text-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 backdrop-blur-xl ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MdMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-1 items-center">
                  <img
                    className="h-8 w-auto"
                    src=" "
                    alt="Your Company"
                    height={36}
                    width={36}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((navn) => (
                      <a
                        key={navn.name}
                        href={navn.href}
                        className={classNames(
                          navn.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-green-500 transition ease-in-out duration-150  hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-medium'
                        )}
                        aria-current={navn.current ? 'page' : undefined}
                      >
                        {navn.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex font-medium  items-center pr-2 sm:static sm:inset-auto sm:ml-6 space-x-5 sm:pr-0">
                

                <button
                  type="button"
                //   className="bg-#486ffa"
                  className="rounded-md border-none bg-green-300  px-3 p-1 text-black hover:text-white hover:bg-green-600 focus:outline-none"
                ><span>
                    Logout 
                </span>                  
                </button>

                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}