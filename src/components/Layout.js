import React from "react";
import styled from "styled-components";

// 헤더 포지셔니 픽스된 상황이기 때문에 레이아웃 컴포넌트에서는 상단 여백을 헤더 크기만큼 설정
const Wrapper = styled.div`
  padding-top: 60px; /* 헤더 높이 */
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
