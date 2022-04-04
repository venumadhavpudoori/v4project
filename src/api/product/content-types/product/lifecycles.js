"use strict";
const qs = require('qs');

module.exports = {
  async  beforeCreate(event) {
      const { data, where, select, populate } = event.params;
 
      let entry = await strapi.db.query('api::product.product').findOne({
        populate: {
          options: {
            populate: {
              optionValue: true,
                    },
                },
      
        },
      });
      
      console.log("options",entry.options.map(item=>item.optionValue.map(items=>items)));
    //   if (data.options) {        
    //     let optionValue= entry.options.map(item=>item.optionValue.map(items=>items.name))[0];

    //     function combinations(list, n = 0, result = [], current = []) {

    //        if (n === list.length){                  
    //                     result.push(`${current.join('  ')}`);
    //                }else {                                      
    //                   list[n].forEach(item =>{                          
    //                       result.push(`${item}`);                         
    //                       combinations(list, n + 1, result,[...current ,item])});       
    //                }
           
    //               return result
    //               }
       
    //    let sentences = combinations(optionValue);
    //    let uniqueChars = sentences.filter((c, index) => {
    //                              return sentences.indexOf(c) === index;
    //                });

    // uniqueChars.map(item => {  
    //   data.productVariants.push({"variant":item});
    // })
    // }
    },
  
    async  beforeUpdate(event) {
        const { data, where, select, populate } = event.params;
    
        let { id } = data;
        let existing = await strapi.service('api::product.product').findOne({ id });
      },
    
      async  afterUpdate(event) {
        const { result, params } = event;
    
        if (result.options.length > 0) {      
            for(let i=0;i<result.productVariants.length;i++){
              result.productVariants.splice(i,result.productVariants.length);
            }  
            let optionValue= result.options.map(item=>item.optionValues.map(items=>items.name));
      
            function combinations(list, n = 0, result = [], current = []) {
             //console.log(list);
                       if (n === list.length){                  
                            result.push(`${current.join('  ')}`);
                       }else {                                      
                          list[n].forEach(item =>{                          
                              result.push(`${item}`);                         
                              combinations(list, n + 1, result,[...current ,item])});       
                       }
               
                      return result
                      }
           
           let sentences = combinations(optionValue);
           let uniqueChars = sentences.filter((c, index) => {
                                     return sentences.indexOf(c) === index;
                       });
      
        uniqueChars.map(item => {  
          result.productVariants.push({"variant":item});
        })
      }else{
          for(let i=0;i<result.productVariants.length;i++){
                result.productVariants.splice(i,result.productVariants.length);
          }
      }
      },
  };
  