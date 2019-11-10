import React, { Component } from 'react';
import api from '../../services/api';

import Html from './html';

export default class Main extends Component {
    state = {
        dados: [],
        loading: false,
    };

    async componentDidMount() {
        const response = await api.get();

        this.setState({
            dados: response.data,
            loading: true,
        });
    }


    render() {
        const { loading, dados } = this.state;

        if (loading) {

            return (
                <Html
                    dados={dados}
                />
            );
        }
        return <></>;
    }
}
