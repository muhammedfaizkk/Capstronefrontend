import React from 'react'
import './styles/moreabout.css'
import { Container } from 'react-bootstrap'

function Moreabout() {
    return (
        <Container>
            <div className="moreabout-container">

<div className="moreabout-image">
    <img src="./images/images/about02.jpg" alt="About Us" />
</div>
<div className="moreabout-content">
    <h2 className="moreabout-heading">More About us</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
        nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
    </p>
</div>

</div>
        </Container>
    )
}

export default Moreabout
