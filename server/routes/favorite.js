const express = require('express');
const router = express.Router();
const {Favorite} = require('../models/Favorite');

router.post('/favoriteNumber', (req,res)=>{

    //mongoDB에서 favorite 데이터 가져옴
    Favorite.find({"movieId": req.body.movieId})
    .exec((err, info)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({success: true, favoriteNumber: info.length})
    })
    //front에 데이터 전달하기
})

router.post('/favorited', (req,res)=>{

    //내가 이 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져옴
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
    .exec((err, info)=>{
        if(err) return res.status(400).send(err)

        let result = false;
        if(info.length !== 0 ){
            result = true
        }

        res.status(200).json({success: true, favorited: result})
    })
    //front에 데이터 전달하기
})

router.post('/removeFromFavorite', (req,res)=>{
    Favorite.findOneAndDelete({movieId: req.body.movieId, userFrom : req.body.userFrom})
    .exec((err, doc)=> {
        if(err) return res.status(400).send(err)
        res.status(200).json({success: true, doc})
    })
})


router.post('/addToFavorite', (req,res)=>{
    //document 인스턴스 생성
    const favorite = new Favorite(req.body)
    favorite.save((err,doc)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true})
    }) //req.body에 있는 데이터들이 favorite document에 저장됨
})


router.post('/getFavoredMovie', (req, res) => {

    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })
})

router.post('/removeFromFavorite', (req, res) => {
    Favorite.findOneAndDelete({movieId:req.body.movieId, userFrom: req.body.userFrom})
    .exec((err, result)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true})
    })
})

module.exports = router;
