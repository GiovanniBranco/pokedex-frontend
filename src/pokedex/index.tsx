import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const PokedexContainer = styled.div`
  background-color: #ff0000;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const ImagePreview = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 20px;
`;

const Pokedex = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result ?? null);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Container>
      <PokedexContainer>
        <Title>Pokedex</Title>
        <InputContainer>
          <Label htmlFor="imageUpload">Carregar Imagem:</Label>
          <Input
            type="file"
            id="imageUpload"
            accept=".jpg, .png"
            onChange={handleImageChange}
          />
        </InputContainer>
        {image && <ImagePreview src={image as string} alt="Uploaded Image" />}
      </PokedexContainer>
    </Container>
  );
};

export default Pokedex;
