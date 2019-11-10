import styled from 'styled-components';
import imgTeste from "../../images/fem.jpg";

export const Main = styled.main`


    #segundoArticle{
        h1, p{
            
        }
    }

    article{
        padding: 50px;

        &:first-child {
            background: rgb(252, 201, 218);
            min-height: 300px;
            color: white;
        }

        &:last-child {
            background: rgb(252, 201, 218);
            min-height: 300px;
            color: white;
        }

        div{
            max-width: 1100px;
            margin: auto;
            h1
            {
                text-align: center;
                font-size: 25px;
                cursor: pointer;

                &:hover{
                    color: rgba(113, 89, 193, 0.623);
                }
            }

            p{
                font-size: 20px;
                margin-top: 25px;
                cursor: pointer;

                &:hover{
                    color: rgba(113, 89, 193, 0.623);
                }
            }
        }
    }
`;

export const Footer = styled.footer`
    section
    {
        &:first-child {
            height: 100px; 
            background: rgba(113, 89, 193, 0.623);
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            article
            {
                width: 250px;
                cursor: pointer;

                svg{
                    font-size: 25px;
                }

                p{
                    color: white;
s
                }

                &:hover {
                    color: rgb(252, 201, 218);
                }

                &:hover p{
                    color: rgb(252, 201, 218);
                }
            }
        }

        &:last-child {
            height: 120px; 
            background: rgb(113, 89, 193);
            display: flex;
            align-items: center;
            justify-content: center;

            a{
                color: black;

                &:first-child {
                    margin-right: 50px;
                }
            }

            a:link {
                color: none;
             }
             
             a:visited {
                 color: none;
             }
             
             a:hover {
                 color: none;
             }
             
             a:active {
                 color: none;
             }

            svg{
                font-size: 50px;
                cursor: pointer;

                &:hover{
                    color: rgb(252, 201, 218);
                }
            }
        }
    } 
`;

export const Header = styled.header`
    #baner{
        height:1000px;
        background-image: url(${imgTeste});
        background-size: cover;
        background-position: 50% 50%;
    }
  
`;