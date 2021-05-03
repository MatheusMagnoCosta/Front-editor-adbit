import React, { Component } from 'react'
import MenuDrawer from '../../components/common/MenuDrawer'

import '../../assets/css/classic.css';


export class index extends Component {
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar" className="sidebar">
                    <div className="sidebar-content ">
                        <a className="sidebar-brand" href="index.html">
                            <i className="align-middle" data-feather="box" />
                            <span className="align-middle">Adbit</span>
                        </a>
                        <MenuDrawer />
                    </div>
                </nav>

                <div className="main">
                    <nav className="navbar navbar-expand navbar-light bg-white">
                        <a className="sidebar-toggle d-flex mr-2">
                            <i className="hamburger align-self-center" />
                        </a>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                                        <i className="align-middle" data-feather="settings" />
                                    </a>
                                    <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                                        <span className="text-dark">Nome de usuario</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="pages-profile.html"><i className="align-middle mr-1" data-feather="user" /> Profile</a>
                                        <a className="dropdown-item" href="#"><i className="align-middle mr-1" data-feather="pie-chart" /> Analytics</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="pages-settings.html">Settings &amp; Privacy</a>
                                        <a className="dropdown-item" href="#">Help</a>
                                        <a className="dropdown-item" href="#">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="content">
                        {this.props.children}
                    </main>
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-left">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="#">Support</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="#">Help Center</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="#">Privacy</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="#">Terms of Service</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 text-right">
                                    <p className="mb-0">
                                        © 2019 - <a href="index.html" className="text-muted">AppStack</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        )
    }
}

export default index
