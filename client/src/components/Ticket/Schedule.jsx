import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { createAxios } from "../../apis/createInstance";
import { LoginSuccess } from "../../redux/authSlice";

import { getAllScheduleByMovie } from "../../apis/schedule";

import Loading from "../Loading";
import styled from "styled-components";

function Schedule({ searchParams }) {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  let axiosJWT = createAxios(user, dispatch, LoginSuccess);

  useEffect(() => {
    getAllScheduleByMovie(
      setData,
      setLoading,
      id,
      searchParams,
      axiosJWT,
      user?.accessToken
    );
    ///// check after
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, searchParams]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">All Schedule :</div>
      </div>
      <div className="schedules">
        {data?.length === 0 ? (
          <div className="schedule_non">
            Chưa có lịch công chiếu tạp cụm rạp này 😥.
          </div>
        ) : (
          <>
            {data?.map((item) => {
              return (
                <Link
                  to={`/seat/${item?.id}`}
                  className="schedule"
                  key={item?.id}
                >
                  <div className="cinema">{item?.room?.cinema?.name} : </div>
                  <div className="date">{item?.time}</div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 3rem;
  .title {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  .pillar {
    width: 0.25rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.75rem;
    color: white;
    font-weight: 600;
  }
  .schedule {
    display: flex;
    margin-bottom: 1.5rem;
    color: white;
  }
  .schedule_non {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .cinema {
    font-size: 1.25rem;
    font-weight: bold;
    width: 15rem;
  }
  .date {
    padding: 0.5rem 0.75rem;
    background-color: #212121;
    text-align: center;
    border-radius: 0.5rem;
    transition: all 0.15s linear;
    cursor: pointer;
    :hover {
      background-color: #31d7a9;
    }
  }
`;

export default Schedule;
