import React from 'react'

function OrderDetails({params,searchParams}) {

  const {hello}=searchParams;
  const {id}=params;
  return (
    <div>{id}</div>
  )
}

export default OrderDetails