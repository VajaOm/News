import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from './SingleCard';

function Cards(props) {
    return (
        <>
            <Row className="my-4">
                {props.data.map(article => (
                    <Col key={article.url} md={4} className="mb-4">
                        <SingleCard article={article} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Cards;
