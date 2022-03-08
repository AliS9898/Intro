import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BlackCard from "./createdComponents/BackCard";
import TniCard from "./TniCard";
import "./createdComponents/tni-common.css";
// fake data generator
const firstLoad = [
  <TniCard type="BLACK" text="I feel lost in _____" size="sm" />,
  <TniCard type="WHITE" text="overcoming legacy solutions" size="sm" />,
  <TniCard type="BLACK" text="My business relies on _____" size="sm" />,
  <TniCard type="WHITE" text="freemium with pay to upgrade" size="sm" />,
  <TniCard type="BLACK" text="I'd like to transform our _____" size="sm" />
];
const getItems = count =>
  Array.from(firstLoad, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: firstLoad[k]
  }));
console.log(getItems);

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getListStyle = isDraggingOver => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "50vh",
  padding: grid,
  overflow: "auto"
});

export default class DND extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(6)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    console.log(this.state.items);
    this.setState({
      items
    });
  }

  render() {
    return (
      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            height: "50vh",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <img src="http://s.conceptjs.com/tni/BLACK.png" height="300px" />
          </div>
        </div>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
