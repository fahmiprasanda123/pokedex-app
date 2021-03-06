import fetch from 'node-fetch'

export default async (req, res) => {
  const baseUrl = process.env.BASE_API_URL_EXTERNAL;
  const { method, query: { id } } = req;
  let data = {};

  switch (method) {
    case "GET":
        const url = `${baseUrl}/pokemon/${id}`;
        const response = await fetch(url);
        try {
          data = await response.json();
        } catch (error) {
          // console.log("##error fetch: ", error.message)
        }

        if (data.id) {
          res.status(200).json(data);
        } else {
          res.status(404).json("Data not found");
        }

      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

}