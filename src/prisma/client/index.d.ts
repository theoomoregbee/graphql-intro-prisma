// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  author: (where?: AuthorWhereInput) => Promise<boolean>;
  book: (where?: BookWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  author: (where: AuthorWhereUniqueInput) => AuthorNullablePromise;
  authors: (args?: {
    where?: AuthorWhereInput;
    orderBy?: AuthorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Author>;
  authorsConnection: (args?: {
    where?: AuthorWhereInput;
    orderBy?: AuthorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AuthorConnectionPromise;
  book: (where: BookWhereUniqueInput) => BookNullablePromise;
  books: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Book>;
  booksConnection: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BookConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAuthor: (data: AuthorCreateInput) => AuthorPromise;
  updateAuthor: (args: {
    data: AuthorUpdateInput;
    where: AuthorWhereUniqueInput;
  }) => AuthorPromise;
  updateManyAuthors: (args: {
    data: AuthorUpdateManyMutationInput;
    where?: AuthorWhereInput;
  }) => BatchPayloadPromise;
  upsertAuthor: (args: {
    where: AuthorWhereUniqueInput;
    create: AuthorCreateInput;
    update: AuthorUpdateInput;
  }) => AuthorPromise;
  deleteAuthor: (where: AuthorWhereUniqueInput) => AuthorPromise;
  deleteManyAuthors: (where?: AuthorWhereInput) => BatchPayloadPromise;
  createBook: (data: BookCreateInput) => BookPromise;
  updateBook: (args: {
    data: BookUpdateInput;
    where: BookWhereUniqueInput;
  }) => BookPromise;
  updateManyBooks: (args: {
    data: BookUpdateManyMutationInput;
    where?: BookWhereInput;
  }) => BatchPayloadPromise;
  upsertBook: (args: {
    where: BookWhereUniqueInput;
    create: BookCreateInput;
    update: BookUpdateInput;
  }) => BookPromise;
  deleteBook: (where: BookWhereUniqueInput) => BookPromise;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  author: (
    where?: AuthorSubscriptionWhereInput
  ) => AuthorSubscriptionPayloadSubscription;
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "pages_ASC"
  | "pages_DESC"
  | "chapters_ASC"
  | "chapters_DESC";

export type AuthorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AuthorWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface BookWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  pages?: Maybe<Int>;
  pages_not?: Maybe<Int>;
  pages_in?: Maybe<Int[] | Int>;
  pages_not_in?: Maybe<Int[] | Int>;
  pages_lt?: Maybe<Int>;
  pages_lte?: Maybe<Int>;
  pages_gt?: Maybe<Int>;
  pages_gte?: Maybe<Int>;
  chapters?: Maybe<Int>;
  chapters_not?: Maybe<Int>;
  chapters_in?: Maybe<Int[] | Int>;
  chapters_not_in?: Maybe<Int[] | Int>;
  chapters_lt?: Maybe<Int>;
  chapters_lte?: Maybe<Int>;
  chapters_gt?: Maybe<Int>;
  chapters_gte?: Maybe<Int>;
  authors_every?: Maybe<AuthorWhereInput>;
  authors_some?: Maybe<AuthorWhereInput>;
  authors_none?: Maybe<AuthorWhereInput>;
  AND?: Maybe<BookWhereInput[] | BookWhereInput>;
  OR?: Maybe<BookWhereInput[] | BookWhereInput>;
  NOT?: Maybe<BookWhereInput[] | BookWhereInput>;
}

export interface AuthorWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  books_every?: Maybe<BookWhereInput>;
  books_some?: Maybe<BookWhereInput>;
  books_none?: Maybe<BookWhereInput>;
  AND?: Maybe<AuthorWhereInput[] | AuthorWhereInput>;
  OR?: Maybe<AuthorWhereInput[] | AuthorWhereInput>;
  NOT?: Maybe<AuthorWhereInput[] | AuthorWhereInput>;
}

export type BookWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface AuthorCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  books?: Maybe<BookCreateManyWithoutAuthorsInput>;
}

export interface BookCreateManyWithoutAuthorsInput {
  create?: Maybe<
    BookCreateWithoutAuthorsInput[] | BookCreateWithoutAuthorsInput
  >;
  connect?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
}

export interface BookCreateWithoutAuthorsInput {
  id?: Maybe<ID_Input>;
  title: String;
  pages?: Maybe<Int>;
  chapters?: Maybe<Int>;
}

export interface AuthorUpdateInput {
  name?: Maybe<String>;
  books?: Maybe<BookUpdateManyWithoutAuthorsInput>;
}

export interface BookUpdateManyWithoutAuthorsInput {
  create?: Maybe<
    BookCreateWithoutAuthorsInput[] | BookCreateWithoutAuthorsInput
  >;
  delete?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  connect?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  set?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  disconnect?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  update?: Maybe<
    | BookUpdateWithWhereUniqueWithoutAuthorsInput[]
    | BookUpdateWithWhereUniqueWithoutAuthorsInput
  >;
  upsert?: Maybe<
    | BookUpsertWithWhereUniqueWithoutAuthorsInput[]
    | BookUpsertWithWhereUniqueWithoutAuthorsInput
  >;
  deleteMany?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
  updateMany?: Maybe<
    BookUpdateManyWithWhereNestedInput[] | BookUpdateManyWithWhereNestedInput
  >;
}

export interface BookUpdateWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput;
  data: BookUpdateWithoutAuthorsDataInput;
}

export interface BookUpdateWithoutAuthorsDataInput {
  title?: Maybe<String>;
  pages?: Maybe<Int>;
  chapters?: Maybe<Int>;
}

export interface BookUpsertWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput;
  update: BookUpdateWithoutAuthorsDataInput;
  create: BookCreateWithoutAuthorsInput;
}

export interface BookScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  pages?: Maybe<Int>;
  pages_not?: Maybe<Int>;
  pages_in?: Maybe<Int[] | Int>;
  pages_not_in?: Maybe<Int[] | Int>;
  pages_lt?: Maybe<Int>;
  pages_lte?: Maybe<Int>;
  pages_gt?: Maybe<Int>;
  pages_gte?: Maybe<Int>;
  chapters?: Maybe<Int>;
  chapters_not?: Maybe<Int>;
  chapters_in?: Maybe<Int[] | Int>;
  chapters_not_in?: Maybe<Int[] | Int>;
  chapters_lt?: Maybe<Int>;
  chapters_lte?: Maybe<Int>;
  chapters_gt?: Maybe<Int>;
  chapters_gte?: Maybe<Int>;
  AND?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
  OR?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
  NOT?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
}

export interface BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput;
  data: BookUpdateManyDataInput;
}

export interface BookUpdateManyDataInput {
  title?: Maybe<String>;
  pages?: Maybe<Int>;
  chapters?: Maybe<Int>;
}

export interface AuthorUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface BookCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  pages?: Maybe<Int>;
  chapters?: Maybe<Int>;
  authors?: Maybe<AuthorCreateManyWithoutBooksInput>;
}

export interface AuthorCreateManyWithoutBooksInput {
  create?: Maybe<
    AuthorCreateWithoutBooksInput[] | AuthorCreateWithoutBooksInput
  >;
  connect?: Maybe<AuthorWhereUniqueInput[] | AuthorWhereUniqueInput>;
}

export interface AuthorCreateWithoutBooksInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface BookUpdateInput {
  title?: Maybe<String>;
  pages?: Maybe<Int>;
  chapters?: Maybe<Int>;
  authors?: Maybe<AuthorUpdateManyWithoutBooksInput>;
}

export interface AuthorUpdateManyWithoutBooksInput {
  create?: Maybe<
    AuthorCreateWithoutBooksInput[] | AuthorCreateWithoutBooksInput
  >;
  delete?: Maybe<AuthorWhereUniqueInput[] | AuthorWhereUniqueInput>;
  connect?: Maybe<AuthorWhereUniqueInput[] | AuthorWhereUniqueInput>;
  set?: Maybe<AuthorWhereUniqueInput[] | AuthorWhereUniqueInput>;
  disconnect?: Maybe<AuthorWhereUniqueInput[] | AuthorWhereUniqueInput>;
  update?: Maybe<
    | AuthorUpdateWithWhereUniqueWithoutBooksInput[]
    | AuthorUpdateWithWhereUniqueWithoutBooksInput
  >;
  upsert?: Maybe<
    | AuthorUpsertWithWhereUniqueWithoutBooksInput[]
    | AuthorUpsertWithWhereUniqueWithoutBooksInput
  >;
  deleteMany?: Maybe<AuthorScalarWhereInput[] | AuthorScalarWhereInput>;
  updateMany?: Maybe<
    | AuthorUpdateManyWithWhereNestedInput[]
    | AuthorUpdateManyWithWhereNestedInput
  >;
}

export interface AuthorUpdateWithWhereUniqueWithoutBooksInput {
  where: AuthorWhereUniqueInput;
  data: AuthorUpdateWithoutBooksDataInput;
}

export interface AuthorUpdateWithoutBooksDataInput {
  name?: Maybe<String>;
}

export interface AuthorUpsertWithWhereUniqueWithoutBooksInput {
  where: AuthorWhereUniqueInput;
  update: AuthorUpdateWithoutBooksDataInput;
  create: AuthorCreateWithoutBooksInput;
}

export interface AuthorScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<AuthorScalarWhereInput[] | AuthorScalarWhereInput>;
  OR?: Maybe<AuthorScalarWhereInput[] | AuthorScalarWhereInput>;
  NOT?: Maybe<AuthorScalarWhereInput[] | AuthorScalarWhereInput>;
}

export interface AuthorUpdateManyWithWhereNestedInput {
  where: AuthorScalarWhereInput;
  data: AuthorUpdateManyDataInput;
}

export interface AuthorUpdateManyDataInput {
  name?: Maybe<String>;
}

export interface BookUpdateManyMutationInput {
  title?: Maybe<String>;
  pages?: Maybe<Int>;
  chapters?: Maybe<Int>;
}

export interface AuthorSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AuthorWhereInput>;
  AND?: Maybe<AuthorSubscriptionWhereInput[] | AuthorSubscriptionWhereInput>;
  OR?: Maybe<AuthorSubscriptionWhereInput[] | AuthorSubscriptionWhereInput>;
  NOT?: Maybe<AuthorSubscriptionWhereInput[] | AuthorSubscriptionWhereInput>;
}

export interface BookSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<BookWhereInput>;
  AND?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
  OR?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
  NOT?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Author {
  id: ID_Output;
  name: String;
}

export interface AuthorPromise extends Promise<Author>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  books: <T = FragmentableArray<Book>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AuthorSubscription
  extends Promise<AsyncIterator<Author>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  books: <T = Promise<AsyncIterator<BookSubscription>>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AuthorNullablePromise
  extends Promise<Author | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  books: <T = FragmentableArray<Book>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Book {
  id: ID_Output;
  title: String;
  pages?: Int;
  chapters?: Int;
}

export interface BookPromise extends Promise<Book>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
  chapters: () => Promise<Int>;
  authors: <T = FragmentableArray<Author>>(args?: {
    where?: AuthorWhereInput;
    orderBy?: AuthorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface BookSubscription
  extends Promise<AsyncIterator<Book>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
  chapters: () => Promise<AsyncIterator<Int>>;
  authors: <T = Promise<AsyncIterator<AuthorSubscription>>>(args?: {
    where?: AuthorWhereInput;
    orderBy?: AuthorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface BookNullablePromise
  extends Promise<Book | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
  chapters: () => Promise<Int>;
  authors: <T = FragmentableArray<Author>>(args?: {
    where?: AuthorWhereInput;
    orderBy?: AuthorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AuthorConnection {
  pageInfo: PageInfo;
  edges: AuthorEdge[];
}

export interface AuthorConnectionPromise
  extends Promise<AuthorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AuthorEdge>>() => T;
  aggregate: <T = AggregateAuthorPromise>() => T;
}

export interface AuthorConnectionSubscription
  extends Promise<AsyncIterator<AuthorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AuthorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAuthorSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AuthorEdge {
  node: Author;
  cursor: String;
}

export interface AuthorEdgePromise extends Promise<AuthorEdge>, Fragmentable {
  node: <T = AuthorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AuthorEdgeSubscription
  extends Promise<AsyncIterator<AuthorEdge>>,
    Fragmentable {
  node: <T = AuthorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAuthor {
  count: Int;
}

export interface AggregateAuthorPromise
  extends Promise<AggregateAuthor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthorSubscription
  extends Promise<AsyncIterator<AggregateAuthor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BookConnection {
  pageInfo: PageInfo;
  edges: BookEdge[];
}

export interface BookConnectionPromise
  extends Promise<BookConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BookEdge>>() => T;
  aggregate: <T = AggregateBookPromise>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBookSubscription>() => T;
}

export interface BookEdge {
  node: Book;
  cursor: String;
}

export interface BookEdgePromise extends Promise<BookEdge>, Fragmentable {
  node: <T = BookPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdge>>,
    Fragmentable {
  node: <T = BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateBook {
  count: Int;
}

export interface AggregateBookPromise
  extends Promise<AggregateBook>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBook>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AuthorSubscriptionPayload {
  mutation: MutationType;
  node: Author;
  updatedFields: String[];
  previousValues: AuthorPreviousValues;
}

export interface AuthorSubscriptionPayloadPromise
  extends Promise<AuthorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AuthorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AuthorPreviousValuesPromise>() => T;
}

export interface AuthorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AuthorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AuthorPreviousValuesSubscription>() => T;
}

export interface AuthorPreviousValues {
  id: ID_Output;
  name: String;
}

export interface AuthorPreviousValuesPromise
  extends Promise<AuthorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface AuthorPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface BookSubscriptionPayload {
  mutation: MutationType;
  node: Book;
  updatedFields: String[];
  previousValues: BookPreviousValues;
}

export interface BookSubscriptionPayloadPromise
  extends Promise<BookSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BookPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BookPreviousValuesPromise>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BookPreviousValuesSubscription>() => T;
}

export interface BookPreviousValues {
  id: ID_Output;
  title: String;
  pages?: Int;
  chapters?: Int;
}

export interface BookPreviousValuesPromise
  extends Promise<BookPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
  chapters: () => Promise<Int>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
  chapters: () => Promise<AsyncIterator<Int>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Book",
    embedded: false
  },
  {
    name: "Author",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
