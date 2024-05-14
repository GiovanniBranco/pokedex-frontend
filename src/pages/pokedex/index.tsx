import React, { useState } from "react";
import { Container } from "./styles/container.styled";
import { PokedexContainer } from "./styles/pokedexContainer.styled";
import { Title } from "./styles/title.styled";
import { InputContainer } from "./styles/inputContainer.styled";
import { Label } from "./styles/label.styled";
import { ImagePreview } from "./styles/imagePreview.styled";
import { Input } from "./styles/input.styled";
import PokedexService from "../../shared/services/pokedexService";
import { PokemonData } from "../../shared/models/pokemonData";
import PokemonDataLayout from "./components/pokemonDataLayout";

const Pokedex = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(null);
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    setPokemon(null);
    if (image instanceof File) {
      try {
        setLoading(true);
        const response = await PokedexService.getPokemon(image);

        setPokemon(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearButton = () => {
    setImage(null);
    setPokemon(null);
  };

  return (
    <Container>
      <PokedexContainer>
        <Title>Pokedex</Title>
        <InputContainer>
          <Label htmlFor="imageUpload">Upload your image:</Label>
          <Input
            type="file"
            id="imageUpload"
            accept=".jpg, .png"
            onChange={handleImageChange}
          />
        </InputContainer>
        {image && (
          <ImagePreview src={URL.createObjectURL(image)} alt="Uploaded Image" />
        )}
        <button onClick={uploadImage} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

        <button onClick={handleClearButton} disabled={loading}>
          Clear
        </button>

        {pokemon && <PokemonDataLayout pokemon={pokemon} />}
      </PokedexContainer>
    </Container>
  );
};

export default Pokedex;
