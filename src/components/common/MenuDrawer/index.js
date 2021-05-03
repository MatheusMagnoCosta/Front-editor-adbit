import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <ul className="sidebar-nav">
                <Link to="#" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Visão geral</span>
                </Link>
                <Link to="#" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Campanhas</span>
                </Link>
                <Link to="#" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Relatórios</span>
                </Link>
                <Link to="#" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Carteira</span>
                </Link>
                <Link to="#" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Ajuda</span>
                </Link>
            </ul>

        )
    }
}
