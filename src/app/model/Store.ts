
export default class Store{
    constructor(
       public store_id: number,
       public store_region: number,
       public store_title: string,
       public store_address: string,
       public store_phone: string,
       public gps_location: string,
       public emp_in_need: boolean,
       public emp_interview: string,
       public emp_contact: string,

       public features: number,
       public city: string,
       public zip_code: string

      
      
     

        ){}
}
