export default abstract class ADistributionFile {

    public url!: string;
    public md5!: string;
    public size!: number;
    public type: FileType = FileType.OTHER;

    public abstract isValid(): boolean;

    public getPath(version: string): string {
        switch (this.type) {
            case FileType.ASSET:
                return "assets";
            case FileType.NATIVE:
                return version + "/natives";
            case FileType.LIBRARY:
                return "libraries";
            case FileType.MOD:
                return "mods";
            default:
                return "";
        }
    }

}

export enum FileType {

    ASSET,
    LIBRARY,
    MOD,
    NATIVE,
    OTHER

}