import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import ProductItem from "../components/ProductItem";
import Loader from "../components/Loader";
import Message from "../components/Message";
const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { isLoading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
