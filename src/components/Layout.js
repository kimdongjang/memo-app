import React from "react";
import styled from "styled-components";
import { media } from "lib/style-utils";

import "./layout.css";

const Wrapper = styled.div`
  padding-top: 60px; /* 헤더 높이 */
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

Layout.Main = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 1200px;
  transition: all 0.3s;
  position: relative;

  ${media.desktop`
        width: 990px;
    `}

  ${media.tablet`
        margin-top: 1rem;
        width: calc(100% - 2rem);
    `}

    ${media.mobile`
        margin-top: 0.5rem;
        width: calc(100% - 1rem);        
    `}
`;

export default Layout;
