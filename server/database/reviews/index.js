import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, ref: "foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isRestaurantReview: Boolean,
    isFoodReview: Boolean,
    photos: [
        {
            type: mongoose.Types.ObjectId,
            ref: "images"
        },
    ],
},
    {
        timestamps: true
    }
)


export const ReviewsModel = mongoose.model("reviews", reviewsSchema);