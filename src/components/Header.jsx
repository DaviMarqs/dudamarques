import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Logo from '../assets/duda-marques-logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={Logo}
                  alt=""
                  className="h-12"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-base-300 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#contato"
                    className="base-200 hover:bg-base-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contato
                  </a>

                  <a
                    href="#"
                    className="base-200 hover:bg-base-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Endereço
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-base-300 inline-flex items-center justify-center p-2 rounded-md text-base-100 hover:text-white hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-300 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-base-300 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#contato"
                  className="base-200 hover:bg-base-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contato
                </a>

                <a
                  href="#"
                  className="base-200 hover:bg-base-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Endereço
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header className="bg-base-100 flex items-center justify-center flex-col">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-content">Duda Marques</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
