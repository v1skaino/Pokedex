export interface PokeMon {
    name: string
    sprites: {
        front_default: string
    }
    types: Types[]
    height: string
    weight: string
}

interface Types {
    type: {
        name: string
    }
}