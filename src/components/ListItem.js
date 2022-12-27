export default function ListItem ({index, onDelete, children, ...props}){
    return  <li key={index} {...props}>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noreferrer">
      {children}
      </a>
      <button className="App-button" onClick={() => onDelete(index)}>
        Delete
      </button>
      </li>
}