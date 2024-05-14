import styled from "styled-components";
import { PokemonData } from "../../../shared/models/pokemonData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
  justify-content: center;
`;

const Name = styled.h2`
  margin-bottom: 10px;
`;

const Type = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const EvolutionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EvolutionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EvolutionName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const EvolutionType = styled.span``;

interface IPokemonDataLayoutProps {
  pokemon: PokemonData;
}

const PokemonDataLayout = ({ pokemon }: IPokemonDataLayoutProps) => {
  return (
    <Container>
      <Name>{pokemon.name}</Name>
      <Type>Tipo: {pokemon.type}</Type>
      <Description>{pokemon.description}</Description>

      {pokemon.evolutions.length > 0 && (
        <>
          <h3>Evoluções:</h3>
          <EvolutionsList>
            {pokemon.evolutions.map((evolution) => (
              <EvolutionItem key={evolution.name}>
                <EvolutionName>{evolution.name}</EvolutionName>
                <EvolutionType>({evolution.type})</EvolutionType>
              </EvolutionItem>
            ))}
          </EvolutionsList>
        </>
      )}
    </Container>
  );
};

export default PokemonDataLayout;
