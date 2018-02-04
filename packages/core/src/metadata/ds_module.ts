import { Provider } from '../di';
import { Type } from '../di/facade/type';
import { TypeDecorator, makeDecorator } from '../di/util/decorators';

/**
 * A wrapper around a module that also includes the providers.
 *
 * @stable
 */
export interface ModuleWithProviders {
    dsModule: Type<any>;
    providers?: Provider[];
}

/**
 * Type of the DsModule decorator / constructor function.
 *
 * @stable
 */
export interface DsModuleDecorator {
    /**
     * Defines an DsModule.
     */
    (obj?: DsModule): TypeDecorator;
    new(obj?: DsModule): DsModule;
}

/**
 * Type of the DsModule metadata.
 *
 * @stable
 */
export interface DsModule {
    /**
     * Defines the set of injectable objects that are available in the injector
     * of this module.
     *
     * ## Simple Example
     *
     * Here is an example of a class that can be injected:
     *
     * ```
     * class Greeter {
     *    greet(name:striDs) {
     *      return 'Hello ' + name + '!';
     *    }
     * }
     *
     * @DsModule({
     *   providers: [
     *     Greeter
     *   ]
     * })
     * class HelloWorld {
     *   greeter:Greeter;
     *
     *   constructor(greeter:Greeter) {
     *     this.greeter = greeter;
     *   }
     * }
     * ```
     */
    providers?: Provider[];

    /**
     * Specifies a list of directives/pipes that beloDs to this module.
     *
     * ### Example
     *
     * ```javascript
     * @DsModule({
     *   declarations: [DsFor]
     * })
     * class CommonModule {
     * }
     * ```
     */
    controllers?: Array<Type<any> | any[]>;

    /**
     * Specifies a list of modules whose exported directives/pipes
     * should be available to templates in this module.
     * This can also contain {@link ModuleWithProviders}.
     *
     * ### Example
     *
     * ```javascript
     * @DsModule({
     *   imports: [CommonModule]
     * })
     * class MainModule {
     * }
     * ```
     */
    imports?: Array<Type<any> | ModuleWithProviders | any[]>;

    /**
     * An opaque ID for this module, e.g. a name or a path. Used to identify modules in
     * `getModuleFactory`. If left `undefined`, the `DsModule` will not be registered with
     * `getModuleFactory`.
     */
    path?: string;
}

/**
 * DsModule decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export const DsModule: DsModuleDecorator =
    makeDecorator('DsModule', (dsModule: DsModule) => dsModule);
