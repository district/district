import { TypeDecorator, makeDecorator } from "../di/util/decorators";

export interface ControllerDecorator {
    /**
     * Defines an Controller.
     */
    (obj?: string): TypeDecorator;
    new(obj?: string): string;
}

export const Controller: ControllerDecorator =
    makeDecorator('Controller', (controller: string) => controller)
