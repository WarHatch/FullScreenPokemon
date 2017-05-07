import { IMapRaw } from "../src/components/maps";
import { FullScreenPokemon } from "../src/FullScreenPokemon";
import { under } from "./main";
import { stubFullScreenPokemon } from "./utils/fakes";

function describeMap(map: IMapRaw): void {
    describe(map.name, (): void => {
        for (const i in map.locations) {
            describeLocation(map, i);
        }
    });
}

function describeLocation(map: IMapRaw, locationName: string) {
    under([map.name], locationName, (): void => {
        const fsp: FullScreenPokemon = stubFullScreenPokemon();

        fsp.maps.setMap(map.name, locationName);
    });
}

describe("maps", (): void => {
    const fsp: FullScreenPokemon = stubFullScreenPokemon();

    for (const i in fsp.moduleSettings.maps.library!) {
        describeMap(fsp.moduleSettings.maps.library![i]);
    }
});
