import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import styled from "styled-components";

const ShoppingCartTable = () => {
  return (
    <Container>
      <h2>Your order</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1984</td>
            <td>2</td>
            <td>$30</td>
            <StyledTd>
              <StyledCartButton variant="outline-success" size="sm">
                <i className="fa fa-plus-square"></i>
              </StyledCartButton>
              <StyledCartButton variant="outline-warning" size="sm">
                <i className="fa fa-minus-square"></i>
              </StyledCartButton>
              <StyledCartButton variant="outline-danger" size="sm">
                <i className="fa fa-trash-o"></i>
              </StyledCartButton>
            </StyledTd>
          </tr>
        </tbody>
      </Table>
      <StyledCartTotal>Total: $200</StyledCartTotal>
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

export default ShoppingCartTable;
