import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

interface Props {
  colors: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export const AuthorList: React.FC<Props> = ({ listId, listType, colors }) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={false}
    >
      {dropProvided => (
        <div {...dropProvided.droppableProps}  style={{"height": "100px", padding: "10px", "margin": "10px", backgroundColor: "#03a9f4", }}>
          <div>
            <div>
              <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                {colors.map((color, index) => (
                  <Draggable key={color} draggableId={color} index={index}>
                    {dragProvided => (
                      <div
                        {...dragProvided.dragHandleProps}
                        {...dragProvided.draggableProps}
                        ref={dragProvided.innerRef}
                      >
                        <div style={{ color: color, height: "90%", padding: "10px", fontWeight: 'bold', width: "fit-content", backgroundColor: "#c2f5ff", margin: "10px", textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: "Consolas, monaco, monospace" }}>{color}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};
