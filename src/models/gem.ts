export interface GemDetails {
    dependencies: string[];
    dependants: string[];
}

export interface Gem {
    name: string;
    downloads: number;
    versionDownloads: number;
    homepageUri?: string;
    projectUri?: string;
    sourceCodeUri?: string;
    info?: string;
    authors: string;
}