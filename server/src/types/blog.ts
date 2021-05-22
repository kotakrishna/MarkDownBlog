import {Document} from 'mongoose';

export default interface  IBlog extends Document{
    title:string;
    description:string;
    content:string;
    createdAt:any;
    userId?:string;
}