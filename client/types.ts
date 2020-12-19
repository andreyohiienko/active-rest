

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

//==============================================================
// END Enums and Input Objects
//==============================================================