import { IsIn } from "class-validator";

export class DeleteQueryParams{
    @IsIn(['disable','delete'])
    type:string
}