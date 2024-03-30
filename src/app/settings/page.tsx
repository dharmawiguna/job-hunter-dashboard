import OverviewForm from "@/components/forms/OverviewForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingPageProps {}

const SettingPage: FC<SettingPageProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold text-3xl mb-5"></div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          esse amet obcaecati voluptatum quae hic earum quasi illum doloribus ut
          deserunt provident ab animi, molestias minima, consectetur reiciendis
          non nobis?
        </TabsContent>
        <TabsContent value="teams">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          esse amet obcaecati voluptatum quae hic earum quasi illum doloribus ut
          deserunt provident ab animi, molestias minima, consectetur reiciendis
          non nobis?
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingPage;
