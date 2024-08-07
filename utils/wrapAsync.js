const Joi = require('joi');

const reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required()
  }).required()
});


module.exports=(fn)=>{
    return(req,res,next)=>{
        fn(req,res,next).catch(next);
    };
};