import React from 'react';

const SecretList = props => {
    console.log('Secret List Props:', props);

    return (
        <div>
            <h1 className="center red-text">Top Secret List</h1>

            <ol>
                <li>Tom</li>
                <li>Tammy</li>
                <li>Fred</li>
                <li>Francis</li>
                <li>Doug</li>
                <li>Dolly</li>
            </ol>
        </div>
    );
}

export default SecretList;
