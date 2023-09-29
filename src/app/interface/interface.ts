export interface Movies {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = 'en',
    Fr = 'fr',
    Zh = 'zh',
  }
  
  
  export interface Data {
    user?: User;
  }
  
  export interface User {
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    __v?: number;
  }
  export interface Moviedetail {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: BelongsToCollection;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: Date;
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }
  
  export interface BelongsToCollection {
    id?: number;
    name?: string;
    poster_path?: string;
    backdrop_path?: string;
  }
  
  export interface Genre {
    id?: number;
    name?: string;
  }
  
  export interface ProductionCompany {
    id?: number;
    logo_path?: null | string;
    name?: string;
    origin_country?: string;
  }
  
  export interface ProductionCountry {
    iso_3166_1?: string;
    name?: string;
  }
  
  export interface SpokenLanguage {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
  }
  export interface Trailers {
    id?: number;
    results?: TrailersResult[];
  }
  
  export interface TrailersResult {
    iso_639_1?: string;
    iso_3166_1?: string;
    name?: string;
    key?: string;
    site?: string;
    size?: number;
    type?: string;
    official?: boolean;
    published_at?: Date;
  }
  export interface ActorsDetail {
    id?: number;
    cast?: Cast[];
    crew?: Cast[];
  }
  
  export interface Cast {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: Department;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: null | string;
    cast_id?: number;
    character?: string;
    credit_id?: string;
    order?: number;
    department?: Department;
    job?: string;
  }
  
  export enum Department {
    Acting = 'Acting',
    Art = 'Art',
    Camera = 'Camera',
    CostumeMakeUp = 'Costume & Make-Up',
    Creator = 'Creator',
    Crew = 'Crew',
    Directing = 'Directing',
    Editing = 'Editing',
    Production = 'Production',
    Sound = 'Sound',
    VisualEffects = 'Visual Effects',
    Writing = 'Writing',
  }
  export interface Actors {
    adult?: boolean;
    also_known_as?: string[];
    biography?: string;
    birthday?: Date;
    deathday?: null;
    gender?: number;
    homepage?: null;
    id?: number;
    imdb_id?: string;
    known_for_department?: string;
    name?: string;
    place_of_birth?: string;
    popularity?: number;
    profile_path?: string;
  }
  export interface ActorsMovie {
    cast?: Cast[];
    crew?: Cast[];
    id?: number;
  }
  
  export interface ActorCast {
    adult?: boolean;
    backdrop_path?: null | string;
    genre_ids?: number[];
    id?: number;
    original_language?: OriginalLanguage;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: null | string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    character?: string;
    credit_id?: string;
    order?: number;
    job?: string;
  }