

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: uploadMedia
// ====================================================

export interface uploadMedia_uploadMedia {
  id: string;
  filename: string | null;
  path: string | null;
  mimetype: string | null;
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
  path: string | null;
  filename: string | null;
  mimetype: string | null;
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

export interface Slide_slide {
  id: string;
  title: string;
  desc: string | null;
  image: string | null;
}

export interface Slide {
  slide: Slide_slide | null;
}

export interface SlideVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Slides
// ====================================================

export interface Slides_slides {
  id: string;
  title: string;
}

export interface Slides {
  slides: (Slides_slides | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: removeSlide
// ====================================================

export interface removeSlide {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: newMedia
// ====================================================

export interface newMedia {
  id: string;
  filename: string | null;
  path: string | null;
  mimetype: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================