import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Pays } from "../entities/pays";
import * as PaysService from "../services/pays.service";

@Resolver()
export class PaysResolver {
    @Mutation(() => Pays)
    createPays(@Arg("code") code: string, @Arg("nom") nom: string, @Arg("emoji") emoji: string, @Arg("continentCode") continentCode: string): Promise<Pays> {
        return PaysService.create(code, nom, emoji, continentCode);
    }

    @Query(() => [Pays])
    getAllpays() : Promise<Pays[]> {
        const allPays = PaysService.GetAllPays();
        return allPays;
    }

    @Query(() => Pays)
    getOnePays(@Arg("code") code: string) : Promise<Pays | null> {
        const onePays = PaysService.getPaysByCode(code)
        return onePays;
    }

    @Query(() => [Pays])
    getPaysByContinent(@Arg("continentCode") continentCode: string) : Promise<Pays[]> {
        return PaysService.getPaysByContinent(continentCode);
    } 
}