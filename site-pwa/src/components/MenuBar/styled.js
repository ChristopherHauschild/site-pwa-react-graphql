import styled from "styled-components"
import media from "styled-media-query"
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

  ${media.lessThan("large")`
  border-top: 1px solid var(--borders);
  bottom: 0;
  flex-direction: row;
  height: auto;
  padding: 0;
  position: fixed;
  width: 100%;
`}

  padding: 0.8rem 0;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 1.55rem;

  ${media.lessThan("large")`
  flex-direction: row;
`}
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
  color: var(--texts);
  padding: 1.1rem;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 1.6rem;
    padding: .9rem;
    position: relative;
    width: 1.6rem;
  `}
`
