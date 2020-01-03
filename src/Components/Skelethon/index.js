import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';


export function Skelethon1(){
    return(
        <>
        </>
    )
}
export function Skelethon2(){
    return(
        
            <Box width="100%" marginRight={0.5} my={5}>
                <Skeleton variant="rect" width="100%" height={190} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="50%" />
            </Box>
        
    )
}