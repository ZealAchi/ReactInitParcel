import styled from 'styled-components';

export const StyledNavBar = styled.div`
position: fixed;
z-index: 2;

top: 0px;
left: 0px;

width: 100vw;
height: 6.5rem;

box-shadow: 0 0 1px 1px rgba(20,23,28,.1),0 3px 1px 0 rgba(20,23,28,.1);
font-size: 2rem;
color: #505763;
background: #fff;

font-family: 'Hackman-Bold';

& #styled-navbar-content {
    position: relative;
    width: 1400px;
    margin: 0 auto;
    padding: 1rem;
    line-height: 4.5rem;
    
    display: flex;
    
    & #styled-navbar-content-icon {
        width: 4.5rem;
        height: 4.5rem;
        background: rgb(236, 82, 82);
        mask: ${ props => ` url( ${props.svgIcon}) no-repeat center;`})		
    }		
    
    & #styled-navbar-content-title {
        margin-left: 1rem;
        margin-right: 1.5rem;				
    }
                
}	

& input[type='text'] {
    color: #686f7a;
    background: #f2f3f5;
    border: 0px solid transparent !important;

    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    
    width: 46rem;
    margin-left: 3rem;
    text-indent: 1.5rem;
}

& #styled-navbar-content-input-submit {
    width: 4.5rem;
    height: 4.7rem;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background: #f2f3f5;
}
& #styled-navbar-content-input-submit:hover {
    cursor:pointer;
    background: rgb(236, 82, 82);
}
& #styled-navbar-content-input-submit:hover svg {
    fill: #fff;
}
    & #styled-navbar-content-input-submit svg {
        width: 3rem;
        height: 3rem;
        fill: rgb(236, 82, 82);
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    
    
& .styled-navbar-vertical-divider {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-left: 1px solid #dedfe0;
}

& #styled-navbar-profile-icon {
    width: 4.5rem;
    height: 4.5rem;
    background: #686f7a;
    mask: ${props => `url(${props.svgUserIcon}) no-repeat center;`})	
}
& #styled-navbar-profile-icon:hover {
    cursor:pointer;
}        
`;

export const StyledContentArea = styled.div`
	position: relative;
	z-index: 1;
	
	width: 120rem;
	height: 100vh;
	margin: 0 auto;
	
	display: grid;
	// grid-template-columns: 32rem 86.5rem;
	grid-auto-rows: min-content;
	grid-gap: 1.5rem;
	
	padding-top: 8rem;
	
	& #content-area-main-display-content {
		position: relative;
	}	
`;