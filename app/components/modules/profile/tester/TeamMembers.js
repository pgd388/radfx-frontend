import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    {
        field: 'full_name', headerName: 'Name', flex: 1,
        editable: false,
    },
    {
        field: 'email', headerName: 'Email', flex: 1,
        editable: false,
    },
    {
        field: 'telephone', headerName: 'Telephone Number', flex: 1,
        editable: false,
    },
]

const team_members = [
    { id: 0, full_name: 'Joe Shmoe', email: 'email@email.com', telephone: '123-456-7890' },
];
export default function TeamMembers(props) {

    return (
        <>
            <div style={{ width: '75%' }}>
                <DataGrid
                    rows={team_members}
                    columns={columns}
                    pageSize={team_members.length}
                    autoHeight={true}
                    disableSelectionOnClick
                    disableColumnMenu={true}
                    hideFooter={true}
                />
            </div>
        </>
    )
}