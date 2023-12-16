import { useState } from "react";
import * as Style from "../components/MySchedule/styles";
import MyScheduleCard from "../components/MySchedule/MyScheduleCard";
import Button from "../components/_common/Button";
import { Icon } from "../assets";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMyScheduleList } from "../api/clova";
import { MyScheduleListController } from "../controller/MyScheduleListController";

export type Tab = "보관중인 일정" | "지난 일정";

const tabList: Tab[] = ["보관중인 일정", "지난 일정"];

const MySchedule = () => {
  const [tab, setTab] = useState<Tab>("보관중인 일정");
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(0);

  const { data: scheduleList } = useQuery({
    queryKey: ["mySchedule", "all"],
    queryFn: () => getMyScheduleList(1),
  });

  return (
    <>
      <Style.Tab>
        {tabList.map((item) => (
          <Style.TabItem
            key={item}
            isSelected={tab === item}
            onClick={() => setTab(item)}
          >
            {item}
          </Style.TabItem>
        ))}
      </Style.Tab>
      <Style.Content>
        <Style.Title>내가 저장한 일정</Style.Title>
        {MyScheduleListController(scheduleList || [])
          .filter(tab)
          .get()
          .map((item) => (
            <MyScheduleCard
              isOpenDropdown={openDropdown === item.id}
              onClose={() => setOpenDropdown(0)}
              openDropdown={() => {
                if (openDropdown === item.id) {
                  setOpenDropdown(0);
                } else {
                  setOpenDropdown(item.id);
                }
              }}
              key={item.id}
              {...item}
            />
          ))}
      </Style.Content>
      <Style.CreateButton>
        <Button
          left={<Icon.AddSchedule />}
          text="AI한테 여행 일정 추천받으러 가기"
          onClick={() => navigate("/createSchedule/date")}
          color="gradient"
        />
      </Style.CreateButton>
    </>
  );
};

export default MySchedule;
