import React from 'react';

import { CardPageWrapper } from '../components/dashboard/styled/Dashboard';

export default (cardData, data) => {
    if (cardData.name === "Github") {
        return (
                <CardPageWrapper className="col-md-6 offset-md-5">
                    <div className="row">
                    <p><h5>Followers:</h5> {data.followers}</p>
                    </div>
                    <p><h5>Repos:</h5></p>
                    <ol>
                        {data.repos.map(value => <li key={value.id}>{value.name}</li>)}
                    </ol>
                </CardPageWrapper>
        )
    } else if (cardData.name === "Rick and Morty") {
        return (
            <div className="col-md-6 offset-md-3">
                <table className="table table-striped table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Specties</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Location</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>

                    {data.map(value => 
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.species}</td>
                            <td>{value.gender}</td>
                            <td>{value.origin.name}</td>
                            <td>{value.location.name}</td>
                            <td>{value.status}</td>
                        </tr>)}
                </table>
            </div>
        )
    } else if (cardData.name === "Breaking Bad") {
        return (
            <CardPageWrapper className="col-md-6 offset-md-3">
                <p>Random quote from series:</p>
                <q>{data[0]}</q>
            </CardPageWrapper>
        )
    }
};