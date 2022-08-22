import styled from "styled-components"

const Container = styled.div`
    color:#fff;
    background-color:teal;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Announcement = () => {
  return (
      <Container>
        FREE SHIPPING ON ORDERS ABOVE $100
      </Container>
  )
}

export default Announcement