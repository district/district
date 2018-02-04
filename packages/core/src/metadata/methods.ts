import { TypeDecorator } from "../../dist/core/src/di/util/decorators";
import { makeParamDecorator, makePropDecorator } from "../di/util/decorators";

/**
 * Type of the method decorators / constructors function.
 *
 * @stable
 */
export interface MethodDecorator {
    (path?: string): any;
    new(path?: string): any;
}

/**
 * Type of the Route decorator / constructor function.
 *
 * @stable
 */
export interface RouteDecorator {
    (method: string, path?: string): TypeDecorator;
    new(method: string, path?: string): Route;
}

/**
 * Type of the Input metadata.
 *
 * @stable
 */
export interface Route {
    /**
     * Name used when instantiating a component in the template.
     */
    path?: string;
    method?: string;
}

/**
 * Route decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export const Route: RouteDecorator = makePropDecorator('Route', (method: string, path: string = '/') => ({ method, path }));

export const All: MethodDecorator = makePropDecorator('All', (path: string = '/') => ({ method: 'all', path }));

export const Delete: MethodDecorator = makePropDecorator('Delete', (path: string = '/') => ({ method: 'delete', path }));

export const Get: MethodDecorator = makePropDecorator('Get', (path: string = '/') => ({ method: 'get', path }));

export const Head: MethodDecorator = makePropDecorator('Head', (path: string = '/') => ({ method: 'head', path }));

export const Options: MethodDecorator = makePropDecorator('Options', (path: string = '/') => ({ method: 'options', path }));

export const Patch: MethodDecorator = makePropDecorator('Patch', (path: string = '/') => ({ method: 'patch', path }));

export const Post: MethodDecorator = makePropDecorator('Post', (path: string = '/') => ({ method: 'post', path }));

export const Put: MethodDecorator = makePropDecorator('Put', (path: string = '/') => ({ method: 'put', path }));
