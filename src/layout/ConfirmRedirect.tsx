import React from 'react'


//utils
import { handleRedirect } from '@/utils/url'

//props
interface ConfirmProps {

}

const ConfirmRedirect = ({}: ConfirmProps) => {
  return (
    <div className=' w-full h-auto p-2'>
        <p className=" font-roboto text-sm md:text-base">
            This will open new tab and redirect.
        </p>
    </div>
  )
}

export default ConfirmRedirect