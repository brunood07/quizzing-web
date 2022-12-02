module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "creating component",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
        templateFile: "templates/spec.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "templates/types.ts.hbs",
      },
    ],
  });
};
