export interface PaginationParams {
    _: number;
    index: number;
  }
  
  export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
  }
  
  export interface ListParams {
    _: number;
    index: number;
    _order?: 'asc' | 'desc';
    [key: string]: any;
  }

  export interface CountParam {
    index: number;
  }
  