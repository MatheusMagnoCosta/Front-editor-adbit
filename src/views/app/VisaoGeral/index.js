import React, { Component } from 'react'
import Layout from '../../../layout/dashboard'
import Impressoes from '../../../components/applications/Impressoes'
import Cliques from '../../../components/applications/Cliques'
import Cpc from '../../../components/applications/Cpc'
import Custo from '../../../components/applications/Custo'

export default class index extends Component {
    render() {
        return (
            <Layout>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 d-flex">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Impressoes />
                                        <Cliques/>
                                    </div>
                                    <div className="col-sm-6">
                                        <Cpc/>
                                        <Custo/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Localidades</h5>
                                </div>
                                <div className="card-body p-2">
                                    <div id="world_map" style={{ height: '304px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Linguagens</h5>
                                </div>
                                <table className="table table-striped my-0">
                                    <thead>
                                        <tr>
                                            <th>Lingua</th>
                                            <th className="text-right">Usuarios</th>
                                            <th className="d-none d-xl-table-cell w-75">% de usuarios</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>en-us</td>
                                            <td className="text-right">735</td>
                                            <td className="d-none d-xl-table-cell">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '43%' }} aria-valuenow={43} aria-valuemin={0} aria-valuemax={100}>43%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>en-gb</td>
                                            <td className="text-right">223</td>
                                            <td className="d-none d-xl-table-cell">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '27%' }} aria-valuenow={27} aria-valuemin={0} aria-valuemax={100}>27%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>fr-fr</td>
                                            <td className="text-right">181</td>
                                            <td className="d-none d-xl-table-cell">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '22%' }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}>22%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>es-es</td>
                                            <td className="text-right">132</td>
                                            <td className="d-none d-xl-table-cell">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '16%' }} aria-valuenow={16} aria-valuemin={0} aria-valuemax={100}>16%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>de-de</td>
                                            <td className="text-right">118</td>
                                            <td className="d-none d-xl-table-cell">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ru-ru</td>
                                            <td className="text-right">98</td>
                                            <td className="d-none d-xl-table-cell">
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '13%' }} aria-valuenow={13} aria-valuemin={0} aria-valuemax={100}>13%</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Dispositivos</h5>
                                </div>
                                <div className="card-body d-flex w-100">
                                    <div className="align-self-center chart">
                                        <canvas id="chartjs-dashboard-bar-devices" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Intereses</h5>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                        <canvas id="chartjs-dashboard-radar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5 col-xl-4 d-flex">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Origem dos cliques</h5>
                                </div>
                                <div className="card-body d-flex">
                                    <div className="align-self-center w-100">
                                        <div className="py-3">
                                            <div className="chart chart-xs">
                                                <canvas id="chartjs-dashboard-pie" />
                                            </div>
                                        </div>
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Fonte</th>
                                                    <th className="text-right">Revenue</th>
                                                    <th className="text-right">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><i className="fas fa-square-full text-primary" /> Direct</td>
                                                    <td className="text-right">$ 2602</td>
                                                    <td className="text-right text-success">+43%</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-square-full text-warning" /> Affiliate</td>
                                                    <td className="text-right">$ 1253</td>
                                                    <td className="text-right text-success">+13%</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-square-full text-danger" /> E-mail</td>
                                                    <td className="text-right">$ 541</td>
                                                    <td className="text-right text-success">+24%</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-square-full text-dark" /> Other</td>
                                                    <td className="text-right">$ 1465</td>
                                                    <td className="text-right text-success">+11%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-8 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Campanhas</h5>
                                </div>
                                <table id="datatables-dashboard-traffic" className="table table-striped my-0">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th className="text-right">Cliques</th>
                                            <th className="d-none d-xl-table-cell text-right">Impressões</th>
                                            <th className="d-none d-xl-table-cell text-right">CTR</th>
                                            <th className="d-none d-xl-table-cell text-right">CPC</th>
                                            <th className="d-none d-xl-table-cell text-right">Custo Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Camp 1</td>
                                            <td className="text-right">1023</td>
                                            <td className="d-none d-xl-table-cell text-right">1265</td>
                                            <td className="d-none d-xl-table-cell text-right text-success">27.23%</td>
                                            <td className="d-none d-xl-table-cell text-right">R$ 0,89</td>
                                            <td className="d-none d-xl-table-cell text-right">R$ 283</td>
                                        </tr>
                                        <tr>
                                            <td>Camp 2</td>
                                            <td className="text-right">504</td>
                                            <td className="d-none d-xl-table-cell text-right">623</td>
                                            <td className="d-none d-xl-table-cell text-right text-danger">66.76%</td>
                                            <td className="d-none d-xl-table-cell text-right">R$ 2,64</td>
                                            <td className="d-none d-xl-table-cell text-right">R$ 347</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
