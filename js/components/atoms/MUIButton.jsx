import React from 'react';
import Button from '@material-ui/core/Button';

class MUIButton extends React.Component {
    render() {
        return (
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
        );
    }
}

export default MUIButton;