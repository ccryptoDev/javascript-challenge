import ProductsCard from './ProductsCard'
import Image from 'next/image';

export default function Main() {
  return (
    <section className="text-gray-600">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="basis-1/4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3.5">
            <div className='flex justify-center my-2.5'>
              <Image src='/images/baldoria-logo.png' width = {215.23} height = {76.2} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Baldoria Vermouth</div>
              <p className="text-gray-700 text-base">
                Baldoria rosso is a red vermouth that balances fresh, herby bitter notes against.
                Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels' and Wouters' rebillous grandparents.
              </p>
            </div>
            <div className='py-8 text-center'>
              <a
                  href="/"
                  className="font-bold text-xl text-blue-100 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Read More
              </a>
            </div>
            <div>
              <div class="grid grid-cols-7">
                <div class="col-start-1 col-span-1 ml-2.5">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div class="col-start-2 col-span-6 font-normal text-base">
                  Location
                </div>
                <div class="col-start-2 col-span-6 font-normal text-2xl">
                  London,United Kingdom
                </div>
                <div class="col-start-1 col-span-1 mt-10 ml-2.5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div class="col-start-2 col-span-6 font-normal text-base mt-10">
                  Product Categories
                </div>
                <div class="col-start-2 col-span-2">
                  <button className='bg-teal-50 rounded w-16 h-8 mt-3 mb-6'>Gin</button>
                </div>
                <div class="col-start-4 col-span-2">
                  <button className='bg-teal-50 rounded w-16 h-8 mt-3 mb-6'>Vodka</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
