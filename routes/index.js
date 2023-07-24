const express  =  require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{

    res.send('Hello from routes folder!')

})

router.get('/home', (req,res,next)=>{

    res.render('home', null);

})

router.get('/json', (req,res,next)=>{

    res.json({
        greeting: 'Hello!!;',
         goodbye: 'See you later',
         age: 26,
         colleague: new String("Harvard")
    })

})

module.exports = router;