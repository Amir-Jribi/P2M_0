// import asyncHandler from "../middlewares/asyncHandler"

const test = async (req, res) => {
    try {
      res.send("hello world")
    } catch (error) {
      res.status(400);
    }
  };

  export {
    test,
  };