

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_currentUser {
  name: string | null;
  googleId: string | null;
  role: (string | null)[] | null;
  email: string | null;
}

export interface CurrentUser {
  currentUser: CurrentUser_currentUser | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Logout
// ====================================================

export interface Logout_signout {
  message: string | null;
}

export interface Logout {
  signout: Logout_signout | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Medias
// ====================================================

export interface Medias_list {
  id: string;
  path: string;
  filename: string;
  mimetype: string;
}

export interface Medias {
  list: (Medias_list | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MediasMain
// ====================================================

export interface MediasMain_list {
  id: string;
  path: string;
  filename: string;
  mimetype: string;
}

export interface MediasMain {
  list: (MediasMain_list | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Activities
// ====================================================

export interface Activities_section {
  isVisible: boolean | null;
  title: string | null;
}

export interface Activities {
  section: Activities_section | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveActivities
// ====================================================

export interface SaveActivities {
  saveActivities: string | null;
}

export interface SaveActivitiesVariables {
  title?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TriggerActivitiesVis
// ====================================================

export interface TriggerActivitiesVis {
  triggerActivitiesVis: string | null;
}

export interface TriggerActivitiesVisVariables {
  isVisible?: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Approach
// ====================================================

export interface Approach_section {
  isVisible: boolean | null;
  title: string | null;
  desc: string | null;
}

export interface Approach {
  section: Approach_section | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveApproach
// ====================================================

export interface SaveApproach {
  saveApproach: string | null;
}

export interface SaveApproachVariables {
  title?: string | null;
  desc?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TriggerApproachVis
// ====================================================

export interface TriggerApproachVis {
  triggerApproachVis: string | null;
}

export interface TriggerApproachVisVariables {
  isVisible?: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddSubscriber
// ====================================================

export interface AddSubscriber_addSubscriber {
  id: string;
  email: string | null;
  status: string | null;
}

export interface AddSubscriber {
  addSubscriber: AddSubscriber_addSubscriber | null;
}

export interface AddSubscriberVariables {
  email?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Hero
// ====================================================

export interface Hero_section_slides {
  id: string;
  title: string;
  desc: string | null;
  image: string | null;
}

export interface Hero_section {
  slides: (Hero_section_slides | null)[] | null;
}

export interface Hero {
  section: Hero_section | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveSlides
// ====================================================

export interface SaveSlides {
  saveSlides: string | null;
}

export interface SaveSlidesVariables {
  slides?: (SlideInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Services
// ====================================================

export interface Services_section_services {
  id: string;
  title: string | null;
  desc: string | null;
  image: string | null;
}

export interface Services_section {
  isVisible: boolean | null;
  services: (Services_section_services | null)[] | null;
}

export interface Services {
  section: Services_section | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveServices
// ====================================================

export interface SaveServices {
  saveServices: string | null;
}

export interface SaveServicesVariables {
  services?: (ServiceInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TriggerServicesVis
// ====================================================

export interface TriggerServicesVis {
  triggerServicesVis: string | null;
}

export interface TriggerServicesVisVariables {
  isVisible?: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: uploadMedia
// ====================================================

export interface uploadMedia_uploadMedia {
  id: string;
  filename: string;
  path: string;
  mimetype: string;
}

export interface uploadMedia {
  uploadMedia: uploadMedia_uploadMedia | null;
}

export interface uploadMediaVariables {
  file: any;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: removeMedia
// ====================================================

export interface removeMedia {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllMedia
// ====================================================

export interface AllMedia_allMedia {
  id: string;
  path: string;
  filename: string;
  mimetype: string;
}

export interface AllMedia {
  allMedia: (AllMedia_allMedia | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Page
// ====================================================

export interface Page_page {
  id: string;
  title: string | null;
}

export interface Page {
  page: Page_page | null;
}

export interface PageVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pages
// ====================================================

export interface Pages_pages {
  id: string;
  title: string | null;
}

export interface Pages {
  pages: (Pages_pages | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Slide
// ====================================================

export interface Slide_item {
  id: string;
  title: string;
  desc: string | null;
  image: string | null;
}

export interface Slide {
  item: Slide_item | null;
}

export interface SlideVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateSlide
// ====================================================

export interface updateSlide {
  action: string | null;
}

export interface updateSlideVariables {
  id: string;
  title?: string | null;
  desc?: string | null;
  image?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Slides
// ====================================================

export interface Slides_list {
  id: string;
  title: string;
}

export interface Slides {
  list: (Slides_list | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeSlide
// ====================================================

export interface removeSlide_action {
  id: string;
  title: string;
}

export interface removeSlide {
  action: removeSlide_action | null;
}

export interface removeSlideVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddSlide
// ====================================================

export interface AddSlide_action {
  id: string;
}

export interface AddSlide {
  action: AddSlide_action | null;
}

export interface AddSlideVariables {
  title: string;
  desc?: string | null;
  image?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchHomePage
// ====================================================

export interface FetchHomePage_hero_slides {
  id: string;
  title: string;
  desc: string | null;
  image: string | null;
}

export interface FetchHomePage_hero {
  slides: (FetchHomePage_hero_slides | null)[] | null;
}

export interface FetchHomePage_services_services {
  id: string;
  title: string | null;
  desc: string | null;
  image: string | null;
}

export interface FetchHomePage_services {
  isVisible: boolean | null;
  services: (FetchHomePage_services_services | null)[] | null;
}

export interface FetchHomePage_activities {
  isVisible: boolean | null;
  title: string | null;
}

export interface FetchHomePage_sectionApproach {
  isVisible: boolean | null;
  title: string | null;
  desc: string | null;
}

export interface FetchHomePage_footer {
  title: string | null;
  desc: string | null;
  subTitle: string | null;
}

export interface FetchHomePage {
  hero: FetchHomePage_hero | null;
  services: FetchHomePage_services | null;
  activities: FetchHomePage_activities | null;
  sectionApproach: FetchHomePage_sectionApproach | null;
  footer: FetchHomePage_footer | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: newMedia
// ====================================================

export interface newMedia {
  id: string;
  filename: string;
  path: string;
  mimetype: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: remove
// ====================================================

export interface remove {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// null
export interface SlideInput {
  title?: string | null;
  desc?: string | null;
  image?: string | null;
}

// null
export interface ServiceInput {
  title?: string | null;
  desc?: string | null;
  image?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================