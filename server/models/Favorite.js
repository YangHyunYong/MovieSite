const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    //ObjectId로 User의 모든 정보를 가져올 수 있음
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, {timestamps: true})  // timestamps: true -> 생성된 시간을 자동으로 처리해줌


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }