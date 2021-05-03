import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="card flex-fill">
                <div className="card-header">
                    <span className="badge badge-warning float-right">Média</span>
                    <h5 className="card-title mb-0">Custo por clique</h5>
                </div>
                <div className="card-body my-2">
                    <div className="row d-flex align-items-center mb-4">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                R$ 1,52
                    </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
