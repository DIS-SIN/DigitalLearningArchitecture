import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'

class MUICard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { index, fieldname, fieldvalue, removeTableContent } = this.props;

        return (
            <div>
                <Card >
                    <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                        image="/static/images/weasel.jpg"
                        title={fieldname}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {fieldname}
                        </Typography>
                        <Typography component="p">
                            {fieldvalue}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => removeTableContent(index)}>
                            <DeleteIcon /> Delete
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
export default MUICard