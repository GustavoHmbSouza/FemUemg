import React from 'react';
import { FiPhone, FiInstagram } from 'react-icons/fi';
import { MdEmail }from 'react-icons/md';
import { FaFacebookSquare }from 'react-icons/fa';


import {
    Main,
    Footer,
    Header,
} from './styles';

export default function Html(props) {
    const {
        dados
    } = props;

    var insta = '';
    dados.map(dado =>
        {
            if (dado.name.indexOf('#Instagram ') !== -1)
            {
                insta = dado.name.split("-")[1]
            }
        });

    var face = '';
    dados.map(dado =>
        {
            if (dado.name.indexOf('#Facebook ') !== -1)
            {
                face = dado.name.split("-")[1]
            }
        });

    return (
        <>
            <>
                <Header>
                    <div id='baner'></div>
                </Header>
                <Main>
                    <article>
                        <div>
                            {dados.map(dado =>
                                dado.name.indexOf('#Section1') !== -1 ? (
                                    <>
                                    <h1>{dado.name.split("-")[1]}</h1>
                                    <p>{dado.desc}</p>
                                    </>
                                ) : (
                                    ''
                                )
                            )}
                        </div>
                    </article>
                    <article id="segundoArticle">
                        <div>
                            {dados.map(dado =>
                                    dado.name.indexOf('#Section2') !== -1 ? (
                                        <>
                                        <h1>{dado.name.split("-")[1]}</h1>
                                        <p>{dado.desc}</p>
                                        </>
                                    ) : (
                                        ''
                                )
                            )}
                        </div>
                    </article>
                    <article>
                        <div>
                            {dados.map(dado =>
                                    dado.name.indexOf('#Section3') !== -1 ? (
                                        <>
                                        <h1>{dado.name.split("-")[1]}</h1>
                                        <p>{dado.desc}</p>
                                        </>
                                    ) : (
                                        ''
                                )
                            )}
                        </div>
                    </article>
                </Main>
                
                <Footer>
                    <section>
                        <article>
                            <FiPhone />
                            <p>
                            {dados.map(dado =>
                                    dado.name.indexOf('#Telefone ') !== -1 ? (
                                        dado.name.split("-")[1]
                                    ) : (
                                        ''
                                )
                            )}
                            </p>
                        </article>
                        <article>
                            <MdEmail />
                            <p>
                                {dados.map(dado =>
                                        dado.name.indexOf('#Email ') !== -1 ? (
                                            dado.name.split("-")[1]
                                        ) : (
                                            ''
                                    )
                                )}
                            </p>
                        </article>
                    </section>
                    <section>
                        <a target="_blank" href={insta}><FiInstagram /></a>
                        <a target="_blank" href={face}><FaFacebookSquare /></a>
                    </section>
             
                </Footer>
            </>
        </>
    );
}
