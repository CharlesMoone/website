module.exports = function(source) {
  return `
    const template = document.createElement('template');
    template.innerHTML = \`${source}\`;
    export default template;
  `;
};
