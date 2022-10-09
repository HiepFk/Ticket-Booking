/* eslint-disable jsx-a11y/scope */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAxios } from "../../apis/createInstance";
import { LoginSuccess } from "../../redux/authSlice";
import { getMyTicket } from "../../apis/schedule";
import styled from "styled-components";
function MyTicket() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  let axiosJWT = createAxios(user, dispatch, LoginSuccess);
  const [data, setData] = useState([]);
  useEffect(() => {
    getMyTicket(axiosJWT, user?.accessToken, setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) {
    return <NonTicket>Bạn chưa đặt vé nào 😥</NonTicket>;
  }
  return (
    <Wrapper>
      <table>
        <caption>All Ticket</caption>
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Date</th>
            <th scope="col">Cost</th>
            <th scope="col">Cinema-Room</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td data-label="Movie">{item?.schedule?.movie?.name}</td>
                <td data-label="Date">
                  {item?.schedule?.time} - {item?.schedule?.day}
                </td>
                <td data-label="Cost">${item?.price}</td>
                <td data-label="Cinema-Room">
                  {item?.schedule?.room?.name} -{" "}
                  {item?.schedule?.room?.cinema?.name}
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td scope="row" data-label="Movie">
              Visa - 3412
            </td>
            <td data-label="Date">04/01/2016</td>
            <td data-label="Cost">$1,190</td>
            <td data-label="Cinema-Room">Hà Đông - 402</td>
          </tr>
          <tr>
            <td scope="row" data-label="Movie">
              Visa - 6076
            </td>
            <td data-label="Date">03/01/2016</td>
            <td data-label="Cost">$2,443</td>
            <td data-label="Cinema-Room">Hà Đông - 402</td>
          </tr>
          <tr>
            <td scope="row" data-label="Movie">
              Corporate AMEX
            </td>
            <td data-label="Date">03/01/2016</td>
            <td data-label="Cost">$1,181</td>
            <td data-label="Cinema-Room">Hà Đông - 402</td>
          </tr>
          <tr>
            <td scope="row" data-label="Movie">
              Visa - 3412
            </td>
            <td data-label="Date">02/01/2016</td>
            <td data-label="Cost">$842</td>
            <td data-label="Cinema-Room">Hà Đông - 402</td>
          </tr> */}
        </tbody>
      </table>
    </Wrapper>
  );
}

const NonTicket = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Wrapper = styled.div`
  padding: 1rem 0rem;
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    /* background-color: #f8f8f8; */
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
`;
export default MyTicket;
