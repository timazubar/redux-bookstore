import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from "../actions";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <StyledTd>
          <StyledCartButton
            variant="outline-success"
            size="sm"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-square"></i>
          </StyledCartButton>
          <StyledCartButton
            variant="outline-warning"
            size="sm"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-square"></i>
          </StyledCartButton>
          <StyledCartButton
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o"></i>
          </StyledCartButton>
        </StyledTd>
      </tr>
    );
  };
  return (
    <Container>
      <h2>Your order</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </Table>
      <StyledCartTotal>Total: ${total}</StyledCartTotal>
    </Container>
  );
};

const StyledCartButton = styled(Button)`
  margin: 0.25rem;
`;

const StyledCartTotal = styled(Container)`
  text-align: right;
  font-size: 1.5em;
`;

const StyledTd = styled.td`
  display: flex;
`;

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
