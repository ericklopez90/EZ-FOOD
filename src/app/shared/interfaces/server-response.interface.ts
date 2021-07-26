export interface ServerResponse {
    payload:  Payload[];
    response: Response;
    meta:     Meta;
}

export interface Meta {
    startedAt: Date;
    endAt:     Date;
    count:     number;
}

export interface Payload {
    image:   string;
    bgColor: string;
    _id:     string;
    name:    string;
}

export interface Response {
    title:   string;
    message: string;
}
