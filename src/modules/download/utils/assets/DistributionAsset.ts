import ADistributionFile, { FileType } from "./ADistributionFile";

export default class DistributionAsset extends ADistributionFile {

    constructor() {
        super();
        this.type = FileType.ASSET;
    }

    public isValid(): boolean {
        return true;
    }

}