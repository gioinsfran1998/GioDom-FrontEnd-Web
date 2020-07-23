import styled from 'styled-components'

export const Container = styled.div `
height: 100vh;
width: 100vw;
padding: 15px;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

`
export const CardLogin = styled.div `

width: 100%;
max-width: 500px;
height: 500px;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-flow: column wrap;
justify-content: space-evenly;
align-items: center;

    .logoBota {
        width: 100%;
        max-width: 250px;
    }

    .TextCard {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .inputContainer {
        width: 90%;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    
    .inputContainer .box-input {
        width: 100%;
        max-width: 350px;
        padding: 10px;
        
    }
    
    .buttonContainer {
        
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }
    
    .buttonContainer .buttonIngresar:hover {
       background-color: #2c3e50;
       transition: all 0.5s ease;
       cursor: pointer;
    } 
    @media only screen and (max-width: 375px) {

        border-radius: 0px;

        /* .inputContainer {
            max-width: 90%;
        }

        .inputContainer .box-input {
        width: 80%;
        margin: 10px;
    
        } */

        

        .buttonContainer  {
           width: 50%;
           margin-top: 10px;
           margin-bottom: 10px;
        }

        .buttonContainer .button {
           margin: 10px;
        } 


        .TextCard h1 { 
            font-size: 1.5rem;
        }

        .TextCard h5 { 
            display: none;
        }

        .logoBota {
            padding: 5px;
        }
        
    } 


`



    

