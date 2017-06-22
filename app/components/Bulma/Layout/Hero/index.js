import glamorous from 'glamorous';
import bulma from 'styles/bulma.scss';

// Object for easy mapping of prop names to bulma's hyphenated class modifiers
const bulmaHeroMap = {
  isFullheight: bulma['is-fullheight'],
  isPrimary: bulma['is-primary'],
  isDanger: bulma['is-danger'],
};

// Render a <section> with Bulma class 'hero'
// Additionally, apply hero class modifiers passed from props
const Hero = glamorous.section(
  bulma.hero,
  (props) => {
    const mappedClasses = [];
    // Look at each prop (other than children) and see if it maps to a valid bulma class
    Object.keys(props)
      .filter((prop) => prop !== 'children')
      .forEach((prop) => {
        mappedClasses.push(`${bulmaHeroMap[props[prop]]}`);
      });
    return mappedClasses.join(' ');
  }
);

export default Hero;
