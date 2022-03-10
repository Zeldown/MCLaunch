import BaseDistribution from "./distributions/BaseDistribution";
import DistributionManager from "./distributions/DistributionManager";

export default class Downloader {
    
    public async parseDistribution(distributionUrl: string): Promise<null | BaseDistribution> {
        const distrubtionManager = new DistributionManager();

        let returnDistribution: null | BaseDistribution = null;

        distrubtionManager.distributions.forEach(distribution => {

            if(distribution.parse(distributionUrl)) {
                returnDistribution = distribution;
                return;
            }
            
        });
        
        return returnDistribution;
    }

    public async download(distribution: BaseDistribution): Promise<void> {
        console.log(`Downloading ${distribution.name} ${distribution.version}`);
    }

}