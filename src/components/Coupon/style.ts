import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #fcfcfc;
  padding: 20px;
  border-radius: 8px;
  color: #333333;
`;

export const CouponLayout = styled.div`
  display: grid;
  row-gap: 10px;
`;

export const CouponDescription = styled.div`
  font-size: 18px;
`;

export const CouponName = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const CouponSubMessage = styled.div`
  color: #4f4f4f;
`;

export const CouponButton = styled.button`
  align-self: center;
  border: none;
  background-color: #06c09e;
  color: #ffffff;
  width: 60px;
  height: 60px;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
`;