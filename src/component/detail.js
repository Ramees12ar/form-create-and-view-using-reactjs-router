import React, { Component } from 'react';
import './detail.css';
class View extends Component {
    render() {
        return (
            <div className="head3">
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Date of Birth</th>
                        <th>Place</th>
                    </tr>
                    <tr>
                        <td>Ramees</td>
                        <td>ar</td>
                        <td>23</td>
                        <td>25/04/1982</td>
                        <td>ekm</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default View;