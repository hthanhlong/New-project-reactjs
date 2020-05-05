import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup
} from 'reactstrap';

function Cardbox(props) {
    const { title, img } = props;
    return (

        <Card>
            <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary" >Add to Card</Button>
            </CardBody>
        </Card>

    )
}

Cardbox.propTypes = {

}

export default Cardbox

