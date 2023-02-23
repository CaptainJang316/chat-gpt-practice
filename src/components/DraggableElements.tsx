import React, { useState } from 'react';

interface ElementProps {
  type: string;
}

const DraggableElements: React.FC<ElementProps> = ({ type }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', type);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {type}
    </div>
  );
};

export default DraggableElements;


// import React, { useState } from 'react';

// const HTMLDraggableElements = () => {
//   const [draggedElement, setDraggedElement] = useState<JSX.Element | null>(null);

//   const handleDragStart = (event: React.DragEvent<HTMLDivElement>, element: JSX.Element) => {
//     setDraggedElement(element);
//   }

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     setDraggedElement(null);
//   }

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <div
//         draggable
//         onDragStart={(event) => handleDragStart(event, <div>Draggable Div Element</div>)}
//       >
//         Draggable Div Element
//       </div>

//       <div
//         draggable
//         onDragStart={(event) => handleDragStart(event, <span>Draggable Span Element</span>)}
//       >
//         Draggable Span Element
//       </div>

//       <div
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         style={{ height: '400px', border: '2px solid black' }}
//       >
//         {draggedElement}
//       </div>
//     </div>
//   );
// }

// export default HTMLDraggableElements;