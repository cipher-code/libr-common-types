import PostParams from "./post-params";

export default interface AssetPostParams extends PostParams {
    extension? : string,
    tempFilename? : string
}
