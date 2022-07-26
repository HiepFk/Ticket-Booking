import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { activeEmail } from "../../apis/auth";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function ActivationEmail() {
  const { activation_token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (activation_token) {
      activeEmail(activation_token, dispatch, navigate);
    }
  }, [activation_token, dispatch, navigate]);

  return (
    <Wrapper>
      <div className="active_title">Actived Your Email 😊😊😊😊</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  .active_title {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 1rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
  }
`;
export default ActivationEmail;
