import DistributionClient from '../utils/DistributionClient';
import BaseDistribution from './BaseDistribution';

export default class MCLaunchDistribution extends BaseDistribution {

    parse(json: string): boolean {
        this.maintenance = false;
        this.name = 'MCLaunch';
        this.version = '1.0.0';

        this.gameArguments = [];
        this.vmArguments = [];

        this.client = new DistributionClient();
        this.client.url = "https://launcher.mojang.com/v1/objects/e80d9b3bf5085002218d4be59e668bac718abbc6/client.jar";
        this.client.md5 = "e6b7a531b95d0c172acb704d1f54d1b3";
        
        this.assets = [];
        this.libraries = [];
        this.mods = [];
        this.natives = [];
        this.others = [];

        return true;
    }

}