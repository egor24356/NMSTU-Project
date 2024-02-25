import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {buildEnv, buildPath} from "./config/build/types/buildOptions";
import path from "path";


export default (env: buildEnv)=>{

    const paths : buildPath = {
        entry:path.resolve(__dirname,'src','index.tsx'),
        build:path.resolve(__dirname,'build'),
        html:path.resolve(__dirname,'public','index.html'),
        src:path.resolve(__dirname,'src')
    }

    const mode = env.mode || "development"
    const PORT = env.port || 3000;
    const isDev = mode === "development"

    return buildWebpackConfig({
        mode: mode,
        paths,
        port: PORT,
        isDev,
    })
}