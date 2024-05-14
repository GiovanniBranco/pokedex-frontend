import { PokemonData } from "../models/pokemonData";
import { client } from "../../config/axios/axiosConfig";

class PokedexService {
  async getPokemon(image: File): Promise<PokemonData> {
    const formData = new FormData();

    formData.append("image", image);

    const response = await client.post("/pokedex/pokemon/search", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }
}

export default new PokedexService();
