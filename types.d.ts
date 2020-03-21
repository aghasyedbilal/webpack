import { ArrayExpression } from "estree";
import { ArrowFunctionExpression } from "estree";
import { AsArray } from "tapable";
import { AssignmentExpression } from "estree";
import { AsyncParallelHook } from "tapable";
import { AsyncSeriesBailHook } from "tapable";
import { AsyncSeriesHook } from "tapable";
import { AsyncSeriesWaterfallHook } from "tapable";
import { AwaitExpression } from "estree";
import { BinaryExpression } from "estree";
import { BlockStatement } from "estree";
import { BreakStatement } from "estree";
import { ClassDeclaration } from "estree";
import { ClassExpression } from "estree";
import { Comment } from "estree";
import { ConditionalExpression } from "estree";
import { ContinueStatement } from "estree";
import { DebuggerStatement } from "estree";
import { DoWhileStatement } from "estree";
import { EmptyStatement } from "estree";
import { ExportAllDeclaration } from "estree";
import { ExportDefaultDeclaration } from "estree";
import { ExportNamedDeclaration } from "estree";
import { ExpressionStatement } from "estree";
import { ForInStatement } from "estree";
import { ForOfStatement } from "estree";
import { ForStatement } from "estree";
import { FunctionDeclaration } from "estree";
import { FunctionExpression } from "estree";
import { HookMap } from "tapable";
import { Identifier } from "estree";
import { IfStatement } from "estree";
import { ImportDeclaration } from "estree";
import { JSONSchema4 } from "json-schema";
import { JSONSchema6 } from "json-schema";
import { JSONSchema7 } from "json-schema";
import { LabeledStatement } from "estree";
import { LogicalExpression } from "estree";
import { MemberExpression } from "estree";
import { MetaProperty } from "estree";
import { MultiHook } from "tapable";
import { NewExpression } from "estree";
import { ObjectExpression } from "estree";
import { PostFormatter } from "schema-utils";
import { Program } from "estree";
import { RegExpLiteral } from "estree";
import { ReturnStatement } from "estree";
import { SequenceExpression } from "estree";
import { SimpleCallExpression } from "estree";
import { SimpleLiteral } from "estree";
import { Stats as StatsImport } from "fs";
import { Super } from "estree";
import { SwitchStatement } from "estree";
import { SyncBailHook } from "tapable";
import { SyncHook } from "tapable";
import { SyncWaterfallHook } from "tapable";
import { TaggedTemplateExpression } from "estree";
import { TemplateLiteral } from "estree";
import { ThisExpression } from "estree";
import { ThrowStatement } from "estree";
import { TryStatement } from "estree";
import { UnaryExpression } from "estree";
import { UpdateExpression } from "estree";
import { ValidationErrorConfiguration } from "schema-utils";
import { VariableDeclaration } from "estree";
import { VariableDeclarator } from "estree";
import { WhileStatement } from "estree";
import { WithStatement } from "estree";
import { WriteStream } from "fs";
import { YieldExpression } from "estree";
declare class AbstractLibraryPlugin<T> {
	constructor(__0: {
		/**
		 * name of the plugin
		 */
		pluginName: string;
		/**
		 * used library type
		 */
		type:
			| "var"
			| "module"
			| "assign"
			| "this"
			| "window"
			| "self"
			| "global"
			| "commonjs"
			| "commonjs2"
			| "commonjs-module"
			| "amd"
			| "amd-require"
			| "umd"
			| "umd2"
			| "jsonp"
			| "system";
	});
	apply: (compiler: Compiler) => void;
	parseOptions: (library: LibraryOptions) => false | T;
	finishEntryModule: (
		module: Module,
		libraryContext: LibraryContext<T>
	) => void;
	runtimeRequirements: (
		chunk: Chunk,
		set: Set<string>,
		libraryContext: LibraryContext<T>
	) => void;
	render: (
		source: Source,
		renderContext: RenderContextObjectJavascriptModulesPlugin,
		libraryContext: LibraryContext<T>
	) => Source;
	chunkHash: (
		chunk: Chunk,
		hash: Hash,
		chunkHashContext: ChunkHashContext,
		libraryContext: LibraryContext<T>
	) => void;
}
interface AdditionalPropertiesParams {
	additionalProperty: string;
}
declare class AggressiveMergingPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
declare class AggressiveSplittingPlugin {
	constructor(options: AggressiveSplittingPluginOptions);
	options: AggressiveSplittingPluginOptions;
	apply: (compiler: Compiler) => void;
	static wasChunkRecorded: (chunk: Chunk) => boolean;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface AggressiveSplittingPluginOptions {
	/**
	 * Extra cost for each chunk (Default: 9.8kiB).
	 */
	chunkOverhead?: number;

	/**
	 * Extra cost multiplicator for entry chunks (Default: 10).
	 */
	entryChunkMultiplicator?: number;

	/**
	 * Byte, max size of per file (Default: 50kiB).
	 */
	maxSize?: number;

	/**
	 * Byte, split point. (Default: 30kiB).
	 */
	minSize?: number;
}
interface Asset {
	/**
	 * the filename of the asset
	 */
	name: string;

	/**
	 * source of the asset
	 */
	source: Source;

	/**
	 * info about the asset
	 */
	info: AssetInfo;
}
interface AssetEmittedInfo {
	content: Buffer;
	source: Source;
	compilation: Compilation;
	outputPath: string;
	targetPath: string;
}
interface AssetInfo {
	/**
	 * true, if the asset can be long term cached forever (contains a hash)
	 */
	immutable?: boolean;

	/**
	 * size in bytes, only set after asset has been emitted
	 */
	size?: number;

	/**
	 * true, when asset is only used for development and doesn't count towards user-facing assets
	 */
	development?: boolean;

	/**
	 * true, when asset ships data for updating an existing application (HMR)
	 */
	hotModuleReplacement?: boolean;
}
interface AsyncDependenciesBlock extends DependenciesBlock {
	groupOptions: RawChunkGroupOptions & { name: string };
	loc: SyntheticDependencyLocation | RealDependencyLocation;
	request: string;
	parent: DependenciesBlock;
	chunkName: string;
	module: any;
}
interface AsyncQueue<T, K, R> {
	hooks: {
		beforeAdd: AsyncSeriesHook<[T]>;
		added: SyncHook<[T], void>;
		beforeStart: AsyncSeriesHook<[T]>;
		started: SyncHook<[T], void>;
		result: SyncHook<[T, Error, R], void>;
	};
	add: (item: T, callback: CallbackFunctionCompiler<R>) => void;
	invalidate: (item: T) => void;
	stop: () => void;
	increaseParallelism: () => void;
	decreaseParallelism: () => void;
	isProcessing: (item: T) => boolean;
	isQueued: (item: T) => boolean;
	isDone: (item: T) => boolean;
}
declare class AsyncWebAssemblyModulesPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
	renderModule: (module: any, renderContext: any, hooks: any) => any;
	static getCompilationHooks: (
		compilation: Compilation
	) => CompilationHooksObjectAsyncWebAssemblyModulesPlugin;
}
declare class AutomaticPrefetchPlugin {
	constructor();

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
}
declare class BannerPlugin {
	constructor(
		options:
			| string
			| BannerPluginOptions
			| ((data: { hash: string; chunk: Chunk; filename: string }) => string)
	);
	options: BannerPluginOptions;
	banner: (data: { hash: string; chunk: Chunk; filename: string }) => string;
	apply: (compiler: Compiler) => void;
}
interface BannerPluginOptions {
	/**
	 * Specifies the banner.
	 */
	banner:
		| string
		| ((data: { hash: string; chunk: Chunk; filename: string }) => string);

	/**
	 * If true, the banner will only be added to the entry chunks.
	 */
	entryOnly?: boolean;

	/**
	 * Exclude all modules matching any of these conditions.
	 */
	exclude?: string | RegExp | Array<string | RegExp>;

	/**
	 * Include all modules matching any of these conditions.
	 */
	include?: string | RegExp | Array<string | RegExp>;

	/**
	 * If true, banner will not be wrapped in a comment.
	 */
	raw?: boolean;

	/**
	 * Include all modules that pass test assertion.
	 */
	test?: string | RegExp | Array<string | RegExp>;
}
interface BasicEvaluatedExpression {
	type: number;
	range: any;
	falsy: boolean;
	truthy: boolean;
	bool: any;
	number: any;
	bigint: any;
	regExp: any;
	string: any;
	quasis: any;
	parts: any;
	array: any;
	items: any;
	options: any;
	prefix: any;
	postfix: any;
	wrappedInnerExpressions: any;
	identifier: any;
	rootInfo: any;
	getMembers: any;
	expression: any;
	isNull: () => boolean;
	isString: () => boolean;
	isNumber: () => boolean;
	isBigInt: () => boolean;
	isBoolean: () => boolean;
	isRegExp: () => boolean;
	isConditional: () => boolean;
	isArray: () => boolean;
	isConstArray: () => boolean;
	isIdentifier: () => boolean;
	isWrapped: () => boolean;
	isTemplateString: () => boolean;
	isTruthy: () => boolean;
	isFalsy: () => boolean;
	asBool: () => any;
	asString: () => any;
	setString: (string: any) => BasicEvaluatedExpression;
	setNull: () => BasicEvaluatedExpression;
	setNumber: (number: any) => BasicEvaluatedExpression;
	setBigInt: (bigint: any) => BasicEvaluatedExpression;
	setBoolean: (bool: any) => BasicEvaluatedExpression;
	setRegExp: (regExp: any) => BasicEvaluatedExpression;
	setIdentifier: (
		identifier: any,
		rootInfo: any,
		getMembers: any
	) => BasicEvaluatedExpression;
	setWrapped: (
		prefix: any,
		postfix: any,
		innerExpressions: any
	) => BasicEvaluatedExpression;
	setOptions: (options: any) => BasicEvaluatedExpression;
	addOptions: (options: any) => BasicEvaluatedExpression;
	setItems: (items: any) => BasicEvaluatedExpression;
	setArray: (array: any) => BasicEvaluatedExpression;
	setTemplateString: (
		quasis: any,
		parts: any,
		kind: any
	) => BasicEvaluatedExpression;
	templateStringKind: any;
	setTruthy: () => BasicEvaluatedExpression;
	setFalsy: () => BasicEvaluatedExpression;
	setRange: (range: any) => BasicEvaluatedExpression;
	setExpression: (expression: any) => BasicEvaluatedExpression;
}
interface ByTypeGenerator extends Generator {
	map: any;
}
declare class Cache {
	constructor();
	hooks: {
		get: AsyncSeriesBailHook<
			[
				string,
				Etag,
				Array<(result: any, stats: CallbackFunctionCache<void>) => void>
			],
			any
		>;
		store: AsyncParallelHook<[string, Etag, any]>;
		storeBuildDependencies: AsyncParallelHook<[Iterable<string>]>;
		beginIdle: SyncHook<[], void>;
		endIdle: AsyncParallelHook<[]>;
		shutdown: AsyncParallelHook<[]>;
	};
	get: <T>(
		identifier: string,
		etag: Etag,
		callback: CallbackFunctionCache<T>
	) => void;
	store: <T>(
		identifier: string,
		etag: Etag,
		data: T,
		callback: CallbackFunctionCache<void>
	) => void;

	/**
	 * After this method has succeeded the cache can only be restored when build dependencies are
	 */
	storeBuildDependencies: (
		dependencies: Iterable<string>,
		callback: CallbackFunctionCache<void>
	) => void;
	beginIdle: () => void;
	endIdle: (callback: CallbackFunctionCache<void>) => void;
	shutdown: (callback: CallbackFunctionCache<void>) => void;
	static STAGE_MEMORY: number;
	static STAGE_DEFAULT: number;
	static STAGE_DISK: number;
	static STAGE_NETWORK: number;
}
interface CacheGroupSource {
	key?: string;
	priority?: number;
	getName?: (module: Module, chunks: Array<Chunk>, key: string) => string;
	chunksFilter?: (chunk: Chunk) => boolean;
	enforce?: boolean;
	minSize: Record<string, number>;
	minRemainingSize: Record<string, number>;
	maxAsyncSize: Record<string, number>;
	maxInitialSize: Record<string, number>;
	minChunks?: number;
	maxAsyncRequests?: number;
	maxInitialRequests?: number;
	filename?: string | ((arg0: PathData, arg1: AssetInfo) => string);
	idHint?: string;
	automaticNameDelimiter: string;
	reuseExistingChunk?: boolean;
}
interface CacheGroupsContext {
	moduleGraph: ModuleGraph;
	chunkGraph: ChunkGraph;
}
interface CallbackFunctionCache<T> {
	(err: WebpackError, stats: T): void;
}
interface CallbackFunctionCompiler<T> {
	(err: Error, result: T): any;
}
interface CallbackFunctionWebpack<T> {
	(err: Error, stats: T): void;
}

/**
 * A Chunk is a unit of encapsulation for Modules.
 * Chunks are "rendered" into bundles that get emitted when the build completes.
 */
interface Chunk {
	id: string | number;
	ids: Array<string | number>;
	debugId: number;
	name: string;
	idNameHints: SortableSet<string>;
	preventIntegration: boolean;
	filenameTemplate: string | ((arg0: PathData, arg1: AssetInfo) => string);
	files: Set<string>;
	auxiliaryFiles: Set<string>;
	rendered: boolean;
	hash: string;
	contentHash: Record<string, string>;
	renderedHash: string;
	chunkReason: string;
	extraAsync: boolean;
	entryModule: Module;
	hasEntryModule: () => boolean;
	addModule: (module: Module) => boolean;
	removeModule: (module: Module) => void;
	getNumberOfModules: () => number;
	modulesIterable: Iterable<Module>;
	compareTo: (otherChunk: Chunk) => 0 | 1 | -1;
	containsModule: (module: Module) => boolean;
	getModules: () => Array<Module>;
	remove: () => void;
	moveModule: (module: Module, otherChunk: Chunk) => void;
	integrate: (otherChunk: Chunk) => boolean;
	canBeIntegrated: (otherChunk: Chunk) => boolean;
	isEmpty: () => boolean;
	modulesSize: () => number;
	size: (options: ChunkSizeOptions) => number;
	integratedSize: (otherChunk: Chunk, options: ChunkSizeOptions) => number;
	getChunkModuleMaps: (filterFn: (m: Module) => boolean) => ChunkModuleMaps;
	hasModuleInGraph: (
		filterFn: (m: Module) => boolean,
		filterChunkFn: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	) => boolean;
	getChunkMaps: (realHash: boolean) => ChunkMaps;
	hasRuntime: () => boolean;
	canBeInitial: () => boolean;
	isOnlyInitial: () => boolean;
	addGroup: (chunkGroup: ChunkGroup) => void;
	removeGroup: (chunkGroup: ChunkGroup) => void;
	isInGroup: (chunkGroup: ChunkGroup) => boolean;
	getNumberOfGroups: () => number;
	groupsIterable: Iterable<ChunkGroup>;
	disconnectFromGroups: () => void;
	split: (newChunk: Chunk) => void;
	updateHash: (hash: Hash, chunkGraph: ChunkGraph) => void;
	getAllAsyncChunks: () => Set<Chunk>;
	getAllReferencedChunks: () => Set<Chunk>;
	hasAsyncChunks: () => boolean;
	getChildIdsByOrders: (
		chunkGraph: ChunkGraph,
		filterFn: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	) => Record<string, Array<string | number>>;
	getChildIdsByOrdersMap: (
		chunkGraph: ChunkGraph,
		includeDirectChildren: boolean,
		filterFn: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	) => Record<string | number, Record<string, Array<string | number>>>;
}
interface ChunkGraph {
	moduleGraph: ModuleGraph;
	connectChunkAndModule: (chunk: Chunk, module: Module) => void;
	disconnectChunkAndModule: (chunk: Chunk, module: Module) => void;
	disconnectChunk: (chunk: Chunk) => void;
	attachModules: (chunk: Chunk, modules: Iterable<Module>) => void;
	attachRuntimeModules: (
		chunk: Chunk,
		modules: Iterable<RuntimeModule>
	) => void;
	replaceModule: (oldModule: Module, newModule: Module) => void;
	isModuleInChunk: (module: Module, chunk: Chunk) => boolean;
	isModuleInChunkGroup: (module: Module, chunkGroup: ChunkGroup) => boolean;
	isEntryModule: (module: Module) => boolean;
	getModuleChunksIterable: (module: Module) => Iterable<Chunk>;
	getOrderedModuleChunksIterable: (
		module: Module,
		sortFn: (arg0: Chunk, arg1: Chunk) => 0 | 1 | -1
	) => Iterable<Chunk>;
	getModuleChunks: (module: Module) => Array<Chunk>;
	getNumberOfModuleChunks: (module: Module) => number;
	haveModulesEqualChunks: (moduleA: Module, moduleB: Module) => boolean;
	getNumberOfChunkModules: (chunk: Chunk) => number;
	getChunkModulesIterable: (chunk: Chunk) => Iterable<Module>;
	getChunkModulesIterableBySourceType: (
		chunk: Chunk,
		sourceType: string
	) => Iterable<Module>;
	getOrderedChunkModulesIterable: (
		chunk: Chunk,
		comparator: (arg0: Module, arg1: Module) => 0 | 1 | -1
	) => Iterable<Module>;
	getOrderedChunkModulesIterableBySourceType: (
		chunk: Chunk,
		sourceType: string,
		comparator: (arg0: Module, arg1: Module) => 0 | 1 | -1
	) => Iterable<Module>;
	getChunkModules: (chunk: Chunk) => Array<Module>;
	getOrderedChunkModules: (
		chunk: Chunk,
		comparator: (arg0: Module, arg1: Module) => 0 | 1 | -1
	) => Array<Module>;
	getChunkModuleMaps: (
		chunk: Chunk,
		filterFn: (m: Module) => boolean,
		includeAllChunks: boolean
	) => ChunkModuleMaps;
	getChunkConditionMap: (
		chunk: Chunk,
		filterFn: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	) => Record<string | number, boolean>;
	hasModuleInChunk: (chunk: Chunk, filterFn: (m: Module) => boolean) => boolean;
	hasModuleInGraph: (
		chunk: Chunk,
		filterFn: (m: Module) => boolean,
		filterChunkFn: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	) => boolean;
	compareChunks: (chunkA: Chunk, chunkB: Chunk) => 0 | 1 | -1;
	getChunkModulesSize: (chunk: Chunk) => number;
	getChunkModulesSizes: (chunk: Chunk) => Record<string, number>;
	getChunkRootModules: (chunk: Chunk) => Array<Module>;
	getChunkSize: (chunk: Chunk, options: ChunkSizeOptions) => number;
	getIntegratedChunksSize: (
		chunkA: Chunk,
		chunkB: Chunk,
		options: ChunkSizeOptions
	) => number;
	canChunksBeIntegrated: (chunkA: Chunk, chunkB: Chunk) => boolean;
	integrateChunks: (chunkA: Chunk, chunkB: Chunk) => void;
	isEntryModuleInChunk: (module: Module, chunk: Chunk) => boolean;
	connectChunkAndEntryModule: (
		chunk: Chunk,
		module: Module,
		entrypoint: Entrypoint
	) => void;
	connectChunkAndRuntimeModule: (chunk: Chunk, module: RuntimeModule) => void;
	disconnectChunkAndEntryModule: (chunk: Chunk, module: Module) => void;
	disconnectChunkAndRuntimeModule: (
		chunk: Chunk,
		module: RuntimeModule
	) => void;
	disconnectEntryModule: (module: Module) => void;
	disconnectEntries: (chunk: Chunk) => void;
	getNumberOfEntryModules: (chunk: Chunk) => number;
	getNumberOfRuntimeModules: (chunk: Chunk) => number;
	getChunkEntryModulesIterable: (chunk: Chunk) => Iterable<Module>;
	getChunkEntryDependentChunksIterable: (chunk: Chunk) => Iterable<Chunk>;
	hasChunkEntryDependentChunks: (chunk: Chunk) => boolean;
	getChunkRuntimeModulesIterable: (chunk: Chunk) => Iterable<RuntimeModule>;
	getChunkRuntimeModulesInOrder: (chunk: Chunk) => Array<RuntimeModule>;
	getChunkEntryModulesWithChunkGroupIterable: (
		chunk: Chunk
	) => Iterable<[Module, Entrypoint]>;
	getBlockChunkGroup: (depBlock: AsyncDependenciesBlock) => ChunkGroup;
	connectBlockAndChunkGroup: (
		depBlock: AsyncDependenciesBlock,
		chunkGroup: ChunkGroup
	) => void;
	disconnectChunkGroup: (chunkGroup: ChunkGroup) => void;
	getModuleId: (module: Module) => string | number;
	setModuleId: (module: Module, id: string | number) => void;
	getModuleHash: (module: Module) => string;
	getRenderedModuleHash: (module: Module) => string;
	setModuleHashes: (module: Module, hash: string, renderedHash: string) => void;
	addModuleRuntimeRequirements: (module: Module, items: Set<string>) => void;
	addChunkRuntimeRequirements: (chunk: Chunk, items: Set<string>) => void;
	addTreeRuntimeRequirements: (chunk: Chunk, items: Iterable<string>) => void;
	getModuleRuntimeRequirements: (module: Module) => ReadonlySet<string>;
	getChunkRuntimeRequirements: (chunk: Chunk) => ReadonlySet<string>;
	getTreeRuntimeRequirements: (chunk: Chunk) => ReadonlySet<string>;
}
interface ChunkGroup {
	groupDebugId: number;
	options: RawChunkGroupOptions & { name: string };
	chunks: Array<Chunk>;
	origins: Array<{
		module: Module;
		loc: SyntheticDependencyLocation | RealDependencyLocation;
		request: string;
	}>;
	index: number;

	/**
	 * when a new chunk is added to a chunkGroup, addingOptions will occur.
	 */
	addOptions: (options: RawChunkGroupOptions & { name: string }) => void;

	/**
	 * returns the name of current ChunkGroup
	 *
	 *
	 * sets a new name for current ChunkGroup
	 */
	name: string;

	/**
	 * get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
	 */
	debugId: string;

	/**
	 * get a unique id for ChunkGroup, made up of its member Chunk id's
	 */
	id: string;

	/**
	 * Performs an unshift of a specific chunk
	 */
	unshiftChunk: (chunk: Chunk) => boolean;

	/**
	 * inserts a chunk before another existing chunk in group
	 */
	insertChunk: (chunk: Chunk, before: Chunk) => boolean;

	/**
	 * add a chunk into ChunkGroup. Is pushed on or prepended
	 */
	pushChunk: (chunk: Chunk) => boolean;
	replaceChunk: (oldChunk: Chunk, newChunk: Chunk) => boolean;
	removeChunk: (chunk: Chunk) => boolean;
	isInitial: () => boolean;
	addChild: (group: ChunkGroup) => boolean;
	getChildren: () => Array<ChunkGroup>;
	getNumberOfChildren: () => number;
	childrenIterable: SortableSet<ChunkGroup>;
	removeChild: (group: ChunkGroup) => boolean;
	addParent: (parentChunk: ChunkGroup) => boolean;
	getParents: () => Array<ChunkGroup>;
	getNumberOfParents: () => number;
	hasParent: (parent: ChunkGroup) => boolean;
	parentsIterable: SortableSet<ChunkGroup>;
	removeParent: (chunkGroup: ChunkGroup) => boolean;
	getBlocks: () => Array<any>;
	getNumberOfBlocks: () => number;
	hasBlock: (block: any) => boolean;
	blocksIterable: Iterable<AsyncDependenciesBlock>;
	addBlock: (block: AsyncDependenciesBlock) => boolean;
	addOrigin: (
		module: Module,
		loc: SyntheticDependencyLocation | RealDependencyLocation,
		request: string
	) => void;
	getFiles: () => Array<string>;
	remove: () => void;
	sortItems: () => void;

	/**
	 * Sorting predicate which allows current ChunkGroup to be compared against another.
	 * Sorting values are based off of number of chunks in ChunkGroup.
	 */
	compareTo: (chunkGraph: ChunkGraph, otherGroup: ChunkGroup) => 0 | 1 | -1;
	getChildrenByOrders: (
		moduleGraph: ModuleGraph,
		chunkGraph: ChunkGraph
	) => Record<string, Array<ChunkGroup>>;

	/**
	 * Sets the top-down index of a module in this ChunkGroup
	 */
	setModulePreOrderIndex: (module: Module, index: number) => void;

	/**
	 * Gets the top-down index of a module in this ChunkGroup
	 */
	getModulePreOrderIndex: (module: Module) => number;

	/**
	 * Sets the bottom-up index of a module in this ChunkGroup
	 */
	setModulePostOrderIndex: (module: Module, index: number) => void;

	/**
	 * Gets the bottom-up index of a module in this ChunkGroup
	 */
	getModulePostOrderIndex: (module: Module) => number;
	checkConstraints: () => void;
	getModuleIndex: (module: Module) => number;
	getModuleIndex2: (module: Module) => number;
}
interface ChunkHashContext {
	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;
}

/**
 * Compare two Modules based on their ids for sorting
 */
interface ChunkMaps {
	hash: Record<string | number, string>;
	contentHash: Record<string | number, Record<string, string>>;
	name: Record<string | number, string>;
}
declare class ChunkModuleIdRangePlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
interface ChunkModuleMaps {
	id: Record<string | number, Array<string | number>>;
	hash: Record<string | number, string>;
}
interface ChunkPathData {
	id: string | number;
	name?: string;
	hash: string;
	hashWithLength?: (arg0: number) => string;
	contentHash?: Record<string, string>;
	contentHashWithLength?: Record<string, (length: number) => string>;
}
interface ChunkSizeOptions {
	/**
	 * constant overhead for a chunk
	 */
	chunkOverhead?: number;

	/**
	 * multiplicator for initial chunks
	 */
	entryChunkMultiplicator?: number;
}
interface ChunkTemplate {
	hooks: Readonly<{
		renderManifest: { tap: (options: any, fn: any) => void };
		modules: { tap: (options: any, fn: any) => void };
		render: { tap: (options: any, fn: any) => void };
		renderWithEntry: { tap: (options: any, fn: any) => void };
		hash: { tap: (options: any, fn: any) => void };
		hashForChunk: { tap: (options: any, fn: any) => void };
	}>;
	outputOptions: any;
}
interface CodeGenerationContext {
	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;
}
interface CodeGenerationResult {
	/**
	 * the resulting sources for all source types
	 */
	sources: Map<string, Source>;

	/**
	 * the runtime requirements
	 */
	runtimeRequirements: ReadonlySet<string>;
}
interface ComparisonParams {
	comparison: string;
	limit: string | number;
	exclusive: boolean;
}
declare class Compilation {
	/**
	 * Creates an instance of Compilation.
	 */
	constructor(compiler: Compiler);
	hooks: Readonly<{
		buildModule: SyncHook<[Module], void>;
		rebuildModule: SyncHook<[Module], void>;
		failedModule: SyncHook<[Module, WebpackError], void>;
		succeedModule: SyncHook<[Module], void>;
		stillValidModule: SyncHook<[Module], void>;
		addEntry: SyncHook<
			[
				Dependency,
				{ name: string } & Pick<
					EntryDescriptionNormalized,
					"dependOn" | "filename" | "library"
				>
			],
			void
		>;
		failedEntry: SyncHook<
			[
				Dependency,
				{ name: string } & Pick<
					EntryDescriptionNormalized,
					"dependOn" | "filename" | "library"
				>,
				Error
			],
			void
		>;
		succeedEntry: SyncHook<
			[
				Dependency,
				{ name: string } & Pick<
					EntryDescriptionNormalized,
					"dependOn" | "filename" | "library"
				>,
				Module
			],
			void
		>;
		dependencyReferencedExports: SyncWaterfallHook<
			[Array<Array<string>>, Dependency]
		>;
		finishModules: AsyncSeriesHook<[Iterable<Module>]>;
		finishRebuildingModule: AsyncSeriesHook<[Module]>;
		unseal: SyncHook<[], void>;
		seal: SyncHook<[], void>;
		beforeChunks: SyncHook<[], void>;
		afterChunks: SyncHook<[Iterable<Chunk>], void>;
		optimizeDependencies: SyncBailHook<[Iterable<Module>], any>;
		afterOptimizeDependencies: SyncHook<[Iterable<Module>], void>;
		optimize: SyncHook<[], void>;
		optimizeModules: SyncBailHook<[Iterable<Module>], any>;
		afterOptimizeModules: SyncHook<[Iterable<Module>], void>;
		optimizeChunks: SyncBailHook<[Iterable<Chunk>, Array<ChunkGroup>], any>;
		afterOptimizeChunks: SyncHook<[Iterable<Chunk>, Array<ChunkGroup>], void>;
		optimizeTree: AsyncSeriesHook<[Iterable<Chunk>, Iterable<Module>]>;
		afterOptimizeTree: SyncHook<[Iterable<Chunk>, Iterable<Module>], void>;
		optimizeChunkModules: AsyncSeriesBailHook<
			[Iterable<Chunk>, Iterable<Module>],
			any
		>;
		afterOptimizeChunkModules: SyncHook<
			[Iterable<Chunk>, Iterable<Module>],
			void
		>;
		shouldRecord: SyncBailHook<[], boolean>;
		additionalChunkRuntimeRequirements: SyncHook<[Chunk, Set<string>], void>;
		runtimeRequirementInChunk: HookMap<SyncBailHook<[Chunk, Set<string>], any>>;
		additionalModuleRuntimeRequirements: SyncHook<[Module, Set<string>], void>;
		runtimeRequirementInModule: HookMap<
			SyncBailHook<[Module, Set<string>], any>
		>;
		additionalTreeRuntimeRequirements: SyncHook<[Chunk, Set<string>], void>;
		runtimeRequirementInTree: HookMap<SyncBailHook<[Chunk, Set<string>], any>>;
		runtimeModule: SyncHook<[RuntimeModule, Chunk], void>;
		reviveModules: SyncHook<[Iterable<Module>, any], void>;
		beforeModuleIds: SyncHook<[Iterable<Module>], void>;
		moduleIds: SyncHook<[Iterable<Module>], void>;
		optimizeModuleIds: SyncHook<[Iterable<Module>], void>;
		afterOptimizeModuleIds: SyncHook<[Iterable<Module>], void>;
		reviveChunks: SyncHook<[Iterable<Chunk>, any], void>;
		beforeChunkIds: SyncHook<[Iterable<Chunk>], void>;
		chunkIds: SyncHook<[Iterable<Chunk>], void>;
		optimizeChunkIds: SyncHook<[Iterable<Chunk>], void>;
		afterOptimizeChunkIds: SyncHook<[Iterable<Chunk>], void>;
		recordModules: SyncHook<[Iterable<Module>, any], void>;
		recordChunks: SyncHook<[Iterable<Chunk>, any], void>;
		optimizeCodeGeneration: SyncHook<[Iterable<Module>], void>;
		beforeModuleHash: SyncHook<[], void>;
		afterModuleHash: SyncHook<[], void>;
		beforeCodeGeneration: SyncHook<[], void>;
		afterCodeGeneration: SyncHook<[], void>;
		beforeRuntimeRequirements: SyncHook<[], void>;
		afterRuntimeRequirements: SyncHook<[], void>;
		beforeHash: SyncHook<[], void>;
		contentHash: SyncHook<[Chunk], void>;
		afterHash: SyncHook<[], void>;
		recordHash: SyncHook<[any], void>;
		record: SyncHook<[Compilation, any], void>;
		beforeModuleAssets: SyncHook<[], void>;
		shouldGenerateChunkAssets: SyncBailHook<[], boolean>;
		beforeChunkAssets: SyncHook<[], void>;
		additionalChunkAssets: SyncHook<[Iterable<Chunk>], void>;
		additionalAssets: AsyncSeriesHook<[]>;
		optimizeChunkAssets: AsyncSeriesHook<[Iterable<Chunk>]>;
		afterOptimizeChunkAssets: SyncHook<[Iterable<Chunk>], void>;
		optimizeAssets: AsyncSeriesHook<[Record<string, Source>]>;
		afterOptimizeAssets: SyncHook<[Record<string, Source>], void>;
		finishAssets: AsyncSeriesHook<[Record<string, Source>]>;
		afterFinishAssets: SyncHook<[Record<string, Source>], void>;
		needAdditionalSeal: SyncBailHook<[], boolean>;
		afterSeal: AsyncSeriesHook<[]>;
		renderManifest: SyncWaterfallHook<
			[Array<RenderManifestEntry>, RenderManifestOptions]
		>;
		fullHash: SyncHook<[Hash], void>;
		chunkHash: SyncHook<[Chunk, Hash, ChunkHashContext], void>;
		moduleAsset: SyncHook<[Module, string], void>;
		chunkAsset: SyncHook<[Chunk, string], void>;
		assetPath: SyncWaterfallHook<[string, any, AssetInfo]>;
		needAdditionalPass: SyncBailHook<[], boolean>;
		childCompiler: SyncHook<[Compiler, string, number], void>;
		log: SyncBailHook<[string, LogEntry], true>;
		statsPreset: HookMap<SyncHook<[any, any], void>>;
		statsNormalize: SyncHook<[any, any], void>;
		statsFactory: SyncHook<[StatsFactory, any], void>;
		statsPrinter: SyncHook<[StatsPrinter, any], void>;
		normalModuleLoader: SyncHook<[any, NormalModule], void>;
	}>;
	name: string;
	compiler: Compiler;
	resolverFactory: ResolverFactory;
	inputFileSystem: InputFileSystem;
	fileSystemInfo: FileSystemInfo;
	requestShortener: RequestShortener;
	compilerPath: string;
	cache: Cache;
	logger: WebpackLogger;
	options: WebpackOptionsNormalized;
	outputOptions: OutputNormalized;
	bail: boolean;
	profile: boolean;
	mainTemplate: MainTemplate;
	chunkTemplate: ChunkTemplate;
	runtimeTemplate: RuntimeTemplate;
	moduleTemplates: { javascript: ModuleTemplate };
	moduleGraph: ModuleGraph;
	chunkGraph: ChunkGraph;
	codeGenerationResults: Map<Module, CodeGenerationResult>;
	factorizeQueue: AsyncQueue<FactorizeModuleOptions, string, Module>;
	addModuleQueue: AsyncQueue<Module, string, Module>;
	buildQueue: AsyncQueue<Module, Module, Module>;
	rebuildQueue: AsyncQueue<Module, Module, Module>;
	processDependenciesQueue: AsyncQueue<Module, Module, Module>;

	/**
	 * Modules in value are building during the build of Module in key.
	 * Means value blocking key from finishing.
	 * Needed to detect build cycles.
	 */
	creatingModuleDuringBuild: WeakMap<Module, Set<Module>>;
	entries: Map<string, EntryData>;
	entrypoints: Map<string, Entrypoint>;
	chunks: Set<Chunk>;
	chunkGroups: Array<ChunkGroup>;
	namedChunkGroups: Map<string, ChunkGroup>;
	namedChunks: Map<string, Chunk>;
	modules: Set<Module>;
	records: any;
	additionalChunkAssets: Array<string>;
	assets: Record<string, Source>;
	assetsInfo: Map<string, AssetInfo>;
	errors: Array<WebpackError>;
	warnings: Array<WebpackError>;
	children: Array<Compilation>;
	logging: Map<string, Array<LogEntry>>;
	dependencyFactories: Map<
		{ new (...args: Array<any>): Dependency },
		ModuleFactory
	>;
	dependencyTemplates: DependencyTemplates;
	childrenCounters: {};
	usedChunkIds: Set<string | number>;
	usedModuleIds: Set<number>;
	needAdditionalPass: boolean;
	builtModules: WeakSet<Module>;
	emittedAssets: Set<string>;
	comparedForEmitAssets: Set<string>;
	fileDependencies: LazySet<string>;
	contextDependencies: LazySet<string>;
	missingDependencies: LazySet<string>;
	buildDependencies: LazySet<string>;
	compilationDependencies: { add: (item: any) => LazySet<string> };
	getStats: () => StatsClass;
	createStatsOptions: (optionsOrPreset: any, context: {}) => {};
	createStatsFactory: (options: any) => StatsFactory;
	createStatsPrinter: (options: any) => StatsPrinter;
	getLogger: (name: string | (() => string)) => WebpackLogger;
	addModule: (
		module: Module,
		callback: (err: WebpackError, result: Module) => void
	) => void;

	/**
	 * Fetches a module from a compilation by its identifier
	 */
	getModule: (module: Module) => Module;

	/**
	 * Attempts to search for a module by its identifier
	 */
	findModule: (identifier: string) => Module;

	/**
	 * Schedules a build of the module object
	 */
	buildModule: (
		module: Module,
		callback: (err: WebpackError, result: Module) => void
	) => void;
	processModuleDependencies: (
		module: Module,
		callback: (err: WebpackError, result: Module) => void
	) => void;
	handleModuleCreation: (
		__0: HandleModuleCreationOptions,
		callback: (err: WebpackError, result: Module) => void
	) => void;
	factorizeModule: (
		options: FactorizeModuleOptions,
		callback: (err: WebpackError, result: Module) => void
	) => void;
	addModuleChain: (
		context: string,
		dependency: Dependency,
		callback: (err: WebpackError, result: Module) => void
	) => void;
	addEntry: (
		context: string,
		entry: EntryDependency,
		optionsOrName:
			| string
			| ({ name: string } & Pick<
					EntryDescriptionNormalized,
					"dependOn" | "filename" | "library"
			  >),
		callback: (err: WebpackError, result: Module) => void
	) => void;
	rebuildModule: (
		module: Module,
		callback: (err: WebpackError, result: Module) => void
	) => void;
	finish: (callback: any) => void;
	unseal: () => void;
	seal: (callback: (err: WebpackError) => void) => void;
	reportDependencyErrorsAndWarnings: (
		module: Module,
		blocks: Array<DependenciesBlock>
	) => void;
	codeGeneration: () => Map<any, any>;
	processRuntimeRequirements: (entrypoints: Iterable<Entrypoint>) => void;
	addRuntimeModule: (chunk: Chunk, module: RuntimeModule) => void;
	addChunkInGroup: (
		groupOptions: string | (RawChunkGroupOptions & { name: string }),
		module: Module,
		loc: SyntheticDependencyLocation | RealDependencyLocation,
		request: string
	) => ChunkGroup;

	/**
	 * This method first looks to see if a name is provided for a new chunk,
	 * and first looks to see if any named chunks already exist and reuse that chunk instead.
	 */
	addChunk: (name: string) => Chunk;
	assignDepth: (module: Module) => void;
	getDependencyReferencedExports: (
		dependency: Dependency
	) => Array<Array<string>>;
	removeReasonsOfDependencyBlock: (
		module: Module,
		block: DependenciesBlockLike
	) => void;
	patchChunksAfterReasonRemoval: (module: Module, chunk: Chunk) => void;
	removeChunkFromDependencies: (block: DependenciesBlock, chunk: Chunk) => void;
	sortItemsWithChunkIds: () => void;
	summarizeDependencies: () => void;
	createModuleHashes: () => void;
	createHash: () => void;
	fullHash: string;
	hash: string;
	modifyHash: (update: string) => void;
	emitAsset: (file: string, source: Source, assetInfo: AssetInfo) => void;
	updateAsset: (
		file: string,
		newSourceOrFunction: Source | ((arg0: Source) => Source),
		assetInfoUpdateOrFunction: AssetInfo | ((arg0: AssetInfo) => AssetInfo)
	) => void;
	getAssets: () => Array<Asset>;
	getAsset: (name: string) => Asset;
	clearAssets: () => void;
	createModuleAssets: () => void;
	getRenderManifest: (
		options: RenderManifestOptions
	) => Array<RenderManifestEntry>;
	createChunkAssets: (callback: (err: WebpackError) => void) => void;
	getPath: (
		filename: string | ((arg0: PathData, arg1: AssetInfo) => string),
		data: PathData
	) => string;
	getPathWithInfo: (
		filename: string | ((arg0: PathData, arg1: AssetInfo) => string),
		data: PathData
	) => { path: string; info: AssetInfo };
	getAssetPath: (
		filename: string | ((arg0: PathData, arg1: AssetInfo) => string),
		data: PathData
	) => string;
	getAssetPathWithInfo: (
		filename: string | ((arg0: PathData, arg1: AssetInfo) => string),
		data: PathData
	) => { path: string; info: AssetInfo };

	/**
	 * This function allows you to run another instance of webpack inside of webpack however as
	 * a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
	 * from parent (or top level compiler) and creates a child Compilation
	 */
	createChildCompiler: (
		name: string,
		outputOptions: OutputNormalized,
		plugins: Array<Plugin>
	) => Compiler;
	checkConstraints: () => void;
}
interface CompilationHooksObjectAsyncWebAssemblyModulesPlugin {
	renderModuleContent: SyncWaterfallHook<
		[Source, Module, RenderContextObjectAsyncWebAssemblyModulesPlugin]
	>;
}
interface CompilationHooksObjectJavascriptModulesPlugin {
	renderModuleContent: SyncWaterfallHook<
		[Source, Module, RenderContextObjectJavascriptModulesPlugin]
	>;
	renderModuleContainer: SyncWaterfallHook<
		[Source, Module, RenderContextObjectJavascriptModulesPlugin]
	>;
	renderModulePackage: SyncWaterfallHook<
		[Source, Module, RenderContextObjectJavascriptModulesPlugin]
	>;
	renderChunk: SyncWaterfallHook<
		[Source, RenderContextObjectJavascriptModulesPlugin]
	>;
	renderMain: SyncWaterfallHook<
		[Source, RenderContextObjectJavascriptModulesPlugin]
	>;
	render: SyncWaterfallHook<
		[Source, RenderContextObjectJavascriptModulesPlugin]
	>;
	renderRequire: SyncWaterfallHook<[string, RenderBootstrapContext]>;
	chunkHash: SyncHook<[Chunk, Hash, ChunkHashContext], void>;
}
interface CompilationParams {
	normalModuleFactory: NormalModuleFactory;
	contextModuleFactory: ContextModuleFactory;
}
declare class Compiler {
	constructor(context: string);
	hooks: Readonly<{
		initialize: SyncHook<[], void>;
		shouldEmit: SyncBailHook<[Compilation], boolean>;
		done: AsyncSeriesHook<[StatsClass]>;
		afterDone: SyncHook<[StatsClass], void>;
		additionalPass: AsyncSeriesHook<[]>;
		beforeRun: AsyncSeriesHook<[Compiler]>;
		run: AsyncSeriesHook<[Compiler]>;
		emit: AsyncSeriesHook<[Compilation]>;
		assetEmitted: AsyncSeriesHook<[string, AssetEmittedInfo]>;
		afterEmit: AsyncSeriesHook<[Compilation]>;
		thisCompilation: SyncHook<[Compilation, CompilationParams], void>;
		compilation: SyncHook<[Compilation, CompilationParams], void>;
		normalModuleFactory: SyncHook<[NormalModuleFactory], void>;
		contextModuleFactory: SyncHook<[ContextModuleFactory], void>;
		beforeCompile: AsyncSeriesHook<[CompilationParams]>;
		compile: SyncHook<[CompilationParams], void>;
		make: AsyncParallelHook<[Compilation]>;
		afterCompile: AsyncSeriesHook<[Compilation]>;
		watchRun: AsyncSeriesHook<[Compiler]>;
		failed: SyncHook<[Error], void>;
		invalid: SyncHook<[string, string], void>;
		watchClose: SyncHook<[], void>;
		infrastructureLog: SyncBailHook<[string, string, Array<any>], true>;
		environment: SyncHook<[], void>;
		afterEnvironment: SyncHook<[], void>;
		afterPlugins: SyncHook<[Compiler], void>;
		afterResolvers: SyncHook<[Compiler], void>;
		entryOption: SyncBailHook<
			[string, (() => Promise<EntryStaticNormalized>) | EntryStaticNormalized],
			boolean
		>;
	}>;
	name: string;
	parentCompilation: Compilation;
	root: Compiler;
	outputPath: string;
	outputFileSystem: OutputFileSystem;
	intermediateFileSystem: InputFileSystem &
		OutputFileSystem &
		IntermediateFileSystemExtras;
	inputFileSystem: InputFileSystem;
	watchFileSystem: any;
	recordsInputPath: string;
	recordsOutputPath: string;
	records: {};
	managedPaths: Set<string>;
	immutablePaths: Set<string>;
	modifiedFiles: Set<string>;
	removedFiles: Set<string>;
	fileTimestamps: Map<string, FileSystemInfoEntry>;
	contextTimestamps: Map<string, FileSystemInfoEntry>;
	resolverFactory: ResolverFactory;
	infrastructureLogger: any;
	options: WebpackOptionsNormalized;
	context: string;
	requestShortener: RequestShortener;
	cache: Cache;
	compilerPath: string;
	running: boolean;
	watchMode: boolean;
	getInfrastructureLogger: (name: string | (() => string)) => WebpackLogger;
	watch: (
		watchOptions: WatchOptions,
		handler: CallbackFunctionCompiler<StatsClass>
	) => Watching;
	run: (callback: CallbackFunctionCompiler<StatsClass>) => void;
	runAsChild: (
		callback: (
			err: Error,
			entries: Array<Chunk>,
			compilation: Compilation
		) => any
	) => void;
	purgeInputFileSystem: () => void;
	emitAssets: (
		compilation: Compilation,
		callback: CallbackFunctionCompiler<void>
	) => void;
	emitRecords: (callback: CallbackFunctionCompiler<void>) => void;
	readRecords: (callback: CallbackFunctionCompiler<void>) => void;
	createChildCompiler: (
		compilation: Compilation,
		compilerName: string,
		compilerIndex: number,
		outputOptions: OutputNormalized,
		plugins: Array<WebpackPluginInstance>
	) => Compiler;
	isChild: () => boolean;
	createCompilation: () => Compilation;
	newCompilation: (params: CompilationParams) => Compilation;
	createNormalModuleFactory: () => NormalModuleFactory;
	createContextModuleFactory: () => ContextModuleFactory;
	newCompilationParams: () => {
		normalModuleFactory: NormalModuleFactory;
		contextModuleFactory: ContextModuleFactory;
	};
	compile: (callback: CallbackFunctionCompiler<Compilation>) => void;
	close: (callback: CallbackFunctionCompiler<void>) => void;
}
declare class ContextExclusionPlugin {
	constructor(negativeMatcher: RegExp);
	negativeMatcher: RegExp;

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
}
interface ContextModuleFactory extends ModuleFactory {
	hooks: Readonly<{
		beforeResolve: AsyncSeriesWaterfallHook<[any]>;
		afterResolve: AsyncSeriesWaterfallHook<[any]>;
		contextModuleFiles: SyncWaterfallHook<[Array<string>]>;
		alternatives: AsyncSeriesWaterfallHook<[Array<any>]>;
	}>;
	resolverFactory: any;
	resolveDependencies: (fs: any, options: any, callback: any) => any;
}
declare class ContextReplacementPlugin {
	constructor(
		resourceRegExp: any,
		newContentResource: any,
		newContentRecursive: any,
		newContentRegExp: any
	);
	resourceRegExp: any;
	newContentCallback: any;
	newContentResource: any;
	newContentCreateContextMap: any;
	newContentRecursive: any;
	newContentRegExp: any;
	apply: (compiler: any) => void;
}
interface CustomParams {
	keyword: string;
}
declare class DefinePlugin {
	/**
	 * Create a new define plugin
	 */
	constructor(
		definitions: Record<
			string,
			| string
			| number
			| Function
			| RegExp
			| Record<string, string | number | Function | RegExp>
			| RuntimeValue
		>
	);
	definitions: Record<
		string,
		| string
		| number
		| Function
		| RegExp
		| Record<string, string | number | Function | RegExp>
		| RuntimeValue
	>;

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
	static runtimeValue: (fn: any, fileDependencies: any) => RuntimeValue;
}
declare class DelegatedPlugin {
	constructor(options: any);
	options: any;

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
}
declare abstract class DependenciesBlock {
	dependencies: Array<Dependency>;
	blocks: Array<AsyncDependenciesBlock>;

	/**
	 * Adds a DependencyBlock to DependencyBlock relationship.
	 * This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)
	 */
	addBlock: (block: AsyncDependenciesBlock) => void;
	addDependency: (dependency: Dependency) => void;
	removeDependency: (dependency: Dependency) => void;

	/**
	 * Removes all dependencies and blocks
	 */
	clearDependenciesAndBlocks: () => void;
	updateHash: (hash: Hash, chunkGraph: ChunkGraph) => void;
	serialize: (__0: { write: any }) => void;
	deserialize: (__0: { read: any }) => void;
}
interface DependenciesBlockLike {
	dependencies: Array<Dependency>;
	blocks: Array<AsyncDependenciesBlock>;
}
interface DependenciesParams {
	property: string;
	missingProperty: string;
	depsCount: number;
	deps: string;
}
declare class Dependency {
	constructor();
	weak: boolean;
	optional: boolean;
	loc: SyntheticDependencyLocation | RealDependencyLocation;
	type: string;
	getResourceIdentifier: () => string;
	getReference: (moduleGraph: ModuleGraph) => never;

	/**
	 * Returns list of exports referenced by this dependency
	 */
	getReferencedExports: (moduleGraph: ModuleGraph) => Array<Array<string>>;
	getCondition: (moduleGraph: ModuleGraph) => () => boolean;

	/**
	 * Returns the exported names
	 */
	getExports: (moduleGraph: ModuleGraph) => ExportsSpec;

	/**
	 * Returns warnings
	 */
	getWarnings: (moduleGraph: ModuleGraph) => Array<WebpackError>;

	/**
	 * Returns errors
	 */
	getErrors: (moduleGraph: ModuleGraph) => Array<WebpackError>;

	/**
	 * Update the hash
	 */
	updateHash: (hash: Hash, chunkGraph: ChunkGraph) => void;

	/**
	 * implement this method to allow the occurrence order plugin to count correctly
	 */
	getNumberOfIdOccurrences: () => number;
	serialize: (__0: { write: any }) => void;
	deserialize: (__0: { read: any }) => void;
	module: any;
	disconnect: any;
	static NO_EXPORTS_REFERENCED: Array<any>;
	static NS_OBJECT_REFERENCED: Array<Array<any>>;
	static DEFAULT_EXPORT_REFERENCED: Array<Array<string>>;
}
interface DependencyTemplate {
	apply: (
		dependency: Dependency,
		source: ReplaceSource,
		templateContext: DependencyTemplateContext
	) => void;
}
interface DependencyTemplateContext {
	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the requirements for runtime
	 */
	runtimeRequirements: Set<string>;

	/**
	 * current module
	 */
	module: Module;

	/**
	 * mutable array of init fragments for the current module
	 */
	initFragments: Array<InitFragment>;
}
interface DependencyTemplates {
	get: (dependency: {
		new (...args: Array<any>): Dependency;
	}) => DependencyTemplate;
	set: (
		dependency: { new (...args: Array<any>): Dependency },
		dependencyTemplate: DependencyTemplate
	) => void;
	updateHash: (part: string) => void;
	getHash: () => string;
	clone: () => DependencyTemplates;
}
declare class DeterministicModuleIdsPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}

/**
 * Options for the webpack-dev-server.
 */
interface DevServer {
	[index: string]: any;
}
declare class DllPlugin {
	constructor(options: DllPluginOptions);
	options: {
		entryOnly: boolean;
		/**
		 * Context of requests in the manifest file (defaults to the webpack context).
		 */
		context?: string;
		/**
		 * If true, manifest json file (output) will be formatted.
		 */
		format?: boolean;
		/**
		 * Name of the exposed dll function (external name, use value of 'output.library').
		 */
		name?: string;
		/**
		 * Absolute path to the manifest json file (output).
		 */
		path: string;
		/**
		 * Type of the dll bundle (external type, use value of 'output.libraryTarget').
		 */
		type?: string;
	};
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface DllPluginOptions {
	/**
	 * Context of requests in the manifest file (defaults to the webpack context).
	 */
	context?: string;

	/**
	 * If true, only entry points will be exposed (default: true).
	 */
	entryOnly?: boolean;

	/**
	 * If true, manifest json file (output) will be formatted.
	 */
	format?: boolean;

	/**
	 * Name of the exposed dll function (external name, use value of 'output.library').
	 */
	name?: string;

	/**
	 * Absolute path to the manifest json file (output).
	 */
	path: string;

	/**
	 * Type of the dll bundle (external type, use value of 'output.libraryTarget').
	 */
	type?: string;
}
declare class DllReferencePlugin {
	constructor(
		options:
			| {
					/**
					 * Context of requests in the manifest (or content property) as absolute path.
					 */
					context?: string;
					/**
					 * Extensions used to resolve modules in the dll bundle (only used when using 'scope').
					 */
					extensions?: Array<string>;
					/**
					 * An object containing content and name or a string to the absolute path of the JSON manifest to be loaded upon compilation.
					 */
					manifest: string | DllReferencePluginOptionsManifest;
					/**
					 * The name where the dll is exposed (external name, defaults to manifest.name).
					 */
					name?: string;
					/**
					 * Prefix which is used for accessing the content of the dll.
					 */
					scope?: string;
					/**
					 * How the dll is exposed (libraryTarget, defaults to manifest.type).
					 */
					sourceType?:
						| "var"
						| "assign"
						| "this"
						| "window"
						| "global"
						| "commonjs"
						| "commonjs2"
						| "commonjs-module"
						| "amd"
						| "amd-require"
						| "umd"
						| "umd2"
						| "jsonp";
					/**
					 * The way how the export of the dll bundle is used.
					 */
					type?: "object" | "require";
			  }
			| {
					/**
					 * The mappings from request to module info.
					 */
					content: DllReferencePluginOptionsContent;
					/**
					 * Context of requests in the manifest (or content property) as absolute path.
					 */
					context?: string;
					/**
					 * Extensions used to resolve modules in the dll bundle (only used when using 'scope').
					 */
					extensions?: Array<string>;
					/**
					 * The name where the dll is exposed (external name).
					 */
					name: string;
					/**
					 * Prefix which is used for accessing the content of the dll.
					 */
					scope?: string;
					/**
					 * How the dll is exposed (libraryTarget).
					 */
					sourceType?:
						| "var"
						| "assign"
						| "this"
						| "window"
						| "global"
						| "commonjs"
						| "commonjs2"
						| "commonjs-module"
						| "amd"
						| "amd-require"
						| "umd"
						| "umd2"
						| "jsonp";
					/**
					 * The way how the export of the dll bundle is used.
					 */
					type?: "object" | "require";
			  }
	);
	options:
		| {
				/**
				 * Context of requests in the manifest (or content property) as absolute path.
				 */
				context?: string;
				/**
				 * Extensions used to resolve modules in the dll bundle (only used when using 'scope').
				 */
				extensions?: Array<string>;
				/**
				 * An object containing content and name or a string to the absolute path of the JSON manifest to be loaded upon compilation.
				 */
				manifest: string | DllReferencePluginOptionsManifest;
				/**
				 * The name where the dll is exposed (external name, defaults to manifest.name).
				 */
				name?: string;
				/**
				 * Prefix which is used for accessing the content of the dll.
				 */
				scope?: string;
				/**
				 * How the dll is exposed (libraryTarget, defaults to manifest.type).
				 */
				sourceType?:
					| "var"
					| "assign"
					| "this"
					| "window"
					| "global"
					| "commonjs"
					| "commonjs2"
					| "commonjs-module"
					| "amd"
					| "amd-require"
					| "umd"
					| "umd2"
					| "jsonp";
				/**
				 * The way how the export of the dll bundle is used.
				 */
				type?: "object" | "require";
		  }
		| {
				/**
				 * The mappings from request to module info.
				 */
				content: DllReferencePluginOptionsContent;
				/**
				 * Context of requests in the manifest (or content property) as absolute path.
				 */
				context?: string;
				/**
				 * Extensions used to resolve modules in the dll bundle (only used when using 'scope').
				 */
				extensions?: Array<string>;
				/**
				 * The name where the dll is exposed (external name).
				 */
				name: string;
				/**
				 * Prefix which is used for accessing the content of the dll.
				 */
				scope?: string;
				/**
				 * How the dll is exposed (libraryTarget).
				 */
				sourceType?:
					| "var"
					| "assign"
					| "this"
					| "window"
					| "global"
					| "commonjs"
					| "commonjs2"
					| "commonjs-module"
					| "amd"
					| "amd-require"
					| "umd"
					| "umd2"
					| "jsonp";
				/**
				 * The way how the export of the dll bundle is used.
				 */
				type?: "object" | "require";
		  };
	apply: (compiler: any) => void;
}

/**
 * The mappings from request to module info.
 */
interface DllReferencePluginOptionsContent {
	[index: string]: {
		/**
		 * Meta information about the module.
		 */
		buildMeta?: { [index: string]: any };
		/**
		 * Information about the provided exports of the module.
		 */
		exports?: true | Array<string>;
		/**
		 * Module ID.
		 */
		id: string | number;
	};
}

/**
 * An object containing content, name and type.
 */
interface DllReferencePluginOptionsManifest {
	/**
	 * The mappings from request to module info.
	 */
	content: DllReferencePluginOptionsContent;

	/**
	 * The name where the dll is exposed (external name).
	 */
	name?: string;

	/**
	 * The type how the dll is exposed (external type).
	 */
	type?:
		| "var"
		| "assign"
		| "this"
		| "window"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp";
}
interface Effect {
	type: string;
	value: any;
}
declare class EnableLibraryPlugin {
	constructor(
		type:
			| "var"
			| "module"
			| "assign"
			| "this"
			| "window"
			| "self"
			| "global"
			| "commonjs"
			| "commonjs2"
			| "commonjs-module"
			| "amd"
			| "amd-require"
			| "umd"
			| "umd2"
			| "jsonp"
			| "system"
	);
	type:
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";
	apply: (compiler: Compiler) => void;
	static checkEnabled: (
		compiler: Compiler,
		type:
			| "var"
			| "module"
			| "assign"
			| "this"
			| "window"
			| "self"
			| "global"
			| "commonjs"
			| "commonjs2"
			| "commonjs-module"
			| "amd"
			| "amd-require"
			| "umd"
			| "umd2"
			| "jsonp"
			| "system"
	) => void;
}
interface EntryData {
	/**
	 * dependencies of the entrypoint
	 */
	dependencies: Array<EntryDependency>;

	/**
	 * options of the entrypoint
	 */
	options: { name: string } & Pick<
		EntryDescriptionNormalized,
		"dependOn" | "filename" | "library"
	>;
}
interface EntryDependency extends ModuleDependency {}

/**
 * An object with entry point description.
 */
interface EntryDescription {
	/**
	 * The entrypoints that the current entrypoint depend on. They must be loaded when this entrypoint is loaded.
	 */
	dependOn?: string | [string, string];

	/**
	 * Specifies the name of each output file on disk. You must **not** specify an absolute path here! The `output.path` option determines the location on disk the files are written to, filename is used solely for naming the individual files.
	 */
	filename?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * Module(s) that are loaded upon startup.
	 */
	import: string | [string, string];

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;
}

/**
 * An object with entry point description.
 */
interface EntryDescriptionNormalized {
	/**
	 * The entrypoints that the current entrypoint depend on. They must be loaded when this entrypoint is loaded.
	 */
	dependOn?: [string, string];

	/**
	 * Specifies the name of each output file on disk. You must **not** specify an absolute path here! The `output.path` option determines the location on disk the files are written to, filename is used solely for naming the individual files.
	 */
	filename?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * Module(s) that are loaded upon startup. The last one is exported.
	 */
	import: [string, string];

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;
}

/**
 * Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.
 */
interface EntryObject {
	[index: string]: string | [string, string] | EntryDescription;
}
declare class EntryPlugin {
	/**
	 * An entry plugin which will handle
	 * creation of the EntryDependency
	 */
	constructor(
		context: string,
		entry: string,
		options:
			| string
			| ({ name: string } & Pick<
					EntryDescriptionNormalized,
					"dependOn" | "filename" | "library"
			  >)
	);
	context: string;
	entry: string;
	options:
		| string
		| ({ name: string } & Pick<
				EntryDescriptionNormalized,
				"dependOn" | "filename" | "library"
		  >);
	apply: (compiler: Compiler) => void;
	static createDependency: (
		entry: string,
		options:
			| string
			| ({ name: string } & Pick<
					EntryDescriptionNormalized,
					"dependOn" | "filename" | "library"
			  >)
	) => EntryDependency;
}

/**
 * Multiple entry bundles are created. The key is the entry name. The value is an entry description object.
 */
interface EntryStaticNormalized {
	[index: string]: EntryDescriptionNormalized;
}

/**
 * Entrypoint serves as an encapsulation primitive for chunks that are
 * a part of a single ChunkGroup. They represent all bundles that need to be loaded for a
 * single instance of a page. Multi-page application architectures will typically yield multiple Entrypoint objects
 * inside of the compilation, whereas a Single Page App may only contain one with many lazy-loaded chunks.
 */
interface Entrypoint extends ChunkGroup {
	runtimeChunk: Chunk;

	/**
	 * Sets the runtimeChunk for an entrypoint.
	 */
	setRuntimeChunk: (chunk: Chunk) => void;

	/**
	 * Fetches the chunk reference containing the webpack bootstrap code
	 */
	getRuntimeChunk: () => Chunk;
}
interface EnumParams {
	allowedValues: Array<any>;
}
declare class EnvironmentPlugin {
	constructor(...keys: Array<any>);
	keys: Array<any>;
	defaultValues: any;
	apply: (compiler: Compiler) => void;
}
interface ErrorObject {
	keyword: string;
	dataPath: string;
	schemaPath: string;
	params:
		| RefParams
		| LimitParams
		| AdditionalPropertiesParams
		| DependenciesParams
		| FormatParams
		| ComparisonParams
		| MultipleOfParams
		| PatternParams
		| RequiredParams
		| TypeParams
		| UniqueItemsParams
		| CustomParams
		| PatternRequiredParams
		| PropertyNamesParams
		| IfParams
		| SwitchParams
		| NoParams
		| EnumParams;
	propertyName?: string;
	message?: string;
	schema?: any;
	parentSchema?: {};
	data?: any;
}
interface Etag {
	toString: () => string;
}
declare class EvalDevToolModulePlugin {
	constructor(options: any);
	namespace: any;
	sourceUrlComment: any;
	moduleFilenameTemplate: any;
	apply: (compiler: Compiler) => void;
}
declare class EvalSourceMapDevToolPlugin {
	constructor(options: any);
	sourceMapComment: any;
	moduleFilenameTemplate: any;
	namespace: any;
	options: any;
	apply: (compiler: Compiler) => void;
}

/**
 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
 */
interface Experiments {
	/**
	 * Allow module type 'asset' to generate assets.
	 */
	asset?: boolean;

	/**
	 * Support WebAssembly as asynchronous EcmaScript Module.
	 */
	asyncWebAssembly?: boolean;

	/**
	 * Allow 'import/export' syntax to import async modules.
	 */
	importAsync?: boolean;

	/**
	 * Allow 'import/export await' syntax to import async modules.
	 */
	importAwait?: boolean;

	/**
	 * Support .mjs files as way to define strict ESM file (node.js).
	 */
	mjs?: boolean;

	/**
	 * Allow output javascript files as module source type.
	 */
	outputModule?: boolean;

	/**
	 * Support WebAssembly as synchronous EcmaScript Module (outdated).
	 */
	syncWebAssembly?: boolean;

	/**
	 * Allow using top-level-await in EcmaScript Modules.
	 */
	topLevelAwait?: boolean;
}
interface ExportInfo {
	name: string;
	usedName: string | typeof SKIP_OVER_NAME;
	used: 0 | 1 | 2 | 3 | 4;

	/**
	 * true: it is provided
	 * false: it is not provided
	 * null: only the runtime knows if it is provided
	 * undefined: it was not determined if it is provided
	 */
	provided: boolean;

	/**
	 * true: it can be mangled
	 * false: is can not be mangled
	 * undefined: it was not determined if it can be mangled
	 */
	canMangleProvide: boolean;

	/**
	 * true: it can be mangled
	 * false: is can not be mangled
	 * undefined: it was not determined if it can be mangled
	 */
	canMangleUse: boolean;
	exportsInfoOwned: boolean;
	exportsInfo: ExportsInfo;
	canMangle: boolean;
	getUsedName: (fallbackName: any) => any;
	createNestedExportsInfo: () => ExportsInfo;
	getNestedExportsInfo: () => ExportsInfo;
	getUsedInfo: () =>
		| "used"
		| "no usage info"
		| "maybe used (runtime-defined)"
		| "unused"
		| "only properties used";
	getProvidedInfo: () =>
		| "no provided info"
		| "maybe provided (runtime-defined)"
		| "provided"
		| "not provided";
	getRenameInfo: () => string;
}
interface ExportSpec {
	/**
	 * the name of the export
	 */
	name: string;

	/**
	 * can the export be renamed (defaults to true)
	 */
	canMangle?: boolean;

	/**
	 * nested exports
	 */
	exports?: Array<string | ExportSpec>;

	/**
	 * when reexported: from which module
	 */
	from?: Module;

	/**
	 * when reexported: from which export
	 */
	export?: Array<string>;
}
interface ExportsInfo {
	ownedExports: Iterable<ExportInfo>;
	exports: Iterable<ExportInfo>;
	orderedExports: Iterable<ExportInfo>;
	otherExportsInfo: ExportInfo;
	setRedirectNamedTo: (exportsInfo: any) => void;
	setHasProvideInfo: () => void;
	setHasUseInfo: () => void;
	getExportInfo: (name: string) => ExportInfo;
	getReadOnlyExportInfo: (name: string) => ExportInfo;
	getNestedExportsInfo: (name: Array<string>) => ExportsInfo;
	setUnknownExportsProvided: (canMangle: boolean) => boolean;
	setUsedInUnknownWay: () => boolean;
	setAllKnownExportsUsed: () => boolean;
	setUsedForSideEffectsOnly: () => boolean;
	isUsed: () => boolean;
	getUsedExports: () => any;
	getProvidedExports: () => true | Array<string>;
	isExportProvided: (name: string | Array<string>) => boolean;
	isExportUsed: (name: string | Array<string>) => 0 | 1 | 2 | 3 | 4;
	getUsedName: (name: string | Array<string>) => string | false | Array<string>;
	getRestoreProvidedData: () => any;
	restoreProvided: (__0: {
		otherProvided: any;
		otherCanMangleProvide: any;
		exports: any;
	}) => void;
}
interface ExportsSpec {
	/**
	 * exported names, true for unknown exports or null for no exports
	 */
	exports: true | Array<string | ExportSpec>;

	/**
	 * can the export be renamed (defaults to true)
	 */
	canMangle?: boolean;

	/**
	 * module on which the result depends on
	 */
	dependencies?: Array<Module>;
}
declare class ExternalsPlugin {
	constructor(type: any, externals: any);
	type: any;
	externals: any;
	apply: (compiler: Compiler) => void;
}
interface FactorizeModuleOptions {
	currentProfile: ModuleProfile;
	factory: ModuleFactory;
	dependencies: Array<Dependency>;
	originModule: Module;
	context?: string;
}
interface FallbackCacheGroup {
	minSize: Record<string, number>;
	maxAsyncSize: Record<string, number>;
	maxInitialSize: Record<string, number>;
	automaticNameDelimiter: string;
}
declare class FetchCompileWasmPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}

/**
 * Options object for persistent file-based caching.
 */
interface FileCacheOptions {
	/**
	 * Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').
	 */
	buildDependencies?: { [index: string]: Array<string> };

	/**
	 * Base directory for the cache (defaults to node_modules/.cache/webpack).
	 */
	cacheDirectory?: string;

	/**
	 * Locations for the cache (defaults to cacheDirectory / name).
	 */
	cacheLocation?: string;

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	hashAlgorithm?: string;

	/**
	 * Time in ms after which idle period the cache storing should happen (only for store: 'pack' or 'idle').
	 */
	idleTimeout?: number;

	/**
	 * Time in ms after which idle period the initial cache storing should happen (only for store: 'pack' or 'idle').
	 */
	idleTimeoutForInitialStore?: number;

	/**
	 * List of paths that are managed by a package manager and contain a version or hash in it's path so all files are immutable.
	 */
	immutablePaths?: Array<string>;

	/**
	 * List of paths that are managed by a package manager and can be trusted to not being modified otherwise.
	 */
	managedPaths?: Array<string>;

	/**
	 * Name for the cache. Different names will lead to different coexisting caches.
	 */
	name?: string;

	/**
	 * When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).
	 */
	store?: "pack";

	/**
	 * Filesystem caching.
	 */
	type: "filesystem";

	/**
	 * Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.
	 */
	version?: string;
}

/**
 * Used to access information about the filesystem in a cached way
 */
interface FileSystemInfo {
	fs: InputFileSystem;
	logger: WebpackLogger;
	fileTimestampQueue: AsyncQueue<string, string, FileSystemInfoEntry>;
	fileHashQueue: AsyncQueue<string, string, string>;
	contextTimestampQueue: AsyncQueue<string, string, FileSystemInfoEntry>;
	contextHashQueue: AsyncQueue<string, string, string>;
	managedItemQueue: AsyncQueue<string, string, string>;
	managedItemDirectoryQueue: AsyncQueue<string, string, Set<string>>;
	managedPaths: Array<string>;
	managedPathsWithSlash: Array<string>;
	immutablePaths: Array<string>;
	immutablePathsWithSlash: Array<string>;
	addFileTimestamps: (map: Map<string, FileSystemInfoEntry | "ignore">) => void;
	addContextTimestamps: (
		map: Map<string, FileSystemInfoEntry | "ignore">
	) => void;
	getFileTimestamp: (
		path: string,
		callback: (arg0: WebpackError, arg1: FileSystemInfoEntry | "ignore") => void
	) => void;
	getContextTimestamp: (
		path: string,
		callback: (arg0: WebpackError, arg1: FileSystemInfoEntry | "ignore") => void
	) => void;
	getFileHash: (
		path: string,
		callback: (arg0: WebpackError, arg1: string) => void
	) => void;
	getContextHash: (
		path: string,
		callback: (arg0: WebpackError, arg1: string) => void
	) => void;
	resolveBuildDependencies: (
		context: string,
		deps: Iterable<string>,
		callback: (arg0: Error, arg1: ResolveBuildDependenciesResult) => void
	) => void;
	checkResolveResultsValid: (
		resolveResults: Map<string, string>,
		callback: (arg0: Error, arg1: boolean) => void
	) => void;
	createSnapshot: (
		startTime: number,
		files: Iterable<string>,
		directories: Iterable<string>,
		missing: Iterable<string>,
		options: {
			/**
			 * should use hash to snapshot
			 */
			hash?: boolean;
		},
		callback: (arg0: WebpackError, arg1: Snapshot) => void
	) => void;
	mergeSnapshots: (snapshot1: Snapshot, snapshot2: Snapshot) => Snapshot;
	checkSnapshotValid: (
		snapshot: Snapshot,
		callback: (arg0: WebpackError, arg1: boolean) => void
	) => void;
	getDeprecatedFileTimestamps: () => Map<any, any>;
	getDeprecatedContextTimestamps: () => Map<any, any>;
}

/**
 * istanbul ignore next
 */
interface FileSystemInfoEntry {
	safeTime: number;
	timestamp?: number;
	timestampHash?: string;
}
interface FormatParams {
	format: string;
}
interface GenerateContext {
	/**
	 * mapping from dependencies to templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the requirements for runtime
	 */
	runtimeRequirements: Set<string>;

	/**
	 * which kind of code should be generated
	 */
	type: string;
}
declare class Generator {
	constructor();
	getTypes: (module: NormalModule) => Set<string>;
	getSize: (module: NormalModule, type: string) => number;
	generate: (module: NormalModule, __1: GenerateContext) => Source;
	updateHash: (hash: Hash, __1: UpdateHashContext) => void;
	static byType: (map: any) => ByTypeGenerator;
}
interface HMRJavascriptParserHooks {
	hotAcceptCallback: SyncBailHook<[any, Array<string>], void>;
	hotAcceptWithoutCallback: SyncBailHook<[any, Array<string>], void>;
}
interface HandleModuleCreationOptions {
	factory: ModuleFactory;
	dependencies: Array<Dependency>;
	originModule: Module;
	context?: string;

	/**
	 * recurse into dependencies of the created module
	 */
	recursive?: boolean;
}
declare class Hash {
	constructor();

	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 */
	update: (data: string | Buffer, inputEncoding: string) => Hash;

	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 */
	digest: (encoding: string) => string | Buffer;
}
declare class HashedModuleIdsPlugin {
	constructor(options: HashedModuleIdsPluginOptions);
	options: HashedModuleIdsPluginOptions;
	apply: (compiler: any) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface HashedModuleIdsPluginOptions {
	/**
	 * The context directory for creating names.
	 */
	context?: string;

	/**
	 * The encoding to use when generating the hash, defaults to 'base64'. All encodings from Node.JS' hash.digest are supported.
	 */
	hashDigest?: "hex" | "latin1" | "base64";

	/**
	 * The prefix length of the hash digest to use, defaults to 4.
	 */
	hashDigestLength?: number;

	/**
	 * The hashing algorithm to use, defaults to 'md4'. All functions from Node.JS' crypto.createHash are supported.
	 */
	hashFunction?: string;
}
declare class HotModuleReplacementPlugin {
	constructor(options: any);
	options: any;
	multiStep: any;
	fullBuildTimeout: any;
	apply: (compiler: Compiler) => void;
	static getParserHooks: (parser: JavascriptParser) => HMRJavascriptParserHooks;
}
interface IfParams {
	failingKeyword: string;
}
declare class IgnorePlugin {
	constructor(
		options:
			| {
					/**
					 * A RegExp to test the context (directory) against.
					 */
					contextRegExp?: RegExp;
					/**
					 * A RegExp to test the request against.
					 */
					resourceRegExp?: RegExp;
			  }
			| {
					/**
					 * A filter function for resource and context.
					 */
					checkResource?: (resource: string, context: string) => boolean;
			  }
	);
	options:
		| {
				/**
				 * A RegExp to test the context (directory) against.
				 */
				contextRegExp?: RegExp;
				/**
				 * A RegExp to test the request against.
				 */
				resourceRegExp?: RegExp;
		  }
		| {
				/**
				 * A filter function for resource and context.
				 */
				checkResource?: (resource: string, context: string) => boolean;
		  };

	/**
	 * Note that if "contextRegExp" is given, both the "resourceRegExp"
	 * and "contextRegExp" have to match.
	 */
	checkIgnore: (resolveData: ResolveData) => false;
	apply: (compiler: Compiler) => void;
}

/**
 * Options for infrastructure level logging.
 */
interface InfrastructureLogging {
	/**
	 * Enable debug logging for specific loggers.
	 */
	debug?:
		| string
		| boolean
		| RegExp
		| ((value: string) => boolean)
		| Array<string | RegExp | ((value: string) => boolean)>;

	/**
	 * Log level.
	 */
	level?: "none" | "verbose" | "info" | "error" | "warn" | "log";
}
interface InitFragment {
	content: string | Source;
	stage: number;
	position: number;
	key: string;
	endContent: string | Source;
	getContent: (generateContext: GenerateContext) => string | Source;
	getEndContent: (generateContext: GenerateContext) => string | Source;
	merge: any;
}
interface InputFileSystem {
	readFile: (
		arg0: string,
		arg1: (arg0: NodeJS.ErrnoException, arg1: Buffer) => void
	) => void;
	readdir: (
		arg0: string,
		arg1: (arg0: NodeJS.ErrnoException, arg1: Array<string>) => void
	) => void;
	stat: (
		arg0: string,
		arg1: (arg0: NodeJS.ErrnoException, arg1: StatsImport) => void
	) => void;
	realpath?: (
		arg0: string,
		arg1: (arg0: NodeJS.ErrnoException, arg1: string) => void
	) => void;
	purge?: (arg0: string) => void;
	join?: (arg0: string, arg1: string) => string;
	relative?: (arg0: string, arg1: string) => string;
	dirname?: (arg0: string) => string;
}
interface IntermediateFileSystemExtras {
	mkdirSync: (arg0: string) => void;
	createWriteStream: (arg0: string) => WriteStream;
	rename: (
		arg0: string,
		arg1: string,
		arg2: (arg0: NodeJS.ErrnoException) => void
	) => void;
}
declare class JavascriptModulesPlugin {
	constructor(options: {});
	options: {};
	apply: (compiler: Compiler) => void;
	renderModule: (
		module: Module,
		renderContext: RenderContextObjectJavascriptModulesPlugin,
		hooks: CompilationHooksObjectJavascriptModulesPlugin,
		factory: boolean | "strict"
	) => Source;
	renderChunk: (
		renderContext: RenderContextObjectJavascriptModulesPlugin,
		hooks: CompilationHooksObjectJavascriptModulesPlugin
	) => Source;
	renderMain: (
		renderContext: MainRenderContext,
		hooks: CompilationHooksObjectJavascriptModulesPlugin
	) => Source;
	renderBootstrap: (
		renderContext: RenderBootstrapContext,
		hooks: CompilationHooksObjectJavascriptModulesPlugin
	) => {
		header: Array<string>;
		startup: Array<string>;
		allowInlineStartup: boolean;
	};
	renderRequire: (
		renderContext: RenderBootstrapContext,
		hooks: CompilationHooksObjectJavascriptModulesPlugin
	) => string;
	static getCompilationHooks: (
		compilation: Compilation
	) => CompilationHooksObjectJavascriptModulesPlugin;
	static getChunkFilenameTemplate: (chunk: any, outputOptions: any) => any;
	static chunkHasJs: (chunk: Chunk, chunkGraph: ChunkGraph) => boolean;
}
interface JavascriptParser extends Parser {
	hooks: Readonly<{
		evaluateTypeof: HookMap<
			SyncBailHook<[UnaryExpression], BasicEvaluatedExpression>
		>;
		evaluate: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				BasicEvaluatedExpression
			>
		>;
		evaluateIdentifier: HookMap<
			SyncBailHook<
				[ThisExpression | MemberExpression | Identifier],
				BasicEvaluatedExpression
			>
		>;
		evaluateDefinedIdentifier: HookMap<
			SyncBailHook<
				[ThisExpression | MemberExpression | Identifier],
				BasicEvaluatedExpression
			>
		>;
		evaluateCallExpressionMember: HookMap<
			SyncBailHook<
				[SimpleCallExpression | NewExpression, BasicEvaluatedExpression],
				BasicEvaluatedExpression
			>
		>;
		preStatement: SyncBailHook<
			[
				| ExpressionStatement
				| BlockStatement
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| FunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
				| ImportDeclaration
				| ExportNamedDeclaration
				| ExportDefaultDeclaration
				| ExportAllDeclaration
			],
			boolean | void
		>;
		blockPreStatement: SyncBailHook<
			[
				| ExpressionStatement
				| BlockStatement
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| FunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
				| ImportDeclaration
				| ExportNamedDeclaration
				| ExportDefaultDeclaration
				| ExportAllDeclaration
			],
			boolean | void
		>;
		statement: SyncBailHook<
			[
				| ExpressionStatement
				| BlockStatement
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| FunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
				| ImportDeclaration
				| ExportNamedDeclaration
				| ExportDefaultDeclaration
				| ExportAllDeclaration
			],
			boolean | void
		>;
		statementIf: SyncBailHook<[IfStatement], boolean | void>;
		label: HookMap<SyncBailHook<[LabeledStatement], boolean | void>>;
		import: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				string | SimpleLiteral | RegExpLiteral
			],
			boolean | void
		>;
		importSpecifier: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				string | SimpleLiteral | RegExpLiteral,
				string,
				string
			],
			boolean | void
		>;
		export: SyncBailHook<
			[
				| ExpressionStatement
				| BlockStatement
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| FunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
			],
			boolean | void
		>;
		exportImport: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				string | SimpleLiteral | RegExpLiteral
			],
			boolean | void
		>;
		exportDeclaration: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				FunctionDeclaration | VariableDeclaration | ClassDeclaration
			],
			boolean | void
		>;
		exportExpression: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				FunctionDeclaration | VariableDeclaration | ClassDeclaration
			],
			boolean | void
		>;
		exportSpecifier: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				string,
				string,
				number
			],
			boolean | void
		>;
		exportImportSpecifier: SyncBailHook<
			[
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				),
				string | SimpleLiteral | RegExpLiteral,
				string,
				string,
				number
			],
			boolean | void
		>;
		preDeclarator: SyncBailHook<
			[
				VariableDeclarator,
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				)
			],
			boolean | void
		>;
		declarator: SyncBailHook<
			[
				VariableDeclarator,
				(
					| ExpressionStatement
					| BlockStatement
					| EmptyStatement
					| DebuggerStatement
					| WithStatement
					| ReturnStatement
					| LabeledStatement
					| BreakStatement
					| ContinueStatement
					| IfStatement
					| SwitchStatement
					| ThrowStatement
					| TryStatement
					| WhileStatement
					| DoWhileStatement
					| ForStatement
					| ForInStatement
					| ForOfStatement
					| FunctionDeclaration
					| VariableDeclaration
					| ClassDeclaration
				)
			],
			boolean | void
		>;
		varDeclaration: HookMap<
			SyncBailHook<
				[FunctionDeclaration | VariableDeclaration | ClassDeclaration],
				boolean | void
			>
		>;
		varDeclarationLet: HookMap<
			SyncBailHook<
				[FunctionDeclaration | VariableDeclaration | ClassDeclaration],
				boolean | void
			>
		>;
		varDeclarationConst: HookMap<
			SyncBailHook<
				[FunctionDeclaration | VariableDeclaration | ClassDeclaration],
				boolean | void
			>
		>;
		varDeclarationVar: HookMap<
			SyncBailHook<
				[FunctionDeclaration | VariableDeclaration | ClassDeclaration],
				boolean | void
			>
		>;
		pattern: HookMap<SyncBailHook<any, any>>;
		canRename: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				boolean | void
			>
		>;
		rename: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				boolean | void
			>
		>;
		assign: HookMap<SyncBailHook<[AssignmentExpression], boolean | void>>;
		assignMemberChain: HookMap<
			SyncBailHook<[AssignmentExpression, Array<string>], boolean | void>
		>;
		typeof: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				boolean | void
			>
		>;
		importCall: SyncBailHook<
			[
				| UnaryExpression
				| ThisExpression
				| ArrayExpression
				| ObjectExpression
				| FunctionExpression
				| ArrowFunctionExpression
				| YieldExpression
				| SimpleLiteral
				| RegExpLiteral
				| UpdateExpression
				| BinaryExpression
				| AssignmentExpression
				| LogicalExpression
				| MemberExpression
				| ConditionalExpression
				| SimpleCallExpression
				| NewExpression
				| SequenceExpression
				| TemplateLiteral
				| TaggedTemplateExpression
				| ClassExpression
				| MetaProperty
				| Identifier
				| AwaitExpression
			],
			boolean | void
		>;
		topLevelAwait: SyncBailHook<
			[
				| UnaryExpression
				| ThisExpression
				| ArrayExpression
				| ObjectExpression
				| FunctionExpression
				| ArrowFunctionExpression
				| YieldExpression
				| SimpleLiteral
				| RegExpLiteral
				| UpdateExpression
				| BinaryExpression
				| AssignmentExpression
				| LogicalExpression
				| MemberExpression
				| ConditionalExpression
				| SimpleCallExpression
				| NewExpression
				| SequenceExpression
				| TemplateLiteral
				| TaggedTemplateExpression
				| ClassExpression
				| MetaProperty
				| Identifier
				| AwaitExpression
			],
			boolean | void
		>;
		call: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				boolean | void
			>
		>;
		callMemberChain: HookMap<
			SyncBailHook<
				[
					(
						| UnaryExpression
						| ThisExpression
						| ArrayExpression
						| ObjectExpression
						| FunctionExpression
						| ArrowFunctionExpression
						| YieldExpression
						| SimpleLiteral
						| RegExpLiteral
						| UpdateExpression
						| BinaryExpression
						| AssignmentExpression
						| LogicalExpression
						| MemberExpression
						| ConditionalExpression
						| SimpleCallExpression
						| NewExpression
						| SequenceExpression
						| TemplateLiteral
						| TaggedTemplateExpression
						| ClassExpression
						| MetaProperty
						| Identifier
						| AwaitExpression
					),
					Array<string>
				],
				boolean | void
			>
		>;
		memberChainOfCallMemberChain: HookMap<
			SyncBailHook<
				[
					(
						| UnaryExpression
						| ThisExpression
						| ArrayExpression
						| ObjectExpression
						| FunctionExpression
						| ArrowFunctionExpression
						| YieldExpression
						| SimpleLiteral
						| RegExpLiteral
						| UpdateExpression
						| BinaryExpression
						| AssignmentExpression
						| LogicalExpression
						| MemberExpression
						| ConditionalExpression
						| SimpleCallExpression
						| NewExpression
						| SequenceExpression
						| TemplateLiteral
						| TaggedTemplateExpression
						| ClassExpression
						| MetaProperty
						| Identifier
						| AwaitExpression
					),
					Array<string>,
					SimpleCallExpression | NewExpression,
					Array<string>
				],
				boolean | void
			>
		>;
		callMemberChainOfCallMemberChain: HookMap<
			SyncBailHook<
				[
					(
						| UnaryExpression
						| ThisExpression
						| ArrayExpression
						| ObjectExpression
						| FunctionExpression
						| ArrowFunctionExpression
						| YieldExpression
						| SimpleLiteral
						| RegExpLiteral
						| UpdateExpression
						| BinaryExpression
						| AssignmentExpression
						| LogicalExpression
						| MemberExpression
						| ConditionalExpression
						| SimpleCallExpression
						| NewExpression
						| SequenceExpression
						| TemplateLiteral
						| TaggedTemplateExpression
						| ClassExpression
						| MetaProperty
						| Identifier
						| AwaitExpression
					),
					Array<string>,
					SimpleCallExpression | NewExpression,
					Array<string>
				],
				boolean | void
			>
		>;
		new: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				boolean | void
			>
		>;
		expression: HookMap<
			SyncBailHook<
				[
					| UnaryExpression
					| ThisExpression
					| ArrayExpression
					| ObjectExpression
					| FunctionExpression
					| ArrowFunctionExpression
					| YieldExpression
					| SimpleLiteral
					| RegExpLiteral
					| UpdateExpression
					| BinaryExpression
					| AssignmentExpression
					| LogicalExpression
					| MemberExpression
					| ConditionalExpression
					| SimpleCallExpression
					| NewExpression
					| SequenceExpression
					| TemplateLiteral
					| TaggedTemplateExpression
					| ClassExpression
					| MetaProperty
					| Identifier
					| AwaitExpression
				],
				boolean | void
			>
		>;
		expressionMemberChain: HookMap<
			SyncBailHook<
				[
					(
						| UnaryExpression
						| ThisExpression
						| ArrayExpression
						| ObjectExpression
						| FunctionExpression
						| ArrowFunctionExpression
						| YieldExpression
						| SimpleLiteral
						| RegExpLiteral
						| UpdateExpression
						| BinaryExpression
						| AssignmentExpression
						| LogicalExpression
						| MemberExpression
						| ConditionalExpression
						| SimpleCallExpression
						| NewExpression
						| SequenceExpression
						| TemplateLiteral
						| TaggedTemplateExpression
						| ClassExpression
						| MetaProperty
						| Identifier
						| AwaitExpression
					),
					Array<string>
				],
				boolean | void
			>
		>;
		expressionConditionalOperator: SyncBailHook<
			[
				| UnaryExpression
				| ThisExpression
				| ArrayExpression
				| ObjectExpression
				| FunctionExpression
				| ArrowFunctionExpression
				| YieldExpression
				| SimpleLiteral
				| RegExpLiteral
				| UpdateExpression
				| BinaryExpression
				| AssignmentExpression
				| LogicalExpression
				| MemberExpression
				| ConditionalExpression
				| SimpleCallExpression
				| NewExpression
				| SequenceExpression
				| TemplateLiteral
				| TaggedTemplateExpression
				| ClassExpression
				| MetaProperty
				| Identifier
				| AwaitExpression
			],
			boolean | void
		>;
		expressionLogicalOperator: SyncBailHook<
			[
				| UnaryExpression
				| ThisExpression
				| ArrayExpression
				| ObjectExpression
				| FunctionExpression
				| ArrowFunctionExpression
				| YieldExpression
				| SimpleLiteral
				| RegExpLiteral
				| UpdateExpression
				| BinaryExpression
				| AssignmentExpression
				| LogicalExpression
				| MemberExpression
				| ConditionalExpression
				| SimpleCallExpression
				| NewExpression
				| SequenceExpression
				| TemplateLiteral
				| TaggedTemplateExpression
				| ClassExpression
				| MetaProperty
				| Identifier
				| AwaitExpression
			],
			boolean | void
		>;
		program: SyncBailHook<[Program, Array<Comment>], boolean | void>;
		finish: SyncBailHook<[Program, Array<Comment>], boolean | void>;
	}>;
	options: any;
	sourceType: "module" | "script" | "auto";
	scope: ScopeInfo;
	state: Record<string, any> & ParserStateBase;
	comments: any;
	semicolons: any;
	statementEndPos: any;
	lastStatementEndPos: any;
	statementStartPos: any;
	currentTagData: any;
	initializeEvaluating: () => void;
	getRenameIdentifier: (expr: any) => any;
	walkClass: (classy: any) => void;
	walkMethodDefinition: (methodDefinition: any) => void;
	preWalkStatements: (statements: any) => void;
	blockPreWalkStatements: (statements: any) => void;
	walkStatements: (statements: any) => void;
	preWalkStatement: (statement: any) => void;
	blockPreWalkStatement: (statement: any) => void;
	walkStatement: (statement: any) => void;
	preWalkBlockStatement: (statement: any) => void;
	walkBlockStatement: (statement: any) => void;
	walkExpressionStatement: (statement: any) => void;
	preWalkIfStatement: (statement: any) => void;
	walkIfStatement: (statement: any) => void;
	preWalkLabeledStatement: (statement: any) => void;
	walkLabeledStatement: (statement: any) => void;
	preWalkWithStatement: (statement: any) => void;
	walkWithStatement: (statement: any) => void;
	preWalkSwitchStatement: (statement: any) => void;
	walkSwitchStatement: (statement: any) => void;
	walkTerminatingStatement: (statement: any) => void;
	walkReturnStatement: (statement: any) => void;
	walkThrowStatement: (statement: any) => void;
	preWalkTryStatement: (statement: any) => void;
	walkTryStatement: (statement: any) => void;
	preWalkWhileStatement: (statement: any) => void;
	walkWhileStatement: (statement: any) => void;
	preWalkDoWhileStatement: (statement: any) => void;
	walkDoWhileStatement: (statement: any) => void;
	preWalkForStatement: (statement: any) => void;
	walkForStatement: (statement: any) => void;
	preWalkForInStatement: (statement: any) => void;
	walkForInStatement: (statement: any) => void;
	preWalkForOfStatement: (statement: any) => void;
	walkForOfStatement: (statement: any) => void;
	preWalkFunctionDeclaration: (statement: any) => void;
	walkFunctionDeclaration: (statement: any) => void;
	blockPreWalkImportDeclaration: (statement: any) => void;
	enterDeclaration: (declaration: any, onIdent: any) => void;
	blockPreWalkExportNamedDeclaration: (statement: any) => void;
	walkExportNamedDeclaration: (statement: any) => void;
	blockPreWalkExportDefaultDeclaration: (statement: any) => void;
	walkExportDefaultDeclaration: (statement: any) => void;
	blockPreWalkExportAllDeclaration: (statement: any) => void;
	preWalkVariableDeclaration: (statement: any) => void;
	blockPreWalkVariableDeclaration: (statement: any) => void;
	walkVariableDeclaration: (statement: any) => void;
	blockPreWalkClassDeclaration: (statement: any) => void;
	walkClassDeclaration: (statement: any) => void;
	preWalkSwitchCases: (switchCases: any) => void;
	walkSwitchCases: (switchCases: any) => void;
	preWalkCatchClause: (catchClause: any) => void;
	walkCatchClause: (catchClause: any) => void;
	walkPattern: (pattern: any) => void;
	walkAssignmentPattern: (pattern: any) => void;
	walkObjectPattern: (pattern: any) => void;
	walkArrayPattern: (pattern: any) => void;
	walkRestElement: (pattern: any) => void;
	walkExpressions: (expressions: any) => void;
	walkExpression: (expression: any) => void;
	walkAwaitExpression: (expression: any) => void;
	walkArrayExpression: (expression: any) => void;
	walkSpreadElement: (expression: any) => void;
	walkObjectExpression: (expression: any) => void;
	walkFunctionExpression: (expression: any) => void;
	walkArrowFunctionExpression: (expression: any) => void;
	walkSequenceExpression: (expression: any) => void;
	walkUpdateExpression: (expression: any) => void;
	walkUnaryExpression: (expression: any) => void;
	walkLeftRightExpression: (expression: any) => void;
	walkBinaryExpression: (expression: any) => void;
	walkLogicalExpression: (expression: any) => void;
	walkAssignmentExpression: (expression: any) => void;
	walkConditionalExpression: (expression: any) => void;
	walkNewExpression: (expression: any, args: any) => void;
	walkYieldExpression: (expression: any) => void;
	walkTemplateLiteral: (expression: any) => void;
	walkTaggedTemplateExpression: (expression: any) => void;
	walkClassExpression: (expression: any) => void;
	walkImportExpression: (expression: any) => void;
	walkCallExpression: (expression: any, args: any) => void;
	walkMemberExpression: (expression: any) => void;
	walkMemberExpressionWithExpressionName: (
		expression: any,
		name: any,
		rootInfo: any,
		members: any
	) => void;
	walkThisExpression: (expression: any) => void;
	walkIdentifier: (expression: any) => void;
	callHooksForExpression: (hookMap: any, expr: any, ...args: Array<any>) => any;
	callHooksForExpressionWithFallback: <T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		expr: MemberExpression,
		fallback: (
			arg0: string,
			arg1: string | ScopeInfo | VariableInfo,
			arg2: () => Array<string>
		) => any,
		defined: (arg0: string) => any,
		...args: AsArray<T>
	) => R;
	callHooksForName: <T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		name: string,
		...args: AsArray<T>
	) => R;
	callHooksForInfo: <T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		info: string | ScopeInfo | VariableInfo,
		...args: AsArray<T>
	) => R;
	callHooksForInfoWithFallback: <T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		info: string | ScopeInfo | VariableInfo,
		fallback: (arg0: string) => any,
		defined: () => any,
		...args: AsArray<T>
	) => R;
	callHooksForNameWithFallback: <T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		name: string,
		fallback: (arg0: string) => any,
		defined: () => any,
		...args: AsArray<T>
	) => R;
	inScope: (params: any, fn: () => void) => void;
	inFunctionScope: (hasThis: any, params: any, fn: any) => void;
	inBlockScope: (fn: any) => void;
	detectMode: (statements: any) => void;
	enterPatterns: (patterns: any, onIdent: any) => void;
	enterPattern: (pattern: any, onIdent: any) => void;
	enterIdentifier: (pattern: any, onIdent: any) => void;
	enterObjectPattern: (pattern: any, onIdent: any) => void;
	enterArrayPattern: (pattern: any, onIdent: any) => void;
	enterRestElement: (pattern: any, onIdent: any) => void;
	enterAssignmentPattern: (pattern: any, onIdent: any) => void;
	evaluateExpression: (
		expression:
			| UnaryExpression
			| ThisExpression
			| ArrayExpression
			| ObjectExpression
			| FunctionExpression
			| ArrowFunctionExpression
			| YieldExpression
			| SimpleLiteral
			| RegExpLiteral
			| UpdateExpression
			| BinaryExpression
			| AssignmentExpression
			| LogicalExpression
			| MemberExpression
			| ConditionalExpression
			| SimpleCallExpression
			| NewExpression
			| SequenceExpression
			| TemplateLiteral
			| TaggedTemplateExpression
			| ClassExpression
			| MetaProperty
			| Identifier
			| AwaitExpression
	) => BasicEvaluatedExpression;
	parseString: (expression: any) => any;
	parseCalculatedString: (expression: any) => any;
	evaluate: (source: any) => BasicEvaluatedExpression;
	getComments: (range: any) => any;
	isAsiPosition: (pos: any) => any;
	getTagData: (name: any, tag: any) => any;
	tagVariable: (name: any, tag: any, data: any) => void;
	defineVariable: (name: any) => void;
	undefineVariable: (name: any) => void;
	isVariableDefined: (name: any) => boolean;
	getVariableInfo: (name: string) => string | ScopeInfo | VariableInfo;
	setVariable: (
		name: string,
		variableInfo: string | ScopeInfo | VariableInfo
	) => void;
	parseCommentOptions: (range: any) => { options: any; errors: any };
	extractMemberExpressionChain: (
		expression: MemberExpression
	) => {
		members: Array<string>;
		object:
			| UnaryExpression
			| ThisExpression
			| ArrayExpression
			| ObjectExpression
			| FunctionExpression
			| ArrowFunctionExpression
			| YieldExpression
			| SimpleLiteral
			| RegExpLiteral
			| UpdateExpression
			| BinaryExpression
			| AssignmentExpression
			| LogicalExpression
			| MemberExpression
			| ConditionalExpression
			| SimpleCallExpression
			| NewExpression
			| SequenceExpression
			| TemplateLiteral
			| TaggedTemplateExpression
			| ClassExpression
			| MetaProperty
			| Identifier
			| AwaitExpression
			| Super;
	};
	getFreeInfoFromVariable: (
		varName: string
	) => { name: string; info: string | VariableInfo };
	getMemberExpressionInfo: (
		expression: MemberExpression,
		allowedTypes: Array<"expression" | "call">
	) =>
		| {
				type: "call";
				call: SimpleCallExpression | NewExpression;
				calleeName: string;
				rootInfo: string | VariableInfo;
				getCalleeMembers: () => Array<string>;
				name: string;
				getMembers: () => Array<string>;
		  }
		| {
				type: "expression";
				rootInfo: string | VariableInfo;
				name: string;
				getMembers: () => Array<string>;
		  };
	getNameForExpression: (
		expression: MemberExpression
	) => {
		name: string;
		rootInfo: string | ScopeInfo | VariableInfo;
		getMembers: () => Array<string>;
	};
}
interface JsonpCompilationPluginHooks {
	jsonpScript: SyncWaterfallHook<[string, Chunk, string]>;
	linkPreload: SyncWaterfallHook<[string, Chunk, string]>;
	linkPrefetch: SyncWaterfallHook<[string, Chunk, string]>;
}
declare class JsonpTemplatePlugin {
	constructor();
	apply: (compiler: Compiler) => void;
	static getCompilationHooks: (
		compilation: Compilation
	) => JsonpCompilationPluginHooks;
}
interface KnownBuildMeta {
	moduleArgument?: string;
	exportsArgument?: string;
	strict?: boolean;
	moduleConcatenationBailout?: string;
	exportsType?: "default" | "namespace" | "flagged";
	defaultObject?: boolean | "redirect" | "redirect-warn";
	strictHarmonyModule?: boolean;
	async?: boolean;
}

/**
 * Like Set but with an addAll method to eventually add items from another iterable.
 * Access methods make sure that all delayed operations are executed.
 * Iteration methods deopts to normal Set performance until clear is called again (because of the chance of modifications during iteration).
 */
interface LazySet<T> {
	size: number;
	add: (item: T) => LazySet<T>;
	addAll: (iterable: LazySet<T> | Iterable<T>) => LazySet<T>;
	clear: () => void;
	delete: (value: T) => boolean;
	entries: () => IterableIterator<[T, T]>;
	forEach: (
		callbackFn: (arg0: T, arg1: T, arg2: Set<T>) => void,
		thisArg: any
	) => void;
	has: (item: T) => boolean;
	keys: () => IterableIterator<T>;
	values: () => IterableIterator<T>;
	serialize: (__0: { write: any }) => void;
}
interface LibIdentOptions {
	/**
	 * absolute context path to which lib ident is relative to
	 */
	context: string;

	/**
	 * object for caching
	 */
	associatedObjectForCache?: any;
}
declare class LibManifestPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
interface LibraryContext<T> {
	compilation: Compilation;
	options: T;
}

/**
 * Set explicit comments for `commonjs`, `commonjs2`, `amd`, and `root`.
 */
interface LibraryCustomUmdCommentObject {
	/**
	 * Set comment for `amd` section in UMD.
	 */
	amd?: string;

	/**
	 * Set comment for `commonjs` (exports) section in UMD.
	 */
	commonjs?: string;

	/**
	 * Set comment for `commonjs2` (module.exports) section in UMD.
	 */
	commonjs2?: string;

	/**
	 * Set comment for `root` (global variable) section in UMD.
	 */
	root?: string;
}

/**
 * Description object for all UMD variants of the library name.
 */
interface LibraryCustomUmdObject {
	/**
	 * Name of the exposed AMD library in the UMD.
	 */
	amd?: string;

	/**
	 * Name of the exposed commonjs export in the UMD.
	 */
	commonjs?: string;

	/**
	 * Name of the property exposed globally by a UMD library.
	 */
	root?: string | Array<string>;
}

/**
 * Options for library.
 */
interface LibraryOptions {
	/**
	 * Add a comment in the UMD wrapper.
	 */
	auxiliaryComment?: string | LibraryCustomUmdCommentObject;

	/**
	 * Specify which export should be exposed as library.
	 */
	export?: string | Array<string>;

	/**
	 * The name of the library (some types allow unnamed libraries too).
	 */
	name?: string | Array<string> | LibraryCustomUmdObject;

	/**
	 * Type of library.
	 */
	type:
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";

	/**
	 * If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
	 */
	umdNamedDefine?: boolean;
}
declare class LibraryTemplatePlugin {
	constructor(
		name: string | Array<string> | LibraryCustomUmdObject,
		target:
			| "var"
			| "module"
			| "assign"
			| "this"
			| "window"
			| "self"
			| "global"
			| "commonjs"
			| "commonjs2"
			| "commonjs-module"
			| "amd"
			| "amd-require"
			| "umd"
			| "umd2"
			| "jsonp"
			| "system",
		umdNamedDefine: boolean,
		auxiliaryComment: string | LibraryCustomUmdCommentObject,
		exportProperty: string | Array<string>
	);
	library: {
		type:
			| "var"
			| "module"
			| "assign"
			| "this"
			| "window"
			| "self"
			| "global"
			| "commonjs"
			| "commonjs2"
			| "commonjs-module"
			| "amd"
			| "amd-require"
			| "umd"
			| "umd2"
			| "jsonp"
			| "system";
		name: string | Array<string> | LibraryCustomUmdObject;
		umdNamedDefine: boolean;
		auxiliaryComment: string | LibraryCustomUmdCommentObject;
		export: string | Array<string>;
	};
	apply: (compiler: Compiler) => void;
}
declare class LimitChunkCountPlugin {
	constructor(options: LimitChunkCountPluginOptions);
	options: LimitChunkCountPluginOptions;
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface LimitChunkCountPluginOptions {
	/**
	 * Constant overhead for a chunk.
	 */
	chunkOverhead?: number;

	/**
	 * Multiplicator for initial chunks.
	 */
	entryChunkMultiplicator?: number;

	/**
	 * Limit the maximum number of chunks using a value greater greater than or equal to 1.
	 */
	maxChunks: number;
}
interface LimitParams {
	limit: number;
}

/**
 * Custom values available in the loader context.
 */
interface Loader {
	[index: string]: any;
}
interface LoaderItem {
	loader: string;
	options: any;
	ident: string;
}
declare class LoaderOptionsPlugin {
	constructor(options: LoaderOptionsPluginOptions);
	options: LoaderOptionsPluginOptions;
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface LoaderOptionsPluginOptions {
	[index: string]: any;

	/**
	 * Whether loaders should be in debug mode or not. debug will be removed as of webpack 3.
	 */
	debug?: boolean;

	/**
	 * Where loaders can be switched to minimize mode.
	 */
	minimize?: boolean;

	/**
	 * A configuration object that can be used to configure older loaders.
	 */
	options?: {
		[index: string]: any;
		/**
		 * The context that can be used to configure older loaders.
		 */
		context?: string;
	};
}
declare class LoaderTargetPlugin {
	constructor(target: string);
	target: string;
	apply: (compiler: Compiler) => void;
}
interface LogEntry {
	type: string;
	args: Array<any>;
	time: number;
	trace?: Array<string>;
}
declare const MEASURE_END_OPERATION: unique symbol;
declare const MEASURE_START_OPERATION: unique symbol;
interface MainRenderContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: Map<Module, CodeGenerationResult>;

	/**
	 * hash to be used for render call
	 */
	hash: string;
}
interface MainTemplate {
	hooks: Readonly<{
		renderManifest: { tap: (options: any, fn: any) => void };
		modules: { tap: () => never };
		moduleObj: { tap: () => never };
		require: { tap: (options: any, fn: any) => void };
		beforeStartup: { tap: () => never };
		startup: { tap: () => never };
		afterStartup: { tap: () => never };
		render: { tap: (options: any, fn: any) => void };
		renderWithEntry: { tap: (options: any, fn: any) => void };
		assetPath: {
			tap: (options: any, fn: any) => void;
			call: (filename: any, options: any) => string;
		};
		hash: { tap: (options: any, fn: any) => void };
		hashForChunk: { tap: (options: any, fn: any) => void };
		globalHashPaths: { tap: () => void };
		globalHash: { tap: () => void };
		hotBootstrap: { tap: () => never };
		bootstrap: SyncWaterfallHook<
			[string, Chunk, string, ModuleTemplate, DependencyTemplates]
		>;
		localVars: SyncWaterfallHook<[string, Chunk, string]>;
		requireExtensions: SyncWaterfallHook<[string, Chunk, string]>;
		requireEnsure: SyncWaterfallHook<[string, Chunk, string, string]>;
	}>;
	renderCurrentHashCode: (hash: string, length: number) => string;
	getPublicPath: (options: any) => string;
	getAssetPath: (path: any, options: any) => string;
	getAssetPathWithInfo: (
		path: any,
		options: any
	) => { path: string; info: AssetInfo };
	requireFn: string;
	outputOptions: any;
}
interface MapOptions {
	columns?: boolean;
	module?: boolean;
}

/**
 * Options object for in-memory caching.
 */
interface MemoryCacheOptions {
	/**
	 * List of paths that are managed by a package manager and contain a version or hash in it's path so all files are immutable.
	 */
	immutablePaths?: Array<string>;

	/**
	 * List of paths that are managed by a package manager and can be trusted to not being modified otherwise.
	 */
	managedPaths?: Array<string>;

	/**
	 * In memory caching.
	 */
	type: "memory";
}
declare class MemoryCachePlugin {
	constructor();
	apply: (compiler: Compiler) => void;
}
declare class MinChunkSizePlugin {
	constructor(options: MinChunkSizePluginOptions);
	options: MinChunkSizePluginOptions;
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface MinChunkSizePluginOptions {
	/**
	 * Constant overhead for a chunk.
	 */
	chunkOverhead?: number;

	/**
	 * Multiplicator for initial chunks.
	 */
	entryChunkMultiplicator?: number;

	/**
	 * Minimum number of characters.
	 */
	minChunkSize: number;
}
declare class Module extends DependenciesBlock {
	constructor(type: string, context: string);
	type: string;
	context: string;
	needId: boolean;
	debugId: number;
	resolveOptions: any;
	factoryMeta: any;
	buildMeta: KnownBuildMeta & Record<string, any>;
	buildInfo: any;
	presentationalDependencies: Array<Dependency>;
	id: string | number;
	hash: string;
	renderedHash: string;
	profile: ModuleProfile;
	index: number;
	index2: number;
	depth: number;
	issuer: Module;
	usedExports: boolean | SortableSet<string>;
	optimizationBailout: Array<
		string | ((requestShortener: RequestShortener) => string)
	>;
	optional: boolean;
	addChunk: (chunk: any) => boolean;
	removeChunk: (chunk: any) => void;
	isInChunk: (chunk: any) => boolean;
	isEntryModule: () => boolean;
	getChunks: () => Array<Chunk>;
	getNumberOfChunks: () => number;
	chunksIterable: Iterable<Chunk>;
	isProvided: (exportName: string) => boolean;
	exportsArgument: string;
	moduleArgument: string;
	getExportsType: (
		strict: boolean
	) =>
		| "dynamic"
		| "dynamic-default"
		| "namespace"
		| "default-only"
		| "default-with-named";
	addPresentationalDependency: (presentationalDependency: Dependency) => void;
	addWarning: (warning: WebpackError) => void;
	getWarnings: () => Iterable<WebpackError>;
	addError: (error: WebpackError) => void;
	getErrors: () => Iterable<WebpackError>;

	/**
	 * removes all warnings and errors
	 */
	clearWarningsAndErrors: () => void;
	isOptional: (moduleGraph: ModuleGraph) => boolean;
	isAccessibleInChunk: (
		chunkGraph: ChunkGraph,
		chunk: Chunk,
		ignoreChunk: Chunk
	) => boolean;
	isAccessibleInChunkGroup: (
		chunkGraph: ChunkGraph,
		chunkGroup: ChunkGroup,
		ignoreChunk: Chunk
	) => boolean;
	hasReasonForChunk: (
		chunk: Chunk,
		moduleGraph: ModuleGraph,
		chunkGraph: ChunkGraph
	) => boolean;
	hasReasons: (moduleGraph: ModuleGraph) => boolean;
	isModuleUsed: (moduleGraph: ModuleGraph) => boolean;
	isExportUsed: (
		moduleGraph: ModuleGraph,
		exportName: string | Array<string>
	) => 0 | 1 | 2 | 3 | 4;
	getUsedName: (
		moduleGraph: ModuleGraph,
		exportName: string | Array<string>
	) => string | false | Array<string>;
	needBuild: (
		context: NeedBuildContext,
		callback: (arg0: WebpackError, arg1: boolean) => void
	) => void;
	needRebuild: (fileTimestamps: any, contextTimestamps: any) => boolean;
	invalidateBuild: () => void;
	identifier: () => string;
	readableIdentifier: (requestShortener: RequestShortener) => string;
	build: (
		options: WebpackOptionsNormalized,
		compilation: Compilation,
		resolver: Resolver & WithOptions,
		fs: InputFileSystem,
		callback: (arg0: WebpackError) => void
	) => void;
	getSourceTypes: () => Set<string>;
	source: (sourceContext: SourceContext) => Source;
	size: (type: string) => number;
	libIdent: (options: LibIdentOptions) => string;
	nameForCondition: () => string;
	getRuntimeRequirements: (context: SourceContext) => ReadonlySet<string>;
	codeGeneration: (context: CodeGenerationContext) => CodeGenerationResult;
	chunkCondition: (chunk: Chunk, compilation: Compilation) => boolean;

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 */
	updateCacheModule: (module: Module) => void;
	originalSource: () => Source;
	useSourceMap: any;
	hasEqualsChunks: any;
	isUsed: any;
	errors: any;
	warnings: any;
	used: any;
}
declare class ModuleConcatenationPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
interface ModuleDependency extends Dependency {
	request: string;
	userRequest: string;
	range: any;
}
interface ModuleFactory {
	create: (
		data: ModuleFactoryCreateData,
		callback: (arg0: Error, arg1: ModuleFactoryResult) => void
	) => void;
}
interface ModuleFactoryCreateData {
	contextInfo: ModuleFactoryCreateDataContextInfo;
	resolveOptions?: any;
	context: string;
	dependencies: Array<Dependency>;
}
interface ModuleFactoryCreateDataContextInfo {
	issuer: string;
	compiler: string;
}
interface ModuleFactoryResult {
	/**
	 * the created module or unset if no module was created
	 */
	module?: Module;
	fileDependencies?: Set<string>;
	contextDependencies?: Set<string>;
	missingDependencies?: Set<string>;
}
interface ModuleFilenameHelpers {
	ALL_LOADERS_RESOURCE: string;
	REGEXP_ALL_LOADERS_RESOURCE: RegExp;
	LOADERS_RESOURCE: string;
	REGEXP_LOADERS_RESOURCE: RegExp;
	RESOURCE: string;
	REGEXP_RESOURCE: RegExp;
	ABSOLUTE_RESOURCE_PATH: string;
	REGEXP_ABSOLUTE_RESOURCE_PATH: RegExp;
	RESOURCE_PATH: string;
	REGEXP_RESOURCE_PATH: RegExp;
	ALL_LOADERS: string;
	REGEXP_ALL_LOADERS: RegExp;
	LOADERS: string;
	REGEXP_LOADERS: RegExp;
	QUERY: string;
	REGEXP_QUERY: RegExp;
	ID: string;
	REGEXP_ID: RegExp;
	HASH: string;
	REGEXP_HASH: RegExp;
	NAMESPACE: string;
	REGEXP_NAMESPACE: RegExp;
	createFilename: (
		module: any,
		options: any,
		__2: { requestShortener: any; chunkGraph: any }
	) => any;
	replaceDuplicates: (array: any, fn: any, comparator: any) => any;
	matchPart: (str: any, test: any) => any;
	matchObject: (obj: any, str: any) => boolean;
}
interface ModuleGraph {
	setParents: (
		dependency: Dependency,
		block: DependenciesBlock,
		module: Module
	) => void;
	getParentModule: (dependency: Dependency) => Module;
	getParentBlock: (dependency: Dependency) => DependenciesBlock;
	setResolvedModule: (
		originModule: Module,
		dependency: Dependency,
		module: Module
	) => void;
	updateModule: (dependency: Dependency, module: Module) => void;
	removeConnection: (dependency: Dependency) => void;
	addExplanation: (dependency: Dependency, explanation: string) => void;
	cloneModuleAttributes: (sourceModule: Module, targetModule: Module) => void;
	removeModuleAttributes: (module: Module) => void;
	removeAllModuleAttributes: () => void;
	moveModuleConnections: (
		oldModule: Module,
		newModule: Module,
		filterConnection: (arg0: ModuleGraphConnection) => boolean
	) => void;
	addExtraReason: (module: Module, explanation: string) => void;
	getResolvedModule: (dependency: Dependency) => Module;
	finishModule: (module: Module) => void;
	getConnection: (dependency: Dependency) => ModuleGraphConnection;
	getModule: (dependency: Dependency) => Module;
	getOrigin: (dependency: Dependency) => Module;
	getResolvedOrigin: (dependency: Dependency) => Module;
	getIncomingConnections: (module: Module) => Iterable<ModuleGraphConnection>;
	getOutgoingConnections: (module: Module) => Iterable<ModuleGraphConnection>;
	getProfile: (module: Module) => ModuleProfile;
	setProfile: (module: Module, profile: ModuleProfile) => void;
	getIssuer: (module: Module) => Module;
	setIssuer: (module: Module, issuer: Module) => void;
	setIssuerIfUnset: (module: Module, issuer: Module) => void;
	getOptimizationBailout: (
		module: Module
	) => Array<string | ((requestShortener: RequestShortener) => string)>;
	getProvidedExports: (module: Module) => true | Array<string>;
	isExportProvided: (
		module: Module,
		exportName: string | Array<string>
	) => boolean;
	getExportsInfo: (module: Module) => ExportsInfo;
	getExportInfo: (module: Module, exportName: string) => ExportInfo;
	getReadOnlyExportInfo: (module: Module, exportName: string) => ExportInfo;
	getUsedExports: (module: Module) => boolean | SortableSet<string>;
	getPreOrderIndex: (module: Module) => number;
	getPostOrderIndex: (module: Module) => number;
	setPreOrderIndex: (module: Module, index: number) => void;
	setPreOrderIndexIfUnset: (module: Module, index: number) => boolean;
	setPostOrderIndex: (module: Module, index: number) => void;
	setPostOrderIndexIfUnset: (module: Module, index: number) => boolean;
	getDepth: (module: Module) => number;
	setDepth: (module: Module, depth: number) => void;
	setDepthIfLower: (module: Module, depth: number) => boolean;
	isAsync: (module: Module) => boolean;
	setAsync: (module: Module) => void;
	getMeta: (thing: any) => any;
}
interface ModuleGraphConnection {
	originModule: Module;
	resolvedOriginModule: Module;
	dependency: Dependency;
	resolvedModule: Module;
	module: Module;
	weak: boolean;
	conditional: boolean;
	condition: (arg0: ModuleGraphConnection) => boolean;
	explanations: Set<string>;
	addCondition: (condition: (arg0: ModuleGraphConnection) => boolean) => void;
	addExplanation: (explanation: string) => void;
	explanation: string;
	active: any;
}

/**
 * Options affecting the normal modules (`NormalModuleFactory`).
 */
interface ModuleOptions {
	/**
	 * An array of rules applied by default for modules.
	 */
	defaultRules?: Array<RuleSetRule>;

	/**
	 * Enable warnings for full dynamic dependencies.
	 */
	exprContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup for full dynamic dependencies.
	 */
	exprContextRecursive?: boolean;

	/**
	 * Sets the default regular expression for full dynamic dependencies.
	 */
	exprContextRegExp?: boolean | RegExp;

	/**
	 * Set the default request for full dynamic dependencies.
	 */
	exprContextRequest?: string;

	/**
	 * Don't parse files matching. It's matched against the full resolved request.
	 */
	noParse?: string | Function | RegExp | [RegExp, RegExp] | [string, string];

	/**
	 * An array of rules applied for modules.
	 */
	rules?: Array<RuleSetRule>;

	/**
	 * Emit errors instead of warnings when imported names don't exist in imported module.
	 */
	strictExportPresence?: boolean;

	/**
	 * Handle the this context correctly according to the spec for namespace objects.
	 */
	strictThisContextOnImports?: boolean;

	/**
	 * Enable warnings when using the require function in a not statically analyse-able way.
	 */
	unknownContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup when using the require function in a not statically analyse-able way.
	 */
	unknownContextRecursive?: boolean;

	/**
	 * Sets the regular expression when using the require function in a not statically analyse-able way.
	 */
	unknownContextRegExp?: boolean | RegExp;

	/**
	 * Sets the request when using the require function in a not statically analyse-able way.
	 */
	unknownContextRequest?: string;

	/**
	 * Cache the resolving of module requests.
	 */
	unsafeCache?: boolean | Function;

	/**
	 * Enable warnings for partial dynamic dependencies.
	 */
	wrappedContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup for partial dynamic dependencies.
	 */
	wrappedContextRecursive?: boolean;

	/**
	 * Set the inner regular expression for partial dynamic dependencies.
	 */
	wrappedContextRegExp?: RegExp;
}
interface ModulePathData {
	id: string | number;
	hash: string;
	hashWithLength?: (arg0: number) => string;
}
interface ModuleProfile {
	startTime: number;
	factory: number;
	restoring: number;
	integration: number;
	building: number;
	storing: number;
	additionalFactories: number;
	additionalIntegration: number;
	markFactoryStart: () => void;
	factoryStartTime: number;
	markFactoryEnd: () => void;
	factoryEndTime: number;
	markRestoringStart: () => void;
	restoringStartTime: number;
	markRestoringEnd: () => void;
	restoringEndTime: number;
	markIntegrationStart: () => void;
	integrationStartTime: number;
	markIntegrationEnd: () => void;
	integrationEndTime: number;
	markBuildingStart: () => void;
	buildingStartTime: number;
	markBuildingEnd: () => void;
	buildingEndTime: number;
	markStoringStart: () => void;
	storingStartTime: number;
	markStoringEnd: () => void;
	storingEndTime: number;

	/**
	 * Merge this profile into another one
	 */
	mergeInto: (realProfile: ModuleProfile) => void;
}
interface ModuleTemplate {
	type: string;
	hooks: Readonly<{
		content: { tap: (options: any, fn: any) => void };
		module: { tap: (options: any, fn: any) => void };
		render: { tap: (options: any, fn: any) => void };
		package: { tap: (options: any, fn: any) => void };
		hash: { tap: (options: any, fn: any) => void };
	}>;
	runtimeTemplate: any;
}
declare class MultiCompiler {
	constructor(compilers: Array<Compiler> | Record<string, Compiler>);
	hooks: Readonly<{
		done: SyncHook<[MultiStats], void>;
		invalid: MultiHook<SyncHook<[string, string], void>>;
		run: MultiHook<AsyncSeriesHook<[Compiler]>>;
		watchClose: SyncHook<[], void>;
		watchRun: MultiHook<AsyncSeriesHook<[Compiler]>>;
		infrastructureLog: MultiHook<
			SyncBailHook<[string, string, Array<any>], true>
		>;
	}>;
	compilers: Array<Compiler>;
	dependencies: WeakMap<Compiler, Array<string>>;
	running: boolean;
	options: Array<WebpackOptionsNormalized>;
	outputPath: string;
	inputFileSystem: InputFileSystem;
	outputFileSystem: OutputFileSystem;
	intermediateFileSystem: InputFileSystem &
		OutputFileSystem &
		IntermediateFileSystemExtras;
	getInfrastructureLogger: (name: any) => WebpackLogger;
	setDependencies: (compiler: Compiler, dependencies: Array<string>) => void;
	validateDependencies: (
		callback: CallbackFunctionCompiler<MultiStats>
	) => boolean;
	runWithDependencies: (
		compilers: Array<Compiler>,
		fn: (
			compiler: Compiler,
			callback: CallbackFunctionCompiler<MultiStats>
		) => any,
		callback: CallbackFunctionCompiler<MultiStats>
	) => void;
	watch: (
		watchOptions: WatchOptions | Array<WatchOptions>,
		handler: CallbackFunctionCompiler<MultiStats>
	) => MultiWatching;
	run: (callback: CallbackFunctionCompiler<MultiStats>) => void;
	purgeInputFileSystem: () => void;
	close: (callback: CallbackFunctionCompiler<void>) => void;
}
interface MultiStats {
	stats: Array<StatsClass>;
	hash: string;
	hasErrors: () => boolean;
	hasWarnings: () => boolean;
	toJson: (
		options: any
	) => {
		children: Array<any>;
		version: any;
		hash: string;
		errors: Array<any>;
		warnings: Array<any>;
	};
	toString: (options: any) => string;
}
interface MultiWatching {
	watchings: Array<Watching>;
	compiler: MultiCompiler;
	invalidate: () => void;
	suspend: () => void;
	resume: () => void;
	close: (callback: CallbackFunctionCompiler<void>) => void;
}
interface MultipleOfParams {
	multipleOf: number;
}
declare class NamedChunkIdsPlugin {
	constructor(options: any);
	delimiter: any;
	context: any;
	apply: (compiler: Compiler) => void;
}
declare class NamedModuleIdsPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
declare class NaturalModuleIdsPlugin {
	constructor();
	apply: (compiler: Compiler) => void;
}
interface NeedBuildContext {
	fileSystemInfo: FileSystemInfo;
}
declare class NoEmitOnErrorsPlugin {
	constructor();

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
}
interface NoParams {}
declare class NodeEnvironmentPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}

/**
 * Options object for node compatibility features.
 */
interface NodeOptions {
	/**
	 * Include a polyfill for the 'global' variable.
	 */
	global?: boolean;
}
declare class NodeTemplatePlugin {
	constructor(options: any);
	asyncChunkLoading: any;
	apply: (compiler: Compiler) => void;
}
declare class NormalModule extends Module {
	constructor(__0: {
		/**
		 * module type
		 */
		type: string;
		/**
		 * request string
		 */
		request: string;
		/**
		 * request intended by user (without loaders from config)
		 */
		userRequest: string;
		/**
		 * request without resolving
		 */
		rawRequest: string;
		/**
		 * list of loaders
		 */
		loaders: Array<LoaderItem>;
		/**
		 * path + query of the real resource
		 */
		resource: string;
		/**
		 * path + query of the matched resource (virtual)
		 */
		matchResource: string;
		/**
		 * the parser used
		 */
		parser: Parser;
		/**
		 * the generator used
		 */
		generator: Generator;
		/**
		 * options used for resolving requests from this module
		 */
		resolveOptions: any;
	});
	request: string;
	userRequest: string;
	rawRequest: string;
	binary: boolean;
	parser: Parser;
	generator: Generator;
	resource: string;
	matchResource: string;
	loaders: Array<LoaderItem>;
	error: WebpackError;
	createSourceForAsset: (
		context: string,
		name: string,
		content: string,
		sourceMap: any,
		associatedObjectForCache: any
	) => Source;
	createLoaderContext: (
		resolver: Resolver & WithOptions,
		options: WebpackOptionsNormalized,
		compilation: Compilation,
		fs: InputFileSystem
	) => any;
	getCurrentLoader: (loaderContext: any, index: any) => LoaderItem;
	createSource: (
		context: string,
		content: string | Buffer,
		sourceMap: any,
		associatedObjectForCache: any
	) => Source;
	doBuild: (
		options: WebpackOptionsNormalized,
		compilation: Compilation,
		resolver: Resolver & WithOptions,
		fs: InputFileSystem,
		callback: (arg0: WebpackError) => void
	) => void;
	markModuleAsErrored: (error: WebpackError) => void;
	applyNoParseRule: (rule: any, content: any) => any;
	shouldPreventParsing: (noParseRule: any, request: any) => any;
	static getCompilationHooks: (
		compilation: Compilation
	) => NormalModuleCompilationHooks;
	static deserialize: (context: any) => NormalModule;
}
interface NormalModuleCompilationHooks {
	loader: SyncHook<[any, NormalModule], void>;
}
interface NormalModuleFactory extends ModuleFactory {
	hooks: Readonly<{
		resolve: AsyncSeriesBailHook<[ResolveData], any>;
		factorize: AsyncSeriesBailHook<[ResolveData], any>;
		beforeResolve: AsyncSeriesBailHook<[ResolveData], any>;
		afterResolve: AsyncSeriesBailHook<[ResolveData], any>;
		createModule: SyncBailHook<[ResolveData], any>;
		module: SyncWaterfallHook<[Module, any, ResolveData]>;
		createParser: HookMap<SyncBailHook<any, any>>;
		parser: HookMap<SyncHook<any, void>>;
		createGenerator: HookMap<SyncBailHook<any, any>>;
		generator: HookMap<SyncHook<any, void>>;
	}>;
	resolverFactory: any;
	ruleSet: RuleSet;
	unsafeCache: boolean;
	cachePredicate: any;
	context: any;
	fs: any;
	parserCache: Map<string, WeakMap<any, any>>;
	generatorCache: Map<string, WeakMap<any, Generator>>;
	resolveRequestArray: (
		contextInfo: any,
		context: any,
		array: any,
		resolver: any,
		resolveContext: any,
		callback: any
	) => any;
	getParser: (type: any, parserOptions: {}) => any;
	createParser: (type: any, parserOptions: {}) => any;
	getGenerator: (type: any, generatorOptions: {}) => Generator;
	createGenerator: (type: any, generatorOptions: {}) => any;
	getResolver: (type: any, resolveOptions: any) => any;
}
declare class NormalModuleReplacementPlugin {
	/**
	 * Create an instance of the plugin
	 */
	constructor(
		resourceRegExp: RegExp,
		newResource: string | ((arg0: any) => void)
	);
	resourceRegExp: RegExp;
	newResource: string | ((arg0: any) => void);

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
}
interface ObjectDeserializerContext {
	read: () => any;
}
interface ObjectSerializer {
	serialize: (arg0: any, arg1: ObjectSerializerContext) => void;
	deserialize: (arg0: ObjectDeserializerContext) => any;
}
interface ObjectSerializerContext {
	write: (arg0: any) => void;
}
declare class OccurrenceChunkIdsPlugin {
	constructor(options: OccurrenceChunkIdsPluginOptions);
	options: OccurrenceChunkIdsPluginOptions;
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface OccurrenceChunkIdsPluginOptions {
	/**
	 * Prioritise initial size over total size.
	 */
	prioritiseInitial?: boolean;
}
declare class OccurrenceModuleIdsPlugin {
	constructor(options: OccurrenceModuleIdsPluginOptions);
	options: OccurrenceModuleIdsPluginOptions;
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface OccurrenceModuleIdsPluginOptions {
	/**
	 * Prioritise initial size over total size.
	 */
	prioritiseInitial?: boolean;
}

/**
 * Enables/Disables integrated optimizations.
 */
interface Optimization {
	/**
	 * Check for incompatible wasm types when importing/exporting from/to ESM.
	 */
	checkWasmTypes?: boolean;

	/**
	 * Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin).
	 */
	chunkIds?:
		| false
		| "natural"
		| "named"
		| "deterministic"
		| "size"
		| "total-size";

	/**
	 * Concatenate modules when possible to generate less modules, more efficient code and enable more optimizations by the minimizer.
	 */
	concatenateModules?: boolean;

	/**
	 * Also flag chunks as loaded which contain a subset of the modules.
	 */
	flagIncludedChunks?: boolean;

	/**
	 * Creates a module-internal dependency graph for top level symbols, exports and imports, to improve unused exports detection.
	 */
	innerGraph?: boolean;

	/**
	 * Rename exports when possible to generate shorter code (depends on optimization.usedExports and optimization.providedExports).
	 */
	mangleExports?: boolean;

	/**
	 * Reduce size of WASM by changing imports to shorter strings.
	 */
	mangleWasmImports?: boolean;

	/**
	 * Merge chunks which contain the same modules.
	 */
	mergeDuplicateChunks?: boolean;

	/**
	 * Enable minimizing the output. Uses optimization.minimizer.
	 */
	minimize?: boolean;

	/**
	 * Minimizer(s) to use for minimizing the output.
	 */
	minimizer?: Array<WebpackPluginInstance | ((compiler: Compiler) => void)>;

	/**
	 * Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin).
	 */
	moduleIds?: false | "natural" | "named" | "deterministic" | "size" | "hashed";

	/**
	 * Avoid emitting assets when errors occur.
	 */
	noEmitOnErrors?: boolean;

	/**
	 * Set process.env.NODE_ENV to a specific value.
	 */
	nodeEnv?: string | false;

	/**
	 * Generate records with relative paths to be able to move the context folder.
	 */
	portableRecords?: boolean;

	/**
	 * Figure out which exports are provided by modules to generate more efficient code.
	 */
	providedExports?: boolean;

	/**
	 * Removes modules from chunks when these modules are already included in all parents.
	 */
	removeAvailableModules?: boolean;

	/**
	 * Remove chunks which are empty.
	 */
	removeEmptyChunks?: boolean;

	/**
	 * Create an additional chunk which contains only the webpack runtime and chunk hash maps.
	 */
	runtimeChunk?:
		| boolean
		| "single"
		| "multiple"
		| {
				/**
				 * The name or name factory for the runtime chunks.
				 */
				name?: string | Function;
		  };

	/**
	 * Skip over modules which are flagged to contain no side effects when exports are not used.
	 */
	sideEffects?: boolean;

	/**
	 * Optimize duplication and caching by splitting chunks by shared modules and cache group.
	 */
	splitChunks?: false | OptimizationSplitChunksOptions;

	/**
	 * Figure out which exports are used by modules to mangle export names, omit unused exports and generate more efficient code.
	 */
	usedExports?: boolean;
}

/**
 * Options object for describing behavior of a cache group selecting modules that should be cached together.
 */
interface OptimizationSplitChunksCacheGroup {
	/**
	 * Sets the name delimiter for created chunks.
	 */
	automaticNameDelimiter?: string;

	/**
	 * Select chunks for determining cache group content (defaults to "initial", "initial" and "all" requires adding these chunks to the HTML).
	 */
	chunks?:
		| "initial"
		| "async"
		| "all"
		| ((
				module: Module
		  ) =>
				| void
				| OptimizationSplitChunksCacheGroup
				| Array<OptimizationSplitChunksCacheGroup>);

	/**
	 * Ignore minimum size, minimum chunks and maximum requests and always create chunks for this cache group.
	 */
	enforce?: boolean;

	/**
	 * Sets the template for the filename for created chunks.
	 */
	filename?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * Sets the hint for chunk id.
	 */
	idHint?: string;

	/**
	 * Maximum number of requests which are accepted for on-demand loading.
	 */
	maxAsyncRequests?: number;

	/**
	 * Maximal size hint for the on-demand chunks.
	 */
	maxAsyncSize?: number | { [index: string]: number };

	/**
	 * Maximum number of initial chunks which are accepted for an entry point.
	 */
	maxInitialRequests?: number;

	/**
	 * Maximal size hint for the initial chunks.
	 */
	maxInitialSize?: number | { [index: string]: number };

	/**
	 * Maximal size hint for the created chunks.
	 */
	maxSize?: number | { [index: string]: number };

	/**
	 * Minimum number of times a module has to be duplicated until it's considered for splitting.
	 */
	minChunks?: number;

	/**
	 * Minimal size for the chunks the stay after moving the modules to a new chunk.
	 */
	minRemainingSize?: number | { [index: string]: number };

	/**
	 * Minimal size for the created chunk.
	 */
	minSize?: number | { [index: string]: number };

	/**
	 * Give chunks for this cache group a name (chunks with equal name are merged).
	 */
	name?: string | false | Function;

	/**
	 * Priority of this cache group.
	 */
	priority?: number;

	/**
	 * Try to reuse existing chunk (with name) when it has matching modules.
	 */
	reuseExistingChunk?: boolean;

	/**
	 * Assign modules to a cache group by module name.
	 */
	test?: string | Function | RegExp;

	/**
	 * Assign modules to a cache group by module type.
	 */
	type?: string | Function | RegExp;
}

/**
 * Options object for splitting chunks into smaller chunks.
 */
interface OptimizationSplitChunksOptions {
	/**
	 * Sets the name delimiter for created chunks.
	 */
	automaticNameDelimiter?: string;

	/**
	 * Assign modules to a cache group (modules from different cache groups are tried to keep in separate chunks, default categories: 'default', 'defaultVendors').
	 */
	cacheGroups?: {
		[index: string]:
			| string
			| false
			| Function
			| RegExp
			| OptimizationSplitChunksCacheGroup;
	};

	/**
	 * Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML).
	 */
	chunks?: Function | "initial" | "async" | "all";

	/**
	 * Options for modules not selected by any other cache group.
	 */
	fallbackCacheGroup?: {
		/**
		 * Sets the name delimiter for created chunks.
		 */
		automaticNameDelimiter?: string;
		/**
		 * Maximal size hint for the on-demand chunks.
		 */
		maxAsyncSize?: number | { [index: string]: number };
		/**
		 * Maximal size hint for the initial chunks.
		 */
		maxInitialSize?: number | { [index: string]: number };
		/**
		 * Maximal size hint for the created chunks.
		 */
		maxSize?: number | { [index: string]: number };
		/**
		 * Minimal size for the created chunk.
		 */
		minSize?: number | { [index: string]: number };
	};

	/**
	 * Sets the template for the filename for created chunks.
	 */
	filename?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * Prevents exposing path info when creating names for parts splitted by maxSize.
	 */
	hidePathInfo?: boolean;

	/**
	 * Maximum number of requests which are accepted for on-demand loading.
	 */
	maxAsyncRequests?: number;

	/**
	 * Maximal size hint for the on-demand chunks.
	 */
	maxAsyncSize?: number | { [index: string]: number };

	/**
	 * Maximum number of initial chunks which are accepted for an entry point.
	 */
	maxInitialRequests?: number;

	/**
	 * Maximal size hint for the initial chunks.
	 */
	maxInitialSize?: number | { [index: string]: number };

	/**
	 * Maximal size hint for the created chunks.
	 */
	maxSize?: number | { [index: string]: number };

	/**
	 * Minimum number of times a module has to be duplicated until it's considered for splitting.
	 */
	minChunks?: number;

	/**
	 * Minimal size for the chunks the stay after moving the modules to a new chunk.
	 */
	minRemainingSize?: number | { [index: string]: number };

	/**
	 * Minimal size for the created chunks.
	 */
	minSize?: number | { [index: string]: number };

	/**
	 * Give chunks created a name (chunks with equal name are merged).
	 */
	name?: string | false | Function;
}
declare abstract class OptionsApply {
	process: (options: any, compiler: any) => void;
}

/**
 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
 */
interface Output {
	/**
	 * The filename of asset modules as relative path inside the `output.path` directory.
	 */
	assetModuleFilename?:
		| string
		| ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * Add a comment in the UMD wrapper.
	 */
	auxiliaryComment?: string | LibraryCustomUmdCommentObject;

	/**
	 * The callback function name used by webpack for loading of chunks in WebWorkers.
	 */
	chunkCallbackName?: string;

	/**
	 * The filename of non-entry chunks as relative path inside the `output.path` directory.
	 */
	chunkFilename?: string;

	/**
	 * Number of milliseconds before chunk request expires.
	 */
	chunkLoadTimeout?: number;

	/**
	 * Check if to be emitted file already exists and have the same content before writing to output filesystem.
	 */
	compareBeforeEmit?: boolean;

	/**
	 * This option enables cross-origin loading of chunks.
	 */
	crossOriginLoading?: false | "anonymous" | "use-credentials";

	/**
	 * Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers.
	 */
	devtoolFallbackModuleFilenameTemplate?: string | Function;

	/**
	 * Filename template string of function for the sources array in a generated SourceMap.
	 */
	devtoolModuleFilenameTemplate?: string | Function;

	/**
	 * Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries.
	 */
	devtoolNamespace?: string;

	/**
	 * The maximum EcmaScript version of the webpack generated code (doesn't include input source code from modules).
	 */
	ecmaVersion?: number;

	/**
	 * List of library types enabled for use by entry points.
	 */
	enabledLibraryTypes?: Array<
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
	>;

	/**
	 * Specifies the name of each output file on disk. You must **not** specify an absolute path here! The `output.path` option determines the location on disk the files are written to, filename is used solely for naming the individual files.
	 */
	filename?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * An expression which is used to address the global object/scope in runtime code.
	 */
	globalObject?: string;

	/**
	 * Digest type used for the hash.
	 */
	hashDigest?: string;

	/**
	 * Number of chars which are used for the hash.
	 */
	hashDigestLength?: number;

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	hashFunction?: string | typeof Hash;

	/**
	 * Any string which is added to the hash to salt it.
	 */
	hashSalt?: string;

	/**
	 * The filename of the Hot Update Chunks. They are inside the output.path directory.
	 */
	hotUpdateChunkFilename?: string;

	/**
	 * The JSONP function used by webpack for async loading of hot update chunks.
	 */
	hotUpdateFunction?: string;

	/**
	 * The filename of the Hot Update Main File. It is inside the `output.path` directory.
	 */
	hotUpdateMainFilename?: string;

	/**
	 * Wrap javascript code into IIFE's to avoid leaking into global scope.
	 */
	iife?: boolean;

	/**
	 * The JSONP function used by webpack for async loading of chunks.
	 */
	jsonpFunction?: string;

	/**
	 * This option enables loading async chunks via a custom script type, such as script type="module".
	 */
	jsonpScriptType?: false | "module" | "text/javascript";

	/**
	 * Make the output files a library, exporting the exports of the entry point.
	 */
	library?: string | Array<string> | LibraryCustomUmdObject | LibraryOptions;

	/**
	 * Specify which export should be exposed as library.
	 */
	libraryExport?: string | Array<string>;

	/**
	 * Type of library.
	 */
	libraryTarget?:
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";

	/**
	 * Output javascript files as module source type.
	 */
	module?: boolean;

	/**
	 * The output directory as **absolute path** (required).
	 */
	path?: string;

	/**
	 * Include comments with information about the modules.
	 */
	pathinfo?: boolean;

	/**
	 * The `publicPath` specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * The filename of the SourceMaps for the JavaScript files. They are inside the `output.path` directory.
	 */
	sourceMapFilename?: string;

	/**
	 * Prefixes every line of the source in the bundle with this string.
	 */
	sourcePrefix?: string;

	/**
	 * Handles exceptions in module loading correctly at a performance cost.
	 */
	strictModuleExceptionHandling?: boolean;

	/**
	 * If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
	 */
	umdNamedDefine?: boolean;

	/**
	 * A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals.
	 */
	uniqueName?: string;

	/**
	 * The filename of WebAssembly modules as relative path inside the `output.path` directory.
	 */
	webassemblyModuleFilename?: string;
}
interface OutputFileSystem {
	writeFile: (
		arg0: string,
		arg1: string | Buffer,
		arg2: (arg0: NodeJS.ErrnoException) => void
	) => void;
	mkdir: (arg0: string, arg1: (arg0: NodeJS.ErrnoException) => void) => void;
	stat: (
		arg0: string,
		arg1: (arg0: NodeJS.ErrnoException, arg1: StatsImport) => void
	) => void;
	readFile: (
		arg0: string,
		arg1: (arg0: NodeJS.ErrnoException, arg1: Buffer) => void
	) => void;
	join?: (arg0: string, arg1: string) => string;
	relative?: (arg0: string, arg1: string) => string;
	dirname?: (arg0: string) => string;
}

/**
 * Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
 */
interface OutputNormalized {
	/**
	 * The filename of asset modules as relative path inside the `output.path` directory.
	 */
	assetModuleFilename?:
		| string
		| ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * The callback function name used by webpack for loading of chunks in WebWorkers.
	 */
	chunkCallbackName?: string;

	/**
	 * The filename of non-entry chunks as relative path inside the `output.path` directory.
	 */
	chunkFilename?: string;

	/**
	 * Number of milliseconds before chunk request expires.
	 */
	chunkLoadTimeout?: number;

	/**
	 * Check if to be emitted file already exists and have the same content before writing to output filesystem.
	 */
	compareBeforeEmit?: boolean;

	/**
	 * This option enables cross-origin loading of chunks.
	 */
	crossOriginLoading?: false | "anonymous" | "use-credentials";

	/**
	 * Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers.
	 */
	devtoolFallbackModuleFilenameTemplate?: string | Function;

	/**
	 * Filename template string of function for the sources array in a generated SourceMap.
	 */
	devtoolModuleFilenameTemplate?: string | Function;

	/**
	 * Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries.
	 */
	devtoolNamespace?: string;

	/**
	 * The maximum EcmaScript version of the webpack generated code (doesn't include input source code from modules).
	 */
	ecmaVersion?: number;

	/**
	 * List of library types enabled for use by entry points.
	 */
	enabledLibraryTypes?: Array<
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
	>;

	/**
	 * Specifies the name of each output file on disk. You must **not** specify an absolute path here! The `output.path` option determines the location on disk the files are written to, filename is used solely for naming the individual files.
	 */
	filename?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * An expression which is used to address the global object/scope in runtime code.
	 */
	globalObject?: string;

	/**
	 * Digest type used for the hash.
	 */
	hashDigest?: string;

	/**
	 * Number of chars which are used for the hash.
	 */
	hashDigestLength?: number;

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	hashFunction?: string | typeof Hash;

	/**
	 * Any string which is added to the hash to salt it.
	 */
	hashSalt?: string;

	/**
	 * The filename of the Hot Update Chunks. They are inside the output.path directory.
	 */
	hotUpdateChunkFilename?: string;

	/**
	 * The JSONP function used by webpack for async loading of hot update chunks.
	 */
	hotUpdateFunction?: string;

	/**
	 * The filename of the Hot Update Main File. It is inside the `output.path` directory.
	 */
	hotUpdateMainFilename?: string;

	/**
	 * Wrap javascript code into IIFE's to avoid leaking into global scope.
	 */
	iife?: boolean;

	/**
	 * The JSONP function used by webpack for async loading of chunks.
	 */
	jsonpFunction?: string;

	/**
	 * This option enables loading async chunks via a custom script type, such as script type="module".
	 */
	jsonpScriptType?: false | "module" | "text/javascript";

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;

	/**
	 * Output javascript files as module source type.
	 */
	module?: boolean;

	/**
	 * The output directory as **absolute path** (required).
	 */
	path?: string;

	/**
	 * Include comments with information about the modules.
	 */
	pathinfo?: boolean;

	/**
	 * The `publicPath` specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo: AssetInfo) => string);

	/**
	 * The filename of the SourceMaps for the JavaScript files. They are inside the `output.path` directory.
	 */
	sourceMapFilename?: string;

	/**
	 * Prefixes every line of the source in the bundle with this string.
	 */
	sourcePrefix?: string;

	/**
	 * Handles exceptions in module loading correctly at a performance cost.
	 */
	strictModuleExceptionHandling?: boolean;

	/**
	 * A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals.
	 */
	uniqueName?: string;

	/**
	 * The filename of WebAssembly modules as relative path inside the `output.path` directory.
	 */
	webassemblyModuleFilename?: string;
}
declare class Parser {
	constructor();
	parse: (
		source: string | Buffer | Record<string, any>,
		state: Record<string, any> & ParserStateBase
	) => Record<string, any> & ParserStateBase;
}
interface ParserStateBase {
	current: NormalModule;
	module: NormalModule;
	compilation: Compilation;
	options: any;
}
interface PathData {
	chunkGraph?: ChunkGraph;
	hash?: string;
	hashWithLength?: (arg0: number) => string;
	chunk?: Chunk | ChunkPathData;
	module?: Module | ModulePathData;
	filename?: string;
	basename?: string;
	query?: string;
	contentHashType?: string;
	contentHash?: string;
	contentHashWithLength?: (arg0: number) => string;
	noChunkHash?: boolean;
	url?: string;
}
interface PatternParams {
	pattern: string;
}
interface PatternRequiredParams {
	missingPattern: string;
}

/**
 * Configuration object for web performance recommendations.
 */
interface PerformanceOptions {
	/**
	 * Filter function to select assets that are checked.
	 */
	assetFilter?: Function;

	/**
	 * Sets the format of the hints: warnings, errors or nothing at all.
	 */
	hints?: false | "error" | "warning";

	/**
	 * File size limit (in bytes) when exceeded, that webpack will provide performance hints.
	 */
	maxAssetSize?: number;

	/**
	 * Total size of an entry point (in bytes).
	 */
	maxEntrypointSize?: number;
}
interface Plugin {
	apply: () => void;
}
declare class PrefetchPlugin {
	constructor(context: any, request: any);
	context: any;
	request: any;

	/**
	 * Apply the plugin
	 */
	apply: (compiler: Compiler) => void;
}
interface PrintedElement {
	element: string;
	content: string;
}
declare class Profiler {
	constructor(inspector: any);
	session: any;
	inspector: any;
	hasSession: () => boolean;
	startProfiling: () => Promise<void> | Promise<[any, any, any]>;
	sendCommand: (method: any, params: any) => Promise<any>;
	destroy: () => Promise<void>;
	stopProfiling: () => Promise<any>;
}
declare class ProfilingPlugin {
	constructor(options: ProfilingPluginOptions);
	outputPath: string;
	apply: (compiler: any) => void;
	static Profiler: typeof Profiler;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface ProfilingPluginOptions {
	/**
	 * Path to the output file e.g. `path.resolve(__dirname, 'profiling/events.json')`. Defaults to `events.json`.
	 */
	outputPath?: string;
}
declare class ProgressPlugin {
	constructor(
		options:
			| ProgressPluginOptions
			| ((percentage: number, msg: string, ...args: Array<string>) => void)
	);
	profile: boolean;
	handler: (percentage: number, msg: string, ...args: Array<string>) => void;
	modulesCount: number;
	dependenciesCount: number;
	showEntries: boolean;
	showModules: boolean;
	showDependencies: boolean;
	showActiveModules: boolean;
	percentBy: "dependencies" | "modules" | "entries";
	apply: (compiler: Compiler | MultiCompiler) => void;
	static getReporter: (
		compiler: Compiler
	) => (p: number, args: Array<string>) => void;
	static defaultOptions: {
		profile: boolean;
		modulesCount: number;
		dependenciesCount: number;
		modules: boolean;
		dependencies: boolean;
		activeModules: boolean;
		entries: boolean;
	};
}

/**
 * Options object for the ProgressPlugin.
 */
interface ProgressPluginOptions {
	/**
	 * Show active modules count and one active module in progress message.
	 */
	activeModules?: boolean;

	/**
	 * Show dependencies count in progress message.
	 */
	dependencies?: boolean;

	/**
	 * Minimum dependencies count to start with. For better progress calculation. Default: 10000.
	 */
	dependenciesCount?: number;

	/**
	 * Show entries count in progress message.
	 */
	entries?: boolean;

	/**
	 * Function that executes for every progress step.
	 */
	handler?: (percentage: number, msg: string, ...args: Array<string>) => void;

	/**
	 * Show modules count in progress message.
	 */
	modules?: boolean;

	/**
	 * Minimum modules count to start with. For better progress calculation. Default: 5000.
	 */
	modulesCount?: number;

	/**
	 * Collect percent algorithm. By default it calculates by a median from modules, entries and dependencies percent.
	 */
	percentBy?: "dependencies" | "modules" | "entries";

	/**
	 * Collect profile data for progress steps. Default: false.
	 */
	profile?: boolean;
}
interface PropertyNamesParams {
	propertyName: string;
}
declare class ProvidePlugin {
	constructor(definitions: Record<string, string | Array<string>>);
	definitions: Record<string, string | Array<string>>;
	apply: (compiler: Compiler) => void;
}
interface RawChunkGroupOptions {
	preloadOrder?: number;
	prefetchOrder?: number;
}
declare class ReadFileCompileWasmPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
interface RealDependencyLocation {
	start: SourcePosition;
	end?: SourcePosition;
	index?: number;
}
interface RefParams {
	ref: string;
}
interface RenderBootstrapContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * hash to be used for render call
	 */
	hash: string;
}
interface RenderContextObjectAsyncWebAssemblyModulesPlugin {
	/**
	 * the chunk
	 */
	chunk: any;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: any;

	/**
	 * the runtime template
	 */
	runtimeTemplate: any;

	/**
	 * the module graph
	 */
	moduleGraph: any;

	/**
	 * the chunk graph
	 */
	chunkGraph: any;

	/**
	 * results of code generation
	 */
	codeGenerationResults: Map<Module, CodeGenerationResult>;
}
interface RenderContextObjectJavascriptModulesPlugin {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: Map<Module, CodeGenerationResult>;
}
interface RenderContextObjectModuleTemplate {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;
}
interface RenderManifestEntry {
	render: () => Source;
	filenameTemplate: string | ((arg0: PathData, arg1: AssetInfo) => string);
	pathOptions?: PathData;
	identifier: string;
	hash?: string;
	auxiliary?: boolean;
}
interface RenderManifestOptions {
	/**
	 * the chunk used to render
	 */
	chunk: Chunk;
	hash: string;
	fullHash: string;
	outputOptions: any;
	codeGenerationResults: Map<Module, CodeGenerationResult>;
	moduleTemplates: { javascript: ModuleTemplate };
	dependencyTemplates: DependencyTemplates;
	runtimeTemplate: RuntimeTemplate;
	moduleGraph: ModuleGraph;
	chunkGraph: ChunkGraph;
}
interface ReplaceSource extends Source {
	replace: (start: number, end: number, newValue: string, name: string) => void;
	insert: (pos: number, newValue: string, name: string) => void;
	getName: () => string;
	original: () => string;
	getReplacements: () => Array<{
		start: number;
		end: number;
		content: string;
		insertIndex: number;
		name: string;
	}>;
}
interface RequestShortener {
	contextify: (arg0: string) => string;
	shorten: (request: string) => string;
}
interface RequiredParams {
	missingProperty: string;
}

/**
 * istanbul ignore next
 */
interface ResolveBuildDependenciesResult {
	/**
	 * list of files
	 */
	files: Set<string>;

	/**
	 * list of directories
	 */
	directories: Set<string>;

	/**
	 * list of missing entries
	 */
	missing: Set<string>;

	/**
	 * stored resolve results
	 */
	resolveResults: Map<string, string>;

	/**
	 * dependencies of the resolving
	 */
	resolveDependencies: {
		/**
		 * list of files
		 */
		files: Set<string>;
		/**
		 * list of directories
		 */
		directories: Set<string>;
		/**
		 * list of missing entries
		 */
		missing: Set<string>;
	};
}
interface ResolveContext {
	log?: (message: string) => void;
	fileDependencies?: WriteOnlySet<string>;
	contextDependencies?: WriteOnlySet<string>;
	missingDependencies?: WriteOnlySet<string>;
	stack?: Set<string>;
}
interface ResolveData {
	contextInfo: ModuleFactoryCreateDataContextInfo;
	resolveOptions: any;
	context: string;
	request: string;
	dependencies: Array<ModuleDependency>;
	createData: any;
	fileDependencies: LazySet<string>;
	missingDependencies: LazySet<string>;
	contextDependencies: LazySet<string>;
}

/**
 * Options object for resolving requests.
 */
interface ResolveOptions {
	/**
	 * Redirect module requests.
	 */
	alias?:
		| { [index: string]: string | false | Array<string> }
		| Array<{
				/**
				 * New request.
				 */
				alias: string | false | Array<string>;
				/**
				 * Request to be redirected.
				 */
				name: string;
				/**
				 * Redirect only exact matching request.
				 */
				onlyModule?: boolean;
		  }>;

	/**
	 * Fields in the description file (package.json) which are used to redirect requests inside the module.
	 */
	aliasFields?: Array<string | Array<string>>;

	/**
	 * Enable caching of successfully resolved requests (cache entries are revalidated).
	 */
	cache?: boolean;

	/**
	 * Predicate function to decide which requests should be cached.
	 */
	cachePredicate?: Function;

	/**
	 * Include the context information in the cache identifier when caching.
	 */
	cacheWithContext?: boolean;

	/**
	 * Filenames used to find a description file.
	 */
	descriptionFiles?: Array<string>;

	/**
	 * Enforce using one of the extensions from the extensions option.
	 */
	enforceExtension?: boolean;

	/**
	 * Extensions added to the request when trying to find the file.
	 */
	extensions?: Array<string>;

	/**
	 * Filesystem for the resolver.
	 */
	fileSystem?: { [index: string]: any };

	/**
	 * Field names from the description file (package.json) which are used to find the default entry point.
	 */
	mainFields?: Array<string | Array<string>>;

	/**
	 * Filenames used to find the default entry point if there is no description file or main field.
	 */
	mainFiles?: Array<string>;

	/**
	 * Folder names or directory paths where to find modules.
	 */
	modules?: Array<string>;

	/**
	 * Plugins for the resolver.
	 */
	plugins?: Array<ResolvePluginInstance>;

	/**
	 * Custom resolver.
	 */
	resolver?: { [index: string]: any };

	/**
	 * Enable resolving symlinks to the original location.
	 */
	symlinks?: boolean;

	/**
	 * Enable caching of successfully resolved requests (cache entries are not revalidated).
	 */
	unsafeCache?: boolean | { [index: string]: any };

	/**
	 * Use synchronous filesystem calls for the resolver.
	 */
	useSyncFileSystemCalls?: boolean;
}

/**
 * Plugin instance.
 */
interface ResolvePluginInstance {
	[index: string]: any;

	/**
	 * The run point of the plugin, required method.
	 */
	apply: (resolver: any) => void;
}
interface Resolver {
	resolve: (
		context: Object,
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: NodeJS.ErrnoException,
			result: string,
			additionalInfo: Object
		) => void
	) => void;
}
interface ResolverCache {
	direct: WeakMap<any, Resolver & WithOptions>;
	stringified: Map<string, Resolver & WithOptions>;
}
interface ResolverFactory {
	hooks: Readonly<{
		resolveOptions: HookMap<SyncWaterfallHook<[any]>>;
		resolver: HookMap<SyncHook<[Resolver, any, any], void>>;
	}>;
	cache: Map<string, ResolverCache>;
	get: (type: string, resolveOptions: any) => Resolver & WithOptions;
}
interface RuleSet {
	/**
	 * map of references in the rule set (may grow over time)
	 */
	references: Map<string, any>;

	/**
	 * execute the rule set
	 */
	exec: (arg0: any) => Array<Effect>;
}

/**
 * A rule description with conditions and effects for modules.
 */
interface RuleSetRule {
	/**
	 * Match the child compiler name.
	 */
	compiler?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| Array<RuleSetRuleAnonymousCircularType>
		| {
				/**
				 * Logical AND.
				 */
				and?: Array<RuleSetRuleAnonymousCircularType>;
				/**
				 * Logical NOT.
				 */
				not?: Array<RuleSetRuleAnonymousCircularType>;
				/**
				 * Logical OR.
				 */
				or?: Array<RuleSetRuleAnonymousCircularType>;
		  };

	/**
	 * Enforce this rule as pre or post step.
	 */
	enforce?: "pre" | "post";

	/**
	 * Shortcut for resource.exclude.
	 */
	exclude?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| Array<RuleSetRuleAnonymousCircularType_1>
		| {
				/**
				 * Logical AND.
				 */
				and?: Array<RuleSetRuleAnonymousCircularType_1>;
				/**
				 * Logical NOT.
				 */
				not?: Array<RuleSetRuleAnonymousCircularType_1>;
				/**
				 * Logical OR.
				 */
				or?: Array<RuleSetRuleAnonymousCircularType_1>;
		  };

	/**
	 * The options for the module generator.
	 */
	generator?: { [index: string]: any };

	/**
	 * Shortcut for resource.include.
	 */
	include?: RuleSetRuleAnonymousCircularType_1;

	/**
	 * Match the issuer of the module (The module pointing to this module).
	 */
	issuer?: RuleSetRuleAnonymousCircularType_1;

	/**
	 * Shortcut for use.loader.
	 */
	loader?:
		| string
		| ((data: {}) =>
				| string
				| __Type
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
				| Array<
						| string
						| __Type
						| {
								/**
								 * Unique loader options identifier.
								 */
								ident?: string;
								/**
								 * Loader name.
								 */
								loader?: string;
								/**
								 * Loader options.
								 */
								options?: string | { [index: string]: any };
						  }
				  >)
		| {
				/**
				 * Unique loader options identifier.
				 */
				ident?: string;
				/**
				 * Loader name.
				 */
				loader?: string;
				/**
				 * Loader options.
				 */
				options?: string | { [index: string]: any };
		  }
		| ((data: {}) => Array<
				| string
				| __Type
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
		  >)
		| Array<
				| string
				| __Type
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
		  >;

	/**
	 * Only execute the first matching rule in this array.
	 */
	oneOf?: Array<RuleSetRule>;

	/**
	 * Shortcut for use.options.
	 */
	options?: string | { [index: string]: any };

	/**
	 * Options for parsing.
	 */
	parser?: { [index: string]: any };

	/**
	 * Match the real resource path of the module.
	 */
	realResource?: RuleSetRuleAnonymousCircularType_1;

	/**
	 * Options for the resolver.
	 */
	resolve?: ResolveOptions;

	/**
	 * Match the resource path of the module.
	 */
	resource?: RuleSetRuleAnonymousCircularType_1;

	/**
	 * Match the resource query of the module.
	 */
	resourceQuery?: RuleSetRuleAnonymousCircularType;

	/**
	 * Match and execute these rules when this rule is matched.
	 */
	rules?: Array<RuleSetRule>;

	/**
	 * Flags a module as with or without side effects.
	 */
	sideEffects?: boolean;

	/**
	 * Shortcut for resource.test.
	 */
	test?: RuleSetRuleAnonymousCircularType_1;

	/**
	 * Module type to use for the module.
	 */
	type?: string;

	/**
	 * Modifiers applied to the module when rule is matched.
	 */
	use?:
		| string
		| ((data: {}) =>
				| string
				| __Type
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
				| Array<
						| string
						| __Type
						| {
								/**
								 * Unique loader options identifier.
								 */
								ident?: string;
								/**
								 * Loader name.
								 */
								loader?: string;
								/**
								 * Loader options.
								 */
								options?: string | { [index: string]: any };
						  }
				  >)
		| {
				/**
				 * Unique loader options identifier.
				 */
				ident?: string;
				/**
				 * Loader name.
				 */
				loader?: string;
				/**
				 * Loader options.
				 */
				options?: string | { [index: string]: any };
		  }
		| ((data: {}) => Array<
				| string
				| __Type
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
		  >)
		| Array<
				| string
				| __Type
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
		  >;
}
type RuleSetRuleAnonymousCircularType =
	| string
	| RegExp
	| ((value: string) => boolean)
	| Array<RuleSetRuleAnonymousCircularType>
	| {
			/**
			 * Logical AND.
			 */
			and?: Array<RuleSetRuleAnonymousCircularType>;
			/**
			 * Logical NOT.
			 */
			not?: Array<RuleSetRuleAnonymousCircularType>;
			/**
			 * Logical OR.
			 */
			or?: Array<RuleSetRuleAnonymousCircularType>;
	  };
type RuleSetRuleAnonymousCircularType_1 =
	| string
	| RegExp
	| ((value: string) => boolean)
	| Array<RuleSetRuleAnonymousCircularType_1>
	| {
			/**
			 * Logical AND.
			 */
			and?: Array<RuleSetRuleAnonymousCircularType_1>;
			/**
			 * Logical NOT.
			 */
			not?: Array<RuleSetRuleAnonymousCircularType_1>;
			/**
			 * Logical OR.
			 */
			or?: Array<RuleSetRuleAnonymousCircularType_1>;
	  };
declare class RuntimeChunkPlugin {
	constructor(options: any);
	options: any;
	apply: (compiler: Compiler) => void;
}
interface RuntimeGlobals {
	/**
	 * the internal require function
	 */
	require: string;

	/**
	 * access to properties of the internal require function/object
	 */
	requireScope: string;

	/**
	 * the internal exports object
	 */
	exports: string;

	/**
	 * top-level this need to be the exports object
	 */
	thisAsExports: string;

	/**
	 * top-level this need to be the exports object
	 */
	returnExportsFromRuntime: string;

	/**
	 * the internal module object
	 */
	module: string;

	/**
	 * the internal module object
	 */
	moduleId: string;

	/**
	 * the internal module object
	 */
	moduleLoaded: string;

	/**
	 * the bundle public path
	 */
	publicPath: string;

	/**
	 * the module id of the entry point
	 */
	entryModuleId: string;

	/**
	 * the module cache
	 */
	moduleCache: string;

	/**
	 * the module functions
	 */
	moduleFactories: string;

	/**
	 * the module functions, with only write access
	 */
	moduleFactoriesAddOnly: string;

	/**
	 * the chunk ensure function
	 */
	ensureChunk: string;

	/**
	 * an object with handlers to ensure a chunk
	 */
	ensureChunkHandlers: string;

	/**
	 * a runtime requirement if ensureChunkHandlers should include loading of chunk needed for entries
	 */
	ensureChunkIncludeEntries: string;

	/**
	 * the chunk prefetch function
	 */
	prefetchChunk: string;

	/**
	 * an object with handlers to prefetch a chunk
	 */
	prefetchChunkHandlers: string;

	/**
	 * the chunk preload function
	 */
	preloadChunk: string;

	/**
	 * an object with handlers to preload a chunk
	 */
	preloadChunkHandlers: string;

	/**
	 * the exported property define getters function
	 */
	definePropertyGetters: string;

	/**
	 * define compatibility on export
	 */
	makeNamespaceObject: string;

	/**
	 * create a fake namespace object
	 */
	createFakeNamespaceObject: string;

	/**
	 * compatibility get default export
	 */
	compatGetDefaultExport: string;

	/**
	 * harmony module decorator
	 */
	harmonyModuleDecorator: string;

	/**
	 * node.js module decorator
	 */
	nodeModuleDecorator: string;

	/**
	 * the webpack hash
	 */
	getFullHash: string;

	/**
	 * an object containing all installed WebAssembly.Instance export objects keyed by module id
	 */
	wasmInstances: string;

	/**
	 * instantiate a wasm instance from url/filename and importsObject
	 */
	instantiateWasm: string;

	/**
	 * the uncaught error handler for the webpack runtime
	 */
	uncaughtErrorHandler: string;

	/**
	 * the script nonce
	 */
	scriptNonce: string;

	/**
	 * the chunk name of the chunk with the runtime
	 */
	chunkName: string;

	/**
	 * the filename of the script part of the chunk
	 */
	getChunkScriptFilename: string;

	/**
	 * the filename of the script part of the hot update chunk
	 */
	getChunkUpdateScriptFilename: string;

	/**
	 * startup signal from runtime
	 */
	startup: string;

	/**
	 * startup signal from runtime
	 */
	startupNoDefault: string;

	/**
	 * interceptor for module executions
	 */
	interceptModuleExecution: string;

	/**
	 * the global object
	 */
	global: string;

	/**
	 * the filename of the HMR manifest
	 */
	getUpdateManifestFilename: string;

	/**
	 * function downloading the update manifest
	 */
	hmrDownloadManifest: string;

	/**
	 * array with handler functions to download chunk updates
	 */
	hmrDownloadUpdateHandlers: string;

	/**
	 * object with all hmr module data for all modules
	 */
	hmrModuleData: string;

	/**
	 * the AMD define function
	 */
	amdDefine: string;

	/**
	 * the AMD options
	 */
	amdOptions: string;

	/**
	 * the System polyfill object
	 */
	system: string;

	/**
	 * the shorthand for Object.prototype.hasOwnProperty
	 * using of it decreases the compiled bundle size
	 */
	hasOwnProperty: string;
}
declare class RuntimeModule extends Module {
	constructor(name: string, stage: number);
	name: string;
	stage: number;
	compilation: Compilation;
	chunk: Chunk;
	attach: (compilation: Compilation, chunk: Chunk) => void;
	generate: () => string;
	getGeneratedCode: () => string;
}
interface RuntimeTemplate {
	outputOptions: Output;
	requestShortener: RequestShortener;
	isIIFE: () => boolean;
	supportsConst: () => boolean;
	supportsArrowFunction: () => boolean;
	supportsForOf: () => boolean;
	returningFunction: (returnValue: any, args: string) => string;
	basicFunction: (args: any, body: any) => string;
	iife: (args: any, body: any) => string;
	forEach: (variable: any, array: any, body: any) => string;

	/**
	 * Add a comment
	 */
	comment: (__0: {
		/**
		 * request string used originally
		 */
		request?: string;
		/**
		 * name of the chunk referenced
		 */
		chunkName?: string;
		/**
		 * reason information of the chunk
		 */
		chunkReason?: string;
		/**
		 * additional message
		 */
		message?: string;
		/**
		 * name of the export
		 */
		exportName?: string;
	}) => string;
	throwMissingModuleErrorBlock: (__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}) => string;
	throwMissingModuleErrorFunction: (__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}) => string;
	missingModule: (__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}) => string;
	missingModuleStatement: (__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}) => string;
	missingModulePromise: (__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}) => string;
	weakError: (__0: {
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * expression to use as id expression
		 */
		idExpr?: string;
		/**
		 * which kind of code should be returned
		 */
		type: "expression" | "promise" | "statements";
	}) => string;
	moduleId: (__0: {
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
	}) => string;
	moduleRaw: (__0: {
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	moduleExports: (__0: {
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	moduleNamespace: (__0: {
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * if the current module is in strict esm mode
		 */
		strict?: boolean;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	moduleNamespacePromise: (__0: {
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the current dependencies block
		 */
		block?: AsyncDependenciesBlock;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * a message for the comment
		 */
		message: string;
		/**
		 * if the current module is in strict esm mode
		 */
		strict?: boolean;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	importStatement: (__0: {
		/**
		 * whether a new variable should be created or the existing one updated
		 */
		update?: boolean;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * name of the import variable
		 */
		importVar: string;
		/**
		 * module in which the statement is emitted
		 */
		originModule: Module;
		/**
		 * true, if this is a weak dependency
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	exportFromImport: (__0: {
		/**
		 * the module graph
		 */
		moduleGraph: ModuleGraph;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the request
		 */
		request: string;
		/**
		 * the export name
		 */
		exportName: string | Array<string>;
		/**
		 * the origin module
		 */
		originModule: Module;
		/**
		 * true, if location is safe for ASI, a bracket can be emitted
		 */
		asiSafe: boolean;
		/**
		 * true, if expression will be called
		 */
		isCall: boolean;
		/**
		 * when false, call context will not be preserved
		 */
		callContext: boolean;
		/**
		 * when true and accessing the default exports, interop code will be generated
		 */
		defaultInterop: boolean;
		/**
		 * the identifier name of the import variable
		 */
		importVar: string;
		/**
		 * init fragments will be added here
		 */
		initFragments: Array<InitFragment>;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	blockPromise: (__0: {
		/**
		 * the async block
		 */
		block: AsyncDependenciesBlock;
		/**
		 * the message
		 */
		message: string;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
	defineEsModuleFlagStatement: (__0: {
		/**
		 * the name of the exports object
		 */
		exportsArgument: string;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}) => string;
}
interface RuntimeValue {
	fn: any;
	fileDependencies: any;
	exec: (parser: any) => any;
}
declare const SKIP_OVER_NAME: unique symbol;
interface ScopeInfo {
	definitions: StackedMap<string, ScopeInfo | VariableInfo>;
	topLevelScope: boolean | "arrow";
	inShorthand: boolean;
	isStrict: boolean;
	isAsmJs: boolean;
	inTry: boolean;
}
interface Serializer {
	serializeMiddlewares: any;
	deserializeMiddlewares: any;
	context: any;
	serialize: (obj: any, context: any) => any;
	deserialize: (value: any, context: any) => any;
}
declare class SideEffectsFlagPlugin {
	constructor();
	apply: (compiler: Compiler) => void;
	static moduleHasSideEffects: (
		moduleName: any,
		flagValue: any,
		cache: any
	) => any;
}

/**
 * istanbul ignore next
 */
interface Snapshot {
	startTime?: number;
	fileTimestamps?: Map<string, FileSystemInfoEntry>;
	fileHashes?: Map<string, string>;
	contextTimestamps?: Map<string, FileSystemInfoEntry>;
	contextHashes?: Map<string, string>;
	missingExistence?: Map<string, boolean>;
	managedItemInfo?: Map<string, string>;
	children?: Set<Snapshot>;
}

/**
 * A subset of Set that offers sorting functionality
 */
interface SortableSet<T> extends Set<T> {
	/**
	 * Sort with a comparer function
	 */
	sortWith: (sortFn: (arg0: T, arg1: T) => number) => void;
	sort: () => void;

	/**
	 * Get data from cache
	 */
	getFromCache: <R>(fn: (arg0: SortableSet<T>) => R) => R;

	/**
	 * Get data from cache (ignoring sorting)
	 */
	getFromUnorderedCache: <R>(fn: (arg0: SortableSet<T>) => R) => R;
	toJSON: () => Array<T>;
}
interface Source {
	size: () => number;
	map: (options: MapOptions) => Object;
	sourceAndMap: (
		options: MapOptions
	) => { source: string | Buffer; map: Object };
	updateHash: (hash: Hash) => void;
	source: () => string | Buffer;
	buffer: () => Buffer;
}
interface SourceContext {
	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the type of source that should be generated
	 */
	type?: string;
}
declare class SourceMapDevToolPlugin {
	constructor(options: SourceMapDevToolPluginOptions);
	sourceMapFilename: string | false;
	sourceMappingURLComment: string | false;
	moduleFilenameTemplate: string | Function;
	fallbackModuleFilenameTemplate: string | Function;
	namespace: string;
	options: SourceMapDevToolPluginOptions;

	/**
	 * Apply compiler
	 */
	apply: (compiler: Compiler) => void;
}
interface SourceMapDevToolPluginOptions {
	/**
	 * Appends the given value to the original asset. Usually the #sourceMappingURL comment. [url] is replaced with a URL to the source map file. false disables the appending.
	 */
	append?: string | false;

	/**
	 * Indicates whether column mappings should be used (defaults to true).
	 */
	columns?: boolean;

	/**
	 * Exclude modules that match the given value from source map generation.
	 */
	exclude?: string | RegExp | Array<string | RegExp>;

	/**
	 * Generator string or function to create identifiers of modules for the 'sources' array in the SourceMap used only if 'moduleFilenameTemplate' would result in a conflict.
	 */
	fallbackModuleFilenameTemplate?: string | Function;

	/**
	 * Path prefix to which the [file] placeholder is relative to.
	 */
	fileContext?: string;

	/**
	 * Defines the output filename of the SourceMap (will be inlined if no value is provided).
	 */
	filename?: string | false;

	/**
	 * Include source maps for module paths that match the given value.
	 */
	include?: string | RegExp | Array<string | RegExp>;

	/**
	 * Indicates whether SourceMaps from loaders should be used (defaults to true).
	 */
	module?: boolean;

	/**
	 * Generator string or function to create identifiers of modules for the 'sources' array in the SourceMap.
	 */
	moduleFilenameTemplate?: string | Function;

	/**
	 * Namespace prefix to allow multiple webpack roots in the devtools.
	 */
	namespace?: string;

	/**
	 * Omit the 'sourceContents' array from the SourceMap.
	 */
	noSources?: boolean;

	/**
	 * Provide a custom public path for the SourceMapping comment.
	 */
	publicPath?: string;

	/**
	 * Provide a custom value for the 'sourceRoot' property in the SourceMap.
	 */
	sourceRoot?: string;

	/**
	 * Include source maps for modules based on their extension (defaults to .js and .css).
	 */
	test?: string | RegExp | Array<string | RegExp>;
}
interface SourcePosition {
	line: number;
	column?: number;
}
interface SplitChunksOptions {
	chunksFilter: (chunk: Chunk) => boolean;
	minSize: Record<string, number>;
	minRemainingSize: Record<string, number>;
	maxInitialSize: Record<string, number>;
	maxAsyncSize: Record<string, number>;
	minChunks: number;
	maxAsyncRequests: number;
	maxInitialRequests: number;
	hidePathInfo: boolean;
	filename: string | ((arg0: PathData, arg1: AssetInfo) => string);
	automaticNameDelimiter: string;
	getCacheGroups: (
		module: Module,
		context: CacheGroupsContext
	) => Array<CacheGroupSource>;
	getName: (module: Module, chunks: Array<Chunk>, key: string) => string;
	fallbackCacheGroup: FallbackCacheGroup;
}
declare class SplitChunksPlugin {
	constructor(options: OptimizationSplitChunksOptions);
	options: SplitChunksOptions;
	apply: (compiler: Compiler) => void;
}
interface StackedMap<K, V> {
	map: Map<K, V | typeof TOMBSTONE | typeof UNDEFINED_MARKER>;
	stack: Array<Map<K, V | typeof TOMBSTONE | typeof UNDEFINED_MARKER>>;
	set: (item: K, value: V) => void;
	delete: (item: K) => void;
	has: (item: K) => boolean;
	get: (item: K) => V;
	asArray: () => Array<K>;
	asSet: () => Set<K>;
	asPairArray: () => Array<[K, V]>;
	asMap: () => Map<K, V>;
	size: number;
	createChild: () => StackedMap<K, V>;
}
declare class StatsClass {
	constructor(compilation: Compilation);
	compilation: Compilation;
	hash: string;
	startTime: any;
	endTime: any;
	hasWarnings: () => boolean;
	hasErrors: () => boolean;
	toJson: (options: any) => any;
	toString: (options: any) => any;
}
interface StatsFactory {
	hooks: Readonly<{
		extract: HookMap<SyncBailHook<[any, any, any], any>>;
		filter: HookMap<SyncBailHook<[any, any, number, number], any>>;
		sort: HookMap<
			SyncBailHook<[Array<(arg0: any, arg1: any) => number>, any], any>
		>;
		filterSorted: HookMap<SyncBailHook<[any, any, number, number], any>>;
		sortResults: HookMap<
			SyncBailHook<[Array<(arg0: any, arg1: any) => number>, any], any>
		>;
		filterResults: HookMap<SyncBailHook<any, any>>;
		merge: HookMap<SyncBailHook<[Array<any>, any], any>>;
		result: HookMap<SyncBailHook<[Array<any>, any], any>>;
		getItemName: HookMap<SyncBailHook<[any, any], any>>;
		getItemFactory: HookMap<SyncBailHook<[any, any], any>>;
	}>;
	create: (type: any, data: any, baseContext: any) => any;
}

/**
 * Stats options object.
 */
interface StatsOptions {
	/**
	 * Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).
	 */
	all?: boolean;

	/**
	 * Add assets information.
	 */
	assets?: boolean;

	/**
	 * Sort the assets by that field.
	 */
	assetsSort?: string;

	/**
	 * Add built at time information.
	 */
	builtAt?: boolean;

	/**
	 * Add information about cached (not built) modules.
	 */
	cached?: boolean;

	/**
	 * Show cached assets (setting this to `false` only shows emitted files).
	 */
	cachedAssets?: boolean;

	/**
	 * Add children information.
	 */
	children?: boolean;

	/**
	 * Display all chunk groups with the corresponding bundles.
	 */
	chunkGroups?: boolean;

	/**
	 * Add built modules information to chunk information.
	 */
	chunkModules?: boolean;

	/**
	 * Add the origins of chunks and chunk merging info.
	 */
	chunkOrigins?: boolean;

	/**
	 * Add information about parent, children and sibling chunks to chunk information.
	 */
	chunkRelations?: boolean;

	/**
	 * Add root modules information to chunk information.
	 */
	chunkRootModules?: boolean;

	/**
	 * Add chunk information.
	 */
	chunks?: boolean;

	/**
	 * Sort the chunks by that field.
	 */
	chunksSort?: string;

	/**
	 * Enables/Disables colorful output.
	 */
	colors?:
		| boolean
		| {
				/**
				 * Custom color for bold text.
				 */
				bold?: string;
				/**
				 * Custom color for cyan text.
				 */
				cyan?: string;
				/**
				 * Custom color for green text.
				 */
				green?: string;
				/**
				 * Custom color for magenta text.
				 */
				magenta?: string;
				/**
				 * Custom color for red text.
				 */
				red?: string;
				/**
				 * Custom color for yellow text.
				 */
				yellow?: string;
		  };

	/**
	 * Context directory for request shortening.
	 */
	context?: string;

	/**
	 * Add module depth in module graph.
	 */
	depth?: boolean;

	/**
	 * Display the entry points with the corresponding bundles.
	 */
	entrypoints?: boolean;

	/**
	 * Add --env information.
	 */
	env?: boolean;

	/**
	 * Add details to errors (like resolving log).
	 */
	errorDetails?: boolean;

	/**
	 * Add internal stack trace to errors.
	 */
	errorStack?: boolean;

	/**
	 * Add errors.
	 */
	errors?: boolean;

	/**
	 * Please use excludeModules instead.
	 */
	exclude?:
		| string
		| boolean
		| RegExp
		| ((value: string) => boolean)
		| Array<string | RegExp | ((value: string) => boolean)>;

	/**
	 * Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.
	 */
	excludeAssets?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| Array<string | RegExp | ((value: string) => boolean)>;

	/**
	 * Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.
	 */
	excludeModules?:
		| string
		| boolean
		| RegExp
		| ((value: string) => boolean)
		| Array<string | RegExp | ((value: string) => boolean)>;

	/**
	 * Add the hash of the compilation.
	 */
	hash?: boolean;

	/**
	 * Add ids.
	 */
	ids?: boolean;

	/**
	 * Add logging output.
	 */
	logging?: boolean | "none" | "verbose" | "info" | "error" | "warn" | "log";

	/**
	 * Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.
	 */
	loggingDebug?:
		| string
		| boolean
		| RegExp
		| ((value: string) => boolean)
		| Array<string | RegExp | ((value: string) => boolean)>;

	/**
	 * Add stack traces to logging output.
	 */
	loggingTrace?: boolean;

	/**
	 * Set the maximum number of modules to be shown.
	 */
	maxModules?: number;

	/**
	 * Add information about assets inside modules.
	 */
	moduleAssets?: boolean;

	/**
	 * Add dependencies and origin of warnings/errors.
	 */
	moduleTrace?: boolean;

	/**
	 * Add built modules information.
	 */
	modules?: boolean;

	/**
	 * Sort the modules by that field.
	 */
	modulesSort?: string;

	/**
	 * Add information about modules nested in other modules (like with module concatenation).
	 */
	nestedModules?: boolean;

	/**
	 * Show reasons why optimization bailed out for modules.
	 */
	optimizationBailout?: boolean;

	/**
	 * Add information about orphan modules.
	 */
	orphanModules?: boolean;

	/**
	 * Add output path information.
	 */
	outputPath?: boolean;

	/**
	 * Add performance hint flags.
	 */
	performance?: boolean;

	/**
	 * Preset for the default values.
	 */
	preset?: string | boolean;

	/**
	 * Show exports provided by modules.
	 */
	providedExports?: boolean;

	/**
	 * Add public path information.
	 */
	publicPath?: boolean;

	/**
	 * Add information about the reasons why modules are included.
	 */
	reasons?: boolean;

	/**
	 * Add information about runtime modules.
	 */
	runtime?: boolean;

	/**
	 * Add the source code of modules.
	 */
	source?: boolean;

	/**
	 * Add timing information.
	 */
	timings?: boolean;

	/**
	 * Show exports used by modules.
	 */
	usedExports?: boolean;

	/**
	 * Add webpack version information.
	 */
	version?: boolean;

	/**
	 * Add warnings.
	 */
	warnings?: boolean;

	/**
	 * Suppress warnings that match the specified filters. Filters can be Strings, RegExps or Functions.
	 */
	warningsFilter?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| Array<string | RegExp | ((value: string) => boolean)>;
}
interface StatsPrinter {
	hooks: Readonly<{
		sortElements: HookMap<SyncBailHook<[Array<string>, any], any>>;
		printElements: HookMap<SyncBailHook<[Array<PrintedElement>, any], any>>;
		sortItems: HookMap<SyncBailHook<[Array<any>, any], any>>;
		getItemName: HookMap<SyncBailHook<[any, any], any>>;
		printItems: HookMap<SyncBailHook<[Array<string>, any], any>>;
		print: HookMap<SyncBailHook<[any, any], any>>;
		result: HookMap<SyncWaterfallHook<[string, any]>>;
	}>;
	print: (type: any, object: any, baseContext: any) => any;
}
interface SwitchParams {
	caseIndex: number;
}
interface SyntheticDependencyLocation {
	name: string;
	index?: number;
}
declare const TOMBSTONE: unique symbol;
interface TagInfo {
	tag: any;
	data: any;
	next: TagInfo;
}
declare class Template {
	constructor();
	static getFunctionContent: (fn: Function) => string;
	static toIdentifier: (str: string) => string;
	static toComment: (str: string) => string;
	static toNormalComment: (str: string) => string;
	static toPath: (str: string) => string;
	static numberToIdentifier: (n: number) => string;
	static numberToIdentifierContinuation: (n: number) => string;
	static indent: (s: string | Array<string>) => string;
	static prefix: (s: string | Array<string>, prefix: string) => string;
	static asString: (str: string | Array<string>) => string;
	static getModulesArrayBounds: (
		modules: Array<WithId>
	) => false | [number, number];
	static renderChunkModules: (
		renderContext: RenderContextObjectModuleTemplate,
		modules: Array<Module>,
		renderModule: (arg0: Module) => Source,
		prefix: string
	) => Source;
	static renderRuntimeModules: (
		runtimeModules: Array<RuntimeModule>,
		renderContext: RenderContextObjectModuleTemplate
	) => Source;
	static renderChunkRuntimeModules: (
		runtimeModules: Array<RuntimeModule>,
		renderContext: RenderContextObjectModuleTemplate
	) => Source;
	static NUMBER_OF_IDENTIFIER_START_CHARS: number;
	static NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS: number;
}
interface TypeParams {
	type: string;
}
declare const UNDEFINED_MARKER: unique symbol;
interface UniqueItemsParams {
	i: number;
	j: number;
}
interface UpdateHashContext {
	/**
	 * the module
	 */
	module: NormalModule;

	/**
	 * the compilation
	 */
	compilation: Compilation;
}
interface ValidationErrorClass_1 {
	new (
		errors: Array<ErrorObject & { children?: Array<ErrorObject> }>,
		schema: JSONSchema4 | JSONSchema6 | JSONSchema7,
		configuration: ValidationErrorConfiguration
	): ValidationErrorClass_2;

	/**
	 * Create .stack property on a target object
	 */
	captureStackTrace: (targetObject: Object, constructorOpt: Function) => void;

	/**
	 * Optional override for formatting stack traces
	 */
	prepareStackTrace?: (err: Error, stackTraces: Array<NodeJS.CallSite>) => any;
	stackTraceLimit: number;
}
interface ValidationErrorClass_2 extends Error {
	errors: Array<ErrorObject & { children?: Array<ErrorObject> }>;
	schema: JSONSchema4 | JSONSchema6 | JSONSchema7;
	headerName: string;
	baseDataPath: string;
	postFormatter: PostFormatter;
	getSchemaPart: (path: string) => JSONSchema4 | JSONSchema6 | JSONSchema7;
	formatSchema: (
		schema: JSONSchema4 | JSONSchema6 | JSONSchema7,
		prevSchemas: Array<Object>
	) => string;
	getSchemaPartText: (
		schemaPart: JSONSchema4 | JSONSchema6 | JSONSchema7,
		additionalPath: boolean | Array<string>,
		needDot: boolean
	) => string;
	getSchemaPartDescription: (
		schemaPart: JSONSchema4 | JSONSchema6 | JSONSchema7
	) => string;
	formatValidationError: (
		error: ErrorObject & { children?: Array<ErrorObject> }
	) => string;
	formatValidationErrors: (
		errors: Array<ErrorObject & { children?: Array<ErrorObject> }>
	) => string;
}
interface VariableInfo {
	declaredScope: ScopeInfo;
	freeName: string | true;
	tagInfo: TagInfo;
}
declare class WatchIgnorePlugin {
	constructor(options: WatchIgnorePluginOptions);
	paths: [string | RegExp, string | RegExp];
	apply: (compiler: Compiler) => void;
}

/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
interface WatchIgnorePluginOptions {
	/**
	 * A list of RegExps or absolute paths to directories or files that should be ignored.
	 */
	paths: [string | RegExp, string | RegExp];
}

/**
 * Options for the watcher.
 */
interface WatchOptions {
	/**
	 * Delay the rebuilt after the first change. Value is a time in ms.
	 */
	aggregateTimeout?: number;

	/**
	 * Ignore some files from watching (glob pattern).
	 */
	ignored?: string | Array<string>;

	/**
	 * Enable polling mode for watching.
	 */
	poll?: number | boolean;

	/**
	 * Stop watching when stdin stream has ended.
	 */
	stdin?: boolean;
}
interface Watching {
	startTime: number;
	invalid: boolean;
	handler: CallbackFunctionCompiler<StatsClass>;
	callbacks: Array<CallbackFunctionCompiler<void>>;
	closed: boolean;
	suspended: boolean;
	watchOptions: {
		/**
		 * Delay the rebuilt after the first change. Value is a time in ms.
		 */
		aggregateTimeout?: number;
		/**
		 * Ignore some files from watching (glob pattern).
		 */
		ignored?: string | Array<string>;
		/**
		 * Enable polling mode for watching.
		 */
		poll?: number | boolean;
		/**
		 * Stop watching when stdin stream has ended.
		 */
		stdin?: boolean;
	};
	compiler: Compiler;
	running: boolean;
	watcher: any;
	pausedWatcher: any;
	watch: (
		files: Iterable<string>,
		dirs: Iterable<string>,
		missing: Iterable<string>
	) => void;
	invalidate: (callback: CallbackFunctionCompiler<void>) => void;
	suspend: () => void;
	resume: () => void;
	close: (callback: CallbackFunctionCompiler<void>) => void;
}
declare class WebWorkerTemplatePlugin {
	constructor();
	apply: (compiler: Compiler) => void;
}
interface WebpackError extends Error {
	details: any;
	module: Module;
	loc: SyntheticDependencyLocation | RealDependencyLocation;
	hideStack: boolean;
	chunk: Chunk;
	file: string;
	serialize: (__0: { write: any }) => void;
	deserialize: (__0: { read: any }) => void;
}
interface WebpackLogger {
	getChildLogger: (arg0: string | (() => string)) => WebpackLogger;
	error: (...args: Array<any>) => void;
	warn: (...args: Array<any>) => void;
	info: (...args: Array<any>) => void;
	log: (...args: Array<any>) => void;
	debug: (...args: Array<any>) => void;
	assert: (assertion: any, ...args: Array<any>) => void;
	trace: () => void;
	clear: () => void;
	status: (...args: Array<any>) => void;
	group: (...args: Array<any>) => void;
	groupCollapsed: (...args: Array<any>) => void;
	groupEnd: (...args: Array<any>) => void;
	profile: (label: any) => void;
	profileEnd: (label: any) => void;
	time: (label: any) => void;
	timeLog: (label: any) => void;
	timeEnd: (label: any) => void;
	timeAggregate: (label: any) => void;
	timeAggregateEnd: (label: any) => void;
}

/**
 * Options object as provided by the user.
 */
interface WebpackOptions {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: false | { [index: string]: any };

	/**
	 * Report the first error as a hard error instead of tolerating it.
	 */
	bail?: boolean;

	/**
	 * Cache generated modules and chunks to improve performance for multiple incremental builds.
	 */
	cache?: boolean | MemoryCacheOptions | FileCacheOptions;

	/**
	 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
	 */
	context?: string;

	/**
	 * References to other configurations to depend on.
	 */
	dependencies?: Array<string>;

	/**
	 * Options for the webpack-dev-server.
	 */
	devServer?: DevServer;

	/**
	 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
	 */
	devtool?: string | false;

	/**
	 * The entry point(s) of the compilation.
	 */
	entry?:
		| string
		| (() =>
				| string
				| EntryObject
				| [string, string]
				| Promise<string | EntryObject | [string, string]>)
		| EntryObject
		| [string, string];

	/**
	 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
	 */
	experiments?: Experiments;

	/**
	 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
	 */
	externals?:
		| string
		| RegExp
		| ((
				context: string,
				request: string,
				callback: (err: Error, result: string) => void
		  ) => void)
		| {
				[index: string]:
					| string
					| boolean
					| Array<string>
					| { [index: string]: any };
		  }
		| Array<
				| string
				| RegExp
				| {
						[index: string]:
							| string
							| boolean
							| Array<string>
							| { [index: string]: any };
				  }
				| ((
						context: string,
						request: string,
						callback: (err: Error, result: string) => void
				  ) => void)
		  >;

	/**
	 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
	 */
	externalsType?:
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";

	/**
	 * Options for infrastructure level logging.
	 */
	infrastructureLogging?: InfrastructureLogging;

	/**
	 * Custom values available in the loader context.
	 */
	loader?: Loader;

	/**
	 * Enable production optimizations or development hints.
	 */
	mode?: "development" | "production" | "none";

	/**
	 * Options affecting the normal modules (`NormalModuleFactory`).
	 */
	module?: ModuleOptions;

	/**
	 * Name of the configuration. Used when loading multiple configurations.
	 */
	name?: string;

	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node?: false | NodeOptions;

	/**
	 * Enables/Disables integrated optimizations.
	 */
	optimization?: Optimization;

	/**
	 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
	 */
	output?: Output;

	/**
	 * The number of parallel processed modules in the compilation.
	 */
	parallelism?: number;

	/**
	 * Configuration for web performance recommendations.
	 */
	performance?: false | PerformanceOptions;

	/**
	 * Add additional plugins to the compiler.
	 */
	plugins?: Array<WebpackPluginInstance | ((compiler: Compiler) => void)>;

	/**
	 * Capture timing information for each module.
	 */
	profile?: boolean;

	/**
	 * Store compiler state to a json file.
	 */
	recordsInputPath?: string | false;

	/**
	 * Load compiler state from a json file.
	 */
	recordsOutputPath?: string | false;

	/**
	 * Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.
	 */
	recordsPath?: string | false;

	/**
	 * Options for the resolver.
	 */
	resolve?: ResolveOptions;

	/**
	 * Options for the resolver when resolving loaders.
	 */
	resolveLoader?: ResolveOptions;

	/**
	 * Stats options object or preset name.
	 */
	stats?:
		| boolean
		| "none"
		| StatsOptions
		| "errors-only"
		| "minimal"
		| "normal"
		| "detailed"
		| "verbose"
		| "errors-warnings";

	/**
	 * Environment to build for.
	 */
	target?:
		| "web"
		| "webworker"
		| "node"
		| "async-node"
		| "node-webkit"
		| "electron-main"
		| "electron-renderer"
		| "electron-preload"
		| ((compiler: Compiler) => void);

	/**
	 * Enter watch mode, which rebuilds on file change.
	 */
	watch?: boolean;

	/**
	 * Options for the watcher.
	 */
	watchOptions?: WatchOptions;
}
declare class WebpackOptionsApply extends OptionsApply {
	constructor();
}
declare class WebpackOptionsDefaulter {
	constructor();
	process: (options: any) => any;
}

/**
 * Normalized webpack options object.
 */
interface WebpackOptionsNormalized {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: false | { [index: string]: any };

	/**
	 * Report the first error as a hard error instead of tolerating it.
	 */
	bail?: boolean;

	/**
	 * Cache generated modules and chunks to improve performance for multiple incremental builds.
	 */
	cache: false | MemoryCacheOptions | FileCacheOptions;

	/**
	 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
	 */
	context?: string;

	/**
	 * References to other configurations to depend on.
	 */
	dependencies?: Array<string>;

	/**
	 * Options for the webpack-dev-server.
	 */
	devServer?: DevServer;

	/**
	 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
	 */
	devtool?: string | false;

	/**
	 * The entry point(s) of the compilation.
	 */
	entry: (() => Promise<EntryStaticNormalized>) | EntryStaticNormalized;

	/**
	 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
	 */
	experiments: Experiments;

	/**
	 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
	 */
	externals:
		| string
		| RegExp
		| ((
				context: string,
				request: string,
				callback: (err: Error, result: string) => void
		  ) => void)
		| {
				[index: string]:
					| string
					| boolean
					| Array<string>
					| { [index: string]: any };
		  }
		| Array<
				| string
				| RegExp
				| {
						[index: string]:
							| string
							| boolean
							| Array<string>
							| { [index: string]: any };
				  }
				| ((
						context: string,
						request: string,
						callback: (err: Error, result: string) => void
				  ) => void)
		  >;

	/**
	 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
	 */
	externalsType?:
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";

	/**
	 * Options for infrastructure level logging.
	 */
	infrastructureLogging: InfrastructureLogging;

	/**
	 * Custom values available in the loader context.
	 */
	loader?: Loader;

	/**
	 * Enable production optimizations or development hints.
	 */
	mode?: "development" | "production" | "none";

	/**
	 * Options affecting the normal modules (`NormalModuleFactory`).
	 */
	module: ModuleOptions;

	/**
	 * Name of the configuration. Used when loading multiple configurations.
	 */
	name?: string;

	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node: false | NodeOptions;

	/**
	 * Enables/Disables integrated optimizations.
	 */
	optimization: Optimization;

	/**
	 * Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
	 */
	output: OutputNormalized;

	/**
	 * The number of parallel processed modules in the compilation.
	 */
	parallelism?: number;

	/**
	 * Configuration for web performance recommendations.
	 */
	performance?: false | PerformanceOptions;

	/**
	 * Add additional plugins to the compiler.
	 */
	plugins: Array<WebpackPluginInstance | ((compiler: Compiler) => void)>;

	/**
	 * Capture timing information for each module.
	 */
	profile?: boolean;

	/**
	 * Store compiler state to a json file.
	 */
	recordsInputPath?: string | false;

	/**
	 * Load compiler state from a json file.
	 */
	recordsOutputPath?: string | false;

	/**
	 * Options for the resolver.
	 */
	resolve: ResolveOptions;

	/**
	 * Options for the resolver when resolving loaders.
	 */
	resolveLoader: ResolveOptions;

	/**
	 * Stats options object or preset name.
	 */
	stats:
		| boolean
		| "none"
		| StatsOptions
		| "errors-only"
		| "minimal"
		| "normal"
		| "detailed"
		| "verbose"
		| "errors-warnings";

	/**
	 * Environment to build for.
	 */
	target?:
		| "web"
		| "webworker"
		| "node"
		| "async-node"
		| "node-webkit"
		| "electron-main"
		| "electron-renderer"
		| "electron-preload"
		| ((compiler: Compiler) => void);

	/**
	 * Enter watch mode, which rebuilds on file change.
	 */
	watch?: boolean;

	/**
	 * Options for the watcher.
	 */
	watchOptions: WatchOptions;
}

/**
 * Plugin instance.
 */
interface WebpackPluginInstance {
	[index: string]: any;

	/**
	 * The run point of the plugin, required method.
	 */
	apply: (compiler: Compiler) => void;
}
interface WithId {
	id: string | number;
}
interface WithOptions {
	/**
	 * create a resolver with additional/different options
	 */
	withOptions: (arg0: any) => Resolver & WithOptions;
}
interface WriteOnlySet<T> {
	add: (item: T) => void;
}
type __Type = (data: {}) =>
	| string
	| __Type
	| {
			/**
			 * Unique loader options identifier.
			 */
			ident?: string;
			/**
			 * Loader name.
			 */
			loader?: string;
			/**
			 * Loader options.
			 */
			options?: string | { [index: string]: any };
	  }
	| Array<
			| string
			| __Type
			| {
					/**
					 * Unique loader options identifier.
					 */
					ident?: string;
					/**
					 * Loader name.
					 */
					loader?: string;
					/**
					 * Loader options.
					 */
					options?: string | { [index: string]: any };
			  }
	  >;
interface comparators {
	compareChunksById: (a: Chunk, b: Chunk) => 0 | 1 | -1;
	compareModulesByIdentifier: (a: Module, b: Module) => 0 | 1 | -1;
	compareModulesById: (
		arg0: ChunkGraph
	) => (arg0: Module, arg1: Module) => 0 | 1 | -1;
	compareNumbers: (a: number, b: number) => 0 | 1 | -1;
	compareStringsNumeric: (a: string, b: string) => 0 | 1 | -1;
	compareModulesByPostOrderIndexOrIdentifier: (
		arg0: ModuleGraph
	) => (arg0: Module, arg1: Module) => 0 | 1 | -1;
	compareModulesByPreOrderIndexOrIdentifier: (
		arg0: ModuleGraph
	) => (arg0: Module, arg1: Module) => 0 | 1 | -1;
	compareModulesByIdOrIdentifier: (
		arg0: ChunkGraph
	) => (arg0: Module, arg1: Module) => 0 | 1 | -1;
	compareChunks: (arg0: ChunkGraph) => (arg0: Chunk, arg1: Chunk) => 0 | 1 | -1;
	compareIds: (a: string | number, b: string | number) => 0 | 1 | -1;
	compareChunkGroupsByIndex: (a: ChunkGroup, b: ChunkGroup) => 0 | 1 | -1;
	concatComparators: <T>(
		c1: (arg0: T, arg1: T) => 0 | 1 | -1,
		c2: (arg0: T, arg1: T) => 0 | 1 | -1,
		...cRest: Array<(arg0: T, arg1: T) => 0 | 1 | -1>
	) => (arg0: T, arg1: T) => 0 | 1 | -1;
	compareSelect: <T, R>(
		getter: (input: T) => R,
		comparator: (arg0: R, arg1: R) => 0 | 1 | -1
	) => (arg0: T, arg1: T) => 0 | 1 | -1;
	compareIterables: <T>(
		elementComparator: (arg0: T, arg1: T) => 0 | 1 | -1
	) => (arg0: Iterable<T>, arg1: Iterable<T>) => 0 | 1 | -1;
	keepOriginalOrder: <T>(
		iterable: Iterable<T>
	) => (arg0: T, arg1: T) => 0 | 1 | -1;
	compareChunksNatural: (
		chunkGraph: ChunkGraph
	) => (arg0: Chunk, arg1: Chunk) => 0 | 1 | -1;

	/**
	 * Compare two locations
	 */
	compareLocations: (
		a: SyntheticDependencyLocation | RealDependencyLocation,
		b: SyntheticDependencyLocation | RealDependencyLocation
	) => 0 | 1 | -1;
}
interface serialization {
	register: (
		Constructor: { new (...params: Array<any>): any },
		request: string,
		name: string,
		serializer: ObjectSerializer
	) => void;
	registerLoader: (regExp: RegExp, loader: (arg0: string) => boolean) => void;
	registerNotSerializable: (Constructor: {
		new (...params: Array<any>): any;
	}) => void;
	NOT_SERIALIZABLE: {};
	MEASURE_START_OPERATION: typeof MEASURE_START_OPERATION;
	MEASURE_END_OPERATION: typeof MEASURE_END_OPERATION;
	buffersSerializer: Serializer;
	createFileSerializer: (fs: any) => Serializer;
}
declare const exports: ((
	options: WebpackOptions | Array<WebpackOptions>,
	callback: CallbackFunctionWebpack<StatsClass | MultiStats>
) => Compiler | MultiCompiler) & {
	WebpackOptionsApply: typeof WebpackOptionsApply;
	validate: any;
	validateSchema: (schema: any, options: any) => void;
	version: any;
	AutomaticPrefetchPlugin: typeof AutomaticPrefetchPlugin;
	BannerPlugin: typeof BannerPlugin;
	Cache: typeof Cache;
	Compilation: typeof Compilation;
	Compiler: typeof Compiler;
	ContextExclusionPlugin: typeof ContextExclusionPlugin;
	ContextReplacementPlugin: typeof ContextReplacementPlugin;
	DefinePlugin: typeof DefinePlugin;
	DelegatedPlugin: typeof DelegatedPlugin;
	Dependency: typeof Dependency;
	DllPlugin: typeof DllPlugin;
	DllReferencePlugin: typeof DllReferencePlugin;
	EntryPlugin: typeof EntryPlugin;
	EnvironmentPlugin: typeof EnvironmentPlugin;
	EvalDevToolModulePlugin: typeof EvalDevToolModulePlugin;
	EvalSourceMapDevToolPlugin: typeof EvalSourceMapDevToolPlugin;
	ExternalsPlugin: typeof ExternalsPlugin;
	Generator: typeof Generator;
	HotModuleReplacementPlugin: typeof HotModuleReplacementPlugin;
	IgnorePlugin: typeof IgnorePlugin;
	JavascriptModulesPlugin: typeof JavascriptModulesPlugin;
	LibManifestPlugin: typeof LibManifestPlugin;
	LibraryTemplatePlugin: typeof LibraryTemplatePlugin;
	LoaderOptionsPlugin: typeof LoaderOptionsPlugin;
	LoaderTargetPlugin: typeof LoaderTargetPlugin;
	Module: typeof Module;
	ModuleFilenameHelpers: ModuleFilenameHelpers;
	NoEmitOnErrorsPlugin: typeof NoEmitOnErrorsPlugin;
	NormalModule: typeof NormalModule;
	NormalModuleReplacementPlugin: typeof NormalModuleReplacementPlugin;
	MultiCompiler: typeof MultiCompiler;
	Parser: typeof Parser;
	PrefetchPlugin: typeof PrefetchPlugin;
	ProgressPlugin: typeof ProgressPlugin;
	ProvidePlugin: typeof ProvidePlugin;
	RuntimeGlobals: RuntimeGlobals;
	RuntimeModule: typeof RuntimeModule;
	SingleEntryPlugin: typeof EntryPlugin;
	SourceMapDevToolPlugin: typeof SourceMapDevToolPlugin;
	Stats: typeof StatsClass;
	Template: typeof Template;
	WatchIgnorePlugin: typeof WatchIgnorePlugin;
	WebpackOptionsDefaulter: typeof WebpackOptionsDefaulter;
	WebpackOptionsValidationError: ValidationErrorClass_1;
	ValidationError: ValidationErrorClass_1;
	cache: { MemoryCachePlugin: typeof MemoryCachePlugin };
	config: {
		getNormalizedWebpackOptions: (
			config: WebpackOptions
		) => WebpackOptionsNormalized;
		applyWebpackOptionsDefaults: (options: WebpackOptionsNormalized) => void;
	};
	ids: {
		ChunkModuleIdRangePlugin: typeof ChunkModuleIdRangePlugin;
		NaturalModuleIdsPlugin: typeof NaturalModuleIdsPlugin;
		OccurrenceModuleIdsPlugin: typeof OccurrenceModuleIdsPlugin;
		NamedModuleIdsPlugin: typeof NamedModuleIdsPlugin;
		DeterministicModuleIdsPlugin: typeof DeterministicModuleIdsPlugin;
		NamedChunkIdsPlugin: typeof NamedChunkIdsPlugin;
		OccurrenceChunkIdsPlugin: typeof OccurrenceChunkIdsPlugin;
		HashedModuleIdsPlugin: typeof HashedModuleIdsPlugin;
	};
	javascript: { JavascriptModulesPlugin: typeof JavascriptModulesPlugin };
	optimize: {
		AggressiveMergingPlugin: typeof AggressiveMergingPlugin;
		AggressiveSplittingPlugin: typeof AggressiveSplittingPlugin;
		LimitChunkCountPlugin: typeof LimitChunkCountPlugin;
		MinChunkSizePlugin: typeof MinChunkSizePlugin;
		ModuleConcatenationPlugin: typeof ModuleConcatenationPlugin;
		RuntimeChunkPlugin: typeof RuntimeChunkPlugin;
		SideEffectsFlagPlugin: typeof SideEffectsFlagPlugin;
		SplitChunksPlugin: typeof SplitChunksPlugin;
	};
	web: {
		FetchCompileWasmPlugin: typeof FetchCompileWasmPlugin;
		JsonpTemplatePlugin: typeof JsonpTemplatePlugin;
	};
	webworker: { WebWorkerTemplatePlugin: typeof WebWorkerTemplatePlugin };
	node: {
		NodeEnvironmentPlugin: typeof NodeEnvironmentPlugin;
		NodeTemplatePlugin: typeof NodeTemplatePlugin;
		ReadFileCompileWasmPlugin: typeof ReadFileCompileWasmPlugin;
	};
	wasm: { AsyncWebAssemblyModulesPlugin: typeof AsyncWebAssemblyModulesPlugin };
	library: {
		AbstractLibraryPlugin: typeof AbstractLibraryPlugin;
		EnableLibraryPlugin: typeof EnableLibraryPlugin;
	};
	debug: { ProfilingPlugin: typeof ProfilingPlugin };
	util: {
		createHash: (algorithm: string | typeof Hash) => Hash;
		comparators: comparators;
		serialization: serialization;
	};
};
export = exports;
