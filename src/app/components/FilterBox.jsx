import { Box, Divider } from '@mui/material'
import Accordion from 'react-bootstrap/Accordion';

import React from 'react'
import { Card } from 'react-bootstrap';

const FilterBox = () => {
    return (
        <>
        <Card className='mt-5 '>
        <Box className ="mt-5 p-2">
            <h5>FilterBox</h5>
            <Divider/>

            <h6>पहले फ़िल्टर तो करो</h6>
</Box>
     <Box className="mt-3 p-2">
     <p>CATEGORIES</p>
     </Box>
     <Box>
     <div className="d-flex _2b0bUo p-4">
        <div className="col-md-6 _1YAKP4">
            <select className="_2YxCDZ">
                <option value="Min" className="_3AsjWR">Min</option>
                <option value="250" className="_3AsjWR">250</option>
                <option value="500" className="_3AsjWR">250</option>
                <option value="1000" className="_3AsjWR">250</option>
                <option value="2000" className="_3AsjWR">250</option>
                <option value="5000" className="_3AsjWR">250</option>
                <option value="10000" className=" _3AsjWR">250</option>
                <option value="40000" className="_3AsjWR">299+</option></select>
                </div>
        <div className="_3zohzR">to&nbsp;&nbsp;&nbsp;&nbsp;</div>
        &nbsp;&nbsp;&nbsp; <div className="col-md-5  _3uDYxP">
            <select className="_2YxCDZ">
                <option value="250" className="_3AsjWR">250</option>
                <option value="500" className="_3AsjWR">250</option>
                <option value="1000" className="_3AsjWR">350</option>
                <option value="2000" className="_3AsjWR">450</option>
                <option value="5000" className="_3AsjWR">550</option>
                <option value="10000" className="_3AsjWR">650</option>
                <option value="Max" className="_3AsjWR">100+</option></select>
        </div>
        </div>
     </Box>

     <Box className="mt-3 w-80">
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>BRAND#1</Accordion.Header>
        <Accordion.Body>
          <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand1</label><br/>
            <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand1</label><br/>
            <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand1</label><br/>
            <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand1</label>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>CUSTOMER RATINGS</Accordion.Header>
        <Accordion.Body>
        <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp;4★ & above</label><br/>
            <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp;3★ & above</label><br/>
            <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp;2★ & above</label><br/>
            <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp;2★ & above</label><br/>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>DISCOUNT</Accordion.Header>
        <Accordion.Body>
          <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand3</label>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>GST INVOICE AVAILABLE</Accordion.Header>
        <Accordion.Body>
          <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand3</label>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>AVAILABILITY</Accordion.Header>
        <Accordion.Body>
          <input type="checkbox" name="hfj"   id="" />
            <label htmlFor="">&nbsp; Brand3</label>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
     </Box>
     </Card>
     </>
    )
}

export default FilterBox