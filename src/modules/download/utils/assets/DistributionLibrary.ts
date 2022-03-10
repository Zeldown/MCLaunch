import ADistributionFile, { FileType } from "./ADistributionFile";

export default class DistributionLibrary extends ADistributionFile {

    constructor() {
        super();
        this.type = FileType.LIBRARY;
    }

    public isValid(): boolean {
        return this.url.endsWith(".jar")
    }

}