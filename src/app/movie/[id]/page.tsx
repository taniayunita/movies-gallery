import { DetailsMovie } from '@/components'
import React, {useState, useEffect} from 'react'

import { apiMovie } from '@/service/api'

const page = ({params} : any) => {

  return (
    <div><DetailsMovie id={params.id}/></div>
  )
}

export default page