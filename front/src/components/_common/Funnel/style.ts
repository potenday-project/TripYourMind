import styled from "@emotion/styled";

export const FunnelContainer = styled.section`
  margin: 0 18px;
  position: relative;
`;

export const NextButton = styled.div`
  position: fixed;
  bottom: 30px;
  width: calc(100% - 36px);
  left: 18px;
`;

export const WeekDayList = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray_1};
  padding: 16px;
  border-bottom: 1px solid #ececec;
  div {
    width: 40px;
    text-align: center;
  }
`;

export const CalendarScrollBox = styled.div`
  height: calc(100% - 100px);
  overflow: scroll;
  padding: 0 16px;
  padding-bottom: 48px;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DestinationType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 73px;
`;

export const SubTitle = styled.h3`
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.sub2};
  margin-bottom: 16px;
`;

export const DestinationInput = styled.input`
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: #fff;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray_1};
  padding: 8px 16px;
  //font
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 218.75% */
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  row-gap: 13px;
  margin-bottom: 36px;
`;

export const DateBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 18px 12px 18px;
  background: #f5f5f5;
  border-radius: 8px;
  gap: 7px;

  div {
    color: #000;

    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }
`;

export const ScheduleDate = styled.div`
  background: #ffeede;
  border-radius: 8px;
  padding: 12px 26px;
  color: ${({ theme }) => theme.colors.main};

  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px;
  white-space: nowrap;
`;

export const DayList = styled.div`
  display: flex;
  gap: 17px;
  min-width: 100%;
  border-bottom: 1px solid #dddddd;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0px 16px;

  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Day = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  min-width: 72px;
  padding: 13px 0;
  white-space: nowrap;
  height: 100%;

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.main : theme.colors.sub};

  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme, isSelected }) => (isSelected ? 600 : 500)};
  line-height: normal;
  position: relative;
  z-index: 1;

  transition: 0.05s ease-in-out;
`;

export const UnderLine = styled.div<{ isSelected: boolean }>`
  position: absolute;
  width: 72px;
  bottom: -1px;
  height: 2px;
  z-index: 10;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.main : "transparent"};
`;

export const DatePeriod = styled.div`
  color: #797979;

  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PeriodBox = styled.div`
  padding: 4px 8px;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  background: #ffe4cb;
  width: fit-content;
`;

export const DestinationName = styled.div`
  color: #3b3a3a;

  font-family: Pretendard Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TitleSection = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px;
  padding-top: 15px;
`;

export const SubRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 10px;
  align-items: center;
`;

export const RestButton = styled.button`
  padding: 5px 11px;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: none;
  background: ${({ theme }) => theme.colors.main};
  width: fit-content;
`;

export const Content = styled.div`
  background: #f7f7f7;
  padding: 0 16px;
  height: 100%;
  overflow-y: auto;
`;