import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Runs
 *
 *
 */
export interface Run extends SanityDocument {
  _type: "run";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;

  /**
   * Date — `date`
   *
   *
   */
  date?: string;

  /**
   * Location — `string`
   *
   *
   */
  location?: string;

  /**
   * Distance — `number`
   *
   *
   */
  distance?: number;

  /**
   * Time — `string`
   *
   *
   */
  time?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Socials
 *
 *
 */
export interface Social extends SanityDocument {
  _type: "social";

  /**
   * Name — `string`
   *
   *
   */
  name?: "x" | "instagram" | "github";

  /**
   * URL — `string`
   *
   *
   */
  url?: string;
}

/**
 * Content
 *
 *
 */
export interface Content extends SanityDocument {
  _type: "content";

  /**
   * Type — `string`
   *
   *
   */
  type?: "caption";

  /**
   * Content Description — `array`
   *
   *
   */
  contentDescription?: Array<SanityKeyed<SanityBlock>>;
}

export type Documents = Run | Social | Content;
