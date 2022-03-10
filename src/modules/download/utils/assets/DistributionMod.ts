import ADistributionFile, { FileType } from "./ADistributionFile";

export default class DistributionMod extends ADistributionFile {

    constructor() {
        super();
        this.type = FileType.MOD;
    }

    public isValid(): boolean {
        return this.url.endsWith(".jar");
    }

}