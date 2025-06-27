export default async (req, _context) => {
  const data = [
    {
      title:
        "[Toptal Project Managers Blog] AI Project Development – How Project Managers Should Prepare",
      url: "https://www.toptal.com/project-managers/technical/ai-in-project-management",
    },
    {
      title:
        "[Toptal Engineering Blog] Apache Cordova Tutorial: Developing Mobile Applications with Cordova",
      url: "https://www.toptal.com/mobile/developing-mobile-applications-with-apache-cordova",
    },
    {
      title:
        "[Toptal Engineering Blog] Developing for the Cloud in the Cloud: BigData Development with Docker in AWS",
      url: "https://www.toptal.com/big-data/developing-in-the-cloud-with-docker-and-aws",
    },
    {
      title:
        "[Toptal Engineering Blog] Survey of the Best Online Mapping Tools for Web Developers: The Roadmap to Roadmaps",
      url: "https://www.toptal.com/web/the-roadmap-to-roadmaps-a-survey-of-the-best-online-mapping-tools",
    },
    {
      title: "[Toptal Engineering Blog] How Hibernate Almost Ruined My Career",
      url: "https://www.toptal.com/java/how-hibernate-ruined-my-career",
    },
    {
      title:
        "[Toptal Design Blog] If You're Not Using UX Data, It's Not UX Design",
      url: "https://www.toptal.com/designers/user-research/ux-data",
    },
  ];

  const url = new URL(req.url);
  const q = url.searchParams.get("q");

  const filtered = q
    ? data.filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
    : data;

  return new Response(JSON.stringify(filtered), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
