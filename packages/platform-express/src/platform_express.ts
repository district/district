import { DsModule } from "@district/core";
import * as express from 'express';

export interface PlatformExpress {
    bootstrap(module: any): void;
}

export function platformExpress(expressInstance: express.Express): PlatformExpress {
    return {
        bootstrap: (module) => { }
    };
}
