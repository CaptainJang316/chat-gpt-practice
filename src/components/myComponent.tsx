import React, { useState } from 'react';


function createComponentFromElement(element: HTMLElement): JSX.Element | null {
    const tagName = element.tagName.toLowerCase();
  
    switch (tagName) {
      case 'p':
        return <p>{element.innerText}</p>;
      case 'h1':
        return <h1>{element.innerText}</h1>;
      case 'a':
        return <a href={element.href}>{element.innerText}</a>;
      case 'img':
        return <img src={element.src} alt={element.alt} />;
      // Add more cases for other HTML elements you want to support
      default:
        return null;
    }
  }


function MyComponent() {
  const [droppedComponent, setDroppedComponent] = useState<JSX.Element | null>(null);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(data);
    if (element) {
      const component = createComponentFromElement(element);
      setDroppedComponent(component);
    }
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    const target = event.target as Element;
    console.log('target', target.id); // 1
    event.dataTransfer.setData('text/plain', target.id);
  }

  return (
    <div>
      <div id="left">
        <p id="p" draggable onDragStart={handleDragStart}>
          This is a paragraph
        </p>
        <h1 id="h1" draggable onDragStart={handleDragStart}>
          This is a heading
        </h1>
        {/* <a id="a" draggable onDragStart={handleDragStart} href="https://www.example.com">
          This is a link
        </a> */}
        <img id="img" draggable onDragStart={handleDragStart} src="https://www.example.com/image.jpg" alt="An image" />
      </div>
      <div id="middle" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
        {droppedComponent}
      </div>
    </div>
  );
}


export default MyComponent;