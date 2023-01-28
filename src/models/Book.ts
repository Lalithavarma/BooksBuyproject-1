export default class Book{
    constructor(
        public id: number,
        public bname: string,
        public description: string,
        public price: number,
        public book_image: string,
        public active: number,
        public stockavailable: number,
        public date_created: string,
        public last_updated: string,
        public bcategory_id: number,
    ){
    }

};