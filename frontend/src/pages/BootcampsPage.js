import { useState, useEffect } from "react";
import axios from "axios";

const BootcampsPage = () => {
  //Component State
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(false);

  //Side Effect
  useEffect(() => {
    let cancel;
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: "/api/v1/bootcamps",
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setBootcamps(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);
  return <div>HElloo</div>;
};

export default BootcampsPage;
