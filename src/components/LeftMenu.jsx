import React, { useEffect } from "react";
import LeftMenuLink from "./elements/LeftMenuLink";
import { useDataContext } from "../DataContext";

export default function LeftMenu() {
  const { data, loading, error } = useDataContext();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="LeftMenu bg-primaryBg left-0 top-0 h-screen w-[240px] fixed flex-col justify-end border-r border-borderColor md:flex hidden">
      {!loading &&
        data.categories.map((item, index) => (
          <LeftMenuLink
            key={item.id}
            title={item.categories_name}
            count={
              data.projects.filter(
                (filteritem) => filteritem.project_categorie_id == item.id
              ).length
            }
            url={item.id}
          />
        ))}
      {/* <LeftMenuLink title={"Web"} count={4} url={"1"} />
      <LeftMenuLink title={"Design"} count={2} url={"2"} /> */}
    </div>
  );
}
