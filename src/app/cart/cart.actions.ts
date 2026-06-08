'use server';
import { decodeAuthenticatedUserToken} from '../utilities';


export async function addProductToCart(id:string){
    const bodyObj = {productId:id}
 const userToken = await decodeAuthenticatedUserToken();

 if(userToken){
     try{
         const res = await fetch ('https://ecommerce.routemisr.com/api/v2/cart',{
             method:"POST",
             headers: { token:userToken , 'Content-Type':'application/json'},
             body:JSON.stringify(bodyObj)
         });
 
         const finalRes = await res.json();
         console.log('finalRes to add',finalRes);
     }
     catch(error){
         console.log('error',error);
     }

 }
 else{
    return new Error("Session ended please lognin again");
 }
}

