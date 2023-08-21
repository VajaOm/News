import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function SingleCard(props) {

    return (
        <>
            <Card style={{ padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img variant="top" src={props.article.urlToImage} style={{ maxWidth: '100%', height: 'auto' }} />
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>{props.article.description}</Card.Text>
                    <Button variant="primary" href={props.article.url} target="_blank">Read More</Button>
                </Card.Body>
            </Card>

        </>
    );
}

export default SingleCard;