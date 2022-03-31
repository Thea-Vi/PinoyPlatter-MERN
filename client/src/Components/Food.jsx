import React, { useState } from 'react'
import foods from '../foods'
import { Modal } from 'react-bootstrap'

const Food = ({ food }) => {


    // set state variables on Change 
    const [quantity, setQuantity] = useState(1)
    const [platter, setPlatter] = useState("small")

    // state variables for details for each food - react boostrap feature
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='food-img shadow p-2'>
            <div onClick={handleShow}>
                <h1>{food.name}</h1>
                <img className="image" src={food.image} alt="" style={{ height: "250px", width: "300px" }} />
            </div>

            <div className='foodcontainer'>
                <div>
                    <p>Platter Size</p>
                    <select onChange={(e) => { setPlatter(e.target.value) }} value={platter} className='platter' >
                        {food.platters.map((platter, i) => {
                            return <option key={i} value={platter}>{platter}</option>
                        })}
                    </select>

                </div>
                <div className='w-100'>
                    <p>Quantity</p>
                    <select onChange={(e) => { setQuantity(e.target.value) }} value={quantity} className='quantity'>
                        {/* dropdown for 5 quantity
                        keys are the numbers to map (2 params - obj(none) and i(nums are in index)) */}
                        {/* empty array */}
                        {[...Array(5).keys()].map((none, i) => {
                            return <option key={i} value={i + 1}>{i + 1}</option>

                        })}

                    </select>
                    <button className='btn-cart ml-2'>Add to cart</button>
                </div>


            </div>
            <div className="price-container">
                {/* price for each platter * quantity
                prices of each platter */}
                <h1 className='text'>Price: {food.prices[0][platter] * quantity} </h1>
            </div>

            <Modal show={show} hide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{food.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={food.image} alt="food" style={{ height: "250px", width: "300px" }} />
                    <h5>{food.description}</h5>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={handleClose} className='btn'>close</button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}

export default Food