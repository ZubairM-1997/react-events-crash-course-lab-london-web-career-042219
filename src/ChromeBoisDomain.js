import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    event.persist()
    let mouseOver = event
    let coordinatesArray = []

    let clientX = mouseOver.clientX
    let clientY = mouseOver.clientY

    coordinatesArray.push(clientX)
    coordinatesArray.push(clientY)

    drawChromeBoiAtCoords(clientX, clientY)
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

   handleOnClick = () => {
     toggleCycling()
   }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

   handleOnKeyPress = (event) => {
     event.persist()
     let keyPress = event.key

     if (keyPress === "a" || keyPress === "+") {
        keyPress = "+"
        resize(keyPress)
     } else if (keyPress === "s" || keyPress === "-") {
       keyPress = "-"
       resize(keyPress)
     } else {
       console.log("Wrong button")
     }


   }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnClick}
        onKeyPress={this.handleOnKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
