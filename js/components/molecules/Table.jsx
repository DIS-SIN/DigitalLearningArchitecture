import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

// redux state
import { connect } from "react-redux";
import MUICard from "./MUICard";
const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};


const TableHeader = props => {
    return (
        <thead>
            <tr>
                <th>{props.literals.table.fieldname}</th>
                <th>{props.literals.table.fieldvalue}</th>
                <th>{props.literals.table.action}</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.tableContentData.map((row, index) => {
        return (
            <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                <MUICard
                    fieldname={row.fieldName}
                    fieldvalue={row.fieldValue}
                    index={index}
                    removeTableContent={props.removeTableContent}
                />
            </Grid>
        );
    });

    return (
        <Grid container align="stretch" spacing={24} style={{ padding: 24 }}>
            {rows}
        </Grid>
    );
}

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { literals, tableContentData, removeTableContent } = this.props;
        //<TableHeader literals={literals} />

        return (
            <React.Fragment>
                <TableBody
                    tableContentData={tableContentData}
                    removeTableContent={removeTableContent}
                />
            </React.Fragment>
        );
    }
}

// connect redux state
export default connect(mapStateToProps)(Table);