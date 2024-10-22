import NavBar from "../components/Navbar";
import React, { useState, useRef } from "react";

const PrivacyReport = () => {
  // State to manage selected heading for mobile
  const [selectedHeading, setSelectedHeading] = useState(0);

  // Refs to scroll to specific sections in the desktop view
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  // Handle select change for mobile
  const handleSelectChange = (event) => {
    setSelectedHeading(parseInt(event.target.value));
  };

  // Function to handle scroll on desktop
  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {" "}
      <NavBar />
      <div className="mt-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12 md:text-start text-center space-y-6">
              <div className=" text-4xl font-bold text-center">
                <h1>LM Club Privacy Report</h1>
              </div>

              <div className="space-y-2 text-[#2b2a35] font-light mt-8 text-center">
                <p>Published: April 2024</p>
              </div>

              <div className="my-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_report_hero?scl=1"
                  alt=""
                  className="rounded"
                />
              </div>

              <div className="container mx-auto p-4">
                {/* Desktop View: Two Columns */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                  {/* Left side: Headings */}
                  <div className="space-y-4 col-span-1">
                    <h2
                      onClick={() => scrollToSection(0)}
                      className={`text-lg cursor-pointer text-blue-500`}
                    >
                      Driving AI innovation while protecting privacy
                    </h2>
                    <h2
                      onClick={() => scrollToSection(1)}
                      className={`text-lg cursor-pointer text-blue-500`}
                    >
                      Privacy tools and resources. Learn how to control your
                      data
                    </h2>
                    <h2
                      onClick={() => scrollToSection(2)}
                      className={`text-lg cursor-pointer text-blue-500`}
                    >
                      Privacy by design. Understanding required and optional
                      data
                    </h2>
                    <h2
                      onClick={() => scrollToSection(3)}
                      className={`text-lg cursor-pointer text-blue-500`}
                    >
                      Privacy in a changing world
                    </h2>
                  </div>

                  {/* Right side: Display all data */}
                  <div className="space-y-16 col-span-2">
                    <div ref={sectionRefs[0]} className="space-y-4">
                      <p className="text-gray-700">
                        At LM Club, we value, protect, and defend your privacy.
                        Our approach is built on our long-standing privacy
                        principles of user control, transparency, security,
                        defending data from third party access, and using
                        personal data in ways that provide meaningful benefit to
                        you.
                      </p>
                      <p className="text-gray-700">
                        We are committed to protecting privacy by providing
                        products, information, and controls that allow you to
                        choose how your data is collected and used. From
                        products built with privacy by design to transparent
                        information and user controls, our goal is to empower
                        individuals and our customers to make informed choices
                        about their data.
                      </p>
                      <p className="text-gray-700">
                        As part of our commitment to privacy and transparency,
                        the Microsoft Privacy Report is published to share the
                        latest information on what personal data we collect, how
                        it may be used, and how you can manage and control your
                        information. The report also summarises key developments
                        and trends in global privacy and how they could affect
                        Microsoft, our customers and the global regulatory
                        environment.
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Modify Privacy Policy
                      </button>
                    </div>
                    <div ref={sectionRefs[1]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Driving AI innovation while protecting privacy
                      </h3>
                      <p className="text-gray-700 my-2">
                        Microsoft remains committed to driving responsible AI
                        innovation while protecting privacy and other
                        fundamental rights. We provide transparency and choice,
                        tools to help our customers control their data and will
                        continue to respond to the changing privacy landscape in
                        service of our customers and the industry overall.
                        <p className="text-gray-700 my-2">
                          Across the globe, we continue to see an acceleration
                          of data protection and privacy regulation along with
                          rapid advances in new kinds of technologies, like
                          artificial intelligence, that leverage data. Our
                          customers are interested in the latest developments in
                          advanced AI systems and solutions that meet their
                          unique data use and governance needs.
                        </p>
                        <p className="text-gray-700 my-2">
                          At Microsoft, we believe protecting privacy is
                          fundamental to the development of advanced AI systems.
                          We have had a principles-based AI governance structure
                          and system across the company since 2017. Today, we
                          have dedicated employees throughout the company and
                          across multiple disciplines, including research,
                          policy, and engineering, who ensure that our AI
                          solutions meet society’s expectations and our ethical
                          principles.
                        </p>
                        <p className="text-gray-700 my-2">
                          As our customers continue to expand their use of our
                          AI solutions, we will continue to develop our
                          solutions in alignment with our ethical principles,
                          corporate policies, and voluntary commitments to
                          promote safe, secure, and transparent AI. A core
                          aspect of our efforts is our adherence to our
                          Responsible AI Standard, which outlines specific
                          requirements for how we develop and deploy AI systems.
                          The standard guides our internal teams by transforming
                          our AI principles – of fairness, reliability and
                          safety, privacy and security, inclusiveness,
                          transparency and accountability – into concrete
                          engineering practises.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          As part of our commitment to transparency, we describe
                          the personal data we collect, how we use this data,
                          and how we share this data in the Microsoft Privacy
                          Statement. We provide a summary of recent updates in
                          our Change History.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          Microsoft has integrated Copilot into many products
                          and services, and each one is created and deployed in
                          alignment with our critical security, compliance and
                          privacy policies and processes. To help people
                          understand the capabilities of these new AI solutions
                          and ensure transparency in our approach, Microsoft has
                          published a variety of resources to provide more
                          information about our approach to privacy and AI for
                          our consumer and commercial and public sector
                          customers. Comprehensive and transparent documentation
                          and information helps organisations understand how our
                          AI tools work and the choices our customers can make
                          that influence system performance and behaviour.
                          Customers can find more information about Microsoft
                          Copilots in our documentation, adoption resources, new
                          Copilot Lab resource page, and through the Azure
                          OpenAI Service documentation, quickstarts and API
                          reference guides.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          In addition to our internal practices, Microsoft
                          supports global regulatory initiatives to ensure that
                          AI is developed and used in responsible,
                          privacy-protecting and ethical ways. In the United
                          States, Microsoft has confirmed support for the
                          Voluntary AI Commitments from the White House and
                          supports the legislative efforts and vision in Europe,
                          the UK and other jurisdictions as they work to develop
                          risk-based frameworks that ensure people can realise
                          the promises of AI responsibly and in ways that
                          respect fundamental rights.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          We have been at the forefront of cutting-edge research
                          in AI and will continue to integrate powerful,
                          innovative AI technologies into our products and
                          services to help customers do more while preserving
                          data privacy, transparency, and trust.
                        </p>
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Modify Privacy Policy
                      </button>
                    </div>
                    <div ref={sectionRefs[2]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy tools and resources. Learn how to control your
                        data.
                      </h3>
                      <p className="text-gray-700 my-2">
                        We provide tools to help you control your personal data
                        and manage your interactions with Microsoft products and
                        services. With the Microsoft privacy dashboard, you can
                        view, delete, and manage your privacy settings and data
                        collected while signed into your Microsoft account. Data
                        that appears on the dashboard includes data from your
                        Bing searches, Microsoft Edge browsing, location
                        history, and use of Microsoft apps and services.
                        Recently, we made it easier for family organisers to
                        view and manage the activity data for connected child
                        accounts from the privacy dashboard.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For data that is collected by Copilot in Bing, including
                        through user queries and prompts, the Microsoft privacy
                        dashboard provides authenticated (signed in) users with
                        tools to exercise their data subject rights, including
                        by providing user with the ability to view, export and
                        delete stored conversation history. We continue to
                        listen to feedback on how users want to manage their
                        Copilot and search experience, including through
                        in-context data management experiences. Each month, the
                        privacy dashboard has 3 million monthly active users,
                        showing active engagement and use globally.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our young users, Microsoft offers an immersive
                        game-based learning adventure, Privacy Prodigy, for
                        students aged 7-18. In this Minecraft game, players take
                        on the challenge of protecting their data as they
                        venture further from home, encountering scenarios that
                        help them learn about the personal information that can
                        be shared and what should be kept private. We believe it
                        is important to supplement privacy tools like the
                        dashboard with educational resources, particularly for
                        young people as they learn to navigate the online world.
                        Privacy prodigy is available for free in our Minecraft
                        Education portal and in the Minecraft Marketplace.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our commercial and public sector customers,
                        Microsoft has a variety of enterprise-grade solutions
                        and services that help our customers control, protect,
                        and defend their data. For example, with the EU Data
                        Boundary, Microsoft provides enhanced residency
                        capabilities for processing and storing commercial and
                        public sector customers’ personal data within the
                        European Union.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        With the Microsoft Purview and Microsoft Priva
                        offerings, organisations can understand and govern their
                        data estates and sensitive information. Purview
                        capabilities include Adaptive Protection, which uses
                        machine learning to understand how users are interacting
                        with data and assign risk levels. Microsoft Purview can
                        then adapt by adjusting Data Loss Prevention (DLP)
                        controls in response to a detected risk. Microsoft Priva
                        is an advanced solution complementing Purview, tailored
                        for effective data estate governance and handling of
                        sensitive information using advanced automation
                        capabilities.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        In April 2024, we announced new solutions in Priva to
                        help customers modernise their privacy programme. The
                        expansion of Microsoft Priva brings automated
                        capabilities to help organisations meet adapting privacy
                        requirements and further enables organisations to
                        automate the management, definition and tracking of
                        privacy operations. Learn more about how the suite of
                        Priva solutions has expanded here.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        Microsoft Entra is a cloud-based service that provides
                        identity, data and collaboration solutions for
                        enterprises and organisations. Microsoft has recently
                        introduced a range of new security tools and features
                        for the Microsoft Entra product family, aimed at helping
                        organisations improve their security and data protection
                        posture. With the ever-increasing sophistication of
                        cyber-attacks, the increasing use of cloud-based
                        services and the proliferation of mobile devices, it is
                        essential that organisations have effective tools in
                        place to manage their security scope.
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Modify Privacy Policy
                      </button>
                    </div>
                    <div ref={sectionRefs[3]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy tools and resources. Learn how to control your
                        data.
                      </h3>
                      <p className="text-gray-700 my-2">
                        We provide tools to help you control your personal data
                        and manage your interactions with Microsoft products and
                        services. With the Microsoft privacy dashboard, you can
                        view, delete, and manage your privacy settings and data
                        collected while signed into your Microsoft account. Data
                        that appears on the dashboard includes data from your
                        Bing searches, Microsoft Edge browsing, location
                        history, and use of Microsoft apps and services.
                        Recently, we made it easier for family organisers to
                        view and manage the activity data for connected child
                        accounts from the privacy dashboard.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For data that is collected by Copilot in Bing, incluing
                        through user queries and prompts, the Microsoft privacy
                        dashboard provides authenticated (signed in) users with
                        tools to exercise their data subject rights, including
                        by providing user with the ability to view, export and
                        delete stored conversation history. We continue to
                        listen to feedback on how users want to manage their
                        Copilot and search experience, including through
                        in-context data management experiences. Each month, the
                        privacy dashboard has 3 million monthly active users,
                        showing active engagement and use globally.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For our young users, Microsoft offers an immersive
                        game-based learning adventure, Privacy Prodigy, for
                        students aged 7-18. In this Minecraft game, players take
                        on the challenge of protecting their data as they
                        venture further from home, encountering scenarios that
                        help them learn about the personal information that can
                        be shared and what should be kept private. We believe it
                        is important to supplement privacy tools like the
                        dashboard with educational resources, particularly for
                        young people as they learn to navigate the online world.
                        Privacy prodigy is available for free in our Minecraft
                        Education portal and in the Minecraft Marketplace.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For our commercial and public sector customers,
                        Microsoft has a variety of enterprise-grade solutions
                        and services that help our customers control, protect,
                        and defend their data. For example, with the EU Data
                        Boundary, Microsoft provides enhanced residency
                        capabilities for processing and storing commercial and
                        public sector customers’ personal data within the
                        European Union.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        With the Microsoft Purview and Microsoft Priva
                        offerings, organisations can understand and govern their
                        data estates and sensitive information. Purview
                        capabilities include Adaptive Protection, which uses
                        machine learning to understand how users are interacting
                        with data and assign risk levels. Microsoft Purview can
                        then adapt by adjusting Data Loss Prevention (DLP)
                        controls in response to a detected risk. Microsoft Priva
                        is an advanced solution complementing Purview, tailored
                        for effective data estate governance and handling of
                        sensitive information using advanced automation
                        capabilities.
                      </p>
                      <p className="text-gray-700 my-2">
                        In April 2024, we announced new solutions in Priva to
                        help customers modernise their privacy programme. The
                        expansion of Microsoft Priva brings automated
                        capabilities to help organisations meet adapting privacy
                        requirements and further enables organisations to
                        automate the management, definition and tracking of
                        privacy operations. Learn more about how the suite of
                        Priva solutions has expanded here.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        Microsoft Entra is a cloud-based service that provides
                        identity, data and collaboration solutions for
                        enterprises and organisations. Microsoft has recently
                        introduced a range of new security tools and features
                        for the Microsoft Entra product family, aimed at helping
                        organisations improve their security and data protection
                        posture. With the ever-increasing sophistication of
                        cyber-attacks, the increasing use of cloud-based
                        services and the proliferation of mobile devices, it is
                        essential that organisations have effective tools in
                        place to manage their security scope.
                      </p>

                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile View: Select Dropdown */}
                <div className="md:hidden">
                  <select
                    value={selectedHeading}
                    onChange={handleSelectChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                  >
                    <option value="0">
                      {" "}
                      Driving AI innovation while protecting privacy
                    </option>
                    <option value="1">
                      Privacy tools and resources. Learn how to control your
                      data
                    </option>
                    <option value="2">
                      Privacy by design. Understanding required and optional
                      data
                    </option>
                    <option value="3">Privacy in a changing world</option>
                  </select>

                  {/* Display only the selected content in mobile view */}
                  {selectedHeading === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Driving AI innovation while protecting privacy
                      </h3>
                      <p className="text-gray-700">
                        At LM Club, we value, protect, and defend your privacy.
                        Our approach is built on our long-standing privacy
                        principles of user control, transparency, security,
                        defending data from third party access, and using
                        personal data in ways that provide meaningful benefit to
                        you.
                      </p>
                      <p className="text-gray-700">
                        We are committed to protecting privacy by providing
                        products, information, and controls that allow you to
                        choose how your data is collected and used. From
                        products built with privacy by design to transparent
                        information and user controls, our goal is to empower
                        individuals and our customers to make informed choices
                        about their data.
                      </p>
                      <p className="text-gray-700">
                        As part of our commitment to privacy and transparency,
                        the Microsoft Privacy Report is published to share the
                        latest information on what personal data we collect, how
                        it may be used, and how you can manage and control your
                        information. The report also summarises key developments
                        and trends in global privacy and how they could affect
                        Microsoft, our customers and the global regulatory
                        environment.
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Learn Fuck
                      </button>
                    </div>
                  )}
                  {selectedHeading === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy tools and resources. Learn how to control your
                        data
                      </h3>
                      <p className="text-gray-700 my-2">
                        We provide tools to help you control your personal data
                        and manage your interactions with Microsoft products and
                        services. With the Microsoft privacy dashboard, you can
                        view, delete, and manage your privacy settings and data
                        collected while signed into your Microsoft account. Data
                        that appears on the dashboard includes data from your
                        Bing searches, Microsoft Edge browsing, location
                        history, and use of Microsoft apps and services.
                        Recently, we made it easier for family organisers to
                        view and manage the activity data for connected child
                        accounts from the privacy dashboard.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For data that is collected by Copilot in Bing, including
                        through user queries and prompts, the Microsoft privacy
                        dashboard provides authenticated (signed in) users with
                        tools to exercise their data subject rights, including
                        by providing user with the ability to view, export and
                        delete stored conversation history. We continue to
                        listen to feedback on how users want to manage their
                        Copilot and search experience, including through
                        in-context data management experiences. Each month, the
                        privacy dashboard has 3 million monthly active users,
                        showing active engagement and use globally.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our young users, Microsoft offers an immersive
                        game-based learning adventure, Privacy Prodigy, for
                        students aged 7-18. In this Minecraft game, players take
                        on the challenge of protecting their data as they
                        venture further from home, encountering scenarios that
                        help them learn about the personal information that can
                        be shared and what should be kept private. We believe it
                        is important to supplement privacy tools like the
                        dashboard with educational resources, particularly for
                        young people as they learn to navigate the online world.
                        Privacy prodigy is available for free in our Minecraft
                        Education portal and in the Minecraft Marketplace.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our commercial and public sector customers,
                        Microsoft has a variety of enterprise-grade solutions
                        and services that help our customers control, protect,
                        and defend their data. For example, with the EU Data
                        Boundary, Microsoft provides enhanced residency
                        capabilities for processing and storing commercial and
                        public sector customers’ personal data within the
                        European Union.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        With the Microsoft Purview and Microsoft Priva
                        offerings, organisations can understand and govern their
                        data estates and sensitive information. Purview
                        capabilities include Adaptive Protection, which uses
                        machine learning to understand how users are interacting
                        with data and assign risk levels. Microsoft Purview can
                        then adapt by adjusting Data Loss Prevention (DLP)
                        controls in response to a detected risk. Microsoft Priva
                        is an advanced solution complementing Purview, tailored
                        for effective data estate governance and handling of
                        sensitive information using advanced automation
                        capabilities.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        In April 2024, we announced new solutions in Priva to
                        help customers modernise their privacy programme. The
                        expansion of Microsoft Priva brings automated
                        capabilities to help organisations meet adapting privacy
                        requirements and further enables organisations to
                        automate the management, definition and tracking of
                        privacy operations. Learn more about how the suite of
                        Priva solutions has expanded here.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        Microsoft Entra is a cloud-based service that provides
                        identity, data and collaboration solutions for
                        enterprises and organisations. Microsoft has recently
                        introduced a range of new security tools and features
                        for the Microsoft Entra product family, aimed at helping
                        organisations improve their security and data protection
                        posture. With the ever-increasing sophistication of
                        cyber-attacks, the increasing use of cloud-based
                        services and the proliferation of mobile devices, it is
                        essential that organisations have effective tools in
                        place to manage their security scope.
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Get Started
                      </button>
                    </div>
                  )}
                  {selectedHeading === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy by design. Understanding required and optional
                        data
                      </h3>
                      <p className="text-gray-700">
                        Sed hendrerit, ligula id ultricies vulputate, elit est
                        laoreet libero, ut faucibus ligula nisi eget orci. Duis
                        luctus lectus sed neque interdum, vel tincidunt dui
                        suscipit. Integer cursus arcu sed felis vehicula.
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Contact Us
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyReport;
