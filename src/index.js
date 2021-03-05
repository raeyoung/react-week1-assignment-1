/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  // {
  //     id: 1,
  //     className: 2,
  // }
  // >>> [['id', 1], ['className', 2]]

  // [1, [2, 3]]
  // >>> [1, 2, 3]
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function render({ count }) {
  function handleClick() {
    render({ count: count + 1 });
  }

  function handleClickNumber(value) {
    render({ count: value });
  }

  const element = (
    <div id='hello' className='greeting'>
      <p>Hello, world!</p>
      <p>by raeyoung</p>
      <p>
        <button type='button' onClick={handleClick}>
          Click me! ( {count} )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type='button' onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  // Main Logic
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({
  count: 0,
});
