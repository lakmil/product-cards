import React from 'react';
import {Form, ListGroup} from 'react-bootstrap';

const Filters = ({data, minPrice, maxPrice, selectedCategories, val, onMaxPriceChange, onMinPriceChange}) => {
    return(
        <div className="filters">
        <Form>
                <Form.Group controlId="formBasicMinPrice">
                <Form.Label className="label">Min Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Min Price"
                value={minPrice} onChange = {(e) => onMinPriceChange(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicMaxPrice">
                <Form.Label className="label">Max Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Max Price" 
                value={maxPrice} onChange = {(e) => onMaxPriceChange(e.target.value)} />
                </Form.Group>
                <ListGroup>
                    <Form.Label className="label">Category</Form.Label>
                    {
                    Array.isArray(data) && data.map((item) => (
                        
                        <ListGroup.Item key={item}>
                        <Form.Check name="category" label={item} onClick = {() => val(item)} 
                        checked = {selectedCategories.includes(item)} />
                        </ListGroup.Item>
                    ))
                    }
                </ListGroup>
            </Form>
            
        </div>
    );
}

export default Filters;