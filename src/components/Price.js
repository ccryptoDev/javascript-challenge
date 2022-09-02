function Price({currency, num}) {
    return (
      <>
        {currency}<span className='text-base font-medium'>{num}</span>
      </>
    )
  }
  
  export default Price