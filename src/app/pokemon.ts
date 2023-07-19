export interface GenericPokemon {
    name: string;
    url: string;
}

export interface PokemonApi {
    count: number;
    results: GenericPokemon[];
}

export interface PokemonAbility {
    ability: GenericPokemon;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonType {
    slot: number;
    type: GenericPokemon;
}

export interface PokemonSprite {
    front_default: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    abilities: PokemonAbility[]
    types: PokemonType[]
    sprites: PokemonSprite
}