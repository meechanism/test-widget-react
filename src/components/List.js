import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Li = styled.li`
  margin: 0;
`;

const PlaceholderImg = styled.div`
  width: 50px;
  height: 50px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggZD0iTTAgNCBMMCAyOCBMMzIgMjggTDMyIDQgeiBNNCAyNCBMMTAgMTAgTDE1IDE4IEwxOCAxNCBMMjQgMjR6IE0yNSA3IEE0IDQgMCAwIDEgMjUgMTUgQTQgNCAwIDAgMSAyNSA3Ij48L3BhdGg+Cjwvc3ZnPg==")
    no-repeat center hsl(0, 0%, 80%);
  margin-right: 1rem;
`;

const OrderWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const OrderInfo = styled.div``;

const LineItem = styled.p`
  margin: 0.25rem 0 0.5rem;
`;

const LiOrderItem = ({ children }) => {
  return (
    <Li>
      <OrderWrapper>
        <PlaceholderImg />
        <OrderInfo>{children}</OrderInfo>
      </OrderWrapper>
    </Li>
  );
};

List.Li = Li;
List.LiOrderItem = LiOrderItem;
List.LineItem = LineItem;
export default List;
