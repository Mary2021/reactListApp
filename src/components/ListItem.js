export default function ListItem ({index, onDelete, children, ...props}){
    return  <li key={index} {...props}>
      <a className="App-link" href="https://reactjs.org" target="_blank">
      {children}
      </a>
      {/*<button className="App-button" onClick={() => {
          const copy = [...list];
          copy.splice(index, 1); // kustutab 1 elemendi index positsioonilt
          setList(copy);
        }}>
        Delete
    </button>*/}
      <button className="App-button" onClick={() => onDelete(index)}>
        Delete
      </button>
      </li>
}