import React, { useCallback, useState } from "react";

export interface IMenuItem {
  id: number;
  name: string;
  children?: IMenuItem[];
}

const menuItems: IMenuItem[] = [
  {
    id: 0,
    name: "item1",
    children: [
      { id: 2, name: "sub1" },
      { id: 3, name: "sub2", children: [{ id: 4, name: "sub sub 1" }] },
    ],
  },
  { id: 1, name: "item2" },
];

export const RecursiveMenu = () => {
  const [selected, setSelected] = useState<IMenuItem | null>(null);
  const [openIds, setOpenIds] = useState<Record<number, boolean>>({});

  const toggle = useCallback((id: number) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const renderItems = (nodes: IMenuItem[], level = 0): React.ReactNode =>
    nodes.map((node) => {
      const hasChildren = !!node.children?.length;
      const isOpen = openIds[node.id];

      const handleClick = () => {
        if (hasChildren) {
          toggle(node.id);
        } else {
          setSelected(node);
        }
      };

      return (
        <li key={node.id} className="select-none">
          <button
            onClick={handleClick}
            className="flex items-center w-full text-left cursor-pointer"
            style={{
              paddingLeft: `${level * 20}px`,
              fontWeight: selected?.id === node.id ? "bold" : "normal",
            }}
          >
            {hasChildren && (
              <span
                className="inline-block mr-1"
                style={{
                  transition: "transform 0.2s",
                  transform: isOpen ? "rotate(90deg)" : "none",
                }}
              >
                ▶
              </span>
            )}
            {node.name}
          </button>

          {hasChildren && isOpen && (
            <ul className="list-none pl-0">
              {renderItems(node.children!, level + 1)}
            </ul>
          )}
        </li>
      );
    });

  return (
    <div style={{ width: "100%" }}>
      <ul className="list-none pl-0">{renderItems(menuItems)}</ul>

      {selected && (
        <div className="mt-1 p-2 border-2 rounded-md bg-amber-300 text-lg">
          Selected: {selected.name} (id: {selected.id})
        </div>
      )}
    </div>
  );
};
