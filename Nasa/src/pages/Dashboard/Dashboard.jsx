import React, { useContext,useState } from 'react';
import { Box ,Select,FormControl,FormLabel,NumberInput,NumberInputStepper,NumberIncrementStepper,NumberInputField,NumberDecrementStepper} from '@chakra-ui/react';
import {Value} from '../../Components/contexts/ValuesContext';
import { Button } from '@chakra-ui/react';
const Dashboard = () => {
  const theme = {
    width: "100%",
    height: "700px",
    background: `
      radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px,
      radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
      linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0,
      linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
      linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
      linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 #282828`,
    backgroundSize: "40px 60px",
    color: "white"  // Ensures the text is visible against the dark background
  };
    const [values,setValues] = useContext(Value);
    const [input,setInput ]  = useState(1);

  return (
    <Box
      style={{
        width: theme.width,
        height: theme.height,
        background: theme.background,
        backgroundSize: theme.backgroundSize,
        color: theme.color  // Apply the text color
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display = "flex"
        flexDirection="column"
        pt="20px"
        justifyContent="space-evenly"
        alignItems="center"
        width="690px"
        height="404px"
        bg="rgb(223, 225, 235)"
        borderRadius="50px"
        sx={{
          boxShadow: `
            rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
            rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
            rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
            rgba(0, 0, 0, 0.06) 0px 2px 1px,
            rgba(0, 0, 0, 0.09) 0px 4px 2px,
            rgba(0, 0, 0, 0.09) 0px 8px 4px,
            rgba(0, 0, 0, 0.09) 0px 16px 8px,
            rgba(0, 0, 0, 0.09) 0px 32px 16px
          `,
        }}

       
      >
        
        {input===1?<Box
         w="100%"
         h="200px"
         display="flex"
         flexDirection="row"
         justifyContent="space-between"
         alignItems="center"
        >
            <FormControl
            display="flex"
            flexDirection="column"
            alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Diet</FormLabel>
                <Select placeholder='Select option' w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        diet:e.target.value 
                      }));}}
                >
                    <option value='option1' 
                        style={{color:"black",bgColor:"grey"}}
                    >vegetarian</option>
                    <option value='option2' style={{color:"black",bgColor:"grey"}}>pescatarian</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>omnivore</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>vegan</option>
                </Select>
            </FormControl>
            
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >How Often do you Shower?</FormLabel>
                <Select placeholder='Select option' w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        shower:e.target.value 
                      }));}}
                >
                    <option value='option1' style={{color:"black",bgColor:"grey"}}>daily</option>
                    <option value='option2' style={{color:"black",bgColor:"grey"}}>less frequently</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>more frequently</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>twice a day</option>
                </Select>
            </FormControl>
        
        </Box>:null}
        {input===1?<Box
         w="100%"
         h="200px"
         display="flex"
         flexDirection="row"
         justifyContent="space-between"
         alignItems="center"
        >
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Heating Energy Source</FormLabel>
                <Select placeholder='Select option' w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        heat:e.target.value 
                      }));}}
                >
                    <option value='option1' style={{color:"black",bgColor:"grey"}}>coal</option>
                    <option value='option2' style={{color:"black",bgColor:"grey"}}>natural gas</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>wood</option>
                    
                </Select>
            </FormControl>
            
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Monthly Grocery Bill</FormLabel>
                <NumberInput>
                    <NumberInputField w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        Gbill:e.target.value 
                      }));}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        
        </Box>:null}
        {input===2?<Box
         w="100%"
         h="200px"
         display="flex"
         flexDirection="row"
         justifyContent="space-between"
         alignItems="center"
        >
            <FormControl
            display="flex"
            flexDirection="column"
            alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Frequency of Traveling by Air</FormLabel>
                <Select placeholder='Select option' w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        Tair:e.target.value 
                      }));}}
                >
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>very frequently</option>
                    <option value='option2' style={{color:"black",bgColor:"grey"}}>frequently</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>rarely</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>never</option>
                    
                </Select>
            </FormControl>
            
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Vehicle Monthly Distance Km</FormLabel>
                 <NumberInput>
                    <NumberInputField w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        VmD:e.target.value 
                      }));}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        
        </Box>:null}
        {input===2?<Box
         w="100%"
         h="200px"
         display="flex"
         flexDirection="row"
         justifyContent="space-between"
         alignItems="center"
        >
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Waste Bag Size</FormLabel>
                <Select placeholder='Select option' w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        Wbs:e.target.value 
                      }));}}
                >
                    <option value='option2' style={{color:"black",bgColor:"grey"}}>extra large</option>
                    <option value='option1' style={{color:"black",bgColor:"grey"}}>large</option>
                    <option value='option2' style={{color:"black",bgColor:"grey"}}>medium</option>
                    <option value='option3' style={{color:"black",bgColor:"grey"}}>small</option>
                    
                </Select>
            </FormControl>
            
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >Waste Bag Weekly Count</FormLabel>
                <NumberInput>
                    <NumberInputField w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        Wbwc:e.target.value 
                      }));}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        
        </Box>:null}
        {input===3?<Box
         w="100%"
         h="200px"
         display="flex"
         flexDirection="row"
         justifyContent="space-between"
         alignItems="center"
        >
            <FormControl
            display="flex"
            flexDirection="column"
            alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >How Long TV PC Daily Hour</FormLabel>
                <NumberInput>
                    <NumberInputField w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        Tv:e.target.value 
                      }));}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
            
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >How Many New Clothes Monthly</FormLabel>
                 <NumberInput>
                    <NumberInputField w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                       NewClothes:e.target.value 
                      }));}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        
        </Box>:null}
        {input===3?<Box
         w="100%"
         h="200px"
         display="flex"
         flexDirection="row"
         justifyContent="space-between"
         alignItems="center"
        >
            <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                
            >
                <FormLabel
                    w="300px"
                    color="black"
                    pl="10px"
                >How Long Internet Daily Hour</FormLabel>
                <NumberInput>
                    <NumberInputField w="300px"
                    bgColor="grey"
                    onChange={(e)=>{setValues((prevValues) => ({
                        ...prevValues,
                        InternetDaily:e.target.value 
                      }));}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
            
            
        
        </Box>:null}

        <Box
            w="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
           
        >
            <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
            >
                {input!==1?<Button
                    colorScheme='teal'
                    size="md"
                    onClick={()=>{
                        input>=1?setInput(input-1):null
                    }}
                >
                    Previous
                </Button>:null}
            </Box>
            <Box
                   display="flex"
                   justifyContent="flex-end"
                   alignItems="center"
            >
                {input!==3?<Button
                    colorScheme='teal'
                    size="md"
                    pl="30px"
                    pr="30px"
                    onClick={()=>{
                        input<=3?setInput(input+1):null
                    }}
                >
                    Next
                </Button>:null}
                {input===3?<Button
                    colorScheme='teal'
                    size="md"
                    pl="30px"
                    pr="30px"
                    onClick={()=>{
                        input<=3?setInput(input+1):null
                    }}
                >
                    Submit
                </Button>:null}
            </Box>
           
            
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
