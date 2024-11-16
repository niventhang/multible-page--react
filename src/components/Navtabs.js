import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Text from "../components/Text";

function Navtabs() {
  const [key, setKey] = useState("Main"); 

  useEffect(() => {
    const interval = setInterval(() => {
      const tabKeys = [
        "Main",
        "Awards",
        "Experience",
        "Education & Certification",
      ];
      const currentIndex = tabKeys.indexOf(key);
      const nextIndex = (currentIndex + 1) % tabKeys.length;
      setKey(tabKeys[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [key]);

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab
        className="text-center text-lg-start"
        eventKey="Main"
        title="Main skills"
      >
        <Text text="User experience design - UI/UX" />
        <Text text="Delight the user and make it work." />
        <Text style="pt-2" text="User experience design - UI/UX" />
        <Text style="pb-2" text="Delight the user and make it work." />
        <Text style="pt-2" text="Interaction design - Animation" />
        <Text style="pb-2" text="I like to move it move it." />
      </Tab>
      <Tab eventKey="Awards" title="Awards">
        <Text text="Awwwards.com - Winner" />
        <Text text="2019 - 2020" />
        <Text style="pt-2" text="CSS Design Awards - Winner" />
        <Text style="pb-2" text="2017 - 2018" />
        <Text style="pt-2" text="Design nominees - site of the day" />
        <Text style="pb-2" text="2013- 2014" />
      </Tab>
      <Tab eventKey="Experience" title="Experience">
        <Text text="Sr. Front-end Engineer - Google" />
        <Text text="2018 - Current" />
        <Text style="pt-2" text="Front-end Engineer - Microsoft" />
        <Text style="pb-2" text="2017 - 2018" />
        <Text style="pt-2" text="Software Engineer - Alibaba" />
        <Text style="pb-2" text="2013- 2014" />
      </Tab>
      <Tab
        eventKey="Education & Certification"
        title="Education & Certification"
      >
        <Text text="BSc In CSE - ABC University, Los Angeles, CA" />
        <Text text="2010" />
        <Text
          style="pt-2"
          text="Diploma in Computer Science - Gamma Technical Institute"
        />
        <Text style="pb-2" text="2009" />
        <Text
          style="pt-2"
          text="Graphic Designer - ABC Institute, Los Angeles, CA"
        />
        <Text style="pb-2" text="2007" />
      </Tab>
    </Tabs>
  );
}

export default Navtabs;
