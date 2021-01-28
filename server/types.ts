import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};









export type Query = {
  pages?: Maybe<Array<Maybe<Page>>>;
  page?: Maybe<Page>;
  hero?: Maybe<Hero>;
  slides?: Maybe<Array<Maybe<Slide>>>;
  slide?: Maybe<Slide>;
  allMedia: Array<Media>;
  media?: Maybe<Media>;
  currentUser?: Maybe<User>;
  signout?: Maybe<Message>;
  services?: Maybe<Services>;
  activities?: Maybe<Activities>;
  activity?: Maybe<Activity>;
  approach?: Maybe<Approach>;
  footer?: Maybe<Footer>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
};


export type QuerySlideArgs = {
  id: Scalars['ID'];
};


export type QueryMediaArgs = {
  id: Scalars['ID'];
};


export type QueryActivityArgs = {
  slug: Scalars['String'];
};

export type Mutation = {
  addPage?: Maybe<Page>;
  saveSlides?: Maybe<Scalars['String']>;
  addSlide?: Maybe<Slide>;
  removeSlide?: Maybe<Slide>;
  updateSlide?: Maybe<Scalars['String']>;
  uploadMedia?: Maybe<Media>;
  removeMedia?: Maybe<Media>;
  currentUser?: Maybe<User>;
  saveServices?: Maybe<Scalars['String']>;
  triggerServicesVis?: Maybe<Scalars['String']>;
  saveActivities?: Maybe<Scalars['String']>;
  triggerActivitiesVis?: Maybe<Scalars['String']>;
  createActivity?: Maybe<Activity>;
  saveActivity?: Maybe<Scalars['String']>;
  deleteActivity?: Maybe<Activity>;
  saveApproach?: Maybe<Scalars['String']>;
  triggerApproachVis?: Maybe<Scalars['String']>;
  addSubscriber?: Maybe<Subscriber>;
  saveFooter?: Maybe<Scalars['String']>;
};


export type MutationAddPageArgs = {
  title?: Maybe<Scalars['String']>;
};


export type MutationSaveSlidesArgs = {
  input?: Maybe<SlidesInput>;
};


export type MutationAddSlideArgs = {
  title: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};


export type MutationRemoveSlideArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateSlideArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};


export type MutationUploadMediaArgs = {
  file: Scalars['Upload'];
};


export type MutationRemoveMediaArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationSaveServicesArgs = {
  input?: Maybe<ServicesInput>;
};


export type MutationTriggerServicesVisArgs = {
  isVisible?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveActivitiesArgs = {
  input?: Maybe<ActivitiesInput>;
};


export type MutationTriggerActivitiesVisArgs = {
  isVisible?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateActivityArgs = {
  input?: Maybe<ActivityInput>;
};


export type MutationSaveActivityArgs = {
  input?: Maybe<SaveActivityInput>;
};


export type MutationDeleteActivityArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type MutationSaveApproachArgs = {
  input?: Maybe<ApproachInput>;
};


export type MutationTriggerApproachVisArgs = {
  isVisible?: Maybe<Scalars['Boolean']>;
};


export type MutationAddSubscriberArgs = {
  email?: Maybe<Scalars['String']>;
};


export type MutationSaveFooterArgs = {
  input?: Maybe<FooterInput>;
};

export type Message = {
  message?: Maybe<Scalars['String']>;
};

export type User = {
  googleId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Media = {
  id: Scalars['ID'];
  path: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  size: Scalars['Int'];
};

export type Page = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type Hero = {
  slides?: Maybe<Array<Maybe<Slide>>>;
};

export type Slide = {
  id: Scalars['ID'];
  title: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type SlidesInput = {
  slides?: Maybe<Array<Maybe<SlideInput>>>;
};

export type SlideInput = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type ServicesInput = {
  isVisible?: Maybe<Scalars['Boolean']>;
  services?: Maybe<Array<Maybe<ServiceInput>>>;
};

export type ServiceInput = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Services = {
  isVisible?: Maybe<Scalars['Boolean']>;
  services?: Maybe<Array<Maybe<Service>>>;
};

export type Service = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Activities = {
  isVisible?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  activities?: Maybe<Array<Maybe<Activity>>>;
};

export type ActivitiesInput = {
  title: Scalars['String'];
};

export type SaveActivityInput = {
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  shortDesc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ActivityInput = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  shortDesc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Activity = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  shortDesc?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  likes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ApproachInput = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
};

export type Approach = {
  isVisible?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
};

export type Subscriber = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  status?: Maybe<SubscriberStatus>;
};

export enum SubscriberStatus {
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export type FooterInput = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
};

export type Footer = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
};


export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Message: ResolverTypeWrapper<Message>;
  User: ResolverTypeWrapper<User>;
  Media: ResolverTypeWrapper<Media>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Page: ResolverTypeWrapper<Page>;
  Hero: ResolverTypeWrapper<Hero>;
  Slide: ResolverTypeWrapper<Slide>;
  SlidesInput: SlidesInput;
  SlideInput: SlideInput;
  ServicesInput: ServicesInput;
  ServiceInput: ServiceInput;
  Services: ResolverTypeWrapper<Services>;
  Service: ResolverTypeWrapper<Service>;
  Activities: ResolverTypeWrapper<Activities>;
  ActivitiesInput: ActivitiesInput;
  SaveActivityInput: SaveActivityInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ActivityInput: ActivityInput;
  Activity: ResolverTypeWrapper<Activity>;
  ApproachInput: ApproachInput;
  Approach: ResolverTypeWrapper<Approach>;
  Subscriber: ResolverTypeWrapper<Subscriber>;
  SubscriberStatus: SubscriberStatus;
  FooterInput: FooterInput;
  Footer: ResolverTypeWrapper<Footer>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  String: Scalars['String'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Message: Message;
  User: User;
  Media: Media;
  Int: Scalars['Int'];
  Page: Page;
  Hero: Hero;
  Slide: Slide;
  SlidesInput: SlidesInput;
  SlideInput: SlideInput;
  ServicesInput: ServicesInput;
  ServiceInput: ServiceInput;
  Services: Services;
  Service: Service;
  Activities: Activities;
  ActivitiesInput: ActivitiesInput;
  SaveActivityInput: SaveActivityInput;
  Float: Scalars['Float'];
  ActivityInput: ActivityInput;
  Activity: Activity;
  ApproachInput: ApproachInput;
  Approach: Approach;
  Subscriber: Subscriber;
  FooterInput: FooterInput;
  Footer: Footer;
  Upload: Scalars['Upload'];
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {   discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: Scalars['String']; };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, 'id'>>;
  hero?: Resolver<Maybe<ResolversTypes['Hero']>, ParentType, ContextType>;
  slides?: Resolver<Maybe<Array<Maybe<ResolversTypes['Slide']>>>, ParentType, ContextType>;
  slide?: Resolver<Maybe<ResolversTypes['Slide']>, ParentType, ContextType, RequireFields<QuerySlideArgs, 'id'>>;
  allMedia?: Resolver<Array<ResolversTypes['Media']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<QueryMediaArgs, 'id'>>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  signout?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  services?: Resolver<Maybe<ResolversTypes['Services']>, ParentType, ContextType>;
  activities?: Resolver<Maybe<ResolversTypes['Activities']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<QueryActivityArgs, 'slug'>>;
  approach?: Resolver<Maybe<ResolversTypes['Approach']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationAddPageArgs, never>>;
  saveSlides?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSaveSlidesArgs, never>>;
  addSlide?: Resolver<Maybe<ResolversTypes['Slide']>, ParentType, ContextType, RequireFields<MutationAddSlideArgs, 'title'>>;
  removeSlide?: Resolver<Maybe<ResolversTypes['Slide']>, ParentType, ContextType, RequireFields<MutationRemoveSlideArgs, 'id'>>;
  updateSlide?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateSlideArgs, 'id'>>;
  uploadMedia?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<MutationUploadMediaArgs, 'file'>>;
  removeMedia?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<MutationRemoveMediaArgs, 'id'>>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  saveServices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSaveServicesArgs, never>>;
  triggerServicesVis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationTriggerServicesVisArgs, never>>;
  saveActivities?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSaveActivitiesArgs, never>>;
  triggerActivitiesVis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationTriggerActivitiesVisArgs, never>>;
  createActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivityArgs, never>>;
  saveActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSaveActivityArgs, never>>;
  deleteActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, 'id'>>;
  saveApproach?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSaveApproachArgs, never>>;
  triggerApproachVis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationTriggerApproachVisArgs, never>>;
  addSubscriber?: Resolver<Maybe<ResolversTypes['Subscriber']>, ParentType, ContextType, RequireFields<MutationAddSubscriberArgs, never>>;
  saveFooter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSaveFooterArgs, never>>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  googleId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hero'] = ResolversParentTypes['Hero']> = {
  slides?: Resolver<Maybe<Array<Maybe<ResolversTypes['Slide']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Slide'] = ResolversParentTypes['Slide']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServicesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Services'] = ResolversParentTypes['Services']> = {
  isVisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['Service']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activities'] = ResolversParentTypes['Activities']> = {
  isVisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApproachResolvers<ContextType = any, ParentType extends ResolversParentTypes['Approach'] = ResolversParentTypes['Approach']> = {
  isVisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscriber'] = ResolversParentTypes['Subscriber']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubscriberStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Hero?: HeroResolvers<ContextType>;
  Slide?: SlideResolvers<ContextType>;
  Services?: ServicesResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Activities?: ActivitiesResolvers<ContextType>;
  Activity?: ActivityResolvers<ContextType>;
  Approach?: ApproachResolvers<ContextType>;
  Subscriber?: SubscriberResolvers<ContextType>;
  Footer?: FooterResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';