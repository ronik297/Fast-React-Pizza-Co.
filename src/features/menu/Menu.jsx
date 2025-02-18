import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData(); //Hook to get data from the specified laoder

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// render as you fetch strategy, not fetch on render that creates waterfall
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
