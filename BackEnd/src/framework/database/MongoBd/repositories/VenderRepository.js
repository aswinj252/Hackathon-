import Vender from "../Models/Vender.js";
import Order from "../Models/Order.js";
import Shipping from "../Models/Shipping.js";
const venderRepositoryImp = () => {
  const VenderExist = (email) => Vender.findOne({ email: email });
  const AdVender = (details) => {
    const create = new Vender({
      email: details.getEmail(),
      password: details.getPassword(),
      activated: false,
    });
    return create.save();
  };

  const getDetails = (email) => Vender.findOne({ email: email });
  const Activate = (email) =>
    Vender.updateOne({ email: email }, { $set: { activated: true } });
  const getData = (id) => Vender.findOne({ _id: id });
  const passwordchange = (email, password) =>
    Vender.updateOne({ email: email }, { $set: { password: password } });
  const getVenders = () => Vender.find().select("email");
  const Getorders = () => Order.find();
  const getById = (id) =>
    Order.findByIdAndUpdate({ _id: id }, { $set: { viewed: true } });
  const create = async (details, id) => {
    console.log(details, id, "hi");

    const data = details.map((entry) => ({
      date: entry.date,
      clicked: entry.clicked,
      orderId: id,
    }));
    console.log(data, "data");

    try {
      const insertedData = await Shipping.insertMany(data);
      // console.log("Data inserted successfully:", insertedData);
      return { message: "Data inserted successfully:", status: true };
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };
  const status = (id) =>
    Order.updateOne({ _id: id }, { $set: { scheduled: true } });

    const GetDates = (id) => Shipping.find({orderId:id})
  return {
    VenderExist,
    AdVender,
    getDetails,
    Activate,
    getData,
    passwordchange,
    getVenders,
    getById,
    Getorders,
    create,
    status,
    GetDates
  };
};
export default venderRepositoryImp;
