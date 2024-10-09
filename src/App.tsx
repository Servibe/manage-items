import "./App.css";
import { Item } from "./components/Item";
import { useItems } from "./hooks/useItems";
import { useSEO } from "./hooks/useSEO";

type ItemId = `${string}`;

// Define the Item interface
export interface Item {
  id: ItemId;
  timestamp: number;
  text: string;
}

function App() {
  // Use the useItems hook to get the items array and the addItems and removeItem functions
  const { items, addItems, removeItem } = useItems();
  // Use the useSEO hook to set the document title and meta description
  useSEO({
    title: `[${items.length}] Prueba técnica de React`,
    description: "Añadir y eliminar elementos de una lista",
  });

  // handleSubmit function
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get the input element
    const { elements } = event.currentTarget;
    // Get the input element by name
    const input = elements.namedItem("item");
    // Check if the input element is an instance of HTMLInputElement
    const isInput = input instanceof HTMLInputElement;

    // Check if the input element is not empty
    if (!isInput || input == null) {
      return;
    }

    // Add the item to the items array
    addItems(input.value);

    // Clear the input element
    input.value = "";
  };

  // createHandleRemoveItem function
  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id);
  };

  return (
    <main>
      <aside>
        <h1>Prueba Técnica</h1>
        <h2>Añadir y eliminar elementos</h2>
        <form aria-label="Añadir elemento" onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input type="text" name="item" placeholder="Videojuegos" required />
          </label>
          <button type="submit">Añadir</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        {items.length === 0 ? (
          <p>No hay elementos a mostrar</p>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <Item
                  handleClick={createHandleRemoveItem(item.id)}
                  {...item}
                  key={item.id}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
