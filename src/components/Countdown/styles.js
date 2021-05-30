import styled from 'styled-components'

export const CountdownWrapper = styled.div`
  text-align: center;
  color: white;
  padding-top: 2rem;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 1rem;
    letter-spacing: 2px;
    color: #f4dc00;
    font-weight: 100;
    line-height: 1;
  }

  .countdown-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .countdown-el {
      margin: 0 1rem;
      p.big-text {
        margin: 0;
        color: #f4dc00;
        font-size: 5rem;
        padding: .25rem 1rem;
        margin: 0;
        line-height: 1;
        font-weight: 700;
      }
      span.small-text {
        color: #f4dc00;
        text-transform: uppercase;
        font-size: 1rem;
      }
    } 
  }
`