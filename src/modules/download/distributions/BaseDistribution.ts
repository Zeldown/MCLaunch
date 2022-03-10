import ADistributionFile from "../utils/assets/ADistributionFile";
import DistributionAsset from "../utils/assets/DistributionAsset";
import DistributionLibrary from "../utils/assets/DistributionLibrary";
import DistributionMod from "../utils/assets/DistributionMod";
import DistributionNative from "../utils/assets/DistributionNative";
import DistributionClient from "../utils/DistributionClient";

export default abstract class BaseDistribution {
    
    public maintenance!: boolean;

    public name!: string;
    public version!: string;

    public gameArguments!: string[];
    public vmArguments!: string[];

    public client!: DistributionClient;

    public assets!: DistributionAsset[];
    public libraries!: DistributionLibrary[];
    public mods!: DistributionMod[];
    public natives!: DistributionNative[];
    public others!: ADistributionFile[];

    abstract parse(json: string): boolean

}