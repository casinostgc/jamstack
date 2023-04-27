export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  casinoCollection?: Maybe<CasinoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
  sidebarItemCollection?: Maybe<SidebarItemCollection>;
};


export type AssetLinkingCollectionsCasinoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSidebarItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type Casino = Entry & {
  __typename?: 'Casino';
  airportCode?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  destination?: Maybe<Destination>;
  headerImage?: Maybe<Asset>;
  linkedFrom?: Maybe<CasinoLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoAirportCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoDestinationArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoHeaderImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/casino) */
export type CasinoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CasinoCollection = {
  __typename?: 'CasinoCollection';
  items: Array<Maybe<Casino>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CasinoFilter = {
  AND?: InputMaybe<Array<InputMaybe<CasinoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CasinoFilter>>>;
  airportCode?: InputMaybe<Scalars['String']>;
  airportCode_contains?: InputMaybe<Scalars['String']>;
  airportCode_exists?: InputMaybe<Scalars['Boolean']>;
  airportCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  airportCode_not?: InputMaybe<Scalars['String']>;
  airportCode_not_contains?: InputMaybe<Scalars['String']>;
  airportCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  destination?: InputMaybe<CfDestinationNestedFilter>;
  destination_exists?: InputMaybe<Scalars['Boolean']>;
  headerImage_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CasinoLinkingCollections = {
  __typename?: 'CasinoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CasinoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CasinoOrder {
  AirportCodeAsc = 'airportCode_ASC',
  AirportCodeDesc = 'airportCode_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/destination) */
export type Destination = Entry & {
  __typename?: 'Destination';
  body?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  international?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<DestinationLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/destination) */
export type DestinationBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/destination) */
export type DestinationInternationalArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/destination) */
export type DestinationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/destination) */
export type DestinationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type DestinationCollection = {
  __typename?: 'DestinationCollection';
  items: Array<Maybe<Destination>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DestinationFilter = {
  AND?: InputMaybe<Array<InputMaybe<DestinationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DestinationFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  international?: InputMaybe<Scalars['Boolean']>;
  international_exists?: InputMaybe<Scalars['Boolean']>;
  international_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DestinationLinkingCollections = {
  __typename?: 'DestinationLinkingCollections';
  casinoCollection?: Maybe<CasinoCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type DestinationLinkingCollectionsCasinoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DestinationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum DestinationOrder {
  InternationalAsc = 'international_ASC',
  InternationalDesc = 'international_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/newsArticle) */
export type NewsArticle = Entry & {
  __typename?: 'NewsArticle';
  body?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NewsArticleLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/newsArticle) */
export type NewsArticleBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/newsArticle) */
export type NewsArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/newsArticle) */
export type NewsArticleSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/newsArticle) */
export type NewsArticleSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/newsArticle) */
export type NewsArticleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NewsArticleCollection = {
  __typename?: 'NewsArticleCollection';
  items: Array<Maybe<NewsArticle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NewsArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsArticleFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsArticleLinkingCollections = {
  __typename?: 'NewsArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NewsArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NewsArticleOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  body?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  disableGradient?: Maybe<Scalars['Boolean']>;
  headerImage?: Maybe<Asset>;
  hideTitle?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  navigationTitle?: Maybe<Scalars['String']>;
  overlayLogo?: Maybe<Scalars['Boolean']>;
  sidebarAppend?: Maybe<Scalars['Boolean']>;
  sidebarCollection?: Maybe<PageSidebarCollection>;
  sidebarReplace?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageDisableGradientArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageHeaderImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageHideTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageNavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageOverlayLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageSidebarAppendArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageSidebarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageSidebarReplaceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  disableGradient?: InputMaybe<Scalars['Boolean']>;
  disableGradient_exists?: InputMaybe<Scalars['Boolean']>;
  disableGradient_not?: InputMaybe<Scalars['Boolean']>;
  headerImage_exists?: InputMaybe<Scalars['Boolean']>;
  hideTitle?: InputMaybe<Scalars['Boolean']>;
  hideTitle_exists?: InputMaybe<Scalars['Boolean']>;
  hideTitle_not?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  icon_contains?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_contains?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationTitle?: InputMaybe<Scalars['String']>;
  navigationTitle_contains?: InputMaybe<Scalars['String']>;
  navigationTitle_exists?: InputMaybe<Scalars['Boolean']>;
  navigationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationTitle_not?: InputMaybe<Scalars['String']>;
  navigationTitle_not_contains?: InputMaybe<Scalars['String']>;
  navigationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  overlayLogo?: InputMaybe<Scalars['Boolean']>;
  overlayLogo_exists?: InputMaybe<Scalars['Boolean']>;
  overlayLogo_not?: InputMaybe<Scalars['Boolean']>;
  sidebar?: InputMaybe<CfSidebarItemNestedFilter>;
  sidebarAppend?: InputMaybe<Scalars['Boolean']>;
  sidebarAppend_exists?: InputMaybe<Scalars['Boolean']>;
  sidebarAppend_not?: InputMaybe<Scalars['Boolean']>;
  sidebarCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sidebarReplace?: InputMaybe<Scalars['Boolean']>;
  sidebarReplace_exists?: InputMaybe<Scalars['Boolean']>;
  sidebarReplace_not?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  DisableGradientAsc = 'disableGradient_ASC',
  DisableGradientDesc = 'disableGradient_DESC',
  HideTitleAsc = 'hideTitle_ASC',
  HideTitleDesc = 'hideTitle_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  OverlayLogoAsc = 'overlayLogo_ASC',
  OverlayLogoDesc = 'overlayLogo_DESC',
  SidebarAppendAsc = 'sidebarAppend_ASC',
  SidebarAppendDesc = 'sidebarAppend_DESC',
  SidebarReplaceAsc = 'sidebarReplace_ASC',
  SidebarReplaceDesc = 'sidebarReplace_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSidebarCollection = {
  __typename?: 'PageSidebarCollection';
  items: Array<Maybe<SidebarItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  casino?: Maybe<Casino>;
  casinoCollection?: Maybe<CasinoCollection>;
  destination?: Maybe<Destination>;
  destinationCollection?: Maybe<DestinationCollection>;
  entryCollection?: Maybe<EntryCollection>;
  newsArticle?: Maybe<NewsArticle>;
  newsArticleCollection?: Maybe<NewsArticleCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  settings?: Maybe<Settings>;
  settingsCollection?: Maybe<SettingsCollection>;
  sidebarItem?: Maybe<SidebarItem>;
  sidebarItemCollection?: Maybe<SidebarItemCollection>;
  vanityUrl?: Maybe<VanityUrl>;
  vanityUrlCollection?: Maybe<VanityUrlCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCasinoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCasinoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CasinoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CasinoFilter>;
};


export type QueryDestinationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDestinationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DestinationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DestinationFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNewsArticleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNewsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NewsArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsArticleFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySettingsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsFilter>;
};


export type QuerySidebarItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySidebarItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SidebarItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SidebarItemFilter>;
};


export type QueryVanityUrlArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVanityUrlCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VanityUrlOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VanityUrlFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type Settings = Entry & {
  __typename?: 'Settings';
  companyEmail?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  cruises?: Maybe<Asset>;
  flights?: Maybe<Asset>;
  linkedFrom?: Maybe<SettingsLinkingCollections>;
  navigationCollection?: Maybe<SettingsNavigationCollection>;
  sidebarCollection?: Maybe<SettingsSidebarCollection>;
  siteTitle?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsCompanyEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsCompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsCompanyPhoneArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsCruisesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsFlightsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsSidebarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/settings) */
export type SettingsSiteTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  items: Array<Maybe<Settings>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  companyEmail?: InputMaybe<Scalars['String']>;
  companyEmail_contains?: InputMaybe<Scalars['String']>;
  companyEmail_exists?: InputMaybe<Scalars['Boolean']>;
  companyEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyEmail_not?: InputMaybe<Scalars['String']>;
  companyEmail_not_contains?: InputMaybe<Scalars['String']>;
  companyEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyName?: InputMaybe<Scalars['String']>;
  companyName_contains?: InputMaybe<Scalars['String']>;
  companyName_exists?: InputMaybe<Scalars['Boolean']>;
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyName_not?: InputMaybe<Scalars['String']>;
  companyName_not_contains?: InputMaybe<Scalars['String']>;
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyPhone?: InputMaybe<Scalars['String']>;
  companyPhone_contains?: InputMaybe<Scalars['String']>;
  companyPhone_exists?: InputMaybe<Scalars['Boolean']>;
  companyPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyPhone_not?: InputMaybe<Scalars['String']>;
  companyPhone_not_contains?: InputMaybe<Scalars['String']>;
  companyPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cruises_exists?: InputMaybe<Scalars['Boolean']>;
  flights_exists?: InputMaybe<Scalars['Boolean']>;
  navigation?: InputMaybe<CfPageNestedFilter>;
  navigationCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sidebar?: InputMaybe<CfSidebarItemNestedFilter>;
  sidebarCollection_exists?: InputMaybe<Scalars['Boolean']>;
  siteTitle?: InputMaybe<Scalars['String']>;
  siteTitle_contains?: InputMaybe<Scalars['String']>;
  siteTitle_exists?: InputMaybe<Scalars['Boolean']>;
  siteTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteTitle_not?: InputMaybe<Scalars['String']>;
  siteTitle_not_contains?: InputMaybe<Scalars['String']>;
  siteTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SettingsLinkingCollections = {
  __typename?: 'SettingsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SettingsNavigationCollection = {
  __typename?: 'SettingsNavigationCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum SettingsOrder {
  CompanyEmailAsc = 'companyEmail_ASC',
  CompanyEmailDesc = 'companyEmail_DESC',
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CompanyPhoneAsc = 'companyPhone_ASC',
  CompanyPhoneDesc = 'companyPhone_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SettingsSidebarCollection = {
  __typename?: 'SettingsSidebarCollection';
  items: Array<Maybe<SidebarItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItem = Entry & {
  __typename?: 'SidebarItem';
  body?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentProps?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SidebarItemLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemComponentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemComponentPropsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/sidebarItem) */
export type SidebarItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SidebarItemCollection = {
  __typename?: 'SidebarItemCollection';
  items: Array<Maybe<SidebarItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SidebarItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SidebarItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SidebarItemFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  component?: InputMaybe<Scalars['String']>;
  componentProps_exists?: InputMaybe<Scalars['Boolean']>;
  component_contains?: InputMaybe<Scalars['String']>;
  component_exists?: InputMaybe<Scalars['Boolean']>;
  component_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  component_not?: InputMaybe<Scalars['String']>;
  component_not_contains?: InputMaybe<Scalars['String']>;
  component_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SidebarItemLinkingCollections = {
  __typename?: 'SidebarItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type SidebarItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SidebarItemLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SidebarItemLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SidebarItemOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ComponentAsc = 'component_ASC',
  ComponentDesc = 'component_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/vanityUrl) */
export type VanityUrl = Entry & {
  __typename?: 'VanityUrl';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VanityUrlLinkingCollections>;
  source?: Maybe<Scalars['String']>;
  sys: Sys;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/vanityUrl) */
export type VanityUrlLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/vanityUrl) */
export type VanityUrlSourceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/vanityUrl) */
export type VanityUrlTargetArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/akm0kyo1pd0w/content_types/vanityUrl) */
export type VanityUrlTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type VanityUrlCollection = {
  __typename?: 'VanityUrlCollection';
  items: Array<Maybe<VanityUrl>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VanityUrlFilter = {
  AND?: InputMaybe<Array<InputMaybe<VanityUrlFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VanityUrlFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  source?: InputMaybe<Scalars['String']>;
  source_contains?: InputMaybe<Scalars['String']>;
  source_exists?: InputMaybe<Scalars['Boolean']>;
  source_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source_not?: InputMaybe<Scalars['String']>;
  source_not_contains?: InputMaybe<Scalars['String']>;
  source_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  target?: InputMaybe<Scalars['String']>;
  target_contains?: InputMaybe<Scalars['String']>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target_not?: InputMaybe<Scalars['String']>;
  target_not_contains?: InputMaybe<Scalars['String']>;
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VanityUrlLinkingCollections = {
  __typename?: 'VanityUrlLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VanityUrlLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum VanityUrlOrder {
  SourceAsc = 'source_ASC',
  SourceDesc = 'source_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CfDestinationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDestinationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDestinationNestedFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  international?: InputMaybe<Scalars['Boolean']>;
  international_exists?: InputMaybe<Scalars['Boolean']>;
  international_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  disableGradient?: InputMaybe<Scalars['Boolean']>;
  disableGradient_exists?: InputMaybe<Scalars['Boolean']>;
  disableGradient_not?: InputMaybe<Scalars['Boolean']>;
  headerImage_exists?: InputMaybe<Scalars['Boolean']>;
  hideTitle?: InputMaybe<Scalars['Boolean']>;
  hideTitle_exists?: InputMaybe<Scalars['Boolean']>;
  hideTitle_not?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  icon_contains?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_contains?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationTitle?: InputMaybe<Scalars['String']>;
  navigationTitle_contains?: InputMaybe<Scalars['String']>;
  navigationTitle_exists?: InputMaybe<Scalars['Boolean']>;
  navigationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationTitle_not?: InputMaybe<Scalars['String']>;
  navigationTitle_not_contains?: InputMaybe<Scalars['String']>;
  navigationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  overlayLogo?: InputMaybe<Scalars['Boolean']>;
  overlayLogo_exists?: InputMaybe<Scalars['Boolean']>;
  overlayLogo_not?: InputMaybe<Scalars['Boolean']>;
  sidebarAppend?: InputMaybe<Scalars['Boolean']>;
  sidebarAppend_exists?: InputMaybe<Scalars['Boolean']>;
  sidebarAppend_not?: InputMaybe<Scalars['Boolean']>;
  sidebarCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sidebarReplace?: InputMaybe<Scalars['Boolean']>;
  sidebarReplace_exists?: InputMaybe<Scalars['Boolean']>;
  sidebarReplace_not?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfSidebarItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSidebarItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSidebarItemNestedFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  component?: InputMaybe<Scalars['String']>;
  componentProps_exists?: InputMaybe<Scalars['Boolean']>;
  component_contains?: InputMaybe<Scalars['String']>;
  component_exists?: InputMaybe<Scalars['Boolean']>;
  component_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  component_not?: InputMaybe<Scalars['String']>;
  component_not_contains?: InputMaybe<Scalars['String']>;
  component_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
