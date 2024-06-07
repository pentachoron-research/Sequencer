module.exports = {
  path: "/sequencer-prices",
  method: "get",
  handler: async (res, req) => {
    try {
      res.writeHeader("Content-Type", "application/json");
      return res.tryEnd(
        JSON.stringify({
          feePerByte: global.config.feePerByte.toString(),
        })
      );
    } catch (error) {
      console.log(error);
      res.writeStatus("500 Internal Server Error");
      return res.tryEnd("Internal Server Error");
    }
  },
};