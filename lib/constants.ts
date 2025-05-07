type ProjectData = {
  label: string;
  value: string;
  status: "Completed" | "In Progress" | "Not Started";
  description: string;
};

export const projectsData: ProjectData[] = [
  {
    label: "HTML Editor",
    value: "/html-editor",
    status: "Completed",
    description:
      "A simple HTML editor that allows you to create and edit HTML, CSS, JS code and also view the output. You can also download the code as a HTML file.",
  },
  {
    label: "Todo List",
    value: "/todo-app",
    status: "Completed",
    description:
      "A simple todo list that allows you to add, edit, and delete tasks. You can also mark tasks as completed or incomplete.",
  },
  {
    label: "MarkDown Editor",
    value: "/markdown-editor",
    status: "Completed",
    description:
      "A simple MarkDown editor that allows you to create and edit MarkDown code and also view the output. You can also download the code as a MarkDown file.",
  },
];

export const projects: Pick<ProjectData, "label" | "value">[] =
  projectsData.map((project) => ({
    label: project.label,
    value: project.value,
  }));
