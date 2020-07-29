import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("large")`
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 1rem;
`}
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 2rem 1.5rem;

  border-bottom: 1px solid var(--borders);

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 80px;
  min-height: 80px;

  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  color: var(--postColor);
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;

  ${media.lessThan("large")`
  border-radius: 0;
  font-size: 1rem;
  min-height: auto;
  min-width: auto;
  padding: .2rem .5rem;
  margin-bottom: .7rem;
`}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.5rem;

  ${media.lessThan("large")`
  margin: 0;
`}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  margin: 0.2rem 0 0.5rem;

  font-size: 1.4rem;
  font-weight: 700;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
`
