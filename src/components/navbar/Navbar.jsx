import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
   
    height:60px; 
`; 

const Wrapper = styled.div`
padding: 10px 20px;
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
display: flex;
align-items: center;
`;

const Input = styled.input`
    border: none;
`;
const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h2`
    font-weight: bold;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
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
                      <Input/>
                      <SearchIcon style={{ color:"gray", fontSize:16}}/>
                  </SearchContainer>
              </Left>
                <Center>
                  <Logo>
                      ROTSHI
                  </Logo>
              </Center>
                <Right>
                  <MenuItem>REGISTER</MenuItem>
                  <MenuItem>SIGN IN</MenuItem>
                  <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                  </MenuItem>
            </Right>
          </Wrapper>   
          
          
      </Container>
  )
}

export default Navbar