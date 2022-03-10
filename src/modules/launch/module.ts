import Downloader from "../download/Downloader";

module.exports.start = () => {
    const downloader = new Downloader();

    downloader.parseDistribution("").then(distribution => {
        if(distribution) {
            downloader.download(distribution);
        }
    });
}