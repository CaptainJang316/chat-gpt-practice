import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Element = 'div' | 'span' | 'img';


const Board = styled.div`
  padding: 100px;
  border: 2px solid black;
`


const ElementList: React.FC<{ elements: Element[]; onClick: (element: Element) => void }> = ({
  elements,
  onClick,
}) => (
  <ul>
    {elements.map((element, index) => (
      <li key={index} draggable={true} onDragStart={() => onClick(element)} onClick={() => onClick(element)}>
        {element}
      </li>
    ))}
  </ul>
);

const RenderElement: React.FC<{ element: Element }> = ({ element }) => {
  switch (element) {
    case 'div':
      return <div>div element</div>;
    case 'span':
      return <span>span element</span>;
    case 'img':
      return <img src="image.jpg" alt="image" />;
    default:
      return null;
  }
};

const App: React.FC = () => {
  const [draggedElement, setDraggedElement] = useState<Element | null>(null);
  const [droppedElement, setDroppedElement] = useState<Element | null>(null);


  useEffect(() => {
    console.log("draggedElement: ", draggedElement);
  }, [draggedElement]);

  const handleDragStart = (element: Element) => {
    console.log("element: ", element);
    setDraggedElement(element);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("asdf");
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, element: Element) => {
    console.log("handleDrop: ", element);
    // event.preventDefault();
    setDroppedElement(element);
    setDraggedElement(null);
  };

  return (
    <div>
      <ElementList elements={['div', 'span', 'img']} onClick={handleDragStart} />
      <Board onDragOver={handleDragOver} onDrop={(event) => draggedElement && handleDrop(event, draggedElement!)}>{droppedElement && <RenderElement element={droppedElement} />}</Board>
    </div>
  );
};

export default App;



// import React, { useState } from 'react';

// interface ElementProps {
//   type: string;
// }

// const Element: React.FC<ElementProps> = ({ type }) => {
//   const [isDragging, setIsDragging] = useState(false);

//   const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
//     event.dataTransfer.setData('text/plain', type);
//     setIsDragging(true);
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       draggable
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       {type}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const [elements, setElements] = useState<JSX.Element[]>([]);

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const type = event.dataTransfer.getData('text/plain');
//     const element = <div>{type}</div>;
//     setElements([...elements, element]);
//   };

//   const renderElements = () => {
//     return elements.map((element, index) => (
//       <div key={index} style={{ margin: '10px' }}>
//         {element}
//       </div>
//     ));
//   };

//   return (
//     <div onDrop={handleDrop} onDragOver={(event) => handleDrop}>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Element type="div" />
//         <Element type="p" />
//         <Element type="h1" />
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         {renderElements()}
//       </div>
//     </div>
//   );
// };

// export default App;


// // import React from 'react';
// // import logo from './logo.svg';
// // // import './App.css';
// // import DraggableElements from './components/DraggableElements';

// // const App: React.FC = () => {
// //   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
// //     const type = event.dataTransfer.getData('text/plain');
// //     const element = document.createElement(type);
// //     event.currentTarget.appendChild(element);
// //   };

// //   return (
// //     <div onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
// //       <DraggableElements type="div" />
// //       <DraggableElements type="p" />
// //       <DraggableElements type="h1" />
// //     </div>
// //   );
// // };

// // export default App;