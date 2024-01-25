export interface movieAward {
  movie:{
    imdb_id:any
    title:any
  }
  series:any
  actor:[
    imdb_id:any,
    name:any
  ]
  event_name: any;
  year: any;
  type: any;
  award_name: any;
  award: any;
}