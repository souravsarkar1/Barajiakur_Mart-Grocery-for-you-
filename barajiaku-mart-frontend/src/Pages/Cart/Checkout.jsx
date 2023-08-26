import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
 
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
 
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Checkou() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Note: January is 0
  const year = currentDate.getFullYear();
  const [cartData, setCartData] = useState([]);
  const token = useSelector(st => st.authReducer.token);
  const navigate = useNavigate();
  const [quantity] = useState(1);
  const [quantity1, setQuantity1] = useState(1);
  const handleDecreaseQuantity = (index) => {
    setCartData((prevCartData) => {
      const updatedCartData = [...prevCartData];
      if (updatedCartData[index].quantity > 1) {
        updatedCartData[index].quantity -= 1;
      }
      return updatedCartData;
    });
  };

  const handleIncreaseQuantity = (index) => {
    setCartData((prevCartData) => {
      const updatedCartData = [...prevCartData];
      updatedCartData[index].quantity += 1;
      return updatedCartData;
    });
  };

  useEffect(() => {
    if (token) {
      axios.get(`https://barajiakurmartbe.onrender.com/cart/mydata`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setCartData(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
    } else {
      navigate('/login')
    }
  }, [token, navigate,quantity1]);

  const handleDeleteButton = (id)=>{
    console.log("clicked");
    console.log(id);
    setQuantity1(pre=>pre+1);
    if(token){
      axios.delete(`https://barajiakurmartbe.onrender.com/cart/delete/${id}`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      }).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }

  }

  console.log(cartData);
  console.log(cartData);
  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {cartData.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>

                {Array.isArray(cartData) && cartData.map((el,idnex) => (
                  <MDBRow>
                    <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                      <MDBRipple rippleTag="div" rippleColor="light"
                        className="bg-image rounded hover-zoom hover-overlay">
                        <img
                          src={el.img1}
                          alt="lsdfj"
                          className="w-100" />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                          </div>
                        </a>
                      </MDBRipple>
                    </MDBCol>

                    <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                      <p>
                        <strong>{el.title}</strong>
                      </p>
                      <p>Price : {el.price}</p>
                      <p>{el.desc}</p>

                      <Button onClick={()=>handleDeleteButton(el._id)}  wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                        title="Remove item">
                        <MDBIcon fas icon="trash" />
                      </Button >

                      <Button  wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                        title="Move to the wish list">
                        <MDBIcon fas icon="heart" />
                      </Button >
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                      <MDBBtn
                        onClick={()=>handleDecreaseQuantity(idnex)}
                        className="px-3 me-2"
                      >
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                     <MDBBtn>{quantity}</MDBBtn>

                      <MDBBtn
                        onClick={()=>handleIncreaseQuantity(idnex)}
                        className="px-3 ms-2"
                      >
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>


                      <p className="text-start text-md-center">
                        <strong>${quantity * (+el.price)}</strong>
                      </p>
                    </MDBCol>
                  </MDBRow>
                ))}


              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">{`${day}-${month}-${year}`} + 72 Hours</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <Flex m={'auto'}>
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa" />
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express" />
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard" />
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark" />
                </Flex>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <Button block size="lg">
                  <Link to={'/payment'}>Complete Your Payment</Link>
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}