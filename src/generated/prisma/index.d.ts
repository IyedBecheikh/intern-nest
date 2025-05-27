
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model JobTag
 * 
 */
export type JobTag = $Result.DefaultSelection<Prisma.$JobTagPayload>
/**
 * Model JobRequirement
 * 
 */
export type JobRequirement = $Result.DefaultSelection<Prisma.$JobRequirementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jobs
 * const jobs = await prisma.job.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobTag`: Exposes CRUD operations for the **JobTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobTags
    * const jobTags = await prisma.jobTag.findMany()
    * ```
    */
  get jobTag(): Prisma.JobTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobRequirement`: Exposes CRUD operations for the **JobRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobRequirements
    * const jobRequirements = await prisma.jobRequirement.findMany()
    * ```
    */
  get jobRequirement(): Prisma.JobRequirementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Job: 'Job',
    JobTag: 'JobTag',
    JobRequirement: 'JobRequirement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "job" | "jobTag" | "jobRequirement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      JobTag: {
        payload: Prisma.$JobTagPayload<ExtArgs>
        fields: Prisma.JobTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>
          }
          findFirst: {
            args: Prisma.JobTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>
          }
          findMany: {
            args: Prisma.JobTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>[]
          }
          create: {
            args: Prisma.JobTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>
          }
          createMany: {
            args: Prisma.JobTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>[]
          }
          delete: {
            args: Prisma.JobTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>
          }
          update: {
            args: Prisma.JobTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>
          }
          deleteMany: {
            args: Prisma.JobTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>[]
          }
          upsert: {
            args: Prisma.JobTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTagPayload>
          }
          aggregate: {
            args: Prisma.JobTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobTag>
          }
          groupBy: {
            args: Prisma.JobTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobTagCountArgs<ExtArgs>
            result: $Utils.Optional<JobTagCountAggregateOutputType> | number
          }
        }
      }
      JobRequirement: {
        payload: Prisma.$JobRequirementPayload<ExtArgs>
        fields: Prisma.JobRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>
          }
          findFirst: {
            args: Prisma.JobRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>
          }
          findMany: {
            args: Prisma.JobRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>[]
          }
          create: {
            args: Prisma.JobRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>
          }
          createMany: {
            args: Prisma.JobRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>[]
          }
          delete: {
            args: Prisma.JobRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>
          }
          update: {
            args: Prisma.JobRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>
          }
          deleteMany: {
            args: Prisma.JobRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>[]
          }
          upsert: {
            args: Prisma.JobRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRequirementPayload>
          }
          aggregate: {
            args: Prisma.JobRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobRequirement>
          }
          groupBy: {
            args: Prisma.JobRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<JobRequirementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    job?: JobOmit
    jobTag?: JobTagOmit
    jobRequirement?: JobRequirementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    tags: number
    requirements: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | JobCountOutputTypeCountTagsArgs
    requirements?: boolean | JobCountOutputTypeCountRequirementsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTagWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRequirementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    company: string | null
    logoUrl: string | null
    location: string | null
    type: string | null
    postedAt: Date | null
    experience: string | null
    salary: string | null
    isRemote: boolean | null
    source: string | null
    description: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    company: string | null
    logoUrl: string | null
    location: string | null
    type: string | null
    postedAt: Date | null
    experience: string | null
    salary: string | null
    isRemote: boolean | null
    source: string | null
    description: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    company: number
    logoUrl: number
    location: number
    type: number
    postedAt: number
    experience: number
    salary: number
    isRemote: number
    source: number
    description: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    company?: true
    logoUrl?: true
    location?: true
    type?: true
    postedAt?: true
    experience?: true
    salary?: true
    isRemote?: true
    source?: true
    description?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    company?: true
    logoUrl?: true
    location?: true
    type?: true
    postedAt?: true
    experience?: true
    salary?: true
    isRemote?: true
    source?: true
    description?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    company?: true
    logoUrl?: true
    location?: true
    type?: true
    postedAt?: true
    experience?: true
    salary?: true
    isRemote?: true
    source?: true
    description?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    slug: string
    title: string
    company: string
    logoUrl: string | null
    location: string
    type: string
    postedAt: Date
    experience: string
    salary: string | null
    isRemote: boolean | null
    source: string | null
    description: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    company?: boolean
    logoUrl?: boolean
    location?: boolean
    type?: boolean
    postedAt?: boolean
    experience?: boolean
    salary?: boolean
    isRemote?: boolean
    source?: boolean
    description?: boolean
    tags?: boolean | Job$tagsArgs<ExtArgs>
    requirements?: boolean | Job$requirementsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    company?: boolean
    logoUrl?: boolean
    location?: boolean
    type?: boolean
    postedAt?: boolean
    experience?: boolean
    salary?: boolean
    isRemote?: boolean
    source?: boolean
    description?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    company?: boolean
    logoUrl?: boolean
    location?: boolean
    type?: boolean
    postedAt?: boolean
    experience?: boolean
    salary?: boolean
    isRemote?: boolean
    source?: boolean
    description?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    company?: boolean
    logoUrl?: boolean
    location?: boolean
    type?: boolean
    postedAt?: boolean
    experience?: boolean
    salary?: boolean
    isRemote?: boolean
    source?: boolean
    description?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "company" | "logoUrl" | "location" | "type" | "postedAt" | "experience" | "salary" | "isRemote" | "source" | "description", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Job$tagsArgs<ExtArgs>
    requirements?: boolean | Job$requirementsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      tags: Prisma.$JobTagPayload<ExtArgs>[]
      requirements: Prisma.$JobRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      company: string
      logoUrl: string | null
      location: string
      type: string
      postedAt: Date
      experience: string
      salary: string | null
      isRemote: boolean | null
      source: string | null
      description: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends Job$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Job$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requirements<T extends Job$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, Job$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly slug: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly company: FieldRef<"Job", 'String'>
    readonly logoUrl: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly type: FieldRef<"Job", 'String'>
    readonly postedAt: FieldRef<"Job", 'DateTime'>
    readonly experience: FieldRef<"Job", 'String'>
    readonly salary: FieldRef<"Job", 'String'>
    readonly isRemote: FieldRef<"Job", 'Boolean'>
    readonly source: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.tags
   */
  export type Job$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    where?: JobTagWhereInput
    orderBy?: JobTagOrderByWithRelationInput | JobTagOrderByWithRelationInput[]
    cursor?: JobTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobTagScalarFieldEnum | JobTagScalarFieldEnum[]
  }

  /**
   * Job.requirements
   */
  export type Job$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    where?: JobRequirementWhereInput
    orderBy?: JobRequirementOrderByWithRelationInput | JobRequirementOrderByWithRelationInput[]
    cursor?: JobRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobRequirementScalarFieldEnum | JobRequirementScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model JobTag
   */

  export type AggregateJobTag = {
    _count: JobTagCountAggregateOutputType | null
    _avg: JobTagAvgAggregateOutputType | null
    _sum: JobTagSumAggregateOutputType | null
    _min: JobTagMinAggregateOutputType | null
    _max: JobTagMaxAggregateOutputType | null
  }

  export type JobTagAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type JobTagSumAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type JobTagMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    tag: string | null
  }

  export type JobTagMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    tag: string | null
  }

  export type JobTagCountAggregateOutputType = {
    id: number
    jobId: number
    tag: number
    _all: number
  }


  export type JobTagAvgAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type JobTagSumAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type JobTagMinAggregateInputType = {
    id?: true
    jobId?: true
    tag?: true
  }

  export type JobTagMaxAggregateInputType = {
    id?: true
    jobId?: true
    tag?: true
  }

  export type JobTagCountAggregateInputType = {
    id?: true
    jobId?: true
    tag?: true
    _all?: true
  }

  export type JobTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTag to aggregate.
     */
    where?: JobTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTags to fetch.
     */
    orderBy?: JobTagOrderByWithRelationInput | JobTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobTags
    **/
    _count?: true | JobTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobTagMaxAggregateInputType
  }

  export type GetJobTagAggregateType<T extends JobTagAggregateArgs> = {
        [P in keyof T & keyof AggregateJobTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobTag[P]>
      : GetScalarType<T[P], AggregateJobTag[P]>
  }




  export type JobTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTagWhereInput
    orderBy?: JobTagOrderByWithAggregationInput | JobTagOrderByWithAggregationInput[]
    by: JobTagScalarFieldEnum[] | JobTagScalarFieldEnum
    having?: JobTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobTagCountAggregateInputType | true
    _avg?: JobTagAvgAggregateInputType
    _sum?: JobTagSumAggregateInputType
    _min?: JobTagMinAggregateInputType
    _max?: JobTagMaxAggregateInputType
  }

  export type JobTagGroupByOutputType = {
    id: number
    jobId: number
    tag: string
    _count: JobTagCountAggregateOutputType | null
    _avg: JobTagAvgAggregateOutputType | null
    _sum: JobTagSumAggregateOutputType | null
    _min: JobTagMinAggregateOutputType | null
    _max: JobTagMaxAggregateOutputType | null
  }

  type GetJobTagGroupByPayload<T extends JobTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobTagGroupByOutputType[P]>
            : GetScalarType<T[P], JobTagGroupByOutputType[P]>
        }
      >
    >


  export type JobTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    tag?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTag"]>

  export type JobTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    tag?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTag"]>

  export type JobTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    tag?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTag"]>

  export type JobTagSelectScalar = {
    id?: boolean
    jobId?: boolean
    tag?: boolean
  }

  export type JobTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "tag", ExtArgs["result"]["jobTag"]>
  export type JobTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type JobTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type JobTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $JobTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobTag"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      tag: string
    }, ExtArgs["result"]["jobTag"]>
    composites: {}
  }

  type JobTagGetPayload<S extends boolean | null | undefined | JobTagDefaultArgs> = $Result.GetResult<Prisma.$JobTagPayload, S>

  type JobTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobTagCountAggregateInputType | true
    }

  export interface JobTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobTag'], meta: { name: 'JobTag' } }
    /**
     * Find zero or one JobTag that matches the filter.
     * @param {JobTagFindUniqueArgs} args - Arguments to find a JobTag
     * @example
     * // Get one JobTag
     * const jobTag = await prisma.jobTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobTagFindUniqueArgs>(args: SelectSubset<T, JobTagFindUniqueArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobTagFindUniqueOrThrowArgs} args - Arguments to find a JobTag
     * @example
     * // Get one JobTag
     * const jobTag = await prisma.jobTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobTagFindUniqueOrThrowArgs>(args: SelectSubset<T, JobTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagFindFirstArgs} args - Arguments to find a JobTag
     * @example
     * // Get one JobTag
     * const jobTag = await prisma.jobTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobTagFindFirstArgs>(args?: SelectSubset<T, JobTagFindFirstArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagFindFirstOrThrowArgs} args - Arguments to find a JobTag
     * @example
     * // Get one JobTag
     * const jobTag = await prisma.jobTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobTagFindFirstOrThrowArgs>(args?: SelectSubset<T, JobTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobTags
     * const jobTags = await prisma.jobTag.findMany()
     * 
     * // Get first 10 JobTags
     * const jobTags = await prisma.jobTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobTagWithIdOnly = await prisma.jobTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobTagFindManyArgs>(args?: SelectSubset<T, JobTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobTag.
     * @param {JobTagCreateArgs} args - Arguments to create a JobTag.
     * @example
     * // Create one JobTag
     * const JobTag = await prisma.jobTag.create({
     *   data: {
     *     // ... data to create a JobTag
     *   }
     * })
     * 
     */
    create<T extends JobTagCreateArgs>(args: SelectSubset<T, JobTagCreateArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobTags.
     * @param {JobTagCreateManyArgs} args - Arguments to create many JobTags.
     * @example
     * // Create many JobTags
     * const jobTag = await prisma.jobTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobTagCreateManyArgs>(args?: SelectSubset<T, JobTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobTags and returns the data saved in the database.
     * @param {JobTagCreateManyAndReturnArgs} args - Arguments to create many JobTags.
     * @example
     * // Create many JobTags
     * const jobTag = await prisma.jobTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobTags and only return the `id`
     * const jobTagWithIdOnly = await prisma.jobTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobTagCreateManyAndReturnArgs>(args?: SelectSubset<T, JobTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobTag.
     * @param {JobTagDeleteArgs} args - Arguments to delete one JobTag.
     * @example
     * // Delete one JobTag
     * const JobTag = await prisma.jobTag.delete({
     *   where: {
     *     // ... filter to delete one JobTag
     *   }
     * })
     * 
     */
    delete<T extends JobTagDeleteArgs>(args: SelectSubset<T, JobTagDeleteArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobTag.
     * @param {JobTagUpdateArgs} args - Arguments to update one JobTag.
     * @example
     * // Update one JobTag
     * const jobTag = await prisma.jobTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobTagUpdateArgs>(args: SelectSubset<T, JobTagUpdateArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobTags.
     * @param {JobTagDeleteManyArgs} args - Arguments to filter JobTags to delete.
     * @example
     * // Delete a few JobTags
     * const { count } = await prisma.jobTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobTagDeleteManyArgs>(args?: SelectSubset<T, JobTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobTags
     * const jobTag = await prisma.jobTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobTagUpdateManyArgs>(args: SelectSubset<T, JobTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTags and returns the data updated in the database.
     * @param {JobTagUpdateManyAndReturnArgs} args - Arguments to update many JobTags.
     * @example
     * // Update many JobTags
     * const jobTag = await prisma.jobTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobTags and only return the `id`
     * const jobTagWithIdOnly = await prisma.jobTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobTagUpdateManyAndReturnArgs>(args: SelectSubset<T, JobTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobTag.
     * @param {JobTagUpsertArgs} args - Arguments to update or create a JobTag.
     * @example
     * // Update or create a JobTag
     * const jobTag = await prisma.jobTag.upsert({
     *   create: {
     *     // ... data to create a JobTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobTag we want to update
     *   }
     * })
     */
    upsert<T extends JobTagUpsertArgs>(args: SelectSubset<T, JobTagUpsertArgs<ExtArgs>>): Prisma__JobTagClient<$Result.GetResult<Prisma.$JobTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagCountArgs} args - Arguments to filter JobTags to count.
     * @example
     * // Count the number of JobTags
     * const count = await prisma.jobTag.count({
     *   where: {
     *     // ... the filter for the JobTags we want to count
     *   }
     * })
    **/
    count<T extends JobTagCountArgs>(
      args?: Subset<T, JobTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobTagAggregateArgs>(args: Subset<T, JobTagAggregateArgs>): Prisma.PrismaPromise<GetJobTagAggregateType<T>>

    /**
     * Group by JobTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobTagGroupByArgs['orderBy'] }
        : { orderBy?: JobTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobTag model
   */
  readonly fields: JobTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobTag model
   */
  interface JobTagFieldRefs {
    readonly id: FieldRef<"JobTag", 'Int'>
    readonly jobId: FieldRef<"JobTag", 'Int'>
    readonly tag: FieldRef<"JobTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobTag findUnique
   */
  export type JobTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * Filter, which JobTag to fetch.
     */
    where: JobTagWhereUniqueInput
  }

  /**
   * JobTag findUniqueOrThrow
   */
  export type JobTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * Filter, which JobTag to fetch.
     */
    where: JobTagWhereUniqueInput
  }

  /**
   * JobTag findFirst
   */
  export type JobTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * Filter, which JobTag to fetch.
     */
    where?: JobTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTags to fetch.
     */
    orderBy?: JobTagOrderByWithRelationInput | JobTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTags.
     */
    cursor?: JobTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTags.
     */
    distinct?: JobTagScalarFieldEnum | JobTagScalarFieldEnum[]
  }

  /**
   * JobTag findFirstOrThrow
   */
  export type JobTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * Filter, which JobTag to fetch.
     */
    where?: JobTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTags to fetch.
     */
    orderBy?: JobTagOrderByWithRelationInput | JobTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTags.
     */
    cursor?: JobTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTags.
     */
    distinct?: JobTagScalarFieldEnum | JobTagScalarFieldEnum[]
  }

  /**
   * JobTag findMany
   */
  export type JobTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * Filter, which JobTags to fetch.
     */
    where?: JobTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTags to fetch.
     */
    orderBy?: JobTagOrderByWithRelationInput | JobTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobTags.
     */
    cursor?: JobTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTags.
     */
    skip?: number
    distinct?: JobTagScalarFieldEnum | JobTagScalarFieldEnum[]
  }

  /**
   * JobTag create
   */
  export type JobTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * The data needed to create a JobTag.
     */
    data: XOR<JobTagCreateInput, JobTagUncheckedCreateInput>
  }

  /**
   * JobTag createMany
   */
  export type JobTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobTags.
     */
    data: JobTagCreateManyInput | JobTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobTag createManyAndReturn
   */
  export type JobTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * The data used to create many JobTags.
     */
    data: JobTagCreateManyInput | JobTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobTag update
   */
  export type JobTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * The data needed to update a JobTag.
     */
    data: XOR<JobTagUpdateInput, JobTagUncheckedUpdateInput>
    /**
     * Choose, which JobTag to update.
     */
    where: JobTagWhereUniqueInput
  }

  /**
   * JobTag updateMany
   */
  export type JobTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobTags.
     */
    data: XOR<JobTagUpdateManyMutationInput, JobTagUncheckedUpdateManyInput>
    /**
     * Filter which JobTags to update
     */
    where?: JobTagWhereInput
    /**
     * Limit how many JobTags to update.
     */
    limit?: number
  }

  /**
   * JobTag updateManyAndReturn
   */
  export type JobTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * The data used to update JobTags.
     */
    data: XOR<JobTagUpdateManyMutationInput, JobTagUncheckedUpdateManyInput>
    /**
     * Filter which JobTags to update
     */
    where?: JobTagWhereInput
    /**
     * Limit how many JobTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobTag upsert
   */
  export type JobTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * The filter to search for the JobTag to update in case it exists.
     */
    where: JobTagWhereUniqueInput
    /**
     * In case the JobTag found by the `where` argument doesn't exist, create a new JobTag with this data.
     */
    create: XOR<JobTagCreateInput, JobTagUncheckedCreateInput>
    /**
     * In case the JobTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobTagUpdateInput, JobTagUncheckedUpdateInput>
  }

  /**
   * JobTag delete
   */
  export type JobTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
    /**
     * Filter which JobTag to delete.
     */
    where: JobTagWhereUniqueInput
  }

  /**
   * JobTag deleteMany
   */
  export type JobTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTags to delete
     */
    where?: JobTagWhereInput
    /**
     * Limit how many JobTags to delete.
     */
    limit?: number
  }

  /**
   * JobTag without action
   */
  export type JobTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTag
     */
    select?: JobTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTag
     */
    omit?: JobTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTagInclude<ExtArgs> | null
  }


  /**
   * Model JobRequirement
   */

  export type AggregateJobRequirement = {
    _count: JobRequirementCountAggregateOutputType | null
    _avg: JobRequirementAvgAggregateOutputType | null
    _sum: JobRequirementSumAggregateOutputType | null
    _min: JobRequirementMinAggregateOutputType | null
    _max: JobRequirementMaxAggregateOutputType | null
  }

  export type JobRequirementAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type JobRequirementSumAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type JobRequirementMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    requirement: string | null
  }

  export type JobRequirementMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    requirement: string | null
  }

  export type JobRequirementCountAggregateOutputType = {
    id: number
    jobId: number
    requirement: number
    _all: number
  }


  export type JobRequirementAvgAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type JobRequirementSumAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type JobRequirementMinAggregateInputType = {
    id?: true
    jobId?: true
    requirement?: true
  }

  export type JobRequirementMaxAggregateInputType = {
    id?: true
    jobId?: true
    requirement?: true
  }

  export type JobRequirementCountAggregateInputType = {
    id?: true
    jobId?: true
    requirement?: true
    _all?: true
  }

  export type JobRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRequirement to aggregate.
     */
    where?: JobRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRequirements to fetch.
     */
    orderBy?: JobRequirementOrderByWithRelationInput | JobRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobRequirements
    **/
    _count?: true | JobRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobRequirementMaxAggregateInputType
  }

  export type GetJobRequirementAggregateType<T extends JobRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateJobRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobRequirement[P]>
      : GetScalarType<T[P], AggregateJobRequirement[P]>
  }




  export type JobRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRequirementWhereInput
    orderBy?: JobRequirementOrderByWithAggregationInput | JobRequirementOrderByWithAggregationInput[]
    by: JobRequirementScalarFieldEnum[] | JobRequirementScalarFieldEnum
    having?: JobRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobRequirementCountAggregateInputType | true
    _avg?: JobRequirementAvgAggregateInputType
    _sum?: JobRequirementSumAggregateInputType
    _min?: JobRequirementMinAggregateInputType
    _max?: JobRequirementMaxAggregateInputType
  }

  export type JobRequirementGroupByOutputType = {
    id: number
    jobId: number
    requirement: string
    _count: JobRequirementCountAggregateOutputType | null
    _avg: JobRequirementAvgAggregateOutputType | null
    _sum: JobRequirementSumAggregateOutputType | null
    _min: JobRequirementMinAggregateOutputType | null
    _max: JobRequirementMaxAggregateOutputType | null
  }

  type GetJobRequirementGroupByPayload<T extends JobRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], JobRequirementGroupByOutputType[P]>
        }
      >
    >


  export type JobRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    requirement?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobRequirement"]>

  export type JobRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    requirement?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobRequirement"]>

  export type JobRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    requirement?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobRequirement"]>

  export type JobRequirementSelectScalar = {
    id?: boolean
    jobId?: boolean
    requirement?: boolean
  }

  export type JobRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "requirement", ExtArgs["result"]["jobRequirement"]>
  export type JobRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type JobRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type JobRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $JobRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobRequirement"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      requirement: string
    }, ExtArgs["result"]["jobRequirement"]>
    composites: {}
  }

  type JobRequirementGetPayload<S extends boolean | null | undefined | JobRequirementDefaultArgs> = $Result.GetResult<Prisma.$JobRequirementPayload, S>

  type JobRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobRequirementCountAggregateInputType | true
    }

  export interface JobRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobRequirement'], meta: { name: 'JobRequirement' } }
    /**
     * Find zero or one JobRequirement that matches the filter.
     * @param {JobRequirementFindUniqueArgs} args - Arguments to find a JobRequirement
     * @example
     * // Get one JobRequirement
     * const jobRequirement = await prisma.jobRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobRequirementFindUniqueArgs>(args: SelectSubset<T, JobRequirementFindUniqueArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobRequirementFindUniqueOrThrowArgs} args - Arguments to find a JobRequirement
     * @example
     * // Get one JobRequirement
     * const jobRequirement = await prisma.jobRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, JobRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementFindFirstArgs} args - Arguments to find a JobRequirement
     * @example
     * // Get one JobRequirement
     * const jobRequirement = await prisma.jobRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobRequirementFindFirstArgs>(args?: SelectSubset<T, JobRequirementFindFirstArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementFindFirstOrThrowArgs} args - Arguments to find a JobRequirement
     * @example
     * // Get one JobRequirement
     * const jobRequirement = await prisma.jobRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, JobRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobRequirements
     * const jobRequirements = await prisma.jobRequirement.findMany()
     * 
     * // Get first 10 JobRequirements
     * const jobRequirements = await prisma.jobRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobRequirementWithIdOnly = await prisma.jobRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobRequirementFindManyArgs>(args?: SelectSubset<T, JobRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobRequirement.
     * @param {JobRequirementCreateArgs} args - Arguments to create a JobRequirement.
     * @example
     * // Create one JobRequirement
     * const JobRequirement = await prisma.jobRequirement.create({
     *   data: {
     *     // ... data to create a JobRequirement
     *   }
     * })
     * 
     */
    create<T extends JobRequirementCreateArgs>(args: SelectSubset<T, JobRequirementCreateArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobRequirements.
     * @param {JobRequirementCreateManyArgs} args - Arguments to create many JobRequirements.
     * @example
     * // Create many JobRequirements
     * const jobRequirement = await prisma.jobRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobRequirementCreateManyArgs>(args?: SelectSubset<T, JobRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobRequirements and returns the data saved in the database.
     * @param {JobRequirementCreateManyAndReturnArgs} args - Arguments to create many JobRequirements.
     * @example
     * // Create many JobRequirements
     * const jobRequirement = await prisma.jobRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobRequirements and only return the `id`
     * const jobRequirementWithIdOnly = await prisma.jobRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, JobRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobRequirement.
     * @param {JobRequirementDeleteArgs} args - Arguments to delete one JobRequirement.
     * @example
     * // Delete one JobRequirement
     * const JobRequirement = await prisma.jobRequirement.delete({
     *   where: {
     *     // ... filter to delete one JobRequirement
     *   }
     * })
     * 
     */
    delete<T extends JobRequirementDeleteArgs>(args: SelectSubset<T, JobRequirementDeleteArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobRequirement.
     * @param {JobRequirementUpdateArgs} args - Arguments to update one JobRequirement.
     * @example
     * // Update one JobRequirement
     * const jobRequirement = await prisma.jobRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobRequirementUpdateArgs>(args: SelectSubset<T, JobRequirementUpdateArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobRequirements.
     * @param {JobRequirementDeleteManyArgs} args - Arguments to filter JobRequirements to delete.
     * @example
     * // Delete a few JobRequirements
     * const { count } = await prisma.jobRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobRequirementDeleteManyArgs>(args?: SelectSubset<T, JobRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobRequirements
     * const jobRequirement = await prisma.jobRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobRequirementUpdateManyArgs>(args: SelectSubset<T, JobRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobRequirements and returns the data updated in the database.
     * @param {JobRequirementUpdateManyAndReturnArgs} args - Arguments to update many JobRequirements.
     * @example
     * // Update many JobRequirements
     * const jobRequirement = await prisma.jobRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobRequirements and only return the `id`
     * const jobRequirementWithIdOnly = await prisma.jobRequirement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, JobRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobRequirement.
     * @param {JobRequirementUpsertArgs} args - Arguments to update or create a JobRequirement.
     * @example
     * // Update or create a JobRequirement
     * const jobRequirement = await prisma.jobRequirement.upsert({
     *   create: {
     *     // ... data to create a JobRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobRequirement we want to update
     *   }
     * })
     */
    upsert<T extends JobRequirementUpsertArgs>(args: SelectSubset<T, JobRequirementUpsertArgs<ExtArgs>>): Prisma__JobRequirementClient<$Result.GetResult<Prisma.$JobRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementCountArgs} args - Arguments to filter JobRequirements to count.
     * @example
     * // Count the number of JobRequirements
     * const count = await prisma.jobRequirement.count({
     *   where: {
     *     // ... the filter for the JobRequirements we want to count
     *   }
     * })
    **/
    count<T extends JobRequirementCountArgs>(
      args?: Subset<T, JobRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobRequirementAggregateArgs>(args: Subset<T, JobRequirementAggregateArgs>): Prisma.PrismaPromise<GetJobRequirementAggregateType<T>>

    /**
     * Group by JobRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobRequirementGroupByArgs['orderBy'] }
        : { orderBy?: JobRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobRequirement model
   */
  readonly fields: JobRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobRequirement model
   */
  interface JobRequirementFieldRefs {
    readonly id: FieldRef<"JobRequirement", 'Int'>
    readonly jobId: FieldRef<"JobRequirement", 'Int'>
    readonly requirement: FieldRef<"JobRequirement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobRequirement findUnique
   */
  export type JobRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRequirement to fetch.
     */
    where: JobRequirementWhereUniqueInput
  }

  /**
   * JobRequirement findUniqueOrThrow
   */
  export type JobRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRequirement to fetch.
     */
    where: JobRequirementWhereUniqueInput
  }

  /**
   * JobRequirement findFirst
   */
  export type JobRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRequirement to fetch.
     */
    where?: JobRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRequirements to fetch.
     */
    orderBy?: JobRequirementOrderByWithRelationInput | JobRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRequirements.
     */
    cursor?: JobRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRequirements.
     */
    distinct?: JobRequirementScalarFieldEnum | JobRequirementScalarFieldEnum[]
  }

  /**
   * JobRequirement findFirstOrThrow
   */
  export type JobRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRequirement to fetch.
     */
    where?: JobRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRequirements to fetch.
     */
    orderBy?: JobRequirementOrderByWithRelationInput | JobRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRequirements.
     */
    cursor?: JobRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRequirements.
     */
    distinct?: JobRequirementScalarFieldEnum | JobRequirementScalarFieldEnum[]
  }

  /**
   * JobRequirement findMany
   */
  export type JobRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRequirements to fetch.
     */
    where?: JobRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRequirements to fetch.
     */
    orderBy?: JobRequirementOrderByWithRelationInput | JobRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobRequirements.
     */
    cursor?: JobRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRequirements.
     */
    skip?: number
    distinct?: JobRequirementScalarFieldEnum | JobRequirementScalarFieldEnum[]
  }

  /**
   * JobRequirement create
   */
  export type JobRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a JobRequirement.
     */
    data: XOR<JobRequirementCreateInput, JobRequirementUncheckedCreateInput>
  }

  /**
   * JobRequirement createMany
   */
  export type JobRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobRequirements.
     */
    data: JobRequirementCreateManyInput | JobRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobRequirement createManyAndReturn
   */
  export type JobRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many JobRequirements.
     */
    data: JobRequirementCreateManyInput | JobRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobRequirement update
   */
  export type JobRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a JobRequirement.
     */
    data: XOR<JobRequirementUpdateInput, JobRequirementUncheckedUpdateInput>
    /**
     * Choose, which JobRequirement to update.
     */
    where: JobRequirementWhereUniqueInput
  }

  /**
   * JobRequirement updateMany
   */
  export type JobRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobRequirements.
     */
    data: XOR<JobRequirementUpdateManyMutationInput, JobRequirementUncheckedUpdateManyInput>
    /**
     * Filter which JobRequirements to update
     */
    where?: JobRequirementWhereInput
    /**
     * Limit how many JobRequirements to update.
     */
    limit?: number
  }

  /**
   * JobRequirement updateManyAndReturn
   */
  export type JobRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * The data used to update JobRequirements.
     */
    data: XOR<JobRequirementUpdateManyMutationInput, JobRequirementUncheckedUpdateManyInput>
    /**
     * Filter which JobRequirements to update
     */
    where?: JobRequirementWhereInput
    /**
     * Limit how many JobRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobRequirement upsert
   */
  export type JobRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the JobRequirement to update in case it exists.
     */
    where: JobRequirementWhereUniqueInput
    /**
     * In case the JobRequirement found by the `where` argument doesn't exist, create a new JobRequirement with this data.
     */
    create: XOR<JobRequirementCreateInput, JobRequirementUncheckedCreateInput>
    /**
     * In case the JobRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobRequirementUpdateInput, JobRequirementUncheckedUpdateInput>
  }

  /**
   * JobRequirement delete
   */
  export type JobRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
    /**
     * Filter which JobRequirement to delete.
     */
    where: JobRequirementWhereUniqueInput
  }

  /**
   * JobRequirement deleteMany
   */
  export type JobRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRequirements to delete
     */
    where?: JobRequirementWhereInput
    /**
     * Limit how many JobRequirements to delete.
     */
    limit?: number
  }

  /**
   * JobRequirement without action
   */
  export type JobRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRequirement
     */
    select?: JobRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRequirement
     */
    omit?: JobRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRequirementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JobScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    company: 'company',
    logoUrl: 'logoUrl',
    location: 'location',
    type: 'type',
    postedAt: 'postedAt',
    experience: 'experience',
    salary: 'salary',
    isRemote: 'isRemote',
    source: 'source',
    description: 'description'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobTagScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    tag: 'tag'
  };

  export type JobTagScalarFieldEnum = (typeof JobTagScalarFieldEnum)[keyof typeof JobTagScalarFieldEnum]


  export const JobRequirementScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    requirement: 'requirement'
  };

  export type JobRequirementScalarFieldEnum = (typeof JobRequirementScalarFieldEnum)[keyof typeof JobRequirementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    slug?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    logoUrl?: StringNullableFilter<"Job"> | string | null
    location?: StringFilter<"Job"> | string
    type?: StringFilter<"Job"> | string
    postedAt?: DateTimeFilter<"Job"> | Date | string
    experience?: StringFilter<"Job"> | string
    salary?: StringNullableFilter<"Job"> | string | null
    isRemote?: BoolNullableFilter<"Job"> | boolean | null
    source?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    tags?: JobTagListRelationFilter
    requirements?: JobRequirementListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    type?: SortOrder
    postedAt?: SortOrder
    experience?: SortOrder
    salary?: SortOrderInput | SortOrder
    isRemote?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    description?: SortOrder
    tags?: JobTagOrderByRelationAggregateInput
    requirements?: JobRequirementOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    logoUrl?: StringNullableFilter<"Job"> | string | null
    location?: StringFilter<"Job"> | string
    type?: StringFilter<"Job"> | string
    postedAt?: DateTimeFilter<"Job"> | Date | string
    experience?: StringFilter<"Job"> | string
    salary?: StringNullableFilter<"Job"> | string | null
    isRemote?: BoolNullableFilter<"Job"> | boolean | null
    source?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    tags?: JobTagListRelationFilter
    requirements?: JobRequirementListRelationFilter
  }, "id" | "slug">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    type?: SortOrder
    postedAt?: SortOrder
    experience?: SortOrder
    salary?: SortOrderInput | SortOrder
    isRemote?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    description?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    slug?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    company?: StringWithAggregatesFilter<"Job"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Job"> | string | null
    location?: StringWithAggregatesFilter<"Job"> | string
    type?: StringWithAggregatesFilter<"Job"> | string
    postedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    experience?: StringWithAggregatesFilter<"Job"> | string
    salary?: StringNullableWithAggregatesFilter<"Job"> | string | null
    isRemote?: BoolNullableWithAggregatesFilter<"Job"> | boolean | null
    source?: StringNullableWithAggregatesFilter<"Job"> | string | null
    description?: StringWithAggregatesFilter<"Job"> | string
  }

  export type JobTagWhereInput = {
    AND?: JobTagWhereInput | JobTagWhereInput[]
    OR?: JobTagWhereInput[]
    NOT?: JobTagWhereInput | JobTagWhereInput[]
    id?: IntFilter<"JobTag"> | number
    jobId?: IntFilter<"JobTag"> | number
    tag?: StringFilter<"JobTag"> | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type JobTagOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    tag?: SortOrder
    job?: JobOrderByWithRelationInput
  }

  export type JobTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobTagWhereInput | JobTagWhereInput[]
    OR?: JobTagWhereInput[]
    NOT?: JobTagWhereInput | JobTagWhereInput[]
    jobId?: IntFilter<"JobTag"> | number
    tag?: StringFilter<"JobTag"> | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id">

  export type JobTagOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    tag?: SortOrder
    _count?: JobTagCountOrderByAggregateInput
    _avg?: JobTagAvgOrderByAggregateInput
    _max?: JobTagMaxOrderByAggregateInput
    _min?: JobTagMinOrderByAggregateInput
    _sum?: JobTagSumOrderByAggregateInput
  }

  export type JobTagScalarWhereWithAggregatesInput = {
    AND?: JobTagScalarWhereWithAggregatesInput | JobTagScalarWhereWithAggregatesInput[]
    OR?: JobTagScalarWhereWithAggregatesInput[]
    NOT?: JobTagScalarWhereWithAggregatesInput | JobTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobTag"> | number
    jobId?: IntWithAggregatesFilter<"JobTag"> | number
    tag?: StringWithAggregatesFilter<"JobTag"> | string
  }

  export type JobRequirementWhereInput = {
    AND?: JobRequirementWhereInput | JobRequirementWhereInput[]
    OR?: JobRequirementWhereInput[]
    NOT?: JobRequirementWhereInput | JobRequirementWhereInput[]
    id?: IntFilter<"JobRequirement"> | number
    jobId?: IntFilter<"JobRequirement"> | number
    requirement?: StringFilter<"JobRequirement"> | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type JobRequirementOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    requirement?: SortOrder
    job?: JobOrderByWithRelationInput
  }

  export type JobRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobRequirementWhereInput | JobRequirementWhereInput[]
    OR?: JobRequirementWhereInput[]
    NOT?: JobRequirementWhereInput | JobRequirementWhereInput[]
    jobId?: IntFilter<"JobRequirement"> | number
    requirement?: StringFilter<"JobRequirement"> | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id">

  export type JobRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    requirement?: SortOrder
    _count?: JobRequirementCountOrderByAggregateInput
    _avg?: JobRequirementAvgOrderByAggregateInput
    _max?: JobRequirementMaxOrderByAggregateInput
    _min?: JobRequirementMinOrderByAggregateInput
    _sum?: JobRequirementSumOrderByAggregateInput
  }

  export type JobRequirementScalarWhereWithAggregatesInput = {
    AND?: JobRequirementScalarWhereWithAggregatesInput | JobRequirementScalarWhereWithAggregatesInput[]
    OR?: JobRequirementScalarWhereWithAggregatesInput[]
    NOT?: JobRequirementScalarWhereWithAggregatesInput | JobRequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobRequirement"> | number
    jobId?: IntWithAggregatesFilter<"JobRequirement"> | number
    requirement?: StringWithAggregatesFilter<"JobRequirement"> | string
  }

  export type JobCreateInput = {
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
    tags?: JobTagCreateNestedManyWithoutJobInput
    requirements?: JobRequirementCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
    tags?: JobTagUncheckedCreateNestedManyWithoutJobInput
    requirements?: JobRequirementUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tags?: JobTagUpdateManyWithoutJobNestedInput
    requirements?: JobRequirementUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tags?: JobTagUncheckedUpdateManyWithoutJobNestedInput
    requirements?: JobRequirementUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
  }

  export type JobUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type JobTagCreateInput = {
    tag: string
    job: JobCreateNestedOneWithoutTagsInput
  }

  export type JobTagUncheckedCreateInput = {
    id?: number
    jobId: number
    tag: string
  }

  export type JobTagUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutTagsNestedInput
  }

  export type JobTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type JobTagCreateManyInput = {
    id?: number
    jobId: number
    tag: string
  }

  export type JobTagUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type JobTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type JobRequirementCreateInput = {
    requirement: string
    job: JobCreateNestedOneWithoutRequirementsInput
  }

  export type JobRequirementUncheckedCreateInput = {
    id?: number
    jobId: number
    requirement: string
  }

  export type JobRequirementUpdateInput = {
    requirement?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutRequirementsNestedInput
  }

  export type JobRequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    requirement?: StringFieldUpdateOperationsInput | string
  }

  export type JobRequirementCreateManyInput = {
    id?: number
    jobId: number
    requirement: string
  }

  export type JobRequirementUpdateManyMutationInput = {
    requirement?: StringFieldUpdateOperationsInput | string
  }

  export type JobRequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    requirement?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type JobTagListRelationFilter = {
    every?: JobTagWhereInput
    some?: JobTagWhereInput
    none?: JobTagWhereInput
  }

  export type JobRequirementListRelationFilter = {
    every?: JobRequirementWhereInput
    some?: JobRequirementWhereInput
    none?: JobRequirementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    type?: SortOrder
    postedAt?: SortOrder
    experience?: SortOrder
    salary?: SortOrder
    isRemote?: SortOrder
    source?: SortOrder
    description?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    type?: SortOrder
    postedAt?: SortOrder
    experience?: SortOrder
    salary?: SortOrder
    isRemote?: SortOrder
    source?: SortOrder
    description?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    type?: SortOrder
    postedAt?: SortOrder
    experience?: SortOrder
    salary?: SortOrder
    isRemote?: SortOrder
    source?: SortOrder
    description?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type JobTagCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    tag?: SortOrder
  }

  export type JobTagAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type JobTagMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    tag?: SortOrder
  }

  export type JobTagMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    tag?: SortOrder
  }

  export type JobTagSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type JobRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    requirement?: SortOrder
  }

  export type JobRequirementAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type JobRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    requirement?: SortOrder
  }

  export type JobRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    requirement?: SortOrder
  }

  export type JobRequirementSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type JobTagCreateNestedManyWithoutJobInput = {
    create?: XOR<JobTagCreateWithoutJobInput, JobTagUncheckedCreateWithoutJobInput> | JobTagCreateWithoutJobInput[] | JobTagUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTagCreateOrConnectWithoutJobInput | JobTagCreateOrConnectWithoutJobInput[]
    createMany?: JobTagCreateManyJobInputEnvelope
    connect?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
  }

  export type JobRequirementCreateNestedManyWithoutJobInput = {
    create?: XOR<JobRequirementCreateWithoutJobInput, JobRequirementUncheckedCreateWithoutJobInput> | JobRequirementCreateWithoutJobInput[] | JobRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRequirementCreateOrConnectWithoutJobInput | JobRequirementCreateOrConnectWithoutJobInput[]
    createMany?: JobRequirementCreateManyJobInputEnvelope
    connect?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
  }

  export type JobTagUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobTagCreateWithoutJobInput, JobTagUncheckedCreateWithoutJobInput> | JobTagCreateWithoutJobInput[] | JobTagUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTagCreateOrConnectWithoutJobInput | JobTagCreateOrConnectWithoutJobInput[]
    createMany?: JobTagCreateManyJobInputEnvelope
    connect?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
  }

  export type JobRequirementUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobRequirementCreateWithoutJobInput, JobRequirementUncheckedCreateWithoutJobInput> | JobRequirementCreateWithoutJobInput[] | JobRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRequirementCreateOrConnectWithoutJobInput | JobRequirementCreateOrConnectWithoutJobInput[]
    createMany?: JobRequirementCreateManyJobInputEnvelope
    connect?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type JobTagUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobTagCreateWithoutJobInput, JobTagUncheckedCreateWithoutJobInput> | JobTagCreateWithoutJobInput[] | JobTagUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTagCreateOrConnectWithoutJobInput | JobTagCreateOrConnectWithoutJobInput[]
    upsert?: JobTagUpsertWithWhereUniqueWithoutJobInput | JobTagUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobTagCreateManyJobInputEnvelope
    set?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    disconnect?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    delete?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    connect?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    update?: JobTagUpdateWithWhereUniqueWithoutJobInput | JobTagUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobTagUpdateManyWithWhereWithoutJobInput | JobTagUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobTagScalarWhereInput | JobTagScalarWhereInput[]
  }

  export type JobRequirementUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobRequirementCreateWithoutJobInput, JobRequirementUncheckedCreateWithoutJobInput> | JobRequirementCreateWithoutJobInput[] | JobRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRequirementCreateOrConnectWithoutJobInput | JobRequirementCreateOrConnectWithoutJobInput[]
    upsert?: JobRequirementUpsertWithWhereUniqueWithoutJobInput | JobRequirementUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobRequirementCreateManyJobInputEnvelope
    set?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    disconnect?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    delete?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    connect?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    update?: JobRequirementUpdateWithWhereUniqueWithoutJobInput | JobRequirementUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobRequirementUpdateManyWithWhereWithoutJobInput | JobRequirementUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobRequirementScalarWhereInput | JobRequirementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobTagUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobTagCreateWithoutJobInput, JobTagUncheckedCreateWithoutJobInput> | JobTagCreateWithoutJobInput[] | JobTagUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTagCreateOrConnectWithoutJobInput | JobTagCreateOrConnectWithoutJobInput[]
    upsert?: JobTagUpsertWithWhereUniqueWithoutJobInput | JobTagUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobTagCreateManyJobInputEnvelope
    set?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    disconnect?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    delete?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    connect?: JobTagWhereUniqueInput | JobTagWhereUniqueInput[]
    update?: JobTagUpdateWithWhereUniqueWithoutJobInput | JobTagUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobTagUpdateManyWithWhereWithoutJobInput | JobTagUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobTagScalarWhereInput | JobTagScalarWhereInput[]
  }

  export type JobRequirementUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobRequirementCreateWithoutJobInput, JobRequirementUncheckedCreateWithoutJobInput> | JobRequirementCreateWithoutJobInput[] | JobRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRequirementCreateOrConnectWithoutJobInput | JobRequirementCreateOrConnectWithoutJobInput[]
    upsert?: JobRequirementUpsertWithWhereUniqueWithoutJobInput | JobRequirementUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobRequirementCreateManyJobInputEnvelope
    set?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    disconnect?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    delete?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    connect?: JobRequirementWhereUniqueInput | JobRequirementWhereUniqueInput[]
    update?: JobRequirementUpdateWithWhereUniqueWithoutJobInput | JobRequirementUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobRequirementUpdateManyWithWhereWithoutJobInput | JobRequirementUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobRequirementScalarWhereInput | JobRequirementScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutTagsInput = {
    create?: XOR<JobCreateWithoutTagsInput, JobUncheckedCreateWithoutTagsInput>
    connectOrCreate?: JobCreateOrConnectWithoutTagsInput
    connect?: JobWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<JobCreateWithoutTagsInput, JobUncheckedCreateWithoutTagsInput>
    connectOrCreate?: JobCreateOrConnectWithoutTagsInput
    upsert?: JobUpsertWithoutTagsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutTagsInput, JobUpdateWithoutTagsInput>, JobUncheckedUpdateWithoutTagsInput>
  }

  export type JobCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<JobCreateWithoutRequirementsInput, JobUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: JobCreateOrConnectWithoutRequirementsInput
    connect?: JobWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<JobCreateWithoutRequirementsInput, JobUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: JobCreateOrConnectWithoutRequirementsInput
    upsert?: JobUpsertWithoutRequirementsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutRequirementsInput, JobUpdateWithoutRequirementsInput>, JobUncheckedUpdateWithoutRequirementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type JobTagCreateWithoutJobInput = {
    tag: string
  }

  export type JobTagUncheckedCreateWithoutJobInput = {
    id?: number
    tag: string
  }

  export type JobTagCreateOrConnectWithoutJobInput = {
    where: JobTagWhereUniqueInput
    create: XOR<JobTagCreateWithoutJobInput, JobTagUncheckedCreateWithoutJobInput>
  }

  export type JobTagCreateManyJobInputEnvelope = {
    data: JobTagCreateManyJobInput | JobTagCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type JobRequirementCreateWithoutJobInput = {
    requirement: string
  }

  export type JobRequirementUncheckedCreateWithoutJobInput = {
    id?: number
    requirement: string
  }

  export type JobRequirementCreateOrConnectWithoutJobInput = {
    where: JobRequirementWhereUniqueInput
    create: XOR<JobRequirementCreateWithoutJobInput, JobRequirementUncheckedCreateWithoutJobInput>
  }

  export type JobRequirementCreateManyJobInputEnvelope = {
    data: JobRequirementCreateManyJobInput | JobRequirementCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type JobTagUpsertWithWhereUniqueWithoutJobInput = {
    where: JobTagWhereUniqueInput
    update: XOR<JobTagUpdateWithoutJobInput, JobTagUncheckedUpdateWithoutJobInput>
    create: XOR<JobTagCreateWithoutJobInput, JobTagUncheckedCreateWithoutJobInput>
  }

  export type JobTagUpdateWithWhereUniqueWithoutJobInput = {
    where: JobTagWhereUniqueInput
    data: XOR<JobTagUpdateWithoutJobInput, JobTagUncheckedUpdateWithoutJobInput>
  }

  export type JobTagUpdateManyWithWhereWithoutJobInput = {
    where: JobTagScalarWhereInput
    data: XOR<JobTagUpdateManyMutationInput, JobTagUncheckedUpdateManyWithoutJobInput>
  }

  export type JobTagScalarWhereInput = {
    AND?: JobTagScalarWhereInput | JobTagScalarWhereInput[]
    OR?: JobTagScalarWhereInput[]
    NOT?: JobTagScalarWhereInput | JobTagScalarWhereInput[]
    id?: IntFilter<"JobTag"> | number
    jobId?: IntFilter<"JobTag"> | number
    tag?: StringFilter<"JobTag"> | string
  }

  export type JobRequirementUpsertWithWhereUniqueWithoutJobInput = {
    where: JobRequirementWhereUniqueInput
    update: XOR<JobRequirementUpdateWithoutJobInput, JobRequirementUncheckedUpdateWithoutJobInput>
    create: XOR<JobRequirementCreateWithoutJobInput, JobRequirementUncheckedCreateWithoutJobInput>
  }

  export type JobRequirementUpdateWithWhereUniqueWithoutJobInput = {
    where: JobRequirementWhereUniqueInput
    data: XOR<JobRequirementUpdateWithoutJobInput, JobRequirementUncheckedUpdateWithoutJobInput>
  }

  export type JobRequirementUpdateManyWithWhereWithoutJobInput = {
    where: JobRequirementScalarWhereInput
    data: XOR<JobRequirementUpdateManyMutationInput, JobRequirementUncheckedUpdateManyWithoutJobInput>
  }

  export type JobRequirementScalarWhereInput = {
    AND?: JobRequirementScalarWhereInput | JobRequirementScalarWhereInput[]
    OR?: JobRequirementScalarWhereInput[]
    NOT?: JobRequirementScalarWhereInput | JobRequirementScalarWhereInput[]
    id?: IntFilter<"JobRequirement"> | number
    jobId?: IntFilter<"JobRequirement"> | number
    requirement?: StringFilter<"JobRequirement"> | string
  }

  export type JobCreateWithoutTagsInput = {
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
    requirements?: JobRequirementCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutTagsInput = {
    id?: number
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
    requirements?: JobRequirementUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutTagsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutTagsInput, JobUncheckedCreateWithoutTagsInput>
  }

  export type JobUpsertWithoutTagsInput = {
    update: XOR<JobUpdateWithoutTagsInput, JobUncheckedUpdateWithoutTagsInput>
    create: XOR<JobCreateWithoutTagsInput, JobUncheckedCreateWithoutTagsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutTagsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutTagsInput, JobUncheckedUpdateWithoutTagsInput>
  }

  export type JobUpdateWithoutTagsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobRequirementUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobRequirementUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateWithoutRequirementsInput = {
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
    tags?: JobTagCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutRequirementsInput = {
    id?: number
    slug: string
    title: string
    company: string
    logoUrl?: string | null
    location: string
    type: string
    postedAt: Date | string
    experience: string
    salary?: string | null
    isRemote?: boolean | null
    source?: string | null
    description: string
    tags?: JobTagUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutRequirementsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutRequirementsInput, JobUncheckedCreateWithoutRequirementsInput>
  }

  export type JobUpsertWithoutRequirementsInput = {
    update: XOR<JobUpdateWithoutRequirementsInput, JobUncheckedUpdateWithoutRequirementsInput>
    create: XOR<JobCreateWithoutRequirementsInput, JobUncheckedCreateWithoutRequirementsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutRequirementsInput, JobUncheckedUpdateWithoutRequirementsInput>
  }

  export type JobUpdateWithoutRequirementsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tags?: JobTagUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutRequirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tags?: JobTagUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobTagCreateManyJobInput = {
    id?: number
    tag: string
  }

  export type JobRequirementCreateManyJobInput = {
    id?: number
    requirement: string
  }

  export type JobTagUpdateWithoutJobInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type JobTagUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type JobTagUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type JobRequirementUpdateWithoutJobInput = {
    requirement?: StringFieldUpdateOperationsInput | string
  }

  export type JobRequirementUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    requirement?: StringFieldUpdateOperationsInput | string
  }

  export type JobRequirementUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    requirement?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}