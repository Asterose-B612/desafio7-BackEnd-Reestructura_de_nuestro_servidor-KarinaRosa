import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    //solamente voy a tener un atributo: productos

    products: {

        type: [

            {
                
                id_prod: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    //tengo que referenciar el id a una coleccion: productos
                    ref: 'products'
                },
                

                quantity: {
                    type: Number,
                    required: true
                }


            }

        ],

        default: []
    }
})


cartSchema.pre('findOne', function() {
this.populate('products.id_prod')
})

const cartModel = model("carts", cartSchema)
export default cartModel