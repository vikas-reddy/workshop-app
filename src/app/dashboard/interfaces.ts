export interface Video {
    title: string;
    author: string;
    id: string;
    viewDetails: VideoView[];
}

export interface VideoView {
    age: number;
    region: string;
    date: string;
}