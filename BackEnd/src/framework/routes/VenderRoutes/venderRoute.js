import venderRepositoryInt from "../../../application/repository/VenderRepositoryInt.js";
import venderRepositoryImp from "../../database/MongoBd/repositories/VenderRepository.js"
import venderController from "../../../adapters/VenderController.js";
import authServiceImp from "../../Services/authServiceImp.js";
import authServiceInt from "../../../application/Service/authServiceInt.js";
import single from "../../Middlewares/multer.js";
import S3ServiceInt from "../../../application/Service/S3ServiceInt.js";
import S3ServiceImp from "../../Services/S3ServiceImp.js";
S3ServiceImp

const VenderRouter = (express) =>{
    const router = express.Router();
    const controller =venderController(venderRepositoryInt,venderRepositoryImp,authServiceInt,authServiceImp,S3ServiceInt,S3ServiceImp)

    router.route("/verify/:token") .get(controller.verify)
    router.route("/getData/:id").get(controller.getData)
    router.route("/add_password").post(controller.AddPassword)
    router.route("/login").post(controller.Login)
    router.route("/orders").get(controller.getOrders)
    router.route("/order_id/:id").get(controller.GetOrderById)
    router.route("/schedule") .post(controller.Schedule)

   router.route("/dates/:id").get(controller.GetDates)


    return router


}
export default VenderRouter