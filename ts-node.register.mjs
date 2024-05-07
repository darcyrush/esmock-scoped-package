// https://github.com/TypeStrong/ts-node/pull/2073

import { pathToFileURL } from "node:url";
import { register } from "node:module";

register("ts-node/esm", pathToFileURL("./"));
