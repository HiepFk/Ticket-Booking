import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getListDoc } from "../../apis/handle";
import Loading from "../Loading";
import IconEdit from "../IconEdit";

function CinemaList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getListDoc(setData, setLoading, "cinema");
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="header">
        <div className="title">Cinemas</div>
        <Link to={"new"} className="btn_add">
          Add new cinema
        </Link>
      </div>
      <table className="table_list">
        <tr>
          <th>STT</th>
          <th>Image</th>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
        </tr>
        {data?.map((item, index) => {
          return (
            <tr key={item?._id} className="tr">
              <td>{index + 1}</td>
              <td>
                <img src={item?.img} alt="" className="table_img" />
              </td>
              <td className="table_desc">{item?.name}</td>
              <td className="table_desc">{item?.city}</td>
              <td className="table_desc">{item?.address}</td>
              <IconEdit id={item?._id} slug={item?.slug} type="cimena" />
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;
export default CinemaList;
