import ADistributionFile, { FileType } from "./ADistributionFile";

export default class DistributionNative extends ADistributionFile {

    constructor() {
        super();
        this.type = FileType.NATIVE;
    }

    public extract(): void {
        // Extract native jar
    }

    public isValid(): boolean {
        return this.url.endsWith(".jar");
    }

}