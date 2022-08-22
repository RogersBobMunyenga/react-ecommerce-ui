import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Container = styled.div`
   
    height:60px;
    background-color:black;
    color:white;
`; 

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    align-items: center;
    display: flex;
`;

const Language = styled.span`
font-size:14px;
`;

const SearchContainer = styled.div`
border: .5px solid lightgray;
margin-left: 25px;
padding: 5px;
`;
const Center = styled.div`
    flex:1;
`;
const Right = styled.div`
    flex:1;
`;
const Navbar = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Language>
                  EN
                  </Language>
                  <SearchContainer>
                      input
                    <SearchIcon/>
                  </SearchContainer>
              </Left>
                <Center>
                  center
              </Center>
                <Right>
                  right
            </Right>
          </Wrapper>   
          
          
      </Container>
  )
}

export default Navbar