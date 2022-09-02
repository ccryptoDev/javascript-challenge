import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-800 ">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl text-white">
              LEXIR
            </h1>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="tracking-wide text-grey uppercase font-bold text-base font-medium">
              COMMUNITY
            </h2>
            <ul className="space-y-4 text-md text-white">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Lexir for Brands
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Business Buyers
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Sales Affiliates
                </a>
              </li>{" "}
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="tracking-wide text-grey uppercase font-bold text-base font-medium">
              PLATFORM
            </h2>
            <ul className="space-y-4 text-md text-white">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Pricing
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Get Started
                </a>
              </li>{" "}
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="tracking-wide text-grey uppercase font-bold text-base font-medium">
              COMPANY
            </h2>
            <ul className="space-y-4 text-white">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Leal
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="tracking-wide text-grey uppercase font-bold text-base font-medium">
              LEXIR SHOP
            </h2>
            <ul className="space-y-4 text-white">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Spirts
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Win
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-base"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <div className="flex flex-row">
              <div className="basis-1/4 text-white">
                <a
                  className="hover:text-grey transition-colors duration-200 text-base"
                  href="/"
                >
                  <svg
                    class="w-6 h-6 text-white-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    ></path>
                  </svg>    
                </a>
              </div>
              <div className="basis-1/4 text-white">
                <a
                  className="hover:text-grey transition-colors duration-200 text-base"
                  href="/"
                >
                  <svg
                    class="w-6 h-6 text-white-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>  
                </a>
              </div>
              <div className="basis-1/4 text-white">
                <a
                    className="hover:text-grey transition-colors duration-200 text-base"
                    href="/"
                  >
                    <svg
                      class="w-6 h-6 text-white-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512">
                      <path
                        d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                      ></path>
                    </svg>
                  </a>
              </div>
              <div className="basis-1/4 text-white">
                <a
                    className="hover:text-grey transition-colors duration-200 text-base"
                    href="/"
                  >
                    <svg
                      class="w-6 h-6 text-white-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-grey transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2021 Lexir Inc.
            </a>
          </ul>
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-white">
            <li>
              <a
                href="/"
                className="text-md transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
