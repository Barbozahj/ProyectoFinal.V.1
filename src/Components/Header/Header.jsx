import { Container} from '@chakra-ui/react';
import React from 'react';


const Header=()=>{

   
    return(				
        <Container as='header' h={{base:'8vh',md:'10vh'}} maxW="100vw" display="flex" flexDirection="row" justifyContent={'flex-start'}
            bg={'rgb(61, 109, 184)'} alignItems={'center'} >
                
                 
        </Container>
    );   

}

export {Header};