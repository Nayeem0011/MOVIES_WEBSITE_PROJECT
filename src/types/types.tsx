export interface DataTypes {
    id: number;
    title: string;
    poster_path: string | null;
    overview: string;
    vote_average: number;
    name: string;
    backdrop_path: string;
    media_type: string;
    release_date: string;
    first_air_date:string;
}

export interface ItemsCategory{
    apiEndpoint: string;
    itemHeading: string;
}

export const createDisplayItems = (apiEndpoint:string, itemHeading:string) : 
ItemsCategory => ({
    apiEndpoint: `${apiEndpoint}`,
    itemHeading,
})