import Image from 'next/image'
import Link from 'next/link'
import Price from './Price'

function ProductCard() {
    const price = 12;
    
  return (
    <Link
      href=''
      passHref
    >
      <a className="h-100 w-52 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative bg-teal-50 flex justify-center">
            <Image src='/images/1.png' width={ 98.38 } height={194.17} className="transform duration-500 ease-in-out hover:scale-110 !p-5" />
        </div>
        <div className="h-30 relative">
          <div className='grid grid-cols-3'>
            <div className='font-bold text-base col-span-2 ml-1.5 my-2.5'>MR GARSTON</div>
            <div className='my-2.5 ml-7'>
              <Price
                currency="€"
                num={price}
              />
            </div>
            <div className='font-bold text-base col-span-2 text-grey ml-1.5 my-2.5'>BRANDY</div>
            <div className='my-2.5 ml-6'>
              <button>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">+</span>
              </button>
            </div>            
          </div>
          {/* <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            'adsfdsafsdfadfs'
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
            "sdadsfsdf"
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            <Price
              currency="$"
              num={price}
              numSize="text-lg"
            />
          </div> */}
        </div>
      </a>
    </Link>
  )
}

export default ProductCard