import React, { useContext } from "react";
import Styled from "styled-components";

//Context
import { AppContext } from '../../context/app-context'

//Icons
import { IoMdAdd, IoMdSearch } from "react-icons/io";

// Style

const BoxContainer = Styled.div`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    background: #fff;
    padding: 20px;
`;

const TextContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TitleText = Styled.h1`
    color: #fe453b;
    margin: 0;
`;

const SubTitle = Styled.p`
    margin: 0;
    color: #b3b3b3;
`;

const ActionContainer = Styled.div`
    display: flex;
`;

const Button = Styled.button`
    padding: 12px 8px 12px 8px;
    outline: none;
    border-radius: 3px;
    background: #fe453b;
    border: none;
    color: #fff;
    margin-left: 15px;
`;

const InputBox = Styled.input`
    border: none;
    outline: none;
`;

const InputContainer = Styled.div`
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    aligin-items: center;
`;

const Label = Styled.label `
    display: none;
`

const BoxSearch = () => {
  const context = useContext(AppContext)

  const handleSearch = (e) => {
    context.setQuery(e.target.value);
  }

  return (
    <BoxContainer>
      <TextContainer>
        <div>
          <TitleText>DRIVER MANAGEMENT</TitleText>
          <SubTitle>Data driver yang bekerja dengan Anda.</SubTitle>
        </div>
        <ActionContainer>
          <InputContainer>
            <IoMdSearch color="red" />
            <Label htmlFor="Search">
                Search
            </Label>
            <InputBox
              onChange={handleSearch}
              type="text"
              id="Search"
              placeholder="Cari Driver"
              name="Search"
            />
          </InputContainer>
          <Button>
            TAMBAH DRIVER <IoMdAdd />{" "}
          </Button>
        </ActionContainer>
      </TextContainer>
    </BoxContainer>
  );
};

export default React.memo(BoxSearch);
