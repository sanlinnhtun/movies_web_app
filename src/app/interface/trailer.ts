export interface TrailersDetails {
    id?:      number;
    results?: Result[];
}

export interface Result {
    iso_639_1?:    string;
    iso_3166_1?:   string;
    name?:         string;
    key?:          string;
    site?:         string;
    size?:         number;
    type?:         string;
    official?:     boolean;
    published_at?: Date;
    id?:           string;
}
