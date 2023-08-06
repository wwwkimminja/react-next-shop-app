import React from 'react'
import letterPath from './images/shape=letter.svg'
import hidePath from './images/shape=hide.svg'
import lockPath from './images/shape=lock.svg'
import showPath from './images/shape=show.svg'
import Image from 'next/image'


function Icon({type,alt='',...restProps}) {
  let src='';
  switch(type){
    case 'letter':
      src=letterPath
      break;
    case 'hide':
      src=hidePath
      break;
    case 'lock':
      src=lockPath
      break;
    case 'show':
      src=showPath
      break;
    default:
      throw new Error('unsupported icon')  
    }


  return <Image src={src} alt={alt} {...restProps}/>
}

export default Icon