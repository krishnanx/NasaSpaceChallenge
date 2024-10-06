import { Box } from '@chakra-ui/react'
import React from 'react'
import TableUser from '../../Components/table/TableUser'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    
  } from '@chakra-ui/react'

const Leaderboard = () => {
    const users = [
        { id: 1, username: 'Aarav Sharma', value: 132 },
        { id: 2, username: 'Fatima Al Bakr', value: 206 },
        { id: 3, username: 'Li Wei', value: 311 },
        { id: 4, username: 'Maria Gonzalez', value: 435 },
        { id: 5, username: 'Oliver Svensson', value: 512 },
        { id: 6, username: 'Kiara Mahendra', value: 604 },
        { id: 7, username: 'Hiroshi Takahashi', value: 718 },
        { id: 8, username: 'Zoe Mbatha', value: 805 },
        { id: 9, username: 'Elena Petrova', value: 921 },
        { id: 10, username: 'Amir Haddad', value: 998 }
      ];
    const theme = {
        width: "100%",
        height: "800px",
        background: `
          radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px,
          radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
          linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0,
          linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
          linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
          linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 #282828`,
        backgroundSize: "40px 60px"
      }  
  return (
    <Box
       
        style={{
            width: theme.width,
            height: theme.height,
            background: theme.background,
            backgroundSize: theme.backgroundSize,
            color: "#2c2a2a"  // Apply the text color
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Box style={{width: 600  , background:"white" , borderRadius:10}}>
        <TableContainer>
            <Table variant="striped">
              <TableCaption>Most Carbon efficient users</TableCaption>
              <Thead>
                <Tr>
                  <Th>Rank</Th>
                  <Th>Username</Th>
                  <Th isNumeric>KG CO<sub>2</sub> per month</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user, index) => (
                  <TableUser 
                    key={user.id || index} // Make sure to use a unique key
                    rank={index + 1} // Assuming the rank is based on the index
                    username={user.username}
                    value={user.value}
                  />
                ))}
              </Tbody>
            </Table>
        </TableContainer>


        </Box>
    </Box>
  )
}

export default Leaderboard
