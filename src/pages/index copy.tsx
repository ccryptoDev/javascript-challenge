/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../public/imgs/logo.png';
import Avatar from '../public/imgs/Vector.png';
import Bag from '../public/imgs/Bag.png';
import Baldoria from '../public/imgs/baldoria-logo.png';
import Brandy from '../public/1.png';
import PlusButton from '../public/imgs/plus-button.png'

export default function Home() {
  return (
    <Popover className="relative bg-white">

      <div className="mx-auto px-4">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Image className='mx-auto px-4' src={Logo} width = {103} height = {24} />
            </a>
          </div>
          
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-10">
              PRODUCTS
            </a>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-10">
              BRANDS
            </a>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-10">
              <Image className="object-cover rounded-full pt-2 pl-2 mt-2" src={ Avatar } height = {21} width = { 21 } alt="Avatar" />
              HELLO, LEANDRO
            </a>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-10">
              <Image className="object-cover rounded-full pt-2 pl-2 mt-2" src={ Bag } height = {21} width = { 21 } alt="Bag" />
              CART
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-row pt-4">
        <div className="basis-1/4 px-10 shadow-lg">
          <div>
            <div className='flex justify-center my-2.5'>
              <Image src={ Baldoria } width = {215.23} height = {76.2} />
            </div>
            <div className='mt-16'>
              <h3 className='text-4xl text-center font-bold'>Baldoria Vermouth</h3>
              <div className='mt-4'>
                <p className='text-base font-normal'>Baldoria rosso is a red vermouth that balances fresh, herby bitter notes against.</p>
                <p className='text-base font-normal'>Kiss My Rhubarb takes its origins from an old hadwritten recipe from co-coeators Niels' and Wouters' rebellious grandparents.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='mt-4'>
              <Link href="/">
                <h3 className='text-xl font-bold text-center text-cyan-400 hover:text-gray-900'>Read More</h3>
              </Link>
            </button>
          </div>
        </div>
        <div className="basis-3/4 px-20">
          <div className="grid grid-cols-4 gap-4">
            <div className=' shadow-lg'>
              <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-neutral-50 p-20">
                <Image className="object-cover w-full rounded-md h-72 xl:h-80" src={Brandy} alt="T-Shirt" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 mt-3 ml-3">
                  <p className='font-bold text-base'>MR GASTON</p>
                </div>
                <div className="col-span-1 text-right mt-3 mr-3">
                  <p>€32</p>
                </div>
                <div className="col-span-1 ml-3 mb-3">
                  BRANDY
                </div>
                <div className="col-span-1 mr-3 mb-3 flex justify-end">
                  <button className='bg-slate-50 pl-5 rounded-full'>
                    <span className='text-center pr-4 pt-3'>+</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg">
              <Image className="object-cover w-full rounded-md h-72 xl:h-80" src={Brandy} alt="T-Shirt" />
              <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Slub jersey T-shirt</h4>
              <p className="text-blue-500">$18.70</p>

              <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-1">Add to cart</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg">
              <Image className="object-cover w-full rounded-md h-72 xl:h-80" src={Brandy} alt="T-Shirt" />
              <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Slub jersey T-shirt</h4>
              <p className="text-blue-500">$18.70</p>

              <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-1">Add to cart</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg">
              <Image className="object-cover w-full rounded-md h-72 xl:h-80" src={Brandy} alt="T-Shirt" />
              <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Slub jersey T-shirt</h4>
              <p className="text-blue-500">$18.70</p>

              <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-1">Add to cart</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg">
              <Image className="object-cover w-full rounded-md h-72 xl:h-80" src={Brandy} alt="T-Shirt" />
              <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Slub jersey T-shirt</h4>
              <p className="text-blue-500">$18.70</p>

              <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-1">Add to cart</span>
              </button>
            </div>
        </div>
        </div>
      </div>

      <footer className="text-gray-600 body-font bg-black">
        <div className="px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Footer</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row border-solid border-stone-50 border-t-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Footer —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@MrsRobbot</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>

    </Popover>
  )
}
