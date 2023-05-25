import { Collection } from "./collection";
import { Medium } from "./medium";

export class ArtPiece {
    id: string;
    created: Date;
    title: string;
    available: boolean;
    medium: string;
    size: string;
    collection: string;
    thumbnailImage: string;
    image: string;
    description: string;
 }