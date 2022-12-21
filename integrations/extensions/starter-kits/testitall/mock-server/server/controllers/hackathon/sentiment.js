import pkg from 'ibm-watson/auth/index.js';
const {IamAuthenticator} = pkg;
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1.js';




export function sentiment (req, res, next) {
    console.log('In route - sentiment');
   
  
    const nlu = new NaturalLanguageUnderstandingV1({
      // See: https://github.com/watson-developer-cloud/node-sdk#authentication
      authenticator: new IamAuthenticator({ apikey: 'update key' }),
      version: '2019-07-12',
    });
    
        const options = {
          html:  req.query.query_param1,
          features: {
            sentiment: {}
          },
        };
        nlu.analyze(options)
       .then(response => {
        // console.log(JSON.stringify(response.result, null, 2));
        // if (!payload.context.skills['actions skill'].skill_variables){
        //   payload.context.skills['actions skill'].skill_variables={};
        // }
        // payload.context.skills['actions skill'].skill_variables.sentiment = response.result.sentiment.document.label
    
    
        //       if (!payload.context.integrations.chat){
    //         payload.context.integrations.chat={};
    //     }
    //     payload.context.integrations.chat.nlu_result = response.result;
    //    _.set( payload,"context.skills['actions skill'].user_defined.nlu_result",response.result);
        res.json({
            sentiment: response.result.sentiment.document.label
        });
      })
      .catch(error => console.error(error));
        
    
  };

