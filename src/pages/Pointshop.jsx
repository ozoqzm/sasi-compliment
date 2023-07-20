import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: white;
  border: 1px solid gray;
`;

const Title = styled.div`
  position: relative;
  width: 200px;
  height: 24px;
  left: 90px;

  top: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3b6ae3;
`;

const Point_box = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 345px;
  height: 90px;
  left: 15px;
  top: 60px;

  background: #ffffff;
  border: 1px solid #3b6ae3;
  border-radius: 13px;
`;

const Point_text = styled.div`
  position: relative;
  width: 70px;
  height: 15px;
  left: 26px;
  top: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #3b6ae3;
`;

const Point_icon = styled.div`
  position: relative;
  width: 31px;
  height: 31px;
  left: 23px;
  top: 43px;

  position: relative;
  width: 31px;
  height: 31px;
  left: 23px;
  top: 43px;

  position: relative;
  width: 24.96px;
  height: 24.96px;
  left: 25.82px;
  top: 46.22px;

  position: relative;
  width: 11px;
  height: 19px;
  left: 40px;
  top: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16.1039px;
  line-height: 19px;

  color: #ffb905;
`;

const Point_number = styled.div`
  position: relative;
  width: 54px;
  height: 24px;
  left: 80px;
  top: 12px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #3b6ae3;
`;

const Detail = styled.div`
  position: relative;
  width: 200px;
  height: 12px;
  left: 29px;
  top: 100px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #3b6ae3;
`;

const Frame_gorae = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 185px;
  height: 227px;
  left: 22px;
  top: 120px;

  background: linear-gradient(180deg, #ffffff 0%, #69abff 100%);
  border: 1px solid #3b6ae3;
  border-radius: 14px;
`;

const Image_gorae = styled.div`
  position: relative;
  width: 140px;
  height: 197.98px;
  left: 44px;
  top: 120px;

  position: relative;
  width: 140px;
  height: 140px;
  left: 184px;
  top: 120px;

  background: url(image.png);

  position: relative;
  width: 25.83px;
  height: 73.36px;
  left: 117.11px;
  top: 388.14px;

  background: url(image.png);

  position: relative;
  width: 25.45px;
  height: 73.54px;
  left: 111.88px;
  top: 370.8px;

  background: url(image.png);

  position: relative;
  width: 25.83px;
  height: 73.36px;
  left: 30px;
  top: 10px;

  background: url(image.png);
`;

const Text_gorae = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  left: 226px;
  bottom: 60px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #3b6ae3;
`;

const Box_sub = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 44px;
  height: 20px;
  left: 270px;
  bottom: 80px;

  border: 0.7px solid #3b6ae3;
  border-radius: 16px;
`;

const Text_sub = styled.div`
  position: relative;
  width: 40px;
  height: 10px;
  left: 1px;
  top: 3px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  color: #3b6ae3;
`;

const Gorae_examplebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 226px;
  top: 333px;

  background: #eeeeee;
  border-radius: 3px;
`;

const Gorae_exampletext = styled.div`
  position: relative;
  width: 37px;
  height: 12px;
  left: calc(50% - 37px / 2 + 93.5px);
  top: calc(50% - 12px / 2 - 74px);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #6c6c6c;
`;

const Gorae_stylebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 226px;
  top: 371px;

  background: #3b6ae3;
  border-radius: 3px;
`;

const Gorae_styletext = styled.div`
  position: relative;
  width: 37px;
  height: 12px;
  left: calc(50% - 37px / 2 + 93.5px);
  top: calc(50% - 12px / 2 - 36px);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #fcfcfc;
`;

const Frame_tree = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 185px;
  height: 227px;
  left: 22px;
  top: 70px;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #d5d5d5;
  border-radius: 14px;
`;

const Image_tree = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  left: calc(50% - 30px / 2 + 0.5px);
  top: calc(50% - 30px / 2 + 9.5px);

  position: relative;
  left: 16.67%;
  right: 16.67%;
  top: 4.17%;
  bottom: 8.33%;

  background: #f8f8f8;

  position: relative;
  width: 37px;
  height: 16px;
  left: 88.35px;
  top: 80.16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13.5737px;
  line-height: 16px;

  color: #ffffff;

  position: relative;
  width: 21.04px;
  height: 21.04px;
  left: 61px;
  top: 77px;

  position: relative;
  width: 21.04px;
  height: 21.04px;
  left: 61px;
  top: 77px;

  background: linear-gradient(0deg, #ffc329, #ffc329),
    linear-gradient(0deg, #ffcd29, #ffcd29),
    linear-gradient(0deg, #ffcd29, #ffcd29), #ffcd29;

  position: relative;
  width: 16.94px;
  height: 16.94px;
  left: 62.91px;
  top: 79.19px;

  background: linear-gradient(0deg, #ffd966, #ffd966),
    linear-gradient(0deg, #ffcd29, #ffcd29),
    linear-gradient(0deg, #ffcd29, #ffcd29), #ffcd29;

  position: relative;
  width: 8px;
  height: 13px;
  left: 68.1px;
  top: 81.1px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 10.9295px;
  line-height: 13px;

  color: #ffb905;
`;

const Text_tree = styled.div`
  position: relative;
  width: 34px;
  height: 22px;
  left: 226px;
  top: 540px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #39b74d;
`;

const Tree_examplebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 226px;
  top: 333px;

  background: #eeeeee;
  border-radius: 3px;
`;

const Tree_exampletext = styled.div`
  position: relative;
  width: 37px;
  height: 12px;
  left: calc(50% - 37px / 2 + 93.5px);
  top: calc(50% - 12px / 2 - 74px);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #6c6c6c;
`;

const Tree_stylebox = styled.button`
  position: relative;
  width: 125px;
  height: 30px;
  left: 226px;
  top: 614px;

  background: #39b74d;
  border-radius: 3px;
`;

const Tree_styletext = styled.div`
  position: relative;
  width: 37px;
  height: 12px;
  left: calc(50% - 37px / 2 + 93.5px);
  top: calc(50% - 12px / 2 + 207px);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #fcfcfc;
`;

const Pointshop = () => {
  return (
    <Container>
      <Title>포인트샵</Title>
      <Point_box>
        <Point_text>보유 포인트</Point_text>
        <Point_icon>
          <img src={`${process.env.PUBLIC_URL}/image/Group 2217.svg`} />
        </Point_icon>
        <Point_number>200P</Point_number>
      </Point_box>
      <Detail>열심히 모은 포인트로 테마를 구매해보세요!</Detail>
      <Frame_gorae>
        <Image_gorae>
          <img src={`${process.env.PUBLIC_URL}/image/Group 2221.svg`} />
        </Image_gorae>
      </Frame_gorae>
      <Text_gorae>고래</Text_gorae>
      <Box_sub>
        <Text_sub>적용 중</Text_sub>
      </Box_sub>
      <Gorae_examplebox>
        <Gorae_exampletext>미리보기</Gorae_exampletext>
      </Gorae_examplebox>
      <Gorae_stylebox>
        <Gorae_styletext>적용하기</Gorae_styletext>
      </Gorae_stylebox>
      <Frame_tree>
        <Image_tree>
          <img src={`${process.env.PUBLIC_URL}/image/Group 2217.svg`} />
        </Image_tree>
      </Frame_tree>
      <Text_tree>나무</Text_tree>
      <Tree_examplebox>
        <Tree_exampletext>미리보기</Tree_exampletext>
      </Tree_examplebox>
      <Tree_stylebox>
        <Tree_styletext>적용하기</Tree_styletext>
      </Tree_stylebox>
    </Container>
  );
};

export default Pointshop;
