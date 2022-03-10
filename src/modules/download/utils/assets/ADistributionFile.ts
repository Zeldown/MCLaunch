export default abstract class ADistributionFile {

    public url!: string;
    public md5!: string;
    public size!: number;
    public type: FileType = FileType.OTHER;

    public abstract isValid(): boolean;

}

export enum FileType {

    ASSET,
    LIBRARY,
    MOD,
    NATIVE,
    OTHER

}