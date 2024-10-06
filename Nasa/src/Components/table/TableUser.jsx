import React from 'react'
import {
    Tr,
    Td
    
  } from '@chakra-ui/react'

const TableUser = ({rank , username , value}) => {
  return (
    <Tr>
        <Td>{rank == 1? "🥇": rank==2?'🥈':rank==3?'🥉':rank}</Td>
        <Td>{username}</Td>
        <Td isNumeric>{value}</Td>
    </Tr>
  )
}

export default TableUser
