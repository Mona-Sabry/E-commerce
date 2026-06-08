
export interface ProductType{
 _id: string;
id?:string;
title:string;
images:string[];
imageCover:string;
description:string;
quantity:string;
price:string;
priceAfterDiscount? :number;
ratingsAverage:string;
ratingsQuantity:string;
category:categoryType;
subcategory?:subcategory[];
brand:brandType;

}

export interface categoryType{
  _id:string;
  name:string;
  slug:string;
  image:string;
}

export interface subcategory {
  _id:string;
  name:string
}

export interface brandType{
    _id:string;
  name:string;
  slug:string;
  image?:string;
    products?: ProductType[];
}

export interface CartResponse{
  _id: string;
   cartOwner:string;
  products:ItemType[];
 totalCartPrice:number;
}

export interface ItemType{
  count:number;
   _id: string;
   price:number;
   product:ProductType;
}