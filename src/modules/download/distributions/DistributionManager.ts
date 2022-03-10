import BaseDistribution from "./BaseDistribution";
import MinecraftDistribution from "./MinecraftDistribution";

export default class DistributionManager {

    distributions: BaseDistribution[] = [];

    constructor() {
        this.distributions.push(new MinecraftDistribution());
    }

    public registerDistribution(distribution: BaseDistribution): void {
        this.distributions.push(distribution);
    }

}

module.exports = DistributionManager;