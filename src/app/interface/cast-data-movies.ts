export interface Castmovies {
    cast?: Cast[];
    crew?: Cast[];
    id?:   number;
}

export interface Cast {
    adult?:             boolean;
    backdrop_path?:     null | string;
    genre_ids?:         number[];
    id?:                number;
    original_language?: OriginalLanguage;
    original_title?:    string;
    overview?:          string;
    popularity?:        number;
    poster_path?:       null | string;
    release_date?:      string;
    title?:             string;
    video?:             boolean;
    vote_average?:      number;
    vote_count?:        number;
    character?:         string;
    credit_id?:         string;
    order?:             number;
    media_type?:        MediaType;
    origin_country?:    OriginCountry[];
    original_name?:     string;
    first_air_date?:    Date;
    name?:              string;
    episode_count?:     number;
    department?:        Department;
    job?:               Job;
}

export enum Department {
    Directing = "Directing",
    Production = "Production",
}

export enum Job {
    Director = "Director",
    ExecutiveProducer = "Executive Producer",
    Producer = "Producer",
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginCountry {
    De = "DE",
    GB = "GB",
    Us = "US",
}

export enum OriginalLanguage {
    De = "de",
    En = "en",
    Fr = "fr",
}
