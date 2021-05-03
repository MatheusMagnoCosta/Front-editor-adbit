import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="card flex-fill">
                <div className="card-header">
                    <span className="badge badge-success float-right">Mensal</span>
                    <h5 className="card-title mb-0">Custo</h5>
                </div>
                <div className="card-body my-2">
                    <div className="row d-flex align-items-center mb-4">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                R$ 434
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span className="text-muted">32%</span>
                        </div>
                    </div>
                    <div className="progress progress-sm shadow-sm mb-1">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '32%' }} />
                    </div>
                </div>
            </div>
        )
    }
}
