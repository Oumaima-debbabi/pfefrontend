import { Admin } from '../admin/model/admin';

export interface Proposition {
lieu:string,
description:string,
type:string,
_id:string,
titre:string,
precision:string,
creator:Admin,
etat:string
 }
