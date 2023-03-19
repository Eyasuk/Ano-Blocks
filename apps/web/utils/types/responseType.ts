export type ResponseType = {
  success: boolean;
  data: object;
};


// usersession not found
   // autorization rouut -> push
   // else -> intro

//user session found
    // check cookie-short
      // valied  -> go to path if autorzed
      // in valled -> go to auth 
   // check cookie-long
     // valied
       // set cookie-short | check path | if intro -> home else -> path
  // autoriztion route -> 