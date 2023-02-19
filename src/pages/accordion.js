import Accordion from '../components/accordion';

const items = [
  {
    title: 'What is React?',
    content:
      'React is a front end javascript framework, developed by Facebook, used to build single page applications, mobile applications, and other user interfaces.',
    id: 1,
  },
  {
    title: 'Why use React?',
    content:
      'React is a favorite JS library among engineers, because it is easy to learn, and it allows you to create reusable UI components., and it allows you to create reusable UI components.',
    id: 2,
  },
  {
    title: 'How do you use React?',
    content:
      'You use React by creating components, and then nesting them inside each other., and then nesting them inside each other. , and then nesting them inside each other.',
    id: 3,
  },
];

function AccordionPage() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
