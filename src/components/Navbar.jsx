import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import websiteLogo from '/logo-no-bg.png'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Web Dev', to: '/webdev', current: false },
  { name: 'Mentoring', to: '/mentor', current: false },
  { name: 'Music', to: '/music', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-light">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={websiteLogo}
                    alt="Klane Zurbano"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'text-primary' : 'text-dark-300 hover:text-primary',
                          'rounded-md px-3 py-2 text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span className={item.current ? 'active-hover-navitem text-dark' : 'hidden'}>&#x3c; </span>
                          <span className="text-sm">{item.name}</span>
                        <span className={item.current ? 'active-hover-navitem text-dark' : 'hidden'}> &#x3e;</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current ? 'text-primary' : 'text-dark-300 hover:text-primary',
                    'block rounded-md px-3 py-2 text-lg font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                <span className={item.current ? 'active-hover-navitem text-dark' : 'hidden'}>&#x3c; </span>
                  <span className="text-base">{item.name}</span>
                <span className={item.current ? 'active-hover-navitem text-dark' : 'hidden'}> &#x3e;</span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar