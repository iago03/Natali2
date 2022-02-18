export class Form{
    Name:string;
    Email:string;
    Phone:string;
    Text:string;

    constructor(){
        this.Name = "";
        this.Email = "";
        this.Phone = "";
        this.Text = "";
    }
}

export class itemInfo{
    ImgUrl:string;
    Name:string;
    Price:string;
    Description:string;
    Used:string;
    createdAt:number;

    constructor(createdAt:number = 0, img:string = "", name:string = "", price:string = "",description:string = "",used:string = ""){
        this.createdAt = createdAt;
        this.ImgUrl = img;
        this.Name = name;
        this.Price = price;
        this.Description = description;
        this.Used = used;
    }
}