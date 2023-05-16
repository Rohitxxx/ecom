import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Badge, Card, Grid, Typography,Button, Box } from '@mui/material'
export default function PopularProduct({item}) {
  return (
    <div>
         <Card>
            <Grid container alignItems={'center'} justifyContent={'center'} className='shadow'value="tab1">
                <Grid item sm={12} lg={2} className='btn_images'component={Link} to={'/All_ProductList/'}value="tab1" >
                    <Typography className='contact'>Best of Electronics</Typography>
                    <Button variant='contained'className='btn-btn' >VIEW ALL</Button>
                    <Image src={require('../assets/img/btn_images/AA1.webp')} width={'200'}  className='images_p'/>
                </Grid>                                                                                                                                                                                                                     
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/P1.webp')} width={'200'}/>
                    <Box>
                    <Typography pt={2}>Top Mirrorless cameras</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>DELL</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/p2.webp')} width={'200'}/>
                    <Box>
                    <Typography pt={2}>Projectors</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>ZEBRONICS</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/p3.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitors</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>Lenovo</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/p2.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitor</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>DELL</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/p5.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitor</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>DELL</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>

        <Card>
            <Grid container alignItems={'center'} justifyContent={'center'} className='shadow'value="tab2">
                <Grid item sm={12} lg={2} className='btn_images' value="tab2" component={Link} to={'/Toys/'}>
                    <Typography className='contact'>Beauty, Food, Toys & more</Typography>
                    <Button variant='contained'className='btn-btn' >VIEW ALL</Button>
                    <Image src={require('../assets/img/btn_images/A1.webp')} width={'200'}  className='images_p'/>
                </Grid>                                                                                                                                                                                                                     
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pp1.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Tyres</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>Apollo,Bridgestone, Ceat and</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pp6.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>String Instruments</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>ZEBRONICS</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pp3.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Yoga Mat</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>beat, HRX & Adrenex</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pp4.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Rider Helmets</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>beat, HRX & Adrenex</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pp5.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Microphones</Typography>
                    <Button>Form ₹8765</Button>
                    <Typography>DELL</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>

        <Card>
            <Grid container alignItems={'center'} justifyContent={'center'} className='shadow'value="tab3">
                <Grid item sm={12} lg={2} className='btn_images' value="tab3">
                    <Typography className='contact'>Vacay Travel Essentials</Typography>
                    <Button variant='contained'className='btn-btn' >VIEW ALL</Button>
                    <Image src={require('../assets/img/btn_images/AA3.webp')} width={'200'}  className='images_p'/>
                </Grid>                                                                                                                                                                                                                     
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pA1.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Casual Shoes</Typography>
                    <Button>Min. 70% Off</Button>
                   
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pA8.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Slippers & Flip Flops</Typography>
                    <Button>Min. 70% Off</Button>
                   
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pA5.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitors</Typography>
                    <Button>Min. 50% Off</Button>
                 
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pA4.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitor</Typography>
                    <Button>Min. 40% Off</Button>
                   
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/pA5.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitor</Typography>
                    <Button>Min. 30% Off</Button>
                 
                    </Box>
                </Grid>
            </Grid>
        </Card>

        <Card>
            <Grid container alignItems={'center'} justifyContent={'center'} className='shadow'value="tab4">
                <Grid item sm={12} lg={2} className='btn_images'value="tab4" >
                    <Typography className='contact'>Home Specials</Typography>
                    <Button variant='contained'className='btn-btn' >VIEW ALL</Button>
                    <Image src={require('../assets/img/btn_images/AA1.webp')} width={'200'}  className='images_p'/>
                </Grid>                                                                                                                                                                                                                     
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/H1.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Curtains</Typography>
                    <Button>Min. 40% Off</Button>

                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/H2.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Plants Saplings</Typography>
                    <Button>Min. 20% Off</Button>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/H3.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Showpieces $ Figurines</Typography>
                    <Button>Min. 70% Off</Button>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/H7.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Water Bottels</Typography>
                    <Button>Min. 50% Off</Button>
                    </Box>
                </Grid>
                <Grid item sm={12} lg={2} className='btn_images'>
                    <Image src={require('../assets/img/btn_images/H5.webp')} width={'200'} />
                    <Box>
                    <Typography pt={2}>Monitor</Typography>
                    <Button>Min. 40% Off</Button>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    </div>
  )
}
