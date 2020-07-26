import styled from "styled-components"

import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-between;

  width: 3.4rem;
  height: 100vh;
  right: 0;
  position: fixed;

  padding: 0.8rem 0;
  background: #192734;
  border-left: 1px solid #38444d;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 1.55rem;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  display: block;
  width: 1.35rem;
  height: 1.35rem;
  position: relative;

  cursor: pointer;
  color: #8899a6;
  padding: 1.1rem;
`
