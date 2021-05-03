import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="card flex-fill">
                <div className="card-header">
                    <span className="badge badge-info float-right">Hoje</span>
                    <h5 className="card-title mb-0">Cliques</h5>
                </div>
                <div className="card-body my-2">
                    <div className="row d-flex align-items-center mb-4">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                1.856
                        </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span className="text-muted">64%</span>
                        </div>
                    </div>
                    <div className="progress progress-sm shadow-sm mb-1">
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '64%' }} />
                    </div>
                </div>
            </div>
        )
    }
}
