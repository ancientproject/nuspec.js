import { parseStringPromise } from "xml2js";
import { NuSpec, NuSpecFile } from "./nuspec";
export async function parse(value): Promise<NuSpec> {
    if(!value)
        throw new Error("Argument error. [value is not defined]");
    if(typeof value != "string")
        throw new Error("Argument error. [value is not string]");
    let result = await parseStringPromise(value);
    if(!result.package)
        throw new Error("Invalid nuspec file. [Section 'package' is not defnied]");
    let pkg = result.package;
    let nuspec: NuSpec = { ...pkg };
    return nuspec;
}
export { NuSpec, NuSpecFile };