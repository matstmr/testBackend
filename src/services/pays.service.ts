import { Pays } from "../entities/pays";


export function create(code: string, nom: string, emoji: string, continentCode: string) {
    const newPays = new Pays();
    newPays.code = code;
    newPays.nom = nom;
    newPays.emoji = emoji;
    newPays.continentCode = continentCode;

    return newPays.save();
}

export function GetAllPays() {
    return Pays.find();
}

export function getPaysByCode(code: string): Promise<Pays | null> {
    return Pays.findOneBy({ code })
}

export function getPaysByContinent(continentCode: string): Promise<Pays[]> {
    return Pays.findBy({ continentCode })
}

