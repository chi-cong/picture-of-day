export interface IApod {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  thumnail_url?: string;
  concept_tags?: boolean;
}

export enum MediaTypes {
  Image = "image",
  Video = "video",
}
