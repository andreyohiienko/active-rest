import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  public_id: Scalars['String'];
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
  public_id: Scalars['String'];
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
  asset_id?: Maybe<Scalars['String']>;
  public_id: Scalars['String'];
  version?: Maybe<Scalars['Int']>;
  version_id?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
  resource_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  bytes: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
  secure_url?: Maybe<Scalars['String']>;
  original_filename?: Maybe<Scalars['String']>;
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


export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { section?: Maybe<Pick<Footer, 'title' | 'desc' | 'subTitle'>> };

export type SaveFooterMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
}>;


export type SaveFooterMutation = Pick<Mutation, 'saveFooter'>;

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentUser?: Maybe<Pick<User, 'name' | 'googleId' | 'role' | 'email'>> };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { signout?: Maybe<Pick<Message, 'message'>> };

export type MediasMainQueryVariables = Exact<{ [key: string]: never; }>;


export type MediasMainQuery = { list: Array<Pick<Media, 'id' | 'public_id' | 'url' | 'format' | 'bytes'>> };

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = { currentUser?: Maybe<Pick<User, 'name' | 'googleId' | 'role' | 'email'>> };

export type ActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivitiesQuery = { section?: Maybe<(
    Pick<Activities, 'isVisible' | 'title'>
    & { activities?: Maybe<Array<Maybe<Pick<Activity, 'id' | 'title' | 'shortDesc' | 'price' | 'image' | 'slug'>>>> }
  )> };

export type SaveActivitiesMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type SaveActivitiesMutation = Pick<Mutation, 'saveActivities'>;

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteActivityMutation = { deleteActivity?: Maybe<Pick<Activity, 'id' | 'title'>> };

export type TriggerActivitiesVisMutationVariables = Exact<{
  isVisible?: Maybe<Scalars['Boolean']>;
}>;


export type TriggerActivitiesVisMutation = Pick<Mutation, 'triggerActivitiesVis'>;

export type DeleteActivityFragment = Pick<Activity, 'id'>;

export type ActivityPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ActivityPageQuery = { activity?: Maybe<Pick<Activity, 'title' | 'desc' | 'shortDesc' | 'image' | 'price' | 'likes'>> };

export type SaveActivityMutationVariables = Exact<{
  input?: Maybe<SaveActivityInput>;
}>;


export type SaveActivityMutation = Pick<Mutation, 'saveActivity'>;

export type CreateActivityMutationVariables = Exact<{
  input?: Maybe<ActivityInput>;
}>;


export type CreateActivityMutation = { action?: Maybe<Pick<Activity, 'id' | 'title' | 'slug' | 'desc' | 'shortDesc' | 'image' | 'price'>> };

export type ApproachQueryVariables = Exact<{ [key: string]: never; }>;


export type ApproachQuery = { section?: Maybe<Pick<Approach, 'isVisible' | 'title' | 'desc'>> };

export type SaveApproachMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
}>;


export type SaveApproachMutation = Pick<Mutation, 'saveApproach'>;

export type TriggerApproachVisMutationVariables = Exact<{
  isVisible?: Maybe<Scalars['Boolean']>;
}>;


export type TriggerApproachVisMutation = Pick<Mutation, 'triggerApproachVis'>;

export type AddSubscriberMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type AddSubscriberMutation = { addSubscriber?: Maybe<Pick<Subscriber, 'id' | 'email' | 'status'>> };

export type HeroQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroQuery = { section?: Maybe<{ slides?: Maybe<Array<Maybe<Pick<Slide, 'id' | 'title' | 'desc' | 'image'>>>> }> };

export type SaveSlidesMutationVariables = Exact<{
  slides?: Maybe<Array<Maybe<SlideInput>> | Maybe<SlideInput>>;
}>;


export type SaveSlidesMutation = Pick<Mutation, 'saveSlides'>;

export type ServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesQuery = { section?: Maybe<(
    Pick<Services, 'isVisible'>
    & { services?: Maybe<Array<Maybe<Pick<Service, 'id' | 'title' | 'desc' | 'image'>>>> }
  )> };

export type SaveServicesMutationVariables = Exact<{
  services?: Maybe<Array<Maybe<ServiceInput>> | Maybe<ServiceInput>>;
}>;


export type SaveServicesMutation = Pick<Mutation, 'saveServices'>;

export type TriggerServicesVisMutationVariables = Exact<{
  isVisible?: Maybe<Scalars['Boolean']>;
}>;


export type TriggerServicesVisMutation = Pick<Mutation, 'triggerServicesVis'>;

export type ActivityQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ActivityQuery = { activity?: Maybe<Pick<Activity, 'title' | 'desc' | 'shortDesc' | 'image' | 'price' | 'likes'>>, footer?: Maybe<Pick<Footer, 'title' | 'desc' | 'subTitle'>> };

export type ActivityNewQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivityNewQuery = { footer?: Maybe<Pick<Footer, 'title' | 'desc' | 'subTitle'>> };

export type UploadMediaMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadMediaMutation = { uploadMedia?: Maybe<Pick<Media, 'id' | 'public_id' | 'url' | 'format' | 'bytes'>> };

export type RemoveMediaMutationVariables = Exact<{
  public_id: Scalars['String'];
}>;


export type RemoveMediaMutation = { removeMedia?: Maybe<Pick<Media, 'id' | 'public_id' | 'url' | 'format' | 'bytes'>> };

export type AllMediaQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMediaQuery = { allMedia: Array<Pick<Media, 'id' | 'public_id' | 'url' | 'format' | 'bytes'>> };

export type NewMediaFragment = Pick<Media, 'id' | 'public_id' | 'url' | 'format' | 'bytes'>;

export type RemoveMediaFragment = Pick<Media, 'id' | 'public_id' | 'url' | 'format' | 'bytes'>;

export type PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PageQuery = { page?: Maybe<Pick<Page, 'id' | 'title'>> };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { pages?: Maybe<Array<Maybe<Pick<Page, 'id' | 'title'>>>> };

export type FetchHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchHomePageQuery = { hero?: Maybe<{ slides?: Maybe<Array<Maybe<Pick<Slide, 'id' | 'title' | 'desc' | 'image'>>>> }>, services?: Maybe<(
    Pick<Services, 'isVisible'>
    & { services?: Maybe<Array<Maybe<Pick<Service, 'id' | 'title' | 'desc' | 'image'>>>> }
  )>, activities?: Maybe<(
    Pick<Activities, 'isVisible' | 'title'>
    & { activities?: Maybe<Array<Maybe<Pick<Activity, 'id' | 'title' | 'shortDesc' | 'price' | 'image' | 'slug'>>>> }
  )>, approach?: Maybe<Pick<Approach, 'isVisible' | 'title' | 'desc'>>, footer?: Maybe<Pick<Footer, 'title' | 'desc' | 'subTitle'>> };

export const DeleteActivityFragmentDoc = gql`
    fragment deleteActivity on Activity {
  id
}
    `;
export const NewMediaFragmentDoc = gql`
    fragment newMedia on Media {
  id
  public_id
  url
  format
  bytes
}
    `;
export const RemoveMediaFragmentDoc = gql`
    fragment removeMedia on Media {
  id
  public_id
  url
  format
  bytes
}
    `;
export const FooterDocument = gql`
    query Footer {
  section: footer {
    title
    desc
    subTitle
  }
}
    `;

/**
 * __useFooterQuery__
 *
 * To run a query within a React component, call `useFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterQuery(baseOptions?: Apollo.QueryHookOptions<FooterQuery, FooterQueryVariables>) {
        return Apollo.useQuery<FooterQuery, FooterQueryVariables>(FooterDocument, baseOptions);
      }
export function useFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterQuery, FooterQueryVariables>) {
          return Apollo.useLazyQuery<FooterQuery, FooterQueryVariables>(FooterDocument, baseOptions);
        }
export type FooterQueryHookResult = ReturnType<typeof useFooterQuery>;
export type FooterLazyQueryHookResult = ReturnType<typeof useFooterLazyQuery>;
export type FooterQueryResult = Apollo.QueryResult<FooterQuery, FooterQueryVariables>;
export const SaveFooterDocument = gql`
    mutation SaveFooter($title: String, $desc: String, $subTitle: String) {
  saveFooter(input: {title: $title, desc: $desc, subTitle: $subTitle})
}
    `;
export type SaveFooterMutationFn = Apollo.MutationFunction<SaveFooterMutation, SaveFooterMutationVariables>;

/**
 * __useSaveFooterMutation__
 *
 * To run a mutation, you first call `useSaveFooterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFooterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFooterMutation, { data, loading, error }] = useSaveFooterMutation({
 *   variables: {
 *      title: // value for 'title'
 *      desc: // value for 'desc'
 *      subTitle: // value for 'subTitle'
 *   },
 * });
 */
export function useSaveFooterMutation(baseOptions?: Apollo.MutationHookOptions<SaveFooterMutation, SaveFooterMutationVariables>) {
        return Apollo.useMutation<SaveFooterMutation, SaveFooterMutationVariables>(SaveFooterDocument, baseOptions);
      }
export type SaveFooterMutationHookResult = ReturnType<typeof useSaveFooterMutation>;
export type SaveFooterMutationResult = Apollo.MutationResult<SaveFooterMutation>;
export type SaveFooterMutationOptions = Apollo.BaseMutationOptions<SaveFooterMutation, SaveFooterMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    name
    googleId
    role
    email
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const LogoutDocument = gql`
    query Logout {
  signout {
    message
  }
}
    `;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
        return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, baseOptions);
      }
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, baseOptions);
        }
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const MediasMainDocument = gql`
    query MediasMain {
  list: allMedia {
    id
    public_id
    url
    format
    bytes
  }
}
    `;

/**
 * __useMediasMainQuery__
 *
 * To run a query within a React component, call `useMediasMainQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediasMainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediasMainQuery({
 *   variables: {
 *   },
 * });
 */
export function useMediasMainQuery(baseOptions?: Apollo.QueryHookOptions<MediasMainQuery, MediasMainQueryVariables>) {
        return Apollo.useQuery<MediasMainQuery, MediasMainQueryVariables>(MediasMainDocument, baseOptions);
      }
export function useMediasMainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MediasMainQuery, MediasMainQueryVariables>) {
          return Apollo.useLazyQuery<MediasMainQuery, MediasMainQueryVariables>(MediasMainDocument, baseOptions);
        }
export type MediasMainQueryHookResult = ReturnType<typeof useMediasMainQuery>;
export type MediasMainLazyQueryHookResult = ReturnType<typeof useMediasMainLazyQuery>;
export type MediasMainQueryResult = Apollo.QueryResult<MediasMainQuery, MediasMainQueryVariables>;
export const AdminDocument = gql`
    query Admin {
  currentUser {
    name
    googleId
    role
    email
  }
}
    `;

/**
 * __useAdminQuery__
 *
 * To run a query within a React component, call `useAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminQuery(baseOptions?: Apollo.QueryHookOptions<AdminQuery, AdminQueryVariables>) {
        return Apollo.useQuery<AdminQuery, AdminQueryVariables>(AdminDocument, baseOptions);
      }
export function useAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminQuery, AdminQueryVariables>) {
          return Apollo.useLazyQuery<AdminQuery, AdminQueryVariables>(AdminDocument, baseOptions);
        }
export type AdminQueryHookResult = ReturnType<typeof useAdminQuery>;
export type AdminLazyQueryHookResult = ReturnType<typeof useAdminLazyQuery>;
export type AdminQueryResult = Apollo.QueryResult<AdminQuery, AdminQueryVariables>;
export const ActivitiesDocument = gql`
    query Activities {
  section: activities {
    isVisible
    title
    activities {
      id
      title
      shortDesc
      price
      image
      slug
    }
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;
export const SaveActivitiesDocument = gql`
    mutation SaveActivities($title: String!) {
  saveActivities(input: {title: $title})
}
    `;
export type SaveActivitiesMutationFn = Apollo.MutationFunction<SaveActivitiesMutation, SaveActivitiesMutationVariables>;

/**
 * __useSaveActivitiesMutation__
 *
 * To run a mutation, you first call `useSaveActivitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveActivitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveActivitiesMutation, { data, loading, error }] = useSaveActivitiesMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSaveActivitiesMutation(baseOptions?: Apollo.MutationHookOptions<SaveActivitiesMutation, SaveActivitiesMutationVariables>) {
        return Apollo.useMutation<SaveActivitiesMutation, SaveActivitiesMutationVariables>(SaveActivitiesDocument, baseOptions);
      }
export type SaveActivitiesMutationHookResult = ReturnType<typeof useSaveActivitiesMutation>;
export type SaveActivitiesMutationResult = Apollo.MutationResult<SaveActivitiesMutation>;
export type SaveActivitiesMutationOptions = Apollo.BaseMutationOptions<SaveActivitiesMutation, SaveActivitiesMutationVariables>;
export const DeleteActivityDocument = gql`
    mutation DeleteActivity($id: ID!) {
  deleteActivity(id: $id) {
    id
    title
  }
}
    `;
export type DeleteActivityMutationFn = Apollo.MutationFunction<DeleteActivityMutation, DeleteActivityMutationVariables>;

/**
 * __useDeleteActivityMutation__
 *
 * To run a mutation, you first call `useDeleteActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActivityMutation, { data, loading, error }] = useDeleteActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteActivityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteActivityMutation, DeleteActivityMutationVariables>) {
        return Apollo.useMutation<DeleteActivityMutation, DeleteActivityMutationVariables>(DeleteActivityDocument, baseOptions);
      }
export type DeleteActivityMutationHookResult = ReturnType<typeof useDeleteActivityMutation>;
export type DeleteActivityMutationResult = Apollo.MutationResult<DeleteActivityMutation>;
export type DeleteActivityMutationOptions = Apollo.BaseMutationOptions<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const TriggerActivitiesVisDocument = gql`
    mutation TriggerActivitiesVis($isVisible: Boolean) {
  triggerActivitiesVis(isVisible: $isVisible)
}
    `;
export type TriggerActivitiesVisMutationFn = Apollo.MutationFunction<TriggerActivitiesVisMutation, TriggerActivitiesVisMutationVariables>;

/**
 * __useTriggerActivitiesVisMutation__
 *
 * To run a mutation, you first call `useTriggerActivitiesVisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTriggerActivitiesVisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [triggerActivitiesVisMutation, { data, loading, error }] = useTriggerActivitiesVisMutation({
 *   variables: {
 *      isVisible: // value for 'isVisible'
 *   },
 * });
 */
export function useTriggerActivitiesVisMutation(baseOptions?: Apollo.MutationHookOptions<TriggerActivitiesVisMutation, TriggerActivitiesVisMutationVariables>) {
        return Apollo.useMutation<TriggerActivitiesVisMutation, TriggerActivitiesVisMutationVariables>(TriggerActivitiesVisDocument, baseOptions);
      }
export type TriggerActivitiesVisMutationHookResult = ReturnType<typeof useTriggerActivitiesVisMutation>;
export type TriggerActivitiesVisMutationResult = Apollo.MutationResult<TriggerActivitiesVisMutation>;
export type TriggerActivitiesVisMutationOptions = Apollo.BaseMutationOptions<TriggerActivitiesVisMutation, TriggerActivitiesVisMutationVariables>;
export const ActivityPageDocument = gql`
    query ActivityPage($slug: String!) {
  activity(slug: $slug) {
    title
    desc
    shortDesc
    image
    price
    likes
  }
}
    `;

/**
 * __useActivityPageQuery__
 *
 * To run a query within a React component, call `useActivityPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useActivityPageQuery(baseOptions: Apollo.QueryHookOptions<ActivityPageQuery, ActivityPageQueryVariables>) {
        return Apollo.useQuery<ActivityPageQuery, ActivityPageQueryVariables>(ActivityPageDocument, baseOptions);
      }
export function useActivityPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityPageQuery, ActivityPageQueryVariables>) {
          return Apollo.useLazyQuery<ActivityPageQuery, ActivityPageQueryVariables>(ActivityPageDocument, baseOptions);
        }
export type ActivityPageQueryHookResult = ReturnType<typeof useActivityPageQuery>;
export type ActivityPageLazyQueryHookResult = ReturnType<typeof useActivityPageLazyQuery>;
export type ActivityPageQueryResult = Apollo.QueryResult<ActivityPageQuery, ActivityPageQueryVariables>;
export const SaveActivityDocument = gql`
    mutation SaveActivity($input: SaveActivityInput) {
  saveActivity(input: $input)
}
    `;
export type SaveActivityMutationFn = Apollo.MutationFunction<SaveActivityMutation, SaveActivityMutationVariables>;

/**
 * __useSaveActivityMutation__
 *
 * To run a mutation, you first call `useSaveActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveActivityMutation, { data, loading, error }] = useSaveActivityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveActivityMutation(baseOptions?: Apollo.MutationHookOptions<SaveActivityMutation, SaveActivityMutationVariables>) {
        return Apollo.useMutation<SaveActivityMutation, SaveActivityMutationVariables>(SaveActivityDocument, baseOptions);
      }
export type SaveActivityMutationHookResult = ReturnType<typeof useSaveActivityMutation>;
export type SaveActivityMutationResult = Apollo.MutationResult<SaveActivityMutation>;
export type SaveActivityMutationOptions = Apollo.BaseMutationOptions<SaveActivityMutation, SaveActivityMutationVariables>;
export const CreateActivityDocument = gql`
    mutation CreateActivity($input: ActivityInput) {
  action: createActivity(input: $input) {
    id
    title
    slug
    desc
    shortDesc
    image
    price
  }
}
    `;
export type CreateActivityMutationFn = Apollo.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        return Apollo.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, baseOptions);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = Apollo.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const ApproachDocument = gql`
    query Approach {
  section: approach {
    isVisible
    title
    desc
  }
}
    `;

/**
 * __useApproachQuery__
 *
 * To run a query within a React component, call `useApproachQuery` and pass it any options that fit your needs.
 * When your component renders, `useApproachQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApproachQuery({
 *   variables: {
 *   },
 * });
 */
export function useApproachQuery(baseOptions?: Apollo.QueryHookOptions<ApproachQuery, ApproachQueryVariables>) {
        return Apollo.useQuery<ApproachQuery, ApproachQueryVariables>(ApproachDocument, baseOptions);
      }
export function useApproachLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApproachQuery, ApproachQueryVariables>) {
          return Apollo.useLazyQuery<ApproachQuery, ApproachQueryVariables>(ApproachDocument, baseOptions);
        }
export type ApproachQueryHookResult = ReturnType<typeof useApproachQuery>;
export type ApproachLazyQueryHookResult = ReturnType<typeof useApproachLazyQuery>;
export type ApproachQueryResult = Apollo.QueryResult<ApproachQuery, ApproachQueryVariables>;
export const SaveApproachDocument = gql`
    mutation SaveApproach($title: String, $desc: String) {
  saveApproach(input: {title: $title, desc: $desc})
}
    `;
export type SaveApproachMutationFn = Apollo.MutationFunction<SaveApproachMutation, SaveApproachMutationVariables>;

/**
 * __useSaveApproachMutation__
 *
 * To run a mutation, you first call `useSaveApproachMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveApproachMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveApproachMutation, { data, loading, error }] = useSaveApproachMutation({
 *   variables: {
 *      title: // value for 'title'
 *      desc: // value for 'desc'
 *   },
 * });
 */
export function useSaveApproachMutation(baseOptions?: Apollo.MutationHookOptions<SaveApproachMutation, SaveApproachMutationVariables>) {
        return Apollo.useMutation<SaveApproachMutation, SaveApproachMutationVariables>(SaveApproachDocument, baseOptions);
      }
export type SaveApproachMutationHookResult = ReturnType<typeof useSaveApproachMutation>;
export type SaveApproachMutationResult = Apollo.MutationResult<SaveApproachMutation>;
export type SaveApproachMutationOptions = Apollo.BaseMutationOptions<SaveApproachMutation, SaveApproachMutationVariables>;
export const TriggerApproachVisDocument = gql`
    mutation TriggerApproachVis($isVisible: Boolean) {
  triggerApproachVis(isVisible: $isVisible)
}
    `;
export type TriggerApproachVisMutationFn = Apollo.MutationFunction<TriggerApproachVisMutation, TriggerApproachVisMutationVariables>;

/**
 * __useTriggerApproachVisMutation__
 *
 * To run a mutation, you first call `useTriggerApproachVisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTriggerApproachVisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [triggerApproachVisMutation, { data, loading, error }] = useTriggerApproachVisMutation({
 *   variables: {
 *      isVisible: // value for 'isVisible'
 *   },
 * });
 */
export function useTriggerApproachVisMutation(baseOptions?: Apollo.MutationHookOptions<TriggerApproachVisMutation, TriggerApproachVisMutationVariables>) {
        return Apollo.useMutation<TriggerApproachVisMutation, TriggerApproachVisMutationVariables>(TriggerApproachVisDocument, baseOptions);
      }
export type TriggerApproachVisMutationHookResult = ReturnType<typeof useTriggerApproachVisMutation>;
export type TriggerApproachVisMutationResult = Apollo.MutationResult<TriggerApproachVisMutation>;
export type TriggerApproachVisMutationOptions = Apollo.BaseMutationOptions<TriggerApproachVisMutation, TriggerApproachVisMutationVariables>;
export const AddSubscriberDocument = gql`
    mutation AddSubscriber($email: String) {
  addSubscriber(email: $email) {
    id
    email
    status
  }
}
    `;
export type AddSubscriberMutationFn = Apollo.MutationFunction<AddSubscriberMutation, AddSubscriberMutationVariables>;

/**
 * __useAddSubscriberMutation__
 *
 * To run a mutation, you first call `useAddSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSubscriberMutation, { data, loading, error }] = useAddSubscriberMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<AddSubscriberMutation, AddSubscriberMutationVariables>) {
        return Apollo.useMutation<AddSubscriberMutation, AddSubscriberMutationVariables>(AddSubscriberDocument, baseOptions);
      }
export type AddSubscriberMutationHookResult = ReturnType<typeof useAddSubscriberMutation>;
export type AddSubscriberMutationResult = Apollo.MutationResult<AddSubscriberMutation>;
export type AddSubscriberMutationOptions = Apollo.BaseMutationOptions<AddSubscriberMutation, AddSubscriberMutationVariables>;
export const HeroDocument = gql`
    query Hero {
  section: hero {
    slides {
      id
      title
      desc
      image
    }
  }
}
    `;

/**
 * __useHeroQuery__
 *
 * To run a query within a React component, call `useHeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroQuery(baseOptions?: Apollo.QueryHookOptions<HeroQuery, HeroQueryVariables>) {
        return Apollo.useQuery<HeroQuery, HeroQueryVariables>(HeroDocument, baseOptions);
      }
export function useHeroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeroQuery, HeroQueryVariables>) {
          return Apollo.useLazyQuery<HeroQuery, HeroQueryVariables>(HeroDocument, baseOptions);
        }
export type HeroQueryHookResult = ReturnType<typeof useHeroQuery>;
export type HeroLazyQueryHookResult = ReturnType<typeof useHeroLazyQuery>;
export type HeroQueryResult = Apollo.QueryResult<HeroQuery, HeroQueryVariables>;
export const SaveSlidesDocument = gql`
    mutation SaveSlides($slides: [SlideInput]) {
  saveSlides(input: {slides: $slides})
}
    `;
export type SaveSlidesMutationFn = Apollo.MutationFunction<SaveSlidesMutation, SaveSlidesMutationVariables>;

/**
 * __useSaveSlidesMutation__
 *
 * To run a mutation, you first call `useSaveSlidesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveSlidesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveSlidesMutation, { data, loading, error }] = useSaveSlidesMutation({
 *   variables: {
 *      slides: // value for 'slides'
 *   },
 * });
 */
export function useSaveSlidesMutation(baseOptions?: Apollo.MutationHookOptions<SaveSlidesMutation, SaveSlidesMutationVariables>) {
        return Apollo.useMutation<SaveSlidesMutation, SaveSlidesMutationVariables>(SaveSlidesDocument, baseOptions);
      }
export type SaveSlidesMutationHookResult = ReturnType<typeof useSaveSlidesMutation>;
export type SaveSlidesMutationResult = Apollo.MutationResult<SaveSlidesMutation>;
export type SaveSlidesMutationOptions = Apollo.BaseMutationOptions<SaveSlidesMutation, SaveSlidesMutationVariables>;
export const ServicesDocument = gql`
    query Services {
  section: services {
    isVisible
    services {
      id
      title
      desc
      image
    }
  }
}
    `;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useServicesQuery(baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
        return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, baseOptions);
      }
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, baseOptions);
        }
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;
export const SaveServicesDocument = gql`
    mutation SaveServices($services: [ServiceInput]) {
  saveServices(input: {services: $services})
}
    `;
export type SaveServicesMutationFn = Apollo.MutationFunction<SaveServicesMutation, SaveServicesMutationVariables>;

/**
 * __useSaveServicesMutation__
 *
 * To run a mutation, you first call `useSaveServicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveServicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveServicesMutation, { data, loading, error }] = useSaveServicesMutation({
 *   variables: {
 *      services: // value for 'services'
 *   },
 * });
 */
export function useSaveServicesMutation(baseOptions?: Apollo.MutationHookOptions<SaveServicesMutation, SaveServicesMutationVariables>) {
        return Apollo.useMutation<SaveServicesMutation, SaveServicesMutationVariables>(SaveServicesDocument, baseOptions);
      }
export type SaveServicesMutationHookResult = ReturnType<typeof useSaveServicesMutation>;
export type SaveServicesMutationResult = Apollo.MutationResult<SaveServicesMutation>;
export type SaveServicesMutationOptions = Apollo.BaseMutationOptions<SaveServicesMutation, SaveServicesMutationVariables>;
export const TriggerServicesVisDocument = gql`
    mutation TriggerServicesVis($isVisible: Boolean) {
  triggerServicesVis(isVisible: $isVisible)
}
    `;
export type TriggerServicesVisMutationFn = Apollo.MutationFunction<TriggerServicesVisMutation, TriggerServicesVisMutationVariables>;

/**
 * __useTriggerServicesVisMutation__
 *
 * To run a mutation, you first call `useTriggerServicesVisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTriggerServicesVisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [triggerServicesVisMutation, { data, loading, error }] = useTriggerServicesVisMutation({
 *   variables: {
 *      isVisible: // value for 'isVisible'
 *   },
 * });
 */
export function useTriggerServicesVisMutation(baseOptions?: Apollo.MutationHookOptions<TriggerServicesVisMutation, TriggerServicesVisMutationVariables>) {
        return Apollo.useMutation<TriggerServicesVisMutation, TriggerServicesVisMutationVariables>(TriggerServicesVisDocument, baseOptions);
      }
export type TriggerServicesVisMutationHookResult = ReturnType<typeof useTriggerServicesVisMutation>;
export type TriggerServicesVisMutationResult = Apollo.MutationResult<TriggerServicesVisMutation>;
export type TriggerServicesVisMutationOptions = Apollo.BaseMutationOptions<TriggerServicesVisMutation, TriggerServicesVisMutationVariables>;
export const ActivityDocument = gql`
    query Activity($slug: String!) {
  activity(slug: $slug) {
    title
    desc
    shortDesc
    image
    price
    likes
  }
  footer {
    title
    desc
    subTitle
  }
}
    `;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useActivityQuery(baseOptions: Apollo.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
        return Apollo.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
      }
export function useActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          return Apollo.useLazyQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = Apollo.QueryResult<ActivityQuery, ActivityQueryVariables>;
export const ActivityNewDocument = gql`
    query ActivityNew {
  footer {
    title
    desc
    subTitle
  }
}
    `;

/**
 * __useActivityNewQuery__
 *
 * To run a query within a React component, call `useActivityNewQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityNewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityNewQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivityNewQuery(baseOptions?: Apollo.QueryHookOptions<ActivityNewQuery, ActivityNewQueryVariables>) {
        return Apollo.useQuery<ActivityNewQuery, ActivityNewQueryVariables>(ActivityNewDocument, baseOptions);
      }
export function useActivityNewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityNewQuery, ActivityNewQueryVariables>) {
          return Apollo.useLazyQuery<ActivityNewQuery, ActivityNewQueryVariables>(ActivityNewDocument, baseOptions);
        }
export type ActivityNewQueryHookResult = ReturnType<typeof useActivityNewQuery>;
export type ActivityNewLazyQueryHookResult = ReturnType<typeof useActivityNewLazyQuery>;
export type ActivityNewQueryResult = Apollo.QueryResult<ActivityNewQuery, ActivityNewQueryVariables>;
export const UploadMediaDocument = gql`
    mutation uploadMedia($file: Upload!) {
  uploadMedia(file: $file) {
    id
    public_id
    url
    format
    bytes
  }
}
    `;
export type UploadMediaMutationFn = Apollo.MutationFunction<UploadMediaMutation, UploadMediaMutationVariables>;

/**
 * __useUploadMediaMutation__
 *
 * To run a mutation, you first call `useUploadMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMediaMutation, { data, loading, error }] = useUploadMediaMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadMediaMutation(baseOptions?: Apollo.MutationHookOptions<UploadMediaMutation, UploadMediaMutationVariables>) {
        return Apollo.useMutation<UploadMediaMutation, UploadMediaMutationVariables>(UploadMediaDocument, baseOptions);
      }
export type UploadMediaMutationHookResult = ReturnType<typeof useUploadMediaMutation>;
export type UploadMediaMutationResult = Apollo.MutationResult<UploadMediaMutation>;
export type UploadMediaMutationOptions = Apollo.BaseMutationOptions<UploadMediaMutation, UploadMediaMutationVariables>;
export const RemoveMediaDocument = gql`
    mutation removeMedia($public_id: String!) {
  removeMedia(public_id: $public_id) {
    id
    public_id
    url
    format
    bytes
  }
}
    `;
export type RemoveMediaMutationFn = Apollo.MutationFunction<RemoveMediaMutation, RemoveMediaMutationVariables>;

/**
 * __useRemoveMediaMutation__
 *
 * To run a mutation, you first call `useRemoveMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMediaMutation, { data, loading, error }] = useRemoveMediaMutation({
 *   variables: {
 *      public_id: // value for 'public_id'
 *   },
 * });
 */
export function useRemoveMediaMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMediaMutation, RemoveMediaMutationVariables>) {
        return Apollo.useMutation<RemoveMediaMutation, RemoveMediaMutationVariables>(RemoveMediaDocument, baseOptions);
      }
export type RemoveMediaMutationHookResult = ReturnType<typeof useRemoveMediaMutation>;
export type RemoveMediaMutationResult = Apollo.MutationResult<RemoveMediaMutation>;
export type RemoveMediaMutationOptions = Apollo.BaseMutationOptions<RemoveMediaMutation, RemoveMediaMutationVariables>;
export const AllMediaDocument = gql`
    query AllMedia {
  allMedia {
    id
    public_id
    url
    format
    bytes
  }
}
    `;

/**
 * __useAllMediaQuery__
 *
 * To run a query within a React component, call `useAllMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMediaQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMediaQuery(baseOptions?: Apollo.QueryHookOptions<AllMediaQuery, AllMediaQueryVariables>) {
        return Apollo.useQuery<AllMediaQuery, AllMediaQueryVariables>(AllMediaDocument, baseOptions);
      }
export function useAllMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMediaQuery, AllMediaQueryVariables>) {
          return Apollo.useLazyQuery<AllMediaQuery, AllMediaQueryVariables>(AllMediaDocument, baseOptions);
        }
export type AllMediaQueryHookResult = ReturnType<typeof useAllMediaQuery>;
export type AllMediaLazyQueryHookResult = ReturnType<typeof useAllMediaLazyQuery>;
export type AllMediaQueryResult = Apollo.QueryResult<AllMediaQuery, AllMediaQueryVariables>;
export const PageDocument = gql`
    query Page($id: ID!) {
  page(id: $id) {
    id
    title
  }
}
    `;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
        return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, baseOptions);
      }
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, baseOptions);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const PagesDocument = gql`
    query Pages {
  pages {
    id
    title
  }
}
    `;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: Apollo.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
        return Apollo.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, baseOptions);
      }
export function usePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
          return Apollo.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, baseOptions);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<PagesQuery, PagesQueryVariables>;
export const FetchHomePageDocument = gql`
    query FetchHomePage {
  hero {
    slides {
      id
      title
      desc
      image
    }
  }
  services {
    isVisible
    services {
      id
      title
      desc
      image
    }
  }
  activities {
    isVisible
    title
    activities {
      id
      title
      shortDesc
      price
      image
      slug
    }
  }
  approach {
    isVisible
    title
    desc
  }
  footer {
    title
    desc
    subTitle
  }
}
    `;

/**
 * __useFetchHomePageQuery__
 *
 * To run a query within a React component, call `useFetchHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchHomePageQuery(baseOptions?: Apollo.QueryHookOptions<FetchHomePageQuery, FetchHomePageQueryVariables>) {
        return Apollo.useQuery<FetchHomePageQuery, FetchHomePageQueryVariables>(FetchHomePageDocument, baseOptions);
      }
export function useFetchHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchHomePageQuery, FetchHomePageQueryVariables>) {
          return Apollo.useLazyQuery<FetchHomePageQuery, FetchHomePageQueryVariables>(FetchHomePageDocument, baseOptions);
        }
export type FetchHomePageQueryHookResult = ReturnType<typeof useFetchHomePageQuery>;
export type FetchHomePageLazyQueryHookResult = ReturnType<typeof useFetchHomePageLazyQuery>;
export type FetchHomePageQueryResult = Apollo.QueryResult<FetchHomePageQuery, FetchHomePageQueryVariables>;