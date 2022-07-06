import React from 'react';
import DataTable from '../../Components/DataTable/DataTable';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import "./List.scss"

const List = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DataTable/>
            </div>
        </div>
    );
};

export default List;