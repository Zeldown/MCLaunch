import BaseDistribution from "./BaseDistribution";
import MCLaunchDistribution from "./MCLaunchDistribution";
import MinecraftDistribution from "./MinecraftDistribution";

export default class DistributionManager {

    public distributions: BaseDistribution[] = [];

    constructor() {
        this.registerDistribution(new MinecraftDistribution());
        this.registerDistribution(new MCLaunchDistribution());
    }

    public registerDistribution(distribution: BaseDistribution): void {
        this.distributions.push(distribution);
    }

}